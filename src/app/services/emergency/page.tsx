import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.emergency.seo.title,
    description: serviceData.emergency.hero.description + " " + serviceData.emergency.intro.heading,
    keywords: serviceData.emergency.seo.keywords,
    openGraph: {
        title: serviceData.emergency.seo.title,
        description: serviceData.emergency.hero.description,
        images: [serviceData.emergency.details[0].image],
    }
};

export default function EmergencyServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.emergency.seo.schemaType,
        "name": serviceData.emergency.seo.title,
        "image": serviceData.emergency.details[0].image,
        "description": serviceData.emergency.hero.description,
        "url": "https://dakeek.ae/services/emergency",
        "telephone": "+971542472151",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "200"
        },
        "mainEntity": serviceData.emergency.seo.qna ? serviceData.emergency.seo.qna.map(q => ({
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
            <ServicePageLayout slug="emergency" />
        </>
    );
}
