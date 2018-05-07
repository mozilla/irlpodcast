#!/bin/bash

git checkout $GIT_COMMIT #
git add public
git ci -m "Generated from $GIT_COMMIT"
git subtree push -f --prefix public origin gh-pages
