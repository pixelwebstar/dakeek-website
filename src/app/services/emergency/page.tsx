import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.emergency.hero.title,
    description: serviceData.emergency.hero.description,
};

export default function EmergencyPage() {
    return <ServicePageLayout slug="emergency" />;
}
