import React from "react";
import { Metadata } from "next";
import ServicesHubPage from "@/components/pages/ServicesHubPage";

export const metadata: Metadata = {
    title: "Dubai Property Services | AC, Plumbing & More | Dakeek",
    description: "Complete property maintenance services in Dubai. AC repair & maintenance, emergency plumber, licensed electrician, deep cleaning, handyman. DET License 1382290. Professional response. Book now!",
    keywords: [
        "Property Services Dubai",
        "Property Maintenance Dubai",
        "AC Repair Dubai",
        "Emergency Plumber Dubai",
        "Electrician Dubai",
        "Handyman Services Dubai",
        "Deep Cleaning Services Dubai",
        "Water Tank Cleaning Dubai",
        "Emergency Repair Dubai",
        "Property Maintenance Services Dubai",
        "Best Property Services Company Dubai",
        "Licensed property services Dubai",
        "Residential maintenance Dubai",
        "Villa maintenance Dubai",
        "Apartment repair services Dubai",
        "AC maintenance contracts Dubai",
        "Plumbing emergency Dubai",
        "Electrical installation Dubai",
        "Home repair near me Dubai",
        "Professional handyman Dubai",
    ],
    alternates: {
        canonical: "https://dakeek.ae/services",
        languages: { 'en-AE': 'https://dakeek.ae/services' },
    },
    openGraph: {
        title: "All Property Services Dubai | Dakeek",
        description: "Licensed AC, plumbing, electrical, cleaning, handyman & emergency services in Dubai. DET License 1382290. Book now!",
    },
};

export default function ServicesPage() {
    return <ServicesHubPage />;
}
