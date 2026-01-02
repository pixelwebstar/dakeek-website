import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.handyman.seo.schemaType,
        "name": serviceData.handyman.seo.title,
        "image": serviceData.handyman.details[0].image,
        "description": serviceData.handyman.hero.description,
        "url": "https://dakeek.ae/services/handyman",
        "telephone": "+971542472151",
        "priceRange": "$$",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "45"
        },
        "mainEntity": serviceData.handyman.seo.qna ? serviceData.handyman.seo.qna.map(q => ({
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
            <ServicePageLayout slug="handyman" />
        </>
    );
}
