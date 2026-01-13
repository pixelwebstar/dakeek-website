import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Home Maintenance & Repair Services in Dubai | Dakeek Technical Services",
   description: "Dakeek is a Dubai-based home maintenance company for villas and apartments, offering precise AC, plumbing, electrical, cleaning, handyman and emergency repair services within 25 km. Licensed technicians, fast response.",
   keywords: [
      "home maintenance services in Dubai",
      "home repair services in Dubai",
      "AC maintenance in Dubai",
      "plumbing services in Dubai",
      "electrical services in Dubai",
      "handyman services in Dubai",
      "emergency home maintenance Dubai",
      "residential maintenance company in Dubai",
      "Dakeek",
      "Technical Services Dubai"
   ],
   alternates: {
      canonical: "https://dakeek.ae/",
   },
   openGraph: {
      title: "Home Maintenance & Repair Services in Dubai | Dakeek Technical Services",
      description: "Dakeek is a Dubai-based home maintenance company for villas and apartments, offering precise AC, plumbing, electrical, cleaning, handyman and emergency repair services within 25 km.",
   },
};

export default function Home() {
   return <HomePage />;
}

