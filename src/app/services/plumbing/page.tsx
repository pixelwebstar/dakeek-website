import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.plumbing.seo.title,
    description: serviceData.plumbing.hero.description + " " + serviceData.plumbing.intro.heading,
    keywords: serviceData.plumbing.seo.keywords,
    openGraph: {
        title: serviceData.plumbing.seo.title,
        description: serviceData.plumbing.hero.description,
        images: [serviceData.plumbing.details[0].image],
    }
};

export default function PlumbingServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.plumbing.seo.title}
                description={serviceData.plumbing.hero.description}
                image={serviceData.plumbing.details[0].image}
                url="https://dakeek.ae/services/plumbing"
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="4.8"
                reviewCount="89"
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
            <FAQSchema faqs={serviceData.plumbing.seo.qna ? serviceData.plumbing.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Plumbing Services', path: '/services/plumbing' }
            ]} />
            <ServicePageLayout slug="plumbing" />
        </>
    );
}
