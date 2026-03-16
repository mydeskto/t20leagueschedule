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
  title: 'T20 League Schedule – All T20 Cricket Match Fixtures, Teams & Points Table',
  description: 'Find the complete T20 league schedule with match fixtures, teams, venues, and points tables for all T20 cricket leagues around the world.',
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

// Pre-compute JSON schemas outside component to avoid re-rendering
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nplschedule.com/#organization",
  "name": "NPL T20 League",
  "alternateName": "Nepal Premier League",
  "url": "https://nplschedule.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://nplschedule.com/images/newlogo.png",
    "width": 400,
    "height": 200
  },
  "description": "Official schedule website for Nepal Premier League (NPL) T20 2026 including match fixtures, teams, points table, venues and latest updates.",
  "sameAs": [
    "https://www.facebook.com/nplschedule.com",
    "https://x.com/nplschedule.com",
    "https://www.instagram.com/nplschedule.com",
    "https://www.youtube.com/@nplschedule.com"
  ]
};

const sportsLeagueSchema = {
  "@context": "https://schema.org",
  "@type": "SportsLeague",
  "@id": "https://nplschedule.com/#sportsleague",
  "name": "Nepal Premier League (NPL) T20 2026",
  "alternateName": "NPL T20 2026",
  "sport": "Cricket",
  "url": "https://nplschedule.com/",
  "organizer": {
    "@id": "https://nplschedule.com/#organization"
  },
  "startDate": "2026-11-17",
  "endDate": "2026-12-15",
  "location": {
    "@type": "Country",
    "name": "Nepal"
  }
};

const sportsEventSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "@id": "https://nplschedule.com/#event",
  "name": "Nepal Premier League (NPL) T20 2026",
  "description": "Nepal Premier League (NPL) T20 2026 featuring top domestic and international cricket players competing across multiple venues in Nepal.",
  "startDate": "2026-11-17",
  "endDate": "2026-12-15",
  "foundingDate": "2024",
  "areaServed": "Nepal",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "sport": "Cricket",
  "image": "https://nplschedule.com/images/hero/hero1.jpg",
  "location": {
    "@type": "Place",
    "name": "Tribhuvan University International Cricket Ground",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kirtipur",
      "addressRegion": "Bagmati",
      "addressCountry": "NP"
    }
  },
  "organizer": {
    "@id": "https://nplschedule.com/#organization"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://nplschedule.com/tickets",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "NPR"
  }
};


const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nplschedule.com/#website",
  "url": "https://nplschedule.com/",
  "name": "NPL Schedule 2026",
  "about": {
    "@id": "https://nplschedule.com/#sportsleague"
  },
  "description": "Complete match schedule, fixtures, teams, venues and live updates for Nepal Premier League (NPL) T20 2026.",
  "publisher": {
    "@type": "Organization",
    "name": "NPL T20 League",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nplschedule.com/images/newlogo.png"
    }
  },
  "inLanguage": "en",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nplschedule.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "areaServed": "NP",
    "availableLanguage": ["English", "Nepali"]
  }
};



// Pre-stringify JSON to avoid runtime JSON.stringify calls
const organizationSchemaJson = JSON.stringify(organizationSchema);
const sportsEventSchemaJson = JSON.stringify(sportsEventSchema);
const sportsLeagueSchemaJson = JSON.stringify(sportsLeagueSchema);
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
          src="https://www.googletagmanager.com/gtag/js?id=G-2VB2EJB4MH"
          strategy="lazyOnload"
        />

        <Script id="google-analytics-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2VB2EJB4MH');
        `}
        </Script>

        {/* Google Ads - Must use regular script tag (not Next.js Script) to avoid data-nscript attribute */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4357484609268769"
          crossOrigin="anonymous"
        />

        {/* Google Consent Messages - Load lazily */}
        <Script
          src="https://fundingchoicesmessages.google.com/i/pub-4357484609268769?ers=1"
          strategy="lazyOnload"
        />


        <meta
          name="google-site-verification"
          content="9qHebp0tN1SV_uN3U3RIVs5Go4Bny923d5yd6_6k6Pc"
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
          dangerouslySetInnerHTML={{ __html: sportsLeagueSchemaJson }}
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





