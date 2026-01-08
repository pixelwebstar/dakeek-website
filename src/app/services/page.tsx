import React from "react";
import { Metadata } from "next";
import ServicesHubPage from "@/components/pages/ServicesHubPage";

export const metadata: Metadata = {
    title: "Professional Home Services in Dubai - AC, Plumbing, Electrical | Dakeek",
    description: "Complete home maintenance services in Dubai. AC repair & maintenance, emergency plumber, licensed electrician, deep cleaning, and handyman. 60-min response. Book now!",
    keywords: [
        "Home Services Dubai",
        "AC Repair Dubai",
        "Plumber Dubai",
        "Electrician Dubai",
        "Handyman Dubai",
        "Deep Cleaning Dubai",
        "Emergency Repair Dubai",
        "Home Maintenance Services Dubai",
        "Best Home Services Company Dubai",
    ],
    openGraph: {
        title: "All Home Services in Dubai | Dakeek",
        description: "AC, plumbing, electrical, cleaning, handyman & emergency services. Book now!",
    },
};

export default function ServicesPage() {
    return <ServicesHubPage />;
}
