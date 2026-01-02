import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.plumbing.seo.schemaType,
        "name": serviceData.plumbing.seo.title,
        "image": serviceData.plumbing.details[0].image,
        "description": serviceData.plumbing.hero.description,
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
        "url": "https://dakeek.ae/services/plumbing",
        "telephone": "+971542472151",
        "priceRange": "$$",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "89"
        },
        "mainEntity": serviceData.plumbing.seo.qna ? serviceData.plumbing.seo.qna.map(q => ({
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
            <ServicePageLayout slug="plumbing" />
        </>
    );
}
