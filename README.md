## Running Locally

1. Install dependencies: `npm install`
2. Start Gulp for asset compilation: `gulp`
3. In a new terminal window, start the server: `docker-compose up`
4. Open `http://localhost:1313` in a browser

Edit the `.scss` and `.js` files in the `/src` directory (*NOT* in `/static`).

## Adding new episodes

1. `docker exec irlpodcast_hugo_1 hugo new episodes/201X-XX-XX-SXXEXX-episode-title-here.md`

You can create this file by hand in the filesystem, but the above command will use the
`archetypes/episodes.md` template to populate all the necessary front matter, saving
you precious, precious time.

## Adding new pages

This probably won't happen often, but if needed, run:

1. `docker exec irlpodcast_hugo_1 hugo new somepage.md`

## Pushing to dev

1. Push your changes to the `dev` branch: `git push origin my-branch-name:dev`
2. Test on `https://dev.irlpodcast.org`

## Pushing to stage

Any merge to the `master` branch will automatically update the staging site:

`https://stage.irlpodcast.org/`

A notice will be posted in `#www-notify` on IRC when the push has completed.

## Pushing to production

1. Verify all is good on [the staging site](https://stage.irlpodcast.org/)
2. Make sure your local `master` branch is up to date
3. Push the `master` branch to the `prod` branch: `git push origin master:prod`

A notice will be posted in `#www-notify` on IRC when the push has completed.

### Kudos

- http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/
- https://regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/
