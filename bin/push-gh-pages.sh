#!/bin/bash

# check out latest commit to be on a HEAD-less branch
git checkout $GIT_COMMIT
git add public
git ci -m "Generated from $GIT_COMMIT"
git subtree push --prefix public origin gh-pages
