#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..
rm -rf ./public
mkdir ./public

# let gulp build the assets
docker run --rm -it --label=gulp \
    --volume=$(pwd):/srv \
    huli/gulp \
    build

# and then let hugo build the site
docker run --rm --label=hugo \
    --volume=$(pwd):/src \
    --volume=$(pwd)/public:/tmp/build \
    -e HUGO_ENV=production \
    jojomi/hugo:0.40.2 \
    ash -c "hugo --config config.toml,config-$1.toml --destination /tmp/build"
