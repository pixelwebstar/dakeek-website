
import ServiceLayout from "../../../components/services/ServiceLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const service = serviceData[slug];

    if (!service) {
        return {
            title: "Service Not Found | Dakeek",
        };
    }

    return {
        title: service.seo.title,
        description: service.hero.description + " " + service.intro.heading,
        keywords: service.seo.keywords,
        openGraph: {
            title: service.seo.title,
            description: service.hero.description,
            images: [service.details[0].image],
        },
        alternates: {
            canonical: `https://dakeek.ae/services/${slug}`,
        }
    };
}

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug: slug,
    }));
}

export default async function DynamicServicePage({ params }: Props) {
    const slug = (await params).slug;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <ServiceSchema
                name={service.seo.title}
                description={service.hero.description}
                image={service.details[0].image}
                url={`https://dakeek.ae/services/${slug}`}
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
            <FAQSchema faqs={service.seo.qna ? service.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: service.hero.tag, path: `/services/${slug}` }
            ]} />
            <ServiceLayout slug={slug} />
        </>
    );
}
