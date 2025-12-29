import { serviceData } from '@/data/serviceData';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: serviceData.cleaning.hero.title,
    description: serviceData.cleaning.hero.description,
};

export default function CleaningPage() {
    return <ServicePageLayout slug="cleaning" />;
}
