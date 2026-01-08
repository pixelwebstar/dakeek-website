import { Metadata } from "next";
import JournalHubPage from "@/components/pages/JournalHubPage";

export const metadata: Metadata = {
    title: "The Journal | Home Maintenance Insights for Dubai | Dakeek",
    description: "Expert advice on AC maintenance schedules, emergency plumbing tips, electrical safety, and home care in Dubai.",
    keywords: [
        "AC maintenance tips Dubai",
        "Home maintenance advice Dubai",
        "Dakeek Journal",
        "Dubai home care tips"
    ],
    openGraph: {
        title: "The Journal | Dakeek",
        description: "Expert advice from Dubai's trusted home maintenance company.",
    },
};

export default function JournalPage() {
    return <JournalHubPage />;
}
