import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Dakeek Deira | Commercial & Residential Property Maintenance",
   description: "Deira's most trusted property maintenance based in Al Mateena St (BN Building). 2 years of excellence in AC repair, plumbing & electrical. Fast 30km radius response. DET License 1382290.",
   keywords: [
      "AC Repair Deira",
      "Property Maintenance Al Mateena St",
      "BN Building Maintenance Dubai",
      "AC Maintenance Deira",
      "Technical Services Deira",
      "Xavier Business Center Dubai",
      "Handyman Al Mateena St",
      "Emergency Plumber Deira",
      "Dakeek Deira",
      "Best AC repair in Deira",
      "Property Maintenance 30km radius Deira",
   ],
   alternates: {
      canonical: "https://dakeek.ae/",
      languages: { 'en-AE': 'https://dakeek.ae/' },
   },
   openGraph: {
      title: "Dakeek Deira | Licensed Property Maintenance",
      description: "Licensed residential and commercial property maintenance services in Deira, Dubai. AC, Plumbing, Electrical, Cleaning, Handyman. DET License 1382290. Book online or call +971542472151",
   },
};

export default function Home() {
   return <HomePage />;
}
