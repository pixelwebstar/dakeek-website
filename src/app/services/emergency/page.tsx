import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.emergency.seo.title,
    description: serviceData.emergency.hero.description + " " + serviceData.emergency.intro.heading,
    keywords: serviceData.emergency.seo.keywords,
    openGraph: {
        title: serviceData.emergency.seo.title,
        description: serviceData.emergency.hero.description,
        images: [serviceData.emergency.details[0].image],
    }
};

export default function EmergencyServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.emergency.seo.title}
                description={serviceData.emergency.hero.description}
                image={serviceData.emergency.details[0].image}
                url="https://dakeek.ae/services/emergency"
                telephone="+971542472151"
                ratingValue="5.0"
                reviewCount="200"
                areaServed="Dubai"
            />
            <FAQSchema faqs={serviceData.emergency.seo.qna ? serviceData.emergency.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Emergency Repairs', path: '/services/emergency' }
            ]} />
            <ServicePageLayout slug="emergency" />
        </>
    );
}
