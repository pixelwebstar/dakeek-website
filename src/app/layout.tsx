import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import dynamic from 'next/dynamic';
import { Toaster } from "sonner";

import ContactHubLoader from "../components/shared/ContactHubLoader";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // App-like feel
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dakeek.ae'),
  title: {
    template: "%s | Dakeek - Premium Home Maintenance",
    default: "Dakeek - Premium Home Maintenance Dubai",
  },
  description: "Professional home maintenance services in Dubai. AC, Plumbing, Electrical, and more. 60-minute emergency response for licensed and certified repairs.",
  keywords: ["AC Maintenance Dubai", "Emergency Plumber Dubai", "Electrical Services", "Luxury Home Maintenance", "Duct Cleaning", "Water Tank Cleaning", "Dubai Maintenance Company"],
  authors: [{ name: "Dakeek Technical Services LLC", url: "https://dakeek.ae" }],
  creator: "Dakeek Technical Services LLC",
  publisher: "Dakeek Technical Services LLC",
  alternates: {
    canonical: "/",
    languages: {
      'en-AE': '/',
    },
  },
  openGraph: {
    title: "Dakeek | Precision Home Maintenance",
    description: "Experience the new standard in home maintenance. Speed, expertise, and transparency.",
    url: "https://dakeek.ae",
    siteName: "Dakeek Technical Services",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://dakeek.ae/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dakeek Technical Services Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakeek | Precision Home Maintenance",
    description: "Dubai's verified home maintenance experts. Book now.",
    creator: "@dakeek_ae",
    images: ["https://dakeek.ae/opengraph-image.png"],
  },
  verification: {
    google: "T8hhiXgeP_vxqaKG5DT3GpJik50Qiv2vNYv9yZ7xBE4",
  },
  category: "Home Services",
  icons: {
    icon: '/icons/icon-512.png',
    shortcut: '/icons/icon-512.png',
    apple: '/icons/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-touch-icon.png',
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
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${playfair.variable} antialiased bg-[#FAFAF9] text-[#111]`}
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <ContactHubLoader />
        <Toaster richColors position="top-center" closeButton theme="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "DAKEEK Technical Services",
              "legalName": "DAKEEK Technical Services Co. L.L.C",
              "license": "1382290",
              "image": "https://dakeek.ae/opengraph-image.png",
              "url": "https://dakeek.ae",
              "telephone": "+971542472151",
              "email": "asheejajayan@gmail.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Anzar Gallery Building",
                "addressLocality": "Al Karama",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2487,
                "longitude": 55.3003
              },
              "areaServed": [
                { "@type": "City", "name": "Dubai" },
                { "@type": "Place", "name": "Dubai Marina" },
                { "@type": "Place", "name": "Jumeirah Lake Towers (JLT)" },
                { "@type": "Place", "name": "Downtown Dubai" },
                { "@type": "Place", "name": "Business Bay" },
                { "@type": "Place", "name": "Palm Jumeirah" },
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
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Maintenance Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Maintenance" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stove & Cooker Repair" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Handyman Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Repairs" } }
                ]
              },
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://dakeek.ae/contact",
                  "inLanguage": "en-AE",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Book a Service"
                }
              }
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
