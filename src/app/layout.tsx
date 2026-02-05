import type { Metadata, Viewport } from "next";
import React from "react";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { TransitionProvider } from "../lib/context/TransitionContext";
import Preloader from "../components/ui/Preloader";

import Footer from "../components/layout/Footer";
import ContactHubLoader from "../components/shared/ContactHubLoader";

import PageTransition from "../components/shared/PageTransition";
import { DUBAI_AREAS } from "../lib/constants";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dakeek.ae'),
  title: {
    default: 'Dakeek - Residential Service and Maintenance',
    template: '%s | Dakeek - Residential Service and Maintenance'
  },
  description: 'Precision home maintenance services in Dubai. AC repair, plumbing, electrical, and handyman services with rapid emergency response.',
  keywords: [
    // Core Services
    "AC repair Dubai",
    "AC maintenance Dubai",
    "Emergency plumber Dubai",
    "Electrician Dubai",
    "Handyman services Dubai",
    "Deep cleaning Dubai",

    // Emergency & Time-sensitive
    "24/7 plumber Dubai",
    "Emergency AC repair Dubai",
    "Same day electrician Dubai",
    "Emergency home repair Dubai",
    "60 minute response Dubai",

    // Location-specific (Key Dubai Areas)
    "AC repair Dubai Marina",
    "Plumber Downtown Dubai",
    "Electrician JBR Dubai",
    "Handyman Palm Jumeirah",
    "Home maintenance Jumeirah",
    "AC repair Business Bay",

    // Service + Location combinations
    "Water heater repair Dubai",
    "Leak detection Dubai",
    "Furniture assembly Dubai",
    "Water tank cleaning Dubai",
    "AC duct cleaning Dubai",
    "Electrical troubleshooting Dubai",

    // General maintenance
    "Home maintenance Dubai",
    "Residential maintenance Dubai",
    "Property maintenance Dubai",
    "Villa maintenance Dubai",
    "Apartment maintenance Dubai",

    // Long-tail search terms
    "best AC repair company Dubai",
    "reliable plumber Dubai",
    "licensed electrician Dubai",
    "professional handyman Dubai",
    "home repair services near me",
    "AC technician Dubai",
    "plumbing services Dubai",

    // Brand
    "Dakeek Residential Services",
    "Dakeek Technical Services Dubai",
    "Dakeek home maintenance"
  ],
  authors: [{ name: "Dakeek Residential Services and Maintenance", url: "https://www.dakeek.ae" }],
  creator: "Dakeek Technical Services LLC",
  publisher: "Dakeek Technical Services LLC",
  alternates: {
    canonical: "/",
    languages: {
      'en-AE': '/',
    },
  },
  openGraph: {
    title: "Dakeek Residential Services and Maintenance",
    description: "Dubai's verified home maintenance experts. Licensed AC, Plumbing, Electrical, and Cleaning services. DET License 1382290. Fast emergency response. Book now!",
    url: "https://www.dakeek.ae",
    siteName: "Dakeek Residential Services and Maintenance",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://www.dakeek.ae/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dakeek Residential Services and Maintenance Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakeek Residential Services and Maintenance",
    description: "Dubai's #1 Residential Maintenance Service. Fast, Reliable, Precise. 24/7 Emergency Support.",
    creator: "@dakeek_ae",
    images: ["https://www.dakeek.ae/opengraph-image.png"],
  },
  verification: {
    google: "T8hhiXgeP_vxqaKG5DT3GpJik50Qiv2vNYv9yZ7xBE4",
  },
  category: "Residential Services",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-touch-icon.png',
    },
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <link rel="preload" href="/images/noise.svg" as="image" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0c0a09" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2487;55.3003" />
        <meta name="ICBM" content="25.2487, 55.3003" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-[#E5E7EB] text-[#111]`}
      >
        <TransitionProvider>
          <Preloader />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <ContactHubLoader />
        </TransitionProvider>
        <Toaster richColors position="top-center" closeButton theme="light" />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": "https://www.dakeek.ae/#organization",
                  "name": "Dakeek Technical Services LLC",
                  "legalName": "Dakeek Technical Services Co. L.L.C",
                  "alternateName": "Dakeek Dubai",
                  "description": "Professional home maintenance and technical services in Dubai. Licensed and verified provider of AC repair, plumbing, electrical, cleaning, and handyman services with rapid emergency response across all Dubai areas.",
                  "slogan": "Engineering rigor for Dubai's finest homes. Precision in every detail.",
                  "url": "https://www.dakeek.ae",
                  "telephone": "+971542472151",
                  "email": "asheejajayan@gmail.com",
                  "image": "https://www.dakeek.ae/opengraph-image.png",
                  "logo": "https://www.dakeek.ae/icons/icon-512.png",
                  "priceRange": "$$",
                  "currenciesAccepted": "AED",
                  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
                  "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "Business License",
                    "recognizedBy": {
                      "@type": "GovernmentOrganization",
                      "name": "Dubai Department of Economy and Tourism"
                    },
                    "description": "Dubai DET License No. 1382290"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Anzar Gallery Building, Al Karama",
                    "addressLocality": "Dubai",
                    "addressRegion": "Dubai",
                    "postalCode": "00000",
                    "addressCountry": "AE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 25.2487,
                    "longitude": 55.3003
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Dubai", "geo": { "@type": "GeoCoordinates", "latitude": 25.2048, "longitude": 55.2708 } },
                    ...DUBAI_AREAS.map(area => ({ "@type": "Place", "name": area }))
                  ],
                  "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": 25.2487,
                      "longitude": 55.3003
                    },
                    "geoRadius": "30000"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "1",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "value": "15"
                  },
                  "sameAs": [
                    "https://www.instagram.com/dakeektechnicalservice/",
                    "https://www.facebook.com/dakeektechnicalservice/",
                    "https://www.linkedin.com/company/dakeek-technical-service-co-llc/"
                  ]
                },
                {
                  "@type": "Service",
                  "name": "AC Maintenance & Repair Dubai",
                  "serviceType": "Air Conditioning maintenance, repair, and installation services in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/ac",
                  "description": "Professional AC repair and maintenance services in Dubai. 24/7 emergency AC repair, yearly maintenance contracts, and AC installation across all Dubai areas.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "AED"
                    }
                  }
                },
                {
                  "@type": "Service",
                  "name": "Plumbing Services Dubai",
                  "serviceType": "Emergency plumber, leak detection, pipe repair services in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/plumbing",
                  "description": "24/7 emergency plumber in Dubai. Water leak detection, pipe repairs, drainage solutions, water heater repair, and bathroom fitting services.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "AED"
                    }
                  }
                },
                {
                  "@type": "Service",
                  "name": "Electrical Services Dubai",
                  "serviceType": "Licensed electrician services, electrical repairs, and installations in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/electrical",
                  "description": "Professional electrical services in Dubai. Circuit repairs, switch and socket installation, lighting solutions, electrical troubleshooting, and power distribution.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "AED"
                    }
                  }
                },
                {
                  "@type": "Service",
                  "name": "Deep Cleaning Services Dubai",
                  "serviceType": "Deep cleaning, water tank cleaning, and duct sanitization in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/cleaning",
                  "description": "Professional deep cleaning services in Dubai. Water tank cleaning, AC duct cleaning, move-in/move-out cleaning, and comprehensive home sanitization.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "AED"
                    }
                  }
                },
                {
                  "@type": "Service",
                  "name": "Handyman Services Dubai",
                  "serviceType": "Handyman and general home repair services in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/handyman",
                  "description": "Professional handyman services in Dubai. Furniture assembly, painting, carpentry, fixture installation, and general home repairs.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "AED"
                    }
                  }
                },
                {
                  "@type": "Service",
                  "name": "24/7 Emergency Home Repair Dubai",
                  "serviceType": "24/7 emergency home maintenance and repair services in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/emergency",
                  "description": "24/7 emergency home repair services in Dubai. Fast response for plumbing emergencies, AC breakdowns, electrical failures, and urgent home repairs.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "AED"
                    }
                  }
                }
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
