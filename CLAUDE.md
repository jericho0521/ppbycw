# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `ppbycw/` directory:

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build → /build
npm test           # Run tests (interactive watch mode)
npm run deploy     # Build then publish to GitHub Pages (gh-pages)
npm run optimize-images  # Compress images via sharp (optimize-images.js)
```

To run a single test file:
```bash
npm test -- --testPathPattern=<filename>
```

## Architecture

Pure frontend React 18 SPA (no backend). Bootstrapped with Create React App. Deployed on AWS Amplify (`https://main.d23ipzumjsumtt.amplifyapp.com/#/`) with an alternative gh-pages deploy path.

**Routing** (`App.jsx`): BrowserRouter with four routes — `/`, `/events`, `/faq`, `/about`. `react-helmet-async` is used to inject canonical URLs based on the current path.

**Pages** (`src/Pages/`):
- `Home.jsx` — static marketing page with services, pricing, community gallery sections
- `Events.jsx` — lists past events (from `src/Data/eventsData.js`) and an event inquiry form that POSTs to the Web3Forms API (`https://api.web3forms.com/submit`)
- `FAQ.jsx` — accordion FAQ, state-driven with `useState`
- `About.jsx` — static about page

**Components** (`src/Components/`):
- `NavBar.jsx` — React-Bootstrap Navbar; smooth-scrolls to `#rigs-section` / `#pricing-section` on the Home page from any route using `useNavigate` + `setTimeout`
- `Footer.jsx` — contact info, social links, embedded Google Maps iframe
- `EventTemplate.jsx` — reusable card for events; accepts `title`, `description`, `additionalInfo[]`, `images[]`, `showTitle`, `className` props

**Adding a new event**: Add an entry to `src/Data/eventsData.js`, import images into `src/Images/index.js`, and optimize them with `npm run optimize-images` first.

**Environment variables**: The Web3Forms API key is stored in `.env` as `REACT_APP_WEB3FORMS_ACCESS_KEY` (gitignored). A `.env` file must exist locally for the event form to work.

**Styling**: Mix of custom CSS per component/page and utility libraries (Bootstrap 5, Tailwind via `tailwind-merge`, Flowbite React). Global base styles in `src/index.css` and `src/App.css`; shared layout styles in `src/Assets/`.

**Images**: Originals live in `src/Images/`; optimized versions in `src/Images/optimized/`. All images are re-exported through `src/Images/index.js` — import from there, not directly from the file path.

**`src/config/`** directory currently exists but is empty.
