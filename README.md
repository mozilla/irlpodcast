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

1. Run the following build command: `JEKYLL_ENV=production jekyll build --config _config.yml,_config-build-dev.yml`
2. Push changes in the `docs` folder to the `master` branch on GitHub

## Publishing to staging (stage.irlpodcast.org)

1. Push the `master` branch to GitHub

## Publishing to production (`irlpodcast.org`)

1. Push to the `prod` branch on GitHub: `git push origin master:prod`

(Assuming your GitHub remote is `origin` and your local `master` branch has the changes you want to see on prod.)
