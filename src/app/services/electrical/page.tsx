import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.electrical.seo.schemaType,
        "name": serviceData.electrical.seo.title,
        "image": serviceData.electrical.details[0].image,
        "description": serviceData.electrical.hero.description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Anzar Gallery, Al Karama",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
        },
        "url": "https://dakeek.ae/services/electrical",
        "telephone": "+971542472151",
        "priceRange": "$$",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "65"
        },
        "mainEntity": serviceData.electrical.seo.qna ? serviceData.electrical.seo.qna.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        })) : []
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePageLayout slug="electrical" />
        </>
    );
}
