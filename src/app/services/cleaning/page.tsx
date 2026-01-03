import { serviceData } from '@/data/serviceData';
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.cleaning.seo.title,
    description: serviceData.cleaning.hero.description + " " + serviceData.cleaning.intro.heading,
    keywords: serviceData.cleaning.seo.keywords,
    openGraph: {
        title: serviceData.cleaning.seo.title,
        description: serviceData.cleaning.hero.description,
        images: [serviceData.cleaning.details[0].image],
    }
};

export default function CleaningServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.cleaning.seo.title}
                description={serviceData.cleaning.hero.description}
                image={serviceData.cleaning.details[0].image}
                url="https://dakeek.ae/services/cleaning"
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="4.9"
                reviewCount="150"
                areaServed="Dubai"
            />
            <FAQSchema faqs={serviceData.cleaning.seo.qna ? serviceData.cleaning.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Cleaning Services', path: '/services/cleaning' }
            ]} />
            <ServicePageLayout slug="cleaning" />
        </>
    );
}
