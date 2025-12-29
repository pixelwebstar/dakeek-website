import React from "react";
import { Metadata } from "next";
import ServicesHubPage from "@/components/pages/ServicesHubPage";

export const metadata: Metadata = {
    title: "Services Hub",
    description: "Comprehensive home maintenance solutions for your AC, Plumbing, Electrical, and more. 60-minute emergency response guaranteed.",
};

export default function ServicesPage() {
    return <ServicesHubPage />;
}
