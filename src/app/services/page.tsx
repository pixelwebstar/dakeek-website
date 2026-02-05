import React from "react";
import { Metadata } from "next";
import ServicesHubPage from "@/components/pages/ServicesHubPage";

export const metadata: Metadata = {
    title: "Home Services Dubai - AC, Plumbing, Electrical, Cleaning | Dakeek",
    description: "Complete home maintenance services in Dubai. AC repair & maintenance, 24/7 emergency plumber, licensed electrician, deep cleaning, handyman. DET License 1382290. Fast emergency response. Book now!",
    keywords: [
        "Home Services Dubai",
        "Home Maintenance Dubai",
        "AC Repair Dubai",
        "Emergency Plumber Dubai",
        "24/7 Electrician Dubai",
        "Handyman Services Dubai",
        "Deep Cleaning Services Dubai",
        "Water Tank Cleaning Dubai",
        "Emergency Repair Dubai",
        "Home Maintenance Services Dubai",
        "Best Home Services Company Dubai",
        "Licensed home services Dubai",
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
        canonical: "https://www.dakeek.ae/services",
    },
    openGraph: {
        title: "All Home Services in Dubai | Dakeek Technical Services",
        description: "Licensed AC, plumbing, electrical, cleaning, handyman & 24/7 emergency services in Dubai. DET License 1382290. Book now!",
    },
};

export default function ServicesPage() {
    return <ServicesHubPage />;
}
