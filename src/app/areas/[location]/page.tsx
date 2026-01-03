import { serviceData } from "@/data/serviceData";
import { DUBAI_AREAS } from "@/lib/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/services/ServiceCard";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

// Generate static params for all areas
export function generateStaticParams() {
    return DUBAI_AREAS.map((area) => ({
        location: area.toLowerCase().replace(/ /g, "-"),
    }));
}

function getAreaName(slug: string) {
    const area = DUBAI_AREAS.find(a => a.toLowerCase().replace(/ /g, "-") === slug);
    return area || slug.replace(/-/g, " "); // Fallback
}

export async function generateMetadata(props: { params: Promise<{ location: string }> }): Promise<Metadata> {
    const params = await props.params;
    const areaName = getAreaName(params.location);
    return {
        title: `Home Maintenance Services in ${areaName} | Dakeek`,
        description: `Professional AC, Plumbing, and Electrical services in ${areaName}, Dubai. 60-minute emergency response for residents of ${areaName}.`,
        keywords: [`Home Maintenance ${areaName}`, `AC Repair ${areaName}`, `Plumber ${areaName}`, `Electrician ${areaName}`, "Dakeek"],
        openGraph: {
            title: `Best Home Maintenance in ${areaName}`,
            description: `Licensed & Insured Technical Services in ${areaName}. Book Now.`,
        }
    };
}

export default async function LocationPage(props: { params: Promise<{ location: string }> }) {
    const params = await props.params;
    const areaName = getAreaName(params.location);

    // If area not in list (optional, but good for validity)
    if (!DUBAI_AREAS.some(a => a.toLowerCase().replace(/ /g, "-") === params.location)) {
        notFound();
    }

    return (
        <>
            <ServiceSchema
                name={`Home Maintenance Services in ${areaName}`}
                description={`Premium home maintenance services for residents of ${areaName}.`}
                image="https://dakeek.ae/opengraph-image.png"
                areaServed={areaName}
                ratingValue="4.9"
                reviewCount="250"
            />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Areas', path: '/areas' }, // Assuming we might add an index, or just partial
                { label: areaName, path: `/areas/${params.location}` }
            ]} />

            <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24">
                <div className="container mx-auto px-[5vw] lg:px-[8vw]">
                    {/* Hero Section */}
                    <div className="mb-20 text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#111] mb-6">
                            Home Maintenance in <span className="text-[#A18262] italic">{areaName}</span>
                        </h1>
                        <p className="text-lg text-[#666] max-w-2xl mx-auto">
                            Trusted by residents of {areaName} for fast, reliable, and premium technical services.
                            From AC repair to plumbing emergencies, we are in your neighborhood.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.values(serviceData).map((service) => (
                            <ServiceCard
                                key={service.id}
                                title={service.hero.title}
                                href={`/services/${service.slug}`}
                                features={service.details.flatMap(d => d.details).slice(0, 3)}
                                image={service.details[0].image}
                            />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-24 p-12 bg-[#111] rounded-3xl text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                                Live in <span className="text-[#A18262] italic">{areaName}</span>?
                            </h2>
                            <p className="text-white/70 mb-8 max-w-xl mx-auto">
                                We have a team nearby ready to respond within 60 minutes.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-white text-black px-8 py-4 rounded-full font-mono uppercase tracking-widest hover:bg-[#A18262] hover:text-white transition-colors"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
