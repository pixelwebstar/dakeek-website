import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.handyman.hero.title,
    description: serviceData.handyman.hero.description,
};

export default function HandymanServicePage() {
    return <ServicePageLayout slug="handyman" />;
}
