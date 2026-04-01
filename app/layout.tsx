import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "./providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800'], // Weight variants for headings
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'], // Weight variants for body text
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: ' T20 League 2026 Schedule – Full Fixtures, Teams & Points Table',
  description: 'T20 League 2026 Full Schedule: Fixtures, Teams & Points Table. Check match dates, squads, venues, and latest standings for all T20 leagues.',
  metadataBase: new URL('https://t20leagueschedule.com'),
  alternates: {
    canonical: 'https://t20leagueschedule.com',
  },
  keywords: [

  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
  verification: {
    google: '',
  },
  publisher: '',
  authors: [
    {
      name: ``,
      url: '',
    },
  ],
  icons: [
    { rel: 'icon', url: '/images/favicon.png', sizes: 'any' },
    { rel: 'icon', url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/images/favicon.png', sizes: '180x180' },
    { rel: 'icon', url: '/images/favicon.png', sizes: '192x192', type: 'image/png' },
    { rel: 'icon', url: '/images/favicon.png', sizes: '512x512', type: 'image/png' },
  ],
}


 const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://t20leagueschedule.com/#organization",
  "name": "T20 League Schedule",
  "alternateName": "T20LeagueSchedule.com",
  "url": "https://t20leagueschedule.com/",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://t20leagueschedule.com/#logo",
    "url": "https://t20leagueschedule.com/_next/static/media/T20 League Schedule.d97f5d27.png",
    "width": 400,
    "height": 200,
    "caption": "T20 League Schedule Logo"
  },
  "description": "Your ultimate destination for all T20 cricket leagues worldwide — featuring complete match schedules, updated points tables, team squads, venues, and live fixtures for IPL, PSL, BBL, CPL, SA20, ILT20, BPL, LPL, MLC, NPL, The Hundred and more in 2026.",
  "foundingDate": "2024",
  "areaServed": "Worldwide",
  "knowsAbout": [
    "T20 Cricket",
    "IPL 2026",
    "PSL 2026",
    "BBL 2026",
    "CPL 2026",
    "SA20 2026",
    "ILT20 2026",
    "BPL 2026",
    "LPL 2026",
    "MLC 2026",
    "NPL 2026",
    "The Hundred 2026",
    "Cricket Match Schedule",
    "Points Table",
    "Cricket Teams",
    "Cricket Venues"
  ],
  "sameAs": [
    "https://www.facebook.com/t20leagueschedule",
    "https://x.com/t20leagueschedule",
    "https://www.instagram.com/t20leagueschedule",
    "https://www.youtube.com/@t20leagueschedule"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://t20leagueschedule.com/contact-us/",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  }
};
 
// ── 2. WEBSITE ───────────────────────────────────────────────
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://t20leagueschedule.com/#website",
  "url": "https://t20leagueschedule.com/",
  "name": "T20 League Schedule 2026 – All Cricket League Fixtures & Points Table",
  "alternateName": "T20LeagueSchedule",
  "description": "Complete T20 cricket schedule 2026 — match fixtures, points tables, team squads, and venues for IPL, PSL, BBL, CPL, SA20, ILT20, BPL, LPL, MLC, NPL, The Hundred and all major domestic & women's leagues.",
  "inLanguage": "en",
  "publisher": {
    "@id": "https://t20leagueschedule.com/#organization"
  },
  "about": {
    "@type": "Thing",
    "name": "T20 Cricket Leagues 2026",
    "description": "All major T20 cricket leagues worldwide including IPL, PSL, BBL, CPL, SA20, ILT20, BPL, LPL, MLC, NPL, The Hundred, WPL, WBBL, T20 Blast and more."
  },
  "keywords": [
    "T20 league schedule 2026",
    "IPL 2026 schedule",
    "PSL 2026 schedule",
    "BBL 2026 schedule",
    "CPL 2026 schedule",
    "SA20 2026 schedule",
    "ILT20 2026 schedule",
    "BPL 2026 schedule",
    "LPL 2026 schedule",
    "MLC 2026 schedule",
    "NPL 2026 schedule",
    "The Hundred 2026 schedule",
    "WPL 2026 schedule",
    "WBBL 2026 schedule",
    "T20 Blast 2026 schedule",
    "T20 cricket fixtures 2026",
    "T20 points table 2026",
    "cricket match schedule today",
    "all T20 leagues 2026",
    "cricket team squads 2026",
    "T20 cricket venues 2026",
    "cricket schedule worldwide",
    "upcoming T20 matches 2026",
    "live T20 cricket schedule",
    "T20 cricket standings 2026"
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://t20leagueschedule.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
 
// ── 3. WEBPAGE (Homepage) ────────────────────────────────────
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://t20leagueschedule.com/#webpage",
  "url": "https://t20leagueschedule.com/",
  "name": "T20 League 2026 Schedule – Full Fixtures, Teams & Points Table",
  "description": "Stay updated with all T20 cricket leagues worldwide. Check match schedules, points tables, team squads, and venues — all in one place. Covering IPL, PSL, BBL, CPL, SA20, ILT20, BPL, LPL, MLC, NPL, The Hundred and more.",
  "isPartOf": {
    "@id": "https://t20leagueschedule.com/#website"
  },
  "about": {
    "@id": "https://t20leagueschedule.com/#website"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://t20leagueschedule.com/"
      }
    ]
  },
  "inLanguage": "en",
  "dateModified": new Date().toISOString().split("T")[0]
};
 



// Pre-stringify JSON to avoid runtime JSON.stringify calls
const organizationSchemaJson = JSON.stringify(organizationSchema);
const sportsEventSchemaJson = JSON.stringify(webPageSchema);
const webSiteSchemaJson = JSON.stringify(webSiteSchema);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        {/* Mobile Performance Optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Resource Hints for Performance - Critical for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Use dns-prefetch for non-critical resources to save connection slots on mobile */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://forfrogadiertor.com" />

        {/* Preconnect only for critical resources to reduce DNS lookup time */}

        {/* Favicon - Fix 404 error */}
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />

        {/* Preload critical resources - Only truly critical above-the-fold content */}
        {/* Preload LCP element - First hero image for optimal LCP */}


        {/* Preload additional hero images only on larger screens (saves mobile bandwidth) */}
        {/* Note: Media queries in preload may cause warnings - only preload if critical */}

        {/* Critical CSS - Next.js optimizes CSS automatically, but we preload to reduce blocking */}
        {/* Fonts are already optimized via next/font */}

        {/* Google tag (gtag.js) - Load lazily to reduce blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7GWMSYK9Y9"
          strategy="lazyOnload"
        />

        <Script id="google-analytics-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7GWMSYK9Y9');
        `}
        </Script>

        {/* Google Ads - Must use regular script tag (not Next.js Script) to avoid data-nscript attribute */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4357484609268769"
          crossOrigin="anonymous"
        /> */}

        {/* Google Consent Messages - Load lazily */}
        {/* <Script
          src="https://fundingchoicesmessages.google.com/i/pub-4357484609268769?ers=1"
          strategy="lazyOnload"
        /> */}


        <meta
          name="google-site-verification"
          content="7vUxmls9THBjRt0z-DfAIt2kVUgEyWdnfVps4JZCxpg"
        />


        {/* Schema.org Structured Data - Pre-stringified for performance */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchemaJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sportsEventSchemaJson }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: webSiteSchemaJson }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <Providers>{children}</Providers>


        {/* Non-critical scripts loaded at bottom of body for better performance */}
      </body>
    </html>
  );
}





