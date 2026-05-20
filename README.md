# Netflix-Style PM Portfolio

A pixel-faithful Netflix-inspired portfolio for Product Managers. Built with pure HTML, CSS, and Vanilla JS — no frameworks, no build tools. Just open and go.

## 📁 Folder Structure

```
netflix-portfolio/
├── index.html              ← Home (billboard hero + card rows)
├── css/
│   └── style.css           ← All styles (Netflix dark theme)
├── js/
│   └── main.js             ← Scroll effects, card arrows, animations
└── pages/
    ├── about.html          ← About Me page
    ├── case-studies.html   ← 4 Case Studies
    ├── skills.html         ← Skill bars + Tools grid
    └── contact.html        ← Contact form + links
```

## 🚀 How to Open

**Option 1 — Antigravity / VS Code Live Server:**
1. Open the `netflix-portfolio` folder in VS Code
2. Right-click `index.html` → "Open with Live Server"

**Option 2 — Direct browser:**
1. Double-click `index.html` to open in your browser
   *(Note: Google Fonts require internet connection for correct typography)*

## ✏️ How to Customize

| What to change | Where |
|---|---|
| Your name | `index.html` → `.logo-text`, hero section |
| Your title / tagline | `index.html` → `.hero-badge`, `.hero-title` |
| Bio / story | `pages/about.html` → `.about-content` |
| Case studies | `pages/case-studies.html` → `.cs-card` blocks |
| Skill percentages | `pages/skills.html` → `data-width` attributes |
| Contact info | `pages/contact.html` → `.contact-link-value` |
| Brand color | `css/style.css` → `--red: #E50914` |

## 🎨 Design System

- **Primary color:** Netflix Red `#E50914`
- **Background:** `#141414` (Netflix black)
- **Cards:** `#1f1f1f`
- **Font:** Inter (body) + Bebas Neue (display numbers)
- **Animations:** CSS keyframes + IntersectionObserver for scroll reveals

## 📄 Pages

- **Home** — Netflix billboard hero, scrolling card rows (case studies), Top 10 skills, experience timeline, metrics
- **About** — Full bio, education, highlights grid
- **Case Studies** — 4 detailed case study cards with metrics
- **Skills** — Animated skill bars + tools pill grid
- **Contact** — Contact form + social links

---
Built for a PM portfolio. Replace "Alex Sharma" with your name throughout.
