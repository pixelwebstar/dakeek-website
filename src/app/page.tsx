import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Dakeek Technical Services Dubai | Residential & Commercial Maintenance",
   description: "Dubai's trusted technical services for homes and businesses. AC, plumbing, electrical, gas systems, and handyman services. 24/7 emergency support.",
   keywords: [
      "Residential maintenance Dubai",
      "Commercial technical services",
      "AC repair Dubai",
      "Home maintenance company",
      "Restaurant maintenance Dubai",
      "Office fit-out services",
      "Gas stove repair",
      "Electrical services Dubai",
      "Plumbing repair Dubai",
      "Dakeek Technical Services"
   ],
   alternates: {
      canonical: "https://www.dakeek.ae/",
   },
   openGraph: {
      title: "Dakeek Residential & Commercial Services",
      description: "Dubai's trusted technical experts for homes, restaurants, and offices. Precision AC, Gas, Electrical, and Plumbing.",
   },
};

export default function Home() {
   return <HomePage />;
}

