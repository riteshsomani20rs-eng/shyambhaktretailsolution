# Shyam Bhakt Retail Solution

A mobile-responsive website for an on-ground retail business support partner in West Bengal. It presents Setup, Marketing, Accounts & Documentation, HR & Staffing, and Research & Reports for new and existing businesses.

The site includes a ₹20,000 one-time Complete Package, a ₹2,000 Monthly Package, individual-service enquiries, a four-step process, FAQs, and the supplied YouTube presentation. Contact actions use the phone number and email from the original uploaded HTML, including floating Call and WhatsApp buttons and package-specific WhatsApp messages. The service disclaimer distinguishes service fees from government, statutory, vendor, and specialist charges.

## Technologies

- React 19 and TypeScript
- TanStack Start and TanStack Router for server-rendered, file-based routing
- Vite and the Netlify TanStack Start plugin
- Custom responsive CSS, Tailwind CSS 4, and Lucide icons
- An original SVG storefront illustration and favicon
- A click-to-load, privacy-enhanced YouTube embed

## Local development

Use Node.js 22 or later and pnpm. Install dependencies with `pnpm install`, then run `pnpm dev` and open `http://localhost:3000`. For Netlify local emulation, use `netlify dev --port 8889` and open `http://localhost:8889`.

Netlify handles the production build using `netlify.toml`. No API keys, database, login, payment integration, or form processing are needed for this informational website.

## Content and structure

- `src/routes/index.tsx`: all landing-page content, contact details, package messages, mobile navigation, and video playback.
- `src/routes/__root.tsx`: document shell, search/social metadata, favicon, and fallback pages.
- `src/components/RetailIllustration.tsx`: the scalable storefront artwork.
- `src/styles.css`: design tokens, section styling, responsive breakpoints, and reduced-motion support.
- `public/favicon.svg`: the brand favicon.
- `docs/reference-site.html`: the original user-uploaded reference; it is not a deployed page. Its local video and poster references were not provided, so the finished site uses the YouTube link supplied by the user instead.

Contact details and prices can be updated in `src/routes/index.tsx`; update the pricing metadata in `src/routes/__root.tsx` at the same time. The video ID is `UCChQ9tWrzI`. Video playback starts after a visitor selects the presentation, and a separate YouTube link is available if playback is restricted by the video owner or browser.
