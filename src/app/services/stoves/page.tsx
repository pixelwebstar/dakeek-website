import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.stoves.seo.schemaType,
        "name": serviceData.stoves.seo.title,
        "image": serviceData.stoves.details[0].image,
        "description": serviceData.stoves.hero.description,
        "url": "https://dakeek.ae/services/stoves",
        "telephone": "+971542472151",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "55"
        },
        "mainEntity": serviceData.stoves.seo.qna ? serviceData.stoves.seo.qna.map(q => ({
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
            <ServicePageLayout slug="stoves" />
        </>
    );
}
