import ServiceLayout from "../../../../components/services/ServiceLayout";
import { serviceData } from "../../../../data/serviceData";
import { DUBAI_AREAS } from "../../../../lib/constants";
import { Metadata } from "next";
import { ServiceSchema } from "../../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../../components/schema/BreadcrumbSchema";
import { notFound } from "next/navigation";
import { getAreaDataBySlug } from "../../../../data/areaData";

interface Props {
    params: Promise<{ slug: string; area: string }>;
}

// Helper: Inject Rearch Data into Content
function localizeData(base: any, areaSlug: string) {
    if (!base) return { localized: {}, areaProfile: null }; // Crash Shield

    const areaProfile = getAreaDataBySlug(areaSlug);
    const areaName = areaProfile?.name || areaSlug.replace(/-/g, ' ');

    // Shallow copy base
    const localized = { ...base };

    // Smart Context Injection based on Area Type
    const contextPrefix = areaProfile?.type === 'villa' ? "Maintaining a villa requires expert care."
        : areaProfile?.type === 'apartment' ? "High-rise living demands strict safety standards."
            : "Expert maintenance for your property.";

    // Defensive Hero Injection
    localized.hero = {
        ...(base.hero || {}),
        title: base.hero?.title ? `${base.hero.title} in ${areaName}` : `Service in ${areaName}`,
        description: base.hero?.description ? `${areaProfile?.tagline || ''} ${base.hero.description} We are the #1 choice for ${areaName} residents.` : `Premium services for ${areaName}.`,
        tag: `Serving ${areaName}` // Override tag
    };

    // Defensive Intro Injection
    if (base.intro) {
        localized.intro = {
            ...base.intro,
            heading: base.intro.heading ? `${contextPrefix} ${base.intro.heading}` : contextPrefix,
        };
    } else {
        localized.intro = { heading: contextPrefix, stats: [] };
    }

    // Inject Area Theme (Visual Uniqueness)
    if (areaProfile?.theme?.accentColor) {
        localized.theme = {
            ...(base.theme || {}),
            hero1: areaProfile.theme.accentColor, // Override primary gradient
        };
    }

    // Defensive SEO Injection
    const baseKeywords = base.seo?.keywords || [];
    const areaKeywords = areaProfile?.seoKeywords || [];

    localized.seo = {
        ...(base.seo || {}),
        title: base.hero?.title
            ? `Best ${base.hero.title} in ${areaName} | Dakeek ${areaProfile?.type === 'villa' ? 'Villa' : ''} Services`
            : `Best Service in ${areaName} | Dakeek`,
        description: (areaProfile?.description || '') + ` Specialized ${base.hero?.title || 'Team'} team arriving in 60 mins.`,
        keywords: [...baseKeywords, ...areaKeywords]
    };

    // CRITICAL FIX: Strip 'icon' components (functions) from details to ensure JSON serializability
    // The client component (ServicePageLayout) will restore them from its local serviceData copy
    if (localized.details) {
        localized.details = localized.details.map((detail: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { icon, ...rest } = detail;
            return rest;
        });
    }

    return { localized, areaProfile };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, area } = await params;
    const baseService = serviceData[slug];

    if (!baseService) return { title: "Not Found" };

    const { localized } = localizeData(baseService, area);

    return {
        title: localized.seo.title,
        description: localized.seo.description,
        keywords: localized.seo.keywords,
        openGraph: {
            title: localized.seo.title,
            description: localized.seo.description,
            images: [baseService.details[0].image],
        },
        alternates: {
            canonical: `https://www.dakeek.ae/services/${slug}/${area}`,
        }
    };
}

export async function generateStaticParams() {
    const params = [];
    const services = Object.keys(serviceData);

    for (const slug of services) {
        for (const area of DUBAI_AREAS) {
            params.push({
                slug: slug,
                area: area.toLowerCase().replace(/ /g, '-'),
            });
        }
    }
    return params;
}

export default async function LocationLandingPage({ params }: Props) {
    const { slug, area } = await params;
    const baseService = serviceData[slug];

    if (!baseService) {
        notFound();
    }

    const { localized, areaProfile } = localizeData(baseService, area);
    const areaName = areaProfile?.name || area.replace(/-/g, ' ');

    return (
        <>
            <ServiceSchema
                name={localized.seo.title}
                description={localized.seo.description}
                image={baseService.details[0].image}
                url={`https://www.dakeek.ae/services/${slug}/${area}`}
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="4.9"
                reviewCount="120"
                address={{
                    streetAddress: `Service Team, ${areaName}`,
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
            <FAQSchema faqs={localized.seo.qna ? localized.seo.qna.map((q: any) => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: baseService.hero.tag, path: `/services/${slug}` },
                { label: areaName, path: `/services/${slug}/${area}` }
            ]} />

            <ServiceLayout data={localized} />
        </>
    );
}
