import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.electrical.hero.title,
    description: serviceData.electrical.hero.description,
};

export default function ElectricalPage() {
    return <ServicePageLayout slug="electrical" />;
}
