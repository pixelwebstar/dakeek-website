import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.plumbing.hero.title,
    description: serviceData.plumbing.hero.description,
};

export default function PlumbingPage() {
    return <ServicePageLayout slug="plumbing" />;
}
