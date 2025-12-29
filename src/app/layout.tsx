import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { UnifiedContactHub } from "../components/shared/UnifiedContactHub";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dakeek-official.vercel.app'),
  title: "DAKEEK | Precision Technical Services",
  description: "Expert AC, Electrical, and Plumbing services in Dubai. Licensed, Certified, and 24/7 Operational. Specialized in luxury residential maintenance with ISO 9001:2015 processes.",
  keywords: ["AC Maintenance Dubai", "Emergency Plumber Dubai", "Electrical Services", "Luxury Home Maintenance", "Duct Cleaning", "O General Service", "Carrier Service", "Dubai Civil Defense approved"],
  openGraph: {
    title: "DAKEEK | Precision Technical Services",
    description: "Engineering rigor for Dubai's finest homes. AC, Electrical, Plumbing.",
    locale: "en_AE",
    type: "website",
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
        <UnifiedContactHub />
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
