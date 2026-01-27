import type { Metadata, Viewport } from "next";
import React from "react";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { TransitionProvider } from "../lib/context/TransitionContext";
// Removed static imports to resolve conflict with dynamic lazy loads
// import ContactHubLoader from "../components/shared/ContactHubLoader";
import Preloader from "../components/ui/Preloader";

import Footer from "../components/layout/Footer";
import ContactHubLoader from "../components/shared/ContactHubLoader";

import PageTransition from "../components/shared/PageTransition";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  // Removed maximumScale and userScalable for accessibility compliance
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
    template: "%s | Dakeek Residential Services and Maintenance",
    default: "Dakeek Residential Services and Maintenance | Dubai's #1 Home Experts",
  },
  description: "Dubai's verified residential maintenance experts. Precision AC repair, plumbing, electrical, and handyman services. 60-minute emergency response. Serving Downtown, Marina, Palm Jumeirah, and all major communities.",
  keywords: [
    "Residential maintenance Dubai",
    "Home maintenance Dubai",
    "AC repair Dubai",
    "Plumbing services Dubai",
    "Electrical works Dubai",
    "Handyman services Dubai",
    "Emergency home repair Dubai",
    "Best home maintenance company Dubai",
    "Property maintenance Dubai",
    "Water tank cleaning Dubai",
    "Dakeek Residential Services"
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
    description: "Dubai's verified home maintenance experts. AC, Plumbing, Electrical, and Cleaning. Book your service today.",
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
    description: "Dubai's #1 Residential Maintenance Service. Fast, Reliable, Precise.",
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
        {/* Preconnect for critical third-party origins */}
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        {/* Preload critical above-the-fold assets */}
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
                  "url": "https://www.dakeek.ae",
                  "telephone": "+971542472151",
                  "email": "asheejajayan@gmail.com",
                  "image": "https://www.dakeek.ae/opengraph-image.png",
                  "logo": "https://www.dakeek.ae/icons/icon-512.png",
                  "priceRange": "$$",
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
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "Place", "name": "Al Karama" },
                    { "@type": "Place", "name": "Dubai Marina" },
                    { "@type": "Place", "name": "Palm Jumeirah" },
                    { "@type": "Place", "name": "Downtown Dubai" },
                    { "@type": "Place", "name": "Business Bay" },
                    { "@type": "Place", "name": "Jumeirah Lake Towers" },
                    { "@type": "Place", "name": "Arabian Ranches" },
                    { "@type": "Place", "name": "Emirates Hills" }
                  ],
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "sameAs": [
                    "https://www.instagram.com/dakeektechnicalservice/",
                    "https://www.facebook.com/dakeektechnicalservice/",
                    "https://www.linkedin.com/company/dakeek-technical-service-co-llc/"
                  ]
                },
                {
                  "@type": "Service",
                  "name": "AC Maintenance",
                  "serviceType": "AC maintenance and repair services in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/ac"
                },
                {
                  "@type": "Service",
                  "name": "Plumbing Services",
                  "serviceType": "Plumbing repair and leak detection in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/plumbing"
                },
                {
                  "@type": "Service",
                  "name": "Electrical Works",
                  "serviceType": "Electrical works and power distribution in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/electrical"
                },
                {
                  "@type": "Service",
                  "name": "Deep Cleaning",
                  "serviceType": "Deep cleaning, water tank and duct sanitization in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/cleaning"
                },
                {
                  "@type": "Service",
                  "name": "Handyman",
                  "serviceType": "Handyman and general home repairs in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/handyman"
                },
                {
                  "@type": "Service",
                  "name": "Emergency Service",
                  "serviceType": "24/7 emergency home maintenance services in Dubai",
                  "provider": { "@id": "https://www.dakeek.ae/#organization" },
                  "areaServed": "Dubai, United Arab Emirates",
                  "url": "https://www.dakeek.ae/services/emergency"
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
