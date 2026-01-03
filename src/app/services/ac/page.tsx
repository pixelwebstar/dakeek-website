import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.ac.seo.title,
    description: serviceData.ac.hero.description + " " + serviceData.ac.intro.heading,
    keywords: serviceData.ac.seo.keywords,
    openGraph: {
        title: serviceData.ac.seo.title,
        description: serviceData.ac.hero.description,
        images: [serviceData.ac.details[0].image],
    }
};

export default function ACServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.ac.seo.title}
                description={serviceData.ac.hero.description}
                image={serviceData.ac.details[0].image}
                url="https://dakeek.ae/services/ac"
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="4.9"
                reviewCount="120"
                address={{
                    streetAddress: "Anzar Gallery, Al Karama",
                    addressLocality: "Dubai",
                    addressRegion: "Dubai",
                    postalCode: "00000",
                    addressCountry: "AE"
                }}
                geo={{
                    latitude: 25.2532,
                    longitude: 55.3657
                }}
            />
            <FAQSchema faqs={serviceData.ac.seo.qna ? serviceData.ac.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'AC Maintenance', path: '/services/ac' }
            ]} />
            <ServicePageLayout slug="ac" />
        </>
    );
}
