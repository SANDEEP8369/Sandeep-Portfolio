# Sandeep Verma — Portfolio

A creative dark-themed React portfolio built with Vite + React Router.

## Project Structure

```
sandeep-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            ← app entry point
    ├── App.jsx             ← router + layout
    ├── index.css           ← global styles & utilities
    ├── data/
    │   └── resume.js       ← ALL content lives here (edit this file)
    ├── components/
    │   ├── Navbar.jsx      ← fixed nav with mobile hamburger
    │   ├── Footer.jsx      ← site footer
    │   ├── Cursor.jsx      ← custom animated cursor
    │   └── PageWrapper.jsx ← fade-in transition wrapper
    └── pages/
        ├── Home.jsx        ← hero + stats
        ├── About.jsx       ← summary + education + certs
        ├── Experience.jsx  ← work history with timeline
        ├── Projects.jsx    ← expandable project cards
        ├── Skills.jsx      ← interactive skill categories
        └── Contact.jsx     ← contact cards + CTA
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output goes to /dist — deploy to Vercel, Netlify, or any static host
```

## Customisation

All content is centralised in **`src/data/resume.js`**. Edit that one file to update:
- Personal info, email, phone, LinkedIn
- Stats row
- Work experience & bullet points
- Projects (title, stack, description, impact)
- Skills categories
- Education & certifications

No other files need to change for content updates.

## Tech Stack

- React 18
- React Router v6
- Vite 5
- Google Fonts: Syne + Space Grotesk
- Zero external UI libraries
