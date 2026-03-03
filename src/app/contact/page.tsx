import { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
    title: "Contact Dakeek - Book Home Maintenance in Dubai | 24/7 Available",
    description: "Book AC repair, plumber, or electrician in Dubai now. 60-minute response time. WhatsApp, call, or book online. Available 24/7 for emergencies across all Dubai areas.",
    keywords: [
        "Book Home Maintenance Dubai",
        "Contact Handyman Dubai",
        "Book AC Repair Dubai",
        "Emergency Plumber Dubai",
        "24/7 Electrician Dubai",
        "WhatsApp Repair Dubai",
        "Home Service Booking Dubai",
    ],
    openGraph: {
        title: "Book Dakeek - 24/7 Home Maintenance Dubai",
        description: "Call, WhatsApp, or book online. 60-min response guaranteed!",
    },
    alternates: {
        canonical: "https://dakeek.ae/contact",
    },
};

export default function Page() {
    return <ContactPage />;
}
