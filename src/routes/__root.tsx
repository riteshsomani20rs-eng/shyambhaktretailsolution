import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'Shyam Bhakt Retail Solution | Your On-Ground Retail Partner'
const siteDescription = 'Practical retail business setup, marketing, accounts and documentation, staffing, and research support across West Bengal. Complete packages at ₹20,000 and monthly support at ₹2,000 for new and existing businesses.'

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'google-site-verification',
        content: '_tp4iWZrTmOf7NCXGkL_cCzcW6UhVsXtdr--R45IwwE',
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <main className="fallback-page">
      <span className="eyebrow">SHYAM BHAKT RETAIL SOLUTION</span>
      <h1>This page is off the map.</h1>
      <p>Find our services, packages, and contact details on the home page.</p>
      <a className="button" href="/">Back to home</a>
    </main>
  ),
  errorComponent: ({ reset }) => (
    <main className="fallback-page">
      <span className="eyebrow">SHYAM BHAKT RETAIL SOLUTION</span>
      <h1>Something didn’t load.</h1>
      <p>Please try again, or call us on +91 74397 18395.</p>
      <button className="button" onClick={reset}>Try again</button>
      <a className="text-link" href="tel:+917439718395">Call our team</a>
    </main>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
