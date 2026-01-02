import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: serviceData.gas.seo.title,
    description: serviceData.gas.hero.description + " " + serviceData.gas.intro.heading,
    keywords: serviceData.gas.seo.keywords,
    openGraph: {
        title: serviceData.gas.seo.title,
        description: serviceData.gas.hero.description,
        images: [serviceData.gas.details[0].image],
    }
};

export default function GasServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": serviceData.gas.seo.schemaType,
        "name": serviceData.gas.seo.title,
        "image": serviceData.gas.details[0].image,
        "description": serviceData.gas.hero.description,
        "url": "https://dakeek.ae/services/gas",
        "telephone": "+971542472151",
        "areaServed": "Dubai",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "30"
        },
        "mainEntity": serviceData.gas.seo.qna ? serviceData.gas.seo.qna.map(q => ({
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
            <ServicePageLayout slug="gas" />
        </>
    );
}
