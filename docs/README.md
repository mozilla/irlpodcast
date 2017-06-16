# TODO (pre-launch)

1. Remove `noindex` meta tag
2. ~~Add Spotify link~~
3. Change date on trailer episode post
3. Get code reviewed

## TODO (post-launch)

1. Improve support for old browsers
2. Implement JS/CSS bundler
3. Add CSS/JS linter
4. Add .editorconfig

## Publishing to GitHub pages (`mozilla.github.io/irlpodcast`)

1. Ensure you are on the `master` branch
2. Run the following build command: `JEKYLL_ENV=production jekyll build --config _config.yml,_config-build-dev.yml`
3. Push changes to `master` branch on GitHub

## Publishing to production (`irlpodcast.org`)

1. Ensure you are on the `prod` branch
2. Sync `prod` branch with `master` branch
3. Run the following build command: `JEKYLL_ENV=production jekyll build --config _config.yml,_config-build-prod.yml`
4. Push changes to `prod` branch on GitHub
