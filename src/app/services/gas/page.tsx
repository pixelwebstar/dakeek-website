import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.gas.hero.title,
    description: serviceData.gas.hero.description,
};

export default function GasPage() {
    return <ServicePageLayout slug="gas" />;
}
