# Ahmed Balubaid — Portfolio

Personal portfolio site. Static HTML/CSS, no build step — just open `index.html` or deploy as-is.

## Structure

All files sit flat at the repo root:

```
.
├── index.html
├── style.css
├── AhmedBalubaid_CV.pdf              One-page résumé (linked from both Download Resume buttons)
├── hospitality-dashboard.png         Featured project — Power BI dashboard screenshot
├── adware-detection-results.png      Adware Detection project — model results
├── trip-registration-app.png         Trip Registration Platform — app screenshot
└── README.md
```

## Deploying with GitHub Pages

1. Push this folder to a GitHub repo (e.g. `ahmedbalubaid/portfolio`, or `ahmedbalubaid.github.io` for a root-domain site).
2. In the repo: **Settings → Pages → Source** → select the `main` branch, root folder.
3. Your site goes live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

## What's built

Warm, editorial theme (beige/green, Public Sans + Lora) — sticky nav, hero, Projects (one large featured card + two secondary cards, all three with real screenshots), a three-column About / Skills / Experience section, and a minimal footer.

- **Nav**: Projects / About / Experience / Contact, Download Resume as the top-right CTA
- **Hero**: identity, tagline, location/availability, primary + secondary CTAs, social links (LinkedIn, GitHub, Email)
- **Projects**: Hospitality Pre-Opening Analytics (featured, with stats + real dashboard screenshot, links to `github.com/ahmadbalubaid/hospitality-preopening-analytics`), Intelligent Android Adware Detection (with results screenshot + stats), Trip Registration Platform (with app screenshot + feature callouts, marked "Internal Project — Source Code Not Publicly Available")
- **About / Skills / Experience**: three-column layout, three roles listed
- **Footer**: name, role, LinkedIn / GitHub / Email / Back to top

Download Resume (both buttons) and GitHub (hero + footer, `github.com/ahmadbalubaid`) are all wired up — nothing left as a placeholder.

Before publishing, double-check `https://github.com/ahmadbalubaid/hospitality-preopening-analytics` exists and is public, since the featured project's "View Project" button points there.

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
