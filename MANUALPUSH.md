# Pushing to stage & prod manually

As the Jekyll Docker image we relied on for pushes is no longer reliable, we are (for now) pushing manually.

You must have the [AWS CLI](https://aws.amazon.com/cli/) and S3 credentials set up locally. If stuck, ask @jgmize or @metadave.

## Build the site into the /release dir:

### Staging

`jekyll build --config _config.yml,_config-build-stage.yml --destination /release`

### Prod

`jekyll build --config _config.yml,_config-build-prod.yml --destination /release`

## Push to S3:

Make sure you are in the `/release` directory, then:

### Staging

`aws s3 sync . s3://irlpodcast-stage --acl public-read --profile irl --delete --exclude 'docs/*'`

### Prod

`aws s3 sync . s3://irlpodcast --acl public-read --profile irl --delete --exclude 'docs/*'`
