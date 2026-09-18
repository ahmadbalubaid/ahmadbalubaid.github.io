# Ahmed Balubaid — Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step — just open `index.html` or deploy as-is.

## Structure

All files sit flat at the repo root:

```
.
├── index.html                        Home — Hero, Projects, About/Skills/Experience, Footer
├── hospitality.html                  Case study — Hospitality Pre-Opening Analytics
├── android-adware.html               Case study — Android Adware Detection
├── trip-registration.html            Case study — Trip Registration Platform
├── style.css                         All styling (theme variables at the top)
├── case-study.js                     Click-to-enlarge screenshot lightbox (case study pages only)
├── AhmedBalubaid_CV.pdf              One-page résumé (linked from every Download Resume button)
├── hospitality-dashboard.png         Hospitality project — Executive Overview dashboard
├── 01_Executive_Overview.png         Hospitality case study — dashboard page 1
├── 02_Action_Center.png              Hospitality case study — dashboard page 2
├── 03_Vendor_Cost_Performance.png    Hospitality case study — dashboard page 3
├── adware-detection-results.png      Adware Detection — model evaluation results
├── adware-detection-pipeline.png     Adware Detection — research/implementation pipeline figure
├── trip-registration-app.png         Trip Registration Platform — app screenshot
└── README.md
```

## Deploying with GitHub Pages

1. Push this folder to a GitHub repo (e.g. `ahmedbalubaid/portfolio`, or `ahmedbalubaid.github.io` for a root-domain site).
2. In the repo: **Settings → Pages → Source** → select the `main` branch, root folder.
3. Your site goes live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

All internal links between pages use plain relative filenames (`hospitality.html`, `index.html#projects`, etc.), so this works unchanged on GitHub Pages, a subfolder, or any static host.

## What's built

Warm, editorial theme (beige/green, Public Sans + Lora) — sticky nav, hero, Projects, a three-column About / Skills / Experience section, and a minimal footer, now extended with three dedicated case-study pages.

- **Home** (`index.html`): the same hero and About/Skills/Experience/footer as before. Each of the three project cards is now a fully clickable link — hover lifts the card slightly and shows a "View Case Study →" affordance — leading to its own case study page. GitHub links were removed from the homepage cards; they now live inside each case study instead.
- **Case studies** (`hospitality.html`, `android-adware.html`, `trip-registration.html`): same header/nav and footer as the homepage, a breadcrumb back to Projects, a case hero (category, title, subtitle, description, tech badges), a large real screenshot, then editorial sections — business problem, dataset/pipeline (built with plain HTML/CSS diagrams, no generated graphics), results as clean metric rows, tech stack, project links, and (where relevant) a disclaimer or an "Internal Project — Source Code Not Publicly Available" note. Every screenshot is click-to-enlarge (`case-study.js`). Each page ends with "Explore Another Project" links to the other two case studies and a link back to the full portfolio.
- All content, metrics, and screenshots are exactly what was supplied — nothing invented.

## Customizing the theme

All colors live as CSS variables at the top of `style.css`:

```css
:root {
  --bg: #F4F0E6;
  --card-bg: #FBF9F3;
  --text-primary: #292821;
  --text-secondary: #6F6A60;
  --green: #1F7A63;
  --green-dark: #155B4B;
  --beige: #EAE2D3;
  --border: #DED6C8;
}
```

The case-study-specific rules (hero, metric rows, workflow diagrams, screenshot frames, lightbox, feature grid, explore-project cards) are appended at the bottom of the same `style.css`, under the "CASE STUDY PAGES" comment block — they reuse the same variables and components as the homepage rather than introducing a separate design system.
