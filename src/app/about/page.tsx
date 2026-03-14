import { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
    title: "About Dakeek | Dubai's Trusted Maintenance Co.",
    description: "Licensed Technical Services LLC with 2 years serving Dubai. Deira's fastest-growing home maintenance provider. Based in Al Mateena St, BN Building. Certified technicians, 30-day warranty, 24/7 support.",
    keywords: [
        "About Dakeek",
        "Home Maintenance Deira",
        "AC Repair Al Mateena St Dubai",
        "Technical Services Deira BN Building",
        "Best Handyman Deira Dubai",
        "Licensed Technical Services Dubai",
        "Trusted Home Repair Deira",
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
