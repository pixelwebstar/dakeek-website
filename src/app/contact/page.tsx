import { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
    title: "Contact Dakeek | Book Property Maintenance Dubai",
    description: "Book AC repair, plumbing, or electrical in Dubai now. Professional response time. WhatsApp, call, or book online. Available for emergencies across all Dubai areas.",
    keywords: [
        "Book Property Maintenance Dubai",
        "Contact Handyman Dubai",
        "Book AC Repair Dubai",
        "Urgent Plumber Dubai",
        "Expert Electrician Dubai",
        "WhatsApp Repair Dubai",
        "Property Service Booking Dubai",
    ],
    openGraph: {
        title: "Book Dakeek - Property Maintenance Dubai",
        description: "Call, WhatsApp, or book online. Professional response guaranteed!",
    },
    alternates: {
        canonical: "https://dakeek.ae/contact",
        languages: { 'en-AE': 'https://dakeek.ae/contact' },
    },
};

export default function Page() {
    return <ContactPage />;
}
