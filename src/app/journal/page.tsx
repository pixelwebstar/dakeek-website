import { Metadata } from "next";
import JournalHubPage from "@/components/pages/JournalHubPage";

export const metadata: Metadata = {
    title: "The Journal | Dubai Maintenance Tips | Dakeek",
    description: "Expert advice on AC maintenance schedules, emergency plumbing tips, electrical safety, and home care in Dubai.",
    keywords: [
        "AC maintenance tips Dubai",
        "Property maintenance advice Dubai",
        "Dakeek Journal",
        "Dubai home care tips"
    ],
    openGraph: {
        title: "The Journal | Dakeek",
        description: "Expert advice from Dubai's trusted property maintenance company.",
    },
    alternates: {
        canonical: "https://dakeek.ae/journal",
        languages: { 'en-AE': 'https://dakeek.ae/journal' },
    },
};

export default function JournalPage() {
    return <JournalHubPage />;
}
