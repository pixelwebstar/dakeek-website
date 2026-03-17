import { Metadata } from "next";
import QueriesPage from "@/components/pages/QueriesPage";

export const metadata: Metadata = {
    title: "FAQ - Property Maintenance Questions Answered | Dakeek Dubai",
    description: "Get answers about AC repair costs, plumber fees, warranty, and booking in Dubai. Everything you need to know about home maintenance services from Dakeek.",
    keywords: [
        "AC Repair Cost Dubai",
        "Plumber Price Dubai",
        "Property Maintenance FAQ Dubai",
        "Handyman Cost Dubai",
        "Emergency Repair Fee Dubai",
        "Dakeek Reviews",
        "Property Service Questions Dubai",
    ],
    openGraph: {
        title: "Dakeek FAQ - Your Questions Answered",
        description: "Pricing, warranty, coverage, and more. Find all answers here.",
    },
    alternates: {
        canonical: "https://dakeek.ae/queries",
        languages: { 'en-AE': 'https://dakeek.ae/queries' },
    },
};

export default function Page() {
    return <QueriesPage />;
}
