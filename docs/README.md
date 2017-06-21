## TODO (post-launch)

1. Improve support for old browsers
2. Implement JS/CSS bundler
3. Add CSS/JS linter
4. Add .editorconfig

## Running locally

1. Install the Gems: `bundle install`
2. Serve the site: `bundle exec jekyll serve`
2.1 If you need to build posts with a future date (for testing upcoming episodes): `bundle exec jekyll serve --future`

## Publishing to GitHub pages (`mozilla.github.io/irlpodcast`)

1. Run the following build command: `JEKYLL_ENV=production jekyll build --config _config.yml,_config-build-dev.yml`
2. Push changes in the `docs` folder to the `master` branch on GitHub

## Publishing to staging (stage.irlpodcast.org)

1. Push the `master` branch to GitHub

## Publishing to production (`irlpodcast.org`)

1. Push to the `prod` branch on GitHub, e.g. `git push origin master:prod` (will push your local `master` branch to the remote `prod` branch)
