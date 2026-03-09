import { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";

export const metadata: Metadata = {
    title: "Careers at Dakeek | Join Our Dubai Team",
    description: "Looking for technician jobs in Dubai? Dakeek recruits elite AC technicians, plumbers, and electricians for luxury residential service. Join our reserve list.",
    keywords: [
        "Jobs in Dubai",
        "Technician Jobs Dubai",
        "AC Technician Job Dubai",
        "Plumber Job Dubai",
        "Electrician Vacancy Dubai",
        "Careers Dakeek",
        "Luxury Home Maintenance Jobs",
        "Maintenance work Dubai"
    ],
    openGraph: {
        title: "Careers | Dakeek - Residential Service & Maintenance",
        description: "Join the elite team serving Dubai's finest homes.",
    },
    alternates: {
        canonical: "https://dakeek.ae/careers",
        languages: { 'en-AE': 'https://dakeek.ae/careers' },
    },
};

export default function Page() {
    return <CareersPage />;
}
