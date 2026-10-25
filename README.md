# Motion Lab

A personal knowledge base of web motion, animation, interactivity, and movement techniques.

Curated from major open-source GitHub repositories with live, simplified examples you can study and adapt.

## Project structure

```
motion-lab/
├── index.html      # Main page
├── styles.css      # Styles
├── app.js          # Demos (GSAP, Anime.js)
├── package.json    # Optional serve scripts
└── README.md
```

## How to run

```bash
cd motion-lab
npm start          # serves on localhost (requires Node)
```

Or just open `index.html` directly in a browser. All demos are self-contained (GSAP and Anime.js loaded via CDN).

## Featured libraries

- **GSAP** — timelines, ScrollTrigger, professional choreography
- **Anime.js** — lightweight, SVG-friendly, excellent staggering
- **Motion** (formerly Framer Motion) — declarative React/Vue/vanilla
- **React Spring** — spring physics
- **Lottie / dotLottie** — designer-authored animations
- **Remotion** — video from React
- **Theatre.js** — visual motion editor
- **AutoAnimate** — zero-config list transitions
- Plus CSS natives, scroll patterns, SVG, and 3D (Three.js / R3F)

## Notes

- Examples are intentionally minimal so the pattern is clear.
- Always check the original library’s license and docs for production use.
- Stars and status reflect mid/late 2026 data.

Built as a reference for future projects.

## Publish

This is a static site. Enable GitHub Pages from the main branch (Settings → Pages → Deploy from branch: main / root) and it will be live at https://jamstl.github.io/motion-lab/
