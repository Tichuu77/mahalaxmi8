import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = "https://www.mahalaxmiinfra.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahalaxmi Infra Nagpur | NMRDA & RL Approved Residential Plots",
    template: "%s | Mahalaxmi Infra",
  },
  description:
    "Buy NMRDA & RL-approved residential plots in Nagpur near MIHAN, Wardha Road, and Hingna. Explore Mahalaxmi Infra projects with clear titles and trusted support.",
  applicationName: "Mahalaxmi Infra",
  category: "Real Estate",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      en: "/",
      hi: "/hi",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mahalaxmi Infra",
    title: "Mahalaxmi Infra Nagpur | NMRDA & RL Approved Residential Plots",
    description:
      "Premium plotted developments in Nagpur with clear documentation and high-growth locations.",
    images: [
      {
        url: "/mahalaxmi-logo.png",
        width: 1200,
        height: 630,
        alt: "Mahalaxmi Infra Nagpur",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Infra Nagpur",
    description: "NMRDA-approved residential plots in strategic Nagpur locations.",
    images: ["/mahalaxmi-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/mahalaxmi-logo.png",
    shortcut: "/mahalaxmi-logo.png",
    apple: "/mahalaxmi-logo.png",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Mahalaxmi Infra",
  image: `${siteUrl}/mahalaxmi-logo.png`,
  url: siteUrl,
  telephone: "+91-7218768295",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "Nagpur",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17888150548">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17888150548');
      `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  )
}
