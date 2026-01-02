import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.ac.seo.schemaType,
        "name": serviceData.ac.seo.title,
        "image": serviceData.ac.details[0].image,
        "description": serviceData.ac.hero.description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Anzar Gallery, Al Karama",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.2532,
            "longitude": 55.3657
        },
        "url": "https://dakeek.ae/services/ac",
        "telephone": "+971542472151",
        "priceRange": "$$",
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "120"
        },
        "mainEntity": serviceData.ac.seo.qna ? serviceData.ac.seo.qna.map(q => ({
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
            <ServicePageLayout slug="ac" />
        </>
    );
}
