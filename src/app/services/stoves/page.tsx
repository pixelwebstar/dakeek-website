import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.stoves.hero.title,
    description: serviceData.stoves.hero.description,
};

export default function StovesPage() {
    return <ServicePageLayout slug="stoves" />;
}
