import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'Shyam Bhakt Retail Solution | Your On-Ground Retail Partner'
const gtmId = 'GTM-TSLFSQGG'
const googleAdsId = 'AW-18496352527'
const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
const googleTagScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAdsId}');`

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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        {/* Google tag (gtag.js) for Google Ads */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} />
        <script dangerouslySetInnerHTML={{ __html: googleTagScript }} />
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
