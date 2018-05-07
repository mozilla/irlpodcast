#!/bin/bash

git checkout ${GIT_COMMIT:=$(git rev-parse --short HEAD)} #detached head
git add public
git ci -m "Generated from $GIT_COMMIT"
git subtree split --prefix public -b gh-pages-$GIT_COMMIT
git push -f origin gh-pages-$GIT_COMMIT:gh-pages
