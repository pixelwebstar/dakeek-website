import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Dakeek Deira | #1 AC Repair & Home Maintenance Deira",
   description: "Deira's most trusted technical services based in Al Mateena St (BN Building). 2 years of excellence in AC repair, plumbing & electrical. Fast 20km radius response. DET License 1382290.",
   keywords: [
      "AC Repair Deira",
      "Home Maintenance Al Mateena St",
      "BN Building Maintenance Dubai",
      "AC Maintenance Deira",
      "Technical Services Deira",
      "Xavier Business Center Dubai",
      "Handyman Al Mateena St",
      "Emergency Plumber Deira",
      "Dakeek Deira",
      "Best AC repair in Deira",
      "Home Maintenance 20km radius Deira",
   ],
   alternates: {
      canonical: "https://dakeek.ae/",
      languages: { 'en-AE': 'https://dakeek.ae/' },
   },
   openGraph: {
      title: "Dakeek Deira | 24/7 Home Maintenance Services",
      description: "Licensed home maintenance services in Deira, Dubai. AC, Plumbing, Electrical, Cleaning, Handyman. DET License 1382290. Book online or call +971542472151",
   },
};

export default function Home() {
   return <HomePage />;
}
