# Deploying to Netlify (free tier)

This project is configured for Netlify deployment. Follow these steps to push it to a free Netlify site.

## One-time setup (do these once)

1. **Create a free GitHub account** if you don't have one: https://github.com/signup
2. **Create a new empty repo** on GitHub (e.g. `local-find-ui`). Do **not** initialize it with a README.
3. **Create a free Netlify account** linked to your GitHub: https://app.netlify.com/signup

## Push this project to GitHub

From the project folder (`C:\Users\ELCOT\Desktop\local-find-ui-main\local-find-ui-main`):

```bash
cd "C:/Users/ELCOT/Desktop/local-find-ui-main/local-find-ui-main"
git init
git add .
git commit -m "Initial commit: configure for Netlify"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Connect the repo to Netlify

1. Go to https://app.netlify.com/ → **Add new site** → **Import an existing project** → **GitHub**
2. Pick the repo you just pushed.
3. Netlify auto-detects settings from `netlify.toml`. You should see:
   - Build command: `npm run build`
   - Publish directory: `dist/client`
   - Functions directory: (auto — `.netlify/v1/functions`)
4. Click **Deploy site**. The first build takes ~1–2 min.
5. After it succeeds, your site is live at `https://<random-name>.netlify.app`. You can rename it in **Site settings → Domain management**.

## What was changed for Netlify

- `netlify.toml` — build command, publish dir, Node 20
- `vite.config.ts` — added `@netlify/vite-plugin-tanstack-start`, disabled the Cloudflare Nitro bundle
- Added `@netlify/vite-plugin-tanstack-start` to `devDependencies`

Cloudflare / `wrangler.jsonc` is left untouched as a fallback. To revert, see "Reverting" below.

## Local development

Still works the same as before:

```bash
npm run dev
```

The Netlify plugin also emulates functions/edge-functions/blobs locally when running `vite dev`, but you don't need Netlify CLI to use it.

## Reverting (back to Cloudflare-only)

```bash
# Restore vite.config.ts
git checkout -- vite.config.ts
# Remove netlify files
rm netlify.toml NETLIFY_DEPLOY.md
# Remove the netlify dep
npm uninstall @netlify/vite-plugin-tanstack-start
```

## Troubleshooting

- **Build fails with "Cannot find module @netlify/vite-plugin-tanstack-start"** — make sure `npm install` ran in the Netlify build environment (it should by default).
- **Site shows 404 on page refresh** — server-side routing should work out of the box with the Netlify adapter. If it doesn't, add this to `netlify.toml`:

  ```toml
  [[redirects]]
    from = "/*"
    to = "/.netlify/functions/server"
    status = 200
  ```
- **Build succeeds but site is blank** — open browser dev tools → Console. Usually a runtime error in SSR; check the Netlify function logs under **Site → Functions → server → Logs**.
