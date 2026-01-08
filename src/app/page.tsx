import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Best Home Maintenance & Repair Services in Dubai | Dakeek",
   description: "Dubai's #1 rated home maintenance company. Expert AC repair, plumbing, electrical, and handyman services. 60-min response. Licensed & insured technicians. Book now!",
   keywords: [
      "Home Maintenance Dubai",
      "Best Home Maintenance Company Dubai",
      "AC Repair Dubai",
      "Plumber Dubai",
      "Electrician Dubai",
      "Handyman Dubai",
      "Emergency Repair Dubai",
      "24/7 Home Services Dubai",
      "Technical Services Dubai",
      "Dakeek",
   ],
   openGraph: {
      title: "Dakeek - Best Home Maintenance Services in Dubai",
      description: "AC repair, plumbing, electrical & handyman. 60-min response. Book now!",
   },
};

export default function Home() {
   return <HomePage />;
}

