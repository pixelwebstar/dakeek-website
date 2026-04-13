import { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";

export const metadata: Metadata = {
    title: "Careers | Dakeek Technical Services in Dubai",
    description: "Join the Dakeek team. We are hiring ambitious Sales Officers and Senior Maintenance Technicians in Dubai. Apply today.",
    keywords: [
        "Jobs Dubai",
        "Dakeek Careers",
        "Technical Services Jobs Dubai",
        "Sales Officer Dubai",
        "Maintenance Technician Dubai"
    ],
    openGraph: {
        title: "Careers | Dakeek",
        description: "Join Dubai's premium technical services team.",
    },
    alternates: {
        canonical: "https://dakeek.ae/careers",
        languages: { 'en-AE': 'https://dakeek.ae/careers' },
    },
};

export default function Careers() {
    return <CareersPage />;
}
