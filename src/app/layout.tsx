import React from "react";
import Script from "next/script";
import type { Viewport, Metadata } from "next";
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
import JsonLd from "../components/shared/JsonLd";

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
  metadataBase: new URL('https://dakeek.ae'),
  title: {
    default: 'Dakeek - Commercial and Residential Property Maintenance',
    template: '%s | Dakeek - Commercial and Residential Property Maintenance'
  },
  description: 'Precision property maintenance services in Dubai. Licensed commercial and residential AC repair, plumbing, electrical, and handyman services.',
  keywords: [
    // Core Services
    "AC repair Dubai",
    "AC maintenance Dubai",
    "Emergency plumber Dubai",
    "Electrician Dubai",
    "Handyman services Dubai",
    "Deep cleaning Dubai",

    // Emergency & Time-sensitive
    "Professional plumber Dubai",
    "Emergency AC repair Dubai",
    "Same day electrician Dubai",
    "Emergency property repair Dubai",
    "60 minute response Dubai",

    // Location-specific (Key Dubai Areas)
    "AC repair Dubai Marina",
    "Plumber Downtown Dubai",
    "Electrician JBR Dubai",
    "Handyman Palm Jumeirah",
    "Property maintenance Jumeirah",
    "AC repair Business Bay",

    // Service + Location combinations
    "Water heater repair Dubai",
    "Leak detection Dubai",
    "Furniture assembly Dubai",
    "Water tank cleaning Dubai",
    "AC duct cleaning Dubai",
    "Electrical troubleshooting Dubai",

    // General maintenance
    "Property maintenance Dubai",
    "Commercial maintenance Dubai",
    "Residential maintenance Dubai",
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
    "Dakeek Property Maintenance"
  ],
  authors: [{ name: "Dakeek Residential Services and Maintenance", url: "https://dakeek.ae" }],
  creator: "Dakeek Technical Services LLC",
  publisher: "Dakeek Technical Services LLC",
  openGraph: {
    title: "Dakeek - Commercial and Residential Property Maintenance",
    description: "Dubai's verified property maintenance experts. Licensed AC, Plumbing, Electrical, and Cleaning services for homes and offices. DET License 1382290. Book now!",
    url: "https://dakeek.ae",
    siteName: "Dakeek Property Maintenance",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakeek - Commercial and Residential Property Maintenance",
    description: "Dubai's #1 Property Maintenance Service. Fast, Reliable, Precise. Professional Technical Support.",
    creator: "@dakeek_ae",
  },
  verification: {
    google: "dx0MGQgKU16cFZMrzrW9Su0YCXZ6uC7P6CXi83K6q9s",
    other: {
      "zoho-verification": "zb00597891.zmverify.zoho.com",
    },
  },
  category: "Residential Services",

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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ML9J4GMM');
          `}
        </Script>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18076209022"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18076209022');
          `}
        </Script>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <link rel="preload" href="/images/noise.svg" as="image" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0c0a09" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2700;55.3200" />
        <meta name="ICBM" content="25.2700, 55.3200" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-[#E5E7EB] text-[#111]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML9J4GMM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
        <JsonLd />

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
