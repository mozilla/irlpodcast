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

Any merge to the `master` branch will automatically update the dev site:

`https://master.irlpodcast.org/`

A notice will be posted in `#irlpodcast-notify` on Slack when the push has completed.

## Pushing to staging

1. Push your changes to the `stage` branch: `git push origin my-branch-name:stage`
2. Test on `https://stage.irlpodcast.org`

## Pushing to production

Episode deployments typically happen at 6AM PT on the publish date. Please
post in #irl-site-redesign (private channel) on Slack, or DM @michaela when you push
so she know's it's been successful.

It is responsibility of the person who codes the episode to find someone to push
if 6AM PT is too early for them. All members of MozMEAO are happy to do this.

1. Verify all is good on [the staging site](https://stage.irlpodcast.org/)
  - If the episode was merged before the publish date it will not be visible on
  staging. You can see it on staging by either re-running the Jenkins job (if
  you have permission) or by merging a new pull request. If there are no
  reviewed pull requests that are ready you can submit one that changes the
  publish date to 1 minute earlier.
2. Make sure your local `master` branch is up to date
3. Push the `master` branch to the `prod` branch: `git push origin master:prod`

A notice will be posted in `#irlpodcast-notify` on Slack when the push has completed.

### Kudos

- http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/
- https://regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/
 
