import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.handyman.seo.title,
    description: serviceData.handyman.hero.description + " " + serviceData.handyman.intro.heading,
    keywords: serviceData.handyman.seo.keywords,
    openGraph: {
        title: serviceData.handyman.seo.title,
        description: serviceData.handyman.hero.description,
        images: [serviceData.handyman.details[0].image],
    }
};

export default function HandymanServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.handyman.seo.title}
                description={serviceData.handyman.hero.description}
                image={serviceData.handyman.details[0].image}
                url="https://dakeek.ae/services/handyman"
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="5.0"
                reviewCount="45"
                areaServed="Dubai"
            />
            <FAQSchema faqs={serviceData.handyman.seo.qna ? serviceData.handyman.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Handyman Services', path: '/services/handyman' }
            ]} />
            <ServicePageLayout slug="handyman" />
        </>
    );
}
