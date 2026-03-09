import { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
    title: "About Dakeek | Dubai's Trusted Maintenance Co.",
    description: "Licensed Technical Services LLC with 10+ years serving Dubai. Certified technicians, 30-day warranty, 24/7 emergency support. Trusted by 10,000+ homes.",
    keywords: [
        "About Dakeek",
        "Home Maintenance Company Dubai",
        "Best Handyman Company Dubai",
        "Licensed Technical Services Dubai",
        "Trusted Home Repair Dubai",
        "Professional Technicians Dubai",
    ],
    openGraph: {
        title: "About Dakeek | Premium Home Maintenance",
        description: "Our story, team, and commitment to excellence in home services.",
    },
    alternates: {
        canonical: "https://dakeek.ae/about",
        languages: { 'en-AE': 'https://dakeek.ae/about' },
    },
};

export default function Page() {
    return <AboutPage />;
}
