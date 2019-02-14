#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..
mkdir -p ./release

# let gulp build the assets
docker run --rm --label=gulp \
    --volume=$(pwd):/srv \
    --entrypoint /bin/bash \
    huli/gulp \
    -c "gulp build --production && chown $(id -u):$(id -g) . -R"

# and then let hugo build the site
docker run --rm --label=hugo \
    --volume=$(pwd):/src \
    --volume=$(pwd)/release:/tmp/build \
    -e HUGO_ENV=production \
    jojomi/hugo:0.40.2 \
    ash -c "rm -rf /tmp/build/* && hugo --config config.toml,config-$1.toml --destination /tmp/build"
