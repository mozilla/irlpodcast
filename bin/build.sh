#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..
rm -rf ./release
mkdir ./release
docker run --rm --label=jekyll \
    --volume=$(pwd):/srv/jekyll \
    --volume=$(pwd)/release:/tmp/build \
    -e JEKYLL_ENV=production \
    jekyll/jekyll \
    jekyll build \
    --config _config.yml,_config-build-prod.yml \
    --destination /tmp/build
