import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Dakeek Residential Services and Maintenance | Dubai's #1 Home Experts",
   description: "Dubai's verified residential maintenance experts. Precision AC repair, plumbing, electrical, and handyman services. 60-minute emergency response.",
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
   alternates: {
      canonical: "https://www.dakeek.ae/",
   },
   openGraph: {
      title: "Dakeek Residential Services and Maintenance",
      description: "Dubai's verified residential maintenance experts. Precision AC, Plumbing, Electrical, and Cleaning.",
   },
};

export default function Home() {
   return <HomePage />;
}

