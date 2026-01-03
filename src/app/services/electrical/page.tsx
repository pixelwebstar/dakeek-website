import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.electrical.seo.title,
    description: serviceData.electrical.hero.description + " " + serviceData.electrical.intro.heading,
    keywords: serviceData.electrical.seo.keywords,
    openGraph: {
        title: serviceData.electrical.seo.title,
        description: serviceData.electrical.hero.description,
        images: [serviceData.electrical.details[0].image],
    }
};

export default function ElectricalServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.electrical.seo.title}
                description={serviceData.electrical.hero.description}
                image={serviceData.electrical.details[0].image}
                url="https://dakeek.ae/services/electrical"
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="5.0"
                reviewCount="65"
                address={{
                    streetAddress: "Anzar Gallery, Al Karama",
                    addressLocality: "Dubai",
                    addressRegion: "Dubai",
                    postalCode: "00000",
                    addressCountry: "AE"
                }}
            />
            <FAQSchema faqs={serviceData.electrical.seo.qna ? serviceData.electrical.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Electrical Services', path: '/services/electrical' }
            ]} />
            <ServicePageLayout slug="electrical" />
        </>
    );
}
