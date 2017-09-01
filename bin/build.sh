#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..
rm -rf ./release
mkdir ./release
docker run --rm --label=jekyll \
    --volume=$(pwd):/srv/jekyll \
    --volume=$(pwd)/release:/tmp/build \
    -e JEKYLL_ENV=production \
    jekyll/jekyll \
    bash -c "bundle install && jekyll build --config _config.yml,_config-build-prod.yml --destination /tmp/build && chown -R jekyll /srv/jekyll"
# dir is owned by root and jenkins unable to delete without chown
# jekyll is UID 1000 within container which matches jenkins UID in host
