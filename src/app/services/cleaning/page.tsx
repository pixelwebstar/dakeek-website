import { serviceData } from '@/data/serviceData';
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.cleaning.seo.title,
    description: serviceData.cleaning.hero.description + " " + serviceData.cleaning.intro.heading,
    keywords: serviceData.cleaning.seo.keywords,
    openGraph: {
        title: serviceData.cleaning.seo.title,
        description: serviceData.cleaning.hero.description,
        images: [serviceData.cleaning.details[0].image],
    }
};

export default function CleaningServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.cleaning.seo.schemaType,
        "name": serviceData.cleaning.seo.title,
        "image": serviceData.cleaning.details[0].image,
        "description": serviceData.cleaning.hero.description,
        "url": "https://dakeek.ae/services/cleaning",
        "telephone": "+971542472151",
        "priceRange": "$$",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        },
        "mainEntity": serviceData.cleaning.seo.qna ? serviceData.cleaning.seo.qna.map(q => ({
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
            <ServicePageLayout slug="cleaning" />
        </>
    );
}
