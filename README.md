# My Blog

A simple, fast, free blog built with [Eleventy](https://www.11ty.dev/). No database, no admin panel, no monthly fees. Posts are written in Markdown.

---

## Quick start (one-time setup)

You need [Node.js](https://nodejs.org/) installed (the LTS version is fine — download and run the installer).

Open a terminal in this folder and run:

```bash
npm install
```

That downloads Eleventy. You only do this once.

## Writing and previewing

To preview your blog locally with live reload:

```bash
npm start
```

Open `http://localhost:8080` in your browser. As you edit files, the page refreshes automatically.

To stop the server, press `Ctrl+C`.

## Writing a new post

1. Go to `src/posts/`
2. Copy `first-entry.md` and rename it (e.g. `my-new-post.md`)
3. Edit the top of the file — change the title, subtitle, and date
4. Write your post in Markdown below the second `---`
5. Save. If `npm start` is running, the page updates instantly.

The filename becomes the URL. `my-new-post.md` becomes `/posts/my-new-post/`.

## Adding images

1. Put image files in `src/assets/images/`
2. In your post, reference them like this:

```markdown
![Description of the image](/assets/images/photo.jpg)
```

Use lowercase filenames with hyphens. Keep images reasonably sized — most photos should be under 1MB. If they're huge, [Squoosh](https://squoosh.app/) compresses them in the browser for free.

## Editing the About page or homepage

- About page: `src/about.njk`
- Homepage intro: `src/index.njk` (the `intro-headline` and `intro-lede` text)
- Site title and footer: `src/_includes/base.njk`

## Customising the look

All the design lives in `src/assets/style.css`. The colours are CSS variables at the top — change `--accent`, `--paper`, `--ink` etc. and the whole site updates.

---

## Deploying for free (going live)

You have two great free options. **Netlify** is easiest. **GitHub Pages** is great if you already use GitHub.

### Option A: Netlify (recommended — easiest)

1. Sign up at [netlify.com](https://www.netlify.com/) (free, no card required)
2. Drag-and-drop deploy: run `npm run build` locally, then drag the generated `_site` folder onto the Netlify dashboard. You'll get a URL like `https://random-name.netlify.app` instantly.
3. **For continuous deploys** (recommended): push this folder to a free GitHub repository, then in Netlify click "Add new site → Import from Git → GitHub", pick the repo, and Netlify will auto-build and deploy every time you push a new post. Set:
   - Build command: `npm run build`
   - Publish directory: `_site`

Now your workflow becomes: write a Markdown file, push to GitHub, blog updates in ~30 seconds.

### Option B: GitHub Pages

1. Create a free GitHub account if you don't have one
2. Create a new repository (e.g. `my-blog`) and push this folder to it
3. Add a file `.github/workflows/build.yml` with the GitHub Actions workflow for Eleventy (search "Eleventy GitHub Pages" for the latest snippet)
4. In your repo Settings → Pages, set the source to "GitHub Actions"
5. Your blog goes live at `https://YOUR-USERNAME.github.io/my-blog/`

### Custom domain (optional, ~$15/year)

If you eventually want a real domain like `myblog.com`, buy one from any registrar (Porkbun, Namecheap, Cloudflare are all reasonable). Both Netlify and GitHub Pages let you point a custom domain at your site for free — they just give you the DNS records to set.

---

## What you don't need to worry about

- **Servers** — a static site has no server to maintain
- **Updates** — no plugins, no security patches, no breaking upgrades
- **Backups** — your posts are plain text files; keep them in Git and they're backed up forever
- **Performance** — static sites are about as fast as the web gets
