# Ahmed Balubaid — Portfolio

Personal portfolio site. Static HTML/CSS, no build step — just open `index.html` or deploy as-is.

## Structure

```
.
├── index.html          Nav + Hero + Projects + About/Skills/Experience + Footer
├── assets/
│   ├── style.css                  All styling (theme variables at the top)
│   ├── AhmedBalubaid_CV.pdf       One-page résumé (linked from both Download Resume buttons)
│   └── images/
│       ├── hospitality-dashboard.png        Featured project — Power BI dashboard screenshot
│       ├── adware-detection-results.png     Adware Detection project — model results
│       └── trip-registration-app.png        Trip Registration Platform — app screenshot
└── README.md
```

## Deploying with GitHub Pages

1. Push this folder to a GitHub repo (e.g. `ahmedbalubaid/portfolio`, or `ahmedbalubaid.github.io` for a root-domain site).
2. In the repo: **Settings → Pages → Source** → select the `main` branch, root folder.
3. Your site goes live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

## Still needs your input (marked `TODO` in `index.html`)

- **GitHub icon/link** (hero and footer) — currently point to `#`. Replace with your GitHub profile URL.
- **"View Project" links** on all three project cards — currently point to `#`. Point them at each project's repo or a case-study page once ready.

## What's built so far

Redesigned with a warm, editorial palette (beige/green, Public Sans + Lora) — sticky nav, hero, Projects (one large featured card + two secondary cards), a three-column About / Skills / Experience section, and a minimal footer.

- **Nav**: Projects / About / Experience / Contact, Download Resume as the top-right CTA
- **Hero**: identity, tagline, location/availability, primary + secondary CTAs, social links
- **Projects**: Hospitality Pre-Opening Analytics (featured, with stats + a placeholder for the real dashboard screenshot — see TODO below), Android Adware Detection, Trip Registration Platform
- **About / Skills / Experience**: three-column layout, three roles listed
- **Footer**: name, role, LinkedIn / GitHub / Email / Back to top

Both "Download Resume" buttons are wired to `assets/AhmedBalubaid_CV.pdf`.

### Still needs your input

- **GitHub profile link** (hero + footer) — still `#`.
- The featured project's "View Project" button points to `https://github.com/ahmadbalubaid/hospitality-preopening-analytics` as given — make sure that repo exists/is public before publishing.

## Customizing the theme

All colors live as CSS variables at the top of `assets/style.css`:

```css
:root {
  --bg: #0B1220;
  --bg-secondary: #0F172A;
  --card-bg: #111827;
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --blue: #3B82F6;
  --cyan: #22D3EE;
  --border: #1E293B;
}
```
