## Running Locally

1. Install dependencies: `npm install`
2. Start Gulp for asset compilation: `gulp`
3. In a new terminal window, start the server: `docker-compose up`
4. Open `http://localhost:1313` in a browser

Edit the `.scss` and `.js` files in the `/src` directory (*NOT* in `/static`).

## Adding new epsidoes

1. `hugo new episodes/201X-XX-XX-episode-XX-episode-title-here.md`

You can create this file by hand in the filesystem, but the above command will use the
`archetypes/episodes.md` template to populate all the necessary front matter, saving
you precious, precious time.

## Adding new pages

This probably won't happen often, but if needed, run:

1. `hugo new somepage.md`

### Kudos

- http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/
- https://regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/