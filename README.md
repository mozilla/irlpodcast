## TODO

1. Add asset bundler
    - https://github.com/tkareine/jekyll-minibundle
2. make max-width skinnier
3. add separator vertical bar on episode links
4. check font sizes

## Publishing to GitHub pages

1. Run the following build command: `jekyll build --config _config.yml,_config-build-dev.yml`
2. Push the changes in the `/docs` folder to the master branch.

## Building for production

1. Run the following build command: `JEKYLL_ENV=production jekyll build --config _config.yml,_config-build-prod.yml`
