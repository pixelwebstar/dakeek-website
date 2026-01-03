import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.stoves.seo.title,
    description: serviceData.stoves.hero.description + " " + serviceData.stoves.intro.heading,
    keywords: serviceData.stoves.seo.keywords,
    openGraph: {
        title: serviceData.stoves.seo.title,
        description: serviceData.stoves.hero.description,
        images: [serviceData.stoves.details[0].image],
    }
};

export default function StovesServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.stoves.seo.title}
                description={serviceData.stoves.hero.description}
                image={serviceData.stoves.details[0].image}
                url="https://dakeek.ae/services/stoves"
                telephone="+971542472151"
                ratingValue="4.8"
                reviewCount="55"
                areaServed="Dubai"
            />
            <FAQSchema faqs={serviceData.stoves.seo.qna ? serviceData.stoves.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Stove Repair', path: '/services/stoves' }
            ]} />
            <ServicePageLayout slug="stoves" />
        </>
    );
}
