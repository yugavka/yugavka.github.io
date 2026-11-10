# Boris Bezmenov — Portfolio

A responsive, single-page portfolio for Boris Bezmenov, built with React, TypeScript, Vite, Tailwind CSS, Motion for React, and Lucide icons. The layout and visual styling are adapted from [starkow.dev](https://github.com/nitreojs/starkow.dev).

## Run locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Check and build with:

```bash
npm run typecheck
npm run build
npm run preview
```

The production build writes to `dist/`, including `404.html` for GitHub Pages fallback handling.

## Edit the content

Public biography, projects, education, research, achievements, courses, languages, skills, and contact links are in [`src/data/portfolio.ts`](src/data/portfolio.ts). The downloadable CV is [`public/cv.pdf`](public/cv.pdf).

The four Kaggle cards read their places from [`src/data/kaggleRanks.json`](src/data/kaggleRanks.json). To refresh locally, install the [official Kaggle CLI](https://github.com/Kaggle/kaggle-cli), authenticate it, then run `python3 scripts/update_kaggle_ranks.py`. The script reads your entered competitions, writes their public leaderboard places, and never puts credentials in the JSON file.

The changing greeting is in [`src/components/CyclingGreeting.tsx`](src/components/CyclingGreeting.tsx). It advances every 2.6 seconds and respects reduced-motion settings. Edit colors, spacing, and typography in [`src/styles/main.css`](src/styles/main.css). The favicon and social preview image are in `public/`.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. The [deployment workflow](.github/workflows/deploy.yml) runs on every push to `main`. You can also start it from **Actions → Deploy to GitHub Pages → Run workflow**.
4. After the workflow succeeds, open the URL shown in the deployment job or on the repository's Pages settings screen.

For a **user site**, name the repository `username.github.io`. Its URL is `https://username.github.io/`, and the Vite base path is `/`.

For a **project site**, use any other repository name. Its URL is `https://username.github.io/repository-name/`, and the Vite base path is `/repository-name/`.

The Vite configuration reads `GITHUB_REPOSITORY` during the GitHub Actions build and chooses the correct base path automatically. For another host or a custom path, set `VITE_BASE_PATH` (including leading and trailing slashes) before building, for example `VITE_BASE_PATH=/portfolio/ npm run build`.

For automatic Kaggle updates on GitHub Pages, add a repository Actions secret named `KAGGLE_API_TOKEN` with a token from Kaggle's API settings. The deployment workflow refreshes the places and rebuilds the site every six hours (UTC), as well as on pushes and manual runs. Without the secret, ordinary pushes still deploy the checked-in snapshot; scheduled refreshes fail explicitly so stale data is not silently labelled current. Kaggle's `userRank` is the public leaderboard place. Biohub's completed result and bronze medal were also checked on the public profile.

If the default branch is not `main`, update the branch name in `.github/workflows/deploy.yml`.

## Credits and licenses

The layout and card styling draw from [starkow.dev](https://github.com/nitreojs/starkow.dev), © 2024 starkow, licensed under MIT. The included Cascadia Code font is © Microsoft Corporation and licensed under SIL Open Font License 1.1. Both notices are included in [`THIRD_PARTY_LICENSES`](THIRD_PARTY_LICENSES/).
