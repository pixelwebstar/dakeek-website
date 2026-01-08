import { Metadata } from "next";
import QueriesPage from "@/components/pages/QueriesPage";

export const metadata: Metadata = {
    title: "FAQ - Home Maintenance Questions Answered | Dakeek Dubai",
    description: "Get answers about AC repair costs, plumber fees, warranty, and booking in Dubai. Everything you need to know about home maintenance services from Dakeek.",
    keywords: [
        "AC Repair Cost Dubai",
        "Plumber Price Dubai",
        "Home Maintenance FAQ Dubai",
        "Handyman Cost Dubai",
        "Emergency Repair Fee Dubai",
        "Dakeek Reviews",
        "Home Service Questions Dubai",
    ],
    openGraph: {
        title: "Dakeek FAQ - Your Questions Answered",
        description: "Pricing, warranty, coverage, and more. Find all answers here.",
    },
};

export default function Page() {
    return <QueriesPage />;
}
