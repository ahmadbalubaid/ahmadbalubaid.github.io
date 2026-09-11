# Ahmed Balubaid — Portfolio

Personal portfolio site. Static HTML/CSS, no build step — just open `index.html` or deploy as-is.

## Structure

```
.
├── index.html          Hero + Featured Projects + Let's Connect sections
├── assets/
│   ├── style.css                  All styling (theme variables at the top)
│   └── AhmedBalubaid_CV.pdf      One-page résumé (linked from both Download Resume buttons)
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

- Hero section (identity, tagline, CTAs, social links, skills strip, Data/IT split visual)
- Featured Projects section (3 cards)
- Let's Connect footer (LinkedIn, GitHub, Email, Download Resume)

Both "Download Resume" buttons are already wired to `assets/AhmedBalubaid_CV.pdf`. By design, no Experience/Education section is on the site — the résumé download covers that, and the site stays focused on the Hero + Projects pitch.

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
