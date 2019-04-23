#!/bin/bash
set -ex

cd "$(dirname ${BASH_SOURCE[0]})"/..
mkdir -p ./release

# adapted from https://lebenplusplus.de/2018/03/15/how-to-run-npm-install-as-non-root-from-a-docker-container/
echo "node:x:$(id -u):$(id -g)::/home/node:/bin/bash" > /tmp/fake-passwd

# let gulp build the assets
docker run --rm --label=gulp \
       --volume=$(pwd):/srv \
       --volume=/tmp/fake-passwd:/etc/passwd \
       --volume=/tmp:/home/node \
       -u $(id -u):$(id -g) \
       huli/gulp \
       build --production

# and then let hugo build the site
docker run --rm --label=hugo \
    --volume=$(pwd):/src \
    --volume=$(pwd)/release:/tmp/build \
    -e HUGO_ENV=production \
    jojomi/hugo:0.40.2 \
    ash -c "rm -rf /tmp/build/* && hugo --config config.toml,config-$1.toml --destination /tmp/build"
