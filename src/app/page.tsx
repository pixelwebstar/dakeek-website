import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Dakeek Technical Services Dubai | Home Maintenance & Emergency Repair",
   description: "Dubai's trusted technical services for homes and businesses. Licensed AC repair, 24/7 emergency plumber, electrician, deep cleaning, and handyman. DET License 1382290. Fast emergency response across all Dubai areas.",
   keywords: [
      // Core Services - Dubai Focused
      "Home maintenance Dubai",
      "Residential maintenance Dubai",
      "AC repair Dubai",
      "Emergency plumber Dubai",
      "Electrician Dubai",
      "Handyman Dubai",
      "Deep cleaning Dubai",

      // Emergency Services
      "24/7 AC repair Dubai",
      "Emergency home repair Dubai",
      "Same day plumber Dubai",
      "Emergency electrician Dubai",
      "60 minute response Dubai",

      // Location-Specific
      "AC repair Dubai Marina",
      "Plumber Downtown Dubai",
      "Electrician JBR",
      "Handyman Palm Jumeirah",
      "Home maintenance Business Bay",

      // Specific Services
      "AC maintenance contracts Dubai",
      "Water leak detection Dubai",
      "Gas stove repair Dubai",
      "Electrical troubleshooting",
      "Water tank cleaning",
      "Furniture assembly Dubai",

      // Business Types
      "Restaurant maintenance Dubai",
      "Office maintenance Dubai",
      "Villa maintenance Dubai",
      "Apartment maintenance Dubai",

      // Long-tail
      "best home maintenance company Dubai",
      "reliable plumber near me Dubai",
      "licensed electrician Dubai",
      "professional AC technician Dubai",

      // Brand
      "Dakeek Technical Services",
      "Dakeek Dubai",
      "Dakeek home services"
   ],
   alternates: {
      canonical: "https://www.dakeek.ae/",
   },
   openGraph: {
      title: "Dakeek Technical Services Dubai | 24/7 Home Maintenance",
      description: "Licensed home maintenance services in Dubai. AC, Plumbing, Electrical, Cleaning, Handyman. DET License 1382290. Book online or call +971542472151",
   },
};

export default function Home() {
   return <HomePage />;
}
