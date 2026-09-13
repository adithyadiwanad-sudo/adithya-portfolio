# Adithya Diwanad — Developer Portfolio

A responsive, single-page React portfolio for Full-Stack Developer, Software Engineer (SDE), and AI/GenAI Engineer roles. Built with Vite, Tailwind CSS v4, and Lucide icons.

## Run locally

Install Node.js 22.12+ (or a newer supported LTS), extract this folder and open it in VS Code. Run these commands in the folder containing package.json:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For production validation:

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx`: main page composition
- `src/data.js`: profile, project links, project content, skills and certifications
- `src/components/Navbar.jsx`: responsive navigation with mobile toggle
- `src/components/Hero.jsx`: introduction, CTAs and social links
- `src/components/Projects.jsx`: featured projects and compact utility builds
- `src/components/Skills.jsx`: responsive skill badge grids
- `src/components/Background.jsx`: internship, education and certifications
- `src/components/Contact.jsx`: validated email draft form and footer
- `src/components/UI.jsx`: reusable icons, badges, links and headings
- `src/index.css`: Tailwind import, shared styles, palette and reduced-motion support
- `public/`: static files such as the resume and favicon

## Updated assets and content

The supplied resume is bundled as `public/Adithya_Diwanad_FullStack_Developer_Resume.pdf`. The Hero and desktop/mobile Navbar use the shared `ResumeButton` component for direct downloads.

The Hero uses `ProfileAvatar`: a circular portrait with a gradient ring, subtle hover zoom, reduced-motion support and an accessible fallback. `profile.imageUrl` currently uses a Google Drive thumbnail URL derived from the supplied file ID. The image could not be downloaded or verified in this build environment. If Drive blocks embedding or the file is not public, the avatar displays initials and a View photo link.

For reliable production hosting, download your photo from Drive, put it at `public/profile.jpg`, and set `profile.imageUrl` in `src/data.js` to `/profile.jpg`. Alternatively, ensure the Drive photo is shared as Anyone with the link → Viewer and verify it loads in an incognito window.

WanderLust is marked In Development with its GitHub link. Plan2Field AI has the supplied GitHub and Streamlit demo links. NeuroShield AI Platform is added as a fourth featured project; Student Performance Predictor and all three existing utility builds are preserved. No unprovided NeuroShield technologies or performance claims were added. Missing demo/repository links still show Coming soon.

Skills match the updated five categories. All five certifications/achievements have View Certificate buttons using the exact supplied Drive links. NCAT displays the supplied Top ~7K detail. External link access and certificate contents have not been independently verified.

The contact form uses native required/email validation, URL-encodes the entered content, and opens a mailto draft. The visitor must send it in their configured email app. It does not submit or store messages on a server.

The pre-final-year headline, CGPA and existing project metrics are preserved. The 20% throughput improvement, 88% routing accuracy and NCAT rank are user-provided claims.

## Apply this update

Extract the updated ZIP into a new folder and open its `adithya-portfolio` folder in VS Code. Run `npm install` and `npm run dev`. If merging into an existing copy, copy `src/data.js`, the updated `src/components/` directory and the bundled resume in `public/`; retain any unrelated local changes. Run `npm run build` before pushing.

Updated components: Hero, Navbar, Background, Projects. New shared components: ProfileAvatar and ResumeButton. Other components are included in the ZIP for a complete runnable project.

## Use in a new Vite React project

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm install lucide-react tailwindcss @tailwindcss/vite
```

Replace the generated `src/`, `public/`, `index.html`, and `vite.config.js` with the corresponding files from this project. Keep the new project's React and Vite dependencies. Run `npm run dev`.

Tailwind v4 is configured through `@tailwindcss/vite` in `vite.config.js` and `@import "tailwindcss";` in `src/index.css`. No Tailwind v3 init command or tailwind.config.js is required.

## Deploy to Vercel

1. Create a GitHub repository and push this project (exclude node_modules, dist and secrets using the included .gitignore).
2. Sign in to Vercel, choose **Add New → Project**, and import the repository.
3. Select the directory containing package.json as the root directory.
4. Use the **Vite** framework preset, `npm run build` as the build command, and `dist` as the output directory.
5. Select **Deploy**. Vercel will return a deployment URL. Subsequent pushes to the connected production branch update the site.

This project has one page with hash-based section links, so no client-side route rewrites are needed. No environment variables or backend service are required. This delivery includes source and deployment instructions; it has not been published to your Vercel account.

## Accessibility and responsive behavior

Semantic headings, a skip link, labeled icon buttons, keyboard focus indicators, explicit form labels, mobile menu state, readable text, wrapping badge grids, and reduced-motion support are included. Layouts adapt from one column on small screens to three project columns on wide screens. External links use noopener/noreferrer.

## Official documentation

- https://tailwindcss.com/docs/installation/using-vite
- https://vite.dev/guide/
- https://vercel.com/docs/frameworks/frontend/vite
