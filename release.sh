#!/bin/bash

rm -rf ./release
mkdir ./release
docker run --rm --label=jekyll \
        --volume=$(pwd):/srv/jekyll \
        --volume=$(pwd)/release:/tmp/build \
        -it -p 127.0.0.1:4000:4000 jekyll/jekyll \
        jekyll build --config _config.yml,_config-build-prod.yml --destination /tmp/build
cd ./release && aws s3 sync . s3://irlpodcast --acl public-read --exclude "docs/*" --delete
