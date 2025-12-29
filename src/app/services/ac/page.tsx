import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.ac.hero.title,
    description: serviceData.ac.hero.description,
};

export default function ACServicePage() {
    return <ServicePageLayout slug="ac" />;
}
