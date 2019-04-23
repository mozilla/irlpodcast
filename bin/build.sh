#!/bin/bash
set -ex

cd "$(dirname ${BASH_SOURCE[0]})"/..
mkdir -p ./release

# adapted from https://lebenplusplus.de/2018/03/15/how-to-run-npm-install-as-non-root-from-a-docker-container/
echo "node:x:$(id -u):$(id -g)::/home/node:/bin/bash" > /tmp/fake-passwd

# let gulp build the assets

# -rm : remove the docker file system after this command exits
# --label=gulp : meta data, label for the docker container while running
# --volume=$(pwd):/srv : mount the current directory (which is the root of the project due to the `cd` command above) to the `srv` directory in the docker container
# --volume=/tmp/fake-passwd:/etc/passwd : mount the temporary user password created above to `/etc/passwd` in the docker container
# --volume=/tmp:/home/node : mount local file system's `tmp` directory to `/home/node` in the docker container
# -u $(id -u):$(id -g) : use the current user and group inside the docker container
# huli/gulp : name of the docker image to run
# build --production : command sent to gulp inside the docker container
docker run --rm --label=gulp \
       --volume=$(pwd):/srv \
       --volume=/tmp/fake-passwd:/etc/passwd \
       --volume=/tmp:/home/node \
       -u $(id -u):$(id -g) \
       huli/gulp \
       build --production

# and then let hugo build the site

# -e HUGO_ENV=production : tell hugo to build a production-ready version of the site
# ash -c "rm -rf..." : remove any old build artifacts and rebuild the site using the config matching the command line argument ($1)
docker run --rm --label=hugo \
       --volume=$(pwd):/src \
       --volume=$(pwd)/release:/tmp/build \
       -u $(id -u):$(id -g) \
       -e HUGO_ENV=production \
       jojomi/hugo:0.40.2 \
       ash -c "rm -rf /tmp/build/* && hugo --config config.toml,config-$1.toml --destination /tmp/build"
