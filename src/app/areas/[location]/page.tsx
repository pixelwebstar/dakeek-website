import { serviceData } from "@/data/serviceData";
import { DUBAI_AREAS } from "@/lib/constants";
import { getAreaDataBySlug, AREA_DATA } from "@/data/areaData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/services/ServiceCard";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import Link from "next/link";
import { MapPin, Clock, Shield, Phone } from "lucide-react";

// Generate static params for all areas
export function generateStaticParams() {
    return DUBAI_AREAS.map((area) => ({
        location: area.toLowerCase().replace(/ /g, "-"),
    }));
}

function getAreaName(slug: string) {
    const area = DUBAI_AREAS.find(a => a.toLowerCase().replace(/ /g, "-") === slug);
    return area || slug.replace(/-/g, " ");
}

export async function generateMetadata(props: { params: Promise<{ location: string }> }): Promise<Metadata> {
    const params = await props.params;
    const areaName = getAreaName(params.location);
    const areaData = getAreaDataBySlug(params.location);
    const keywords = areaData?.seoKeywords || [`Home Maintenance ${areaName}`, `AC Repair ${areaName}`, `Plumber ${areaName}`];

    return {
        title: `Home Maintenance Services in ${areaName} | Dakeek`,
        description: areaData?.description || `Professional AC, Plumbing, and Electrical services in ${areaName}, Dubai. 60-minute emergency response for residents of ${areaName}.`,
        keywords: keywords,
        openGraph: {
            title: `Best Home Maintenance in ${areaName}`,
            description: `Licensed & Insured Technical Services in ${areaName}. Book Now.`,
        }
    };
}

export default async function LocationPage(props: { params: Promise<{ location: string }> }) {
    const params = await props.params;
    const areaName = getAreaName(params.location);
    const areaData = getAreaDataBySlug(params.location);

    // If area not in list
    if (!DUBAI_AREAS.some(a => a.toLowerCase().replace(/ /g, "-") === params.location)) {
        notFound();
    }

    // Default theme fallback
    const accentColor = areaData?.theme.accentColor || "#A18262";

    return (
        <>
            <ServiceSchema
                name={`Home Maintenance Services in ${areaName}`}
                description={areaData?.description || `Premium home maintenance services for residents of ${areaName}.`}
                image="https://dakeek.ae/opengraph-image.png"
                areaServed={areaName}
                ratingValue="4.9"
                reviewCount="250"
            />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Areas', path: '/areas' },
                { label: areaName, path: `/areas/${params.location}` }
            ]} />

            <main className="min-h-screen bg-[#FAFAF9] pt-24 pb-24">
                {/* Hero Section with unique theme */}
                <section className="relative py-24 px-[5vw] lg:px-[8vw] bg-[#111] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 30% 50%, ${accentColor}, transparent 70%)` }} />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <MapPin className="w-5 h-5" style={{ color: accentColor }} />
                            <span className="font-mono text-xs uppercase tracking-widest text-white/70">Service Area</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-medium mb-6">
                            Home Maintenance in <span className="italic" style={{ color: accentColor }}>{areaName}</span>
                        </h1>
                        {areaData?.tagline && (
                            <p className="text-2xl font-light text-white/80 mb-6">{areaData.tagline}</p>
                        )}
                        <p className="text-lg text-white/60 max-w-2xl">
                            {areaData?.description || `Trusted by residents of ${areaName} for fast, reliable, and premium technical services. From AC repair to plumbing emergencies, we are in your neighborhood.`}
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-[5vw] lg:px-[8vw]">
                    {/* Quick Stats */}
                    <section className="py-16 flex flex-wrap justify-center gap-12 border-b border-black/5">
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6" style={{ color: accentColor }} />
                            <div>
                                <span className="text-2xl font-serif text-[#111]">60 min</span>
                                <span className="block text-xs font-mono uppercase text-[#666]">Response Time</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="w-6 h-6" style={{ color: accentColor }} />
                            <div>
                                <span className="text-2xl font-serif text-[#111]">30 Days</span>
                                <span className="block text-xs font-mono uppercase text-[#666]">Warranty</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6" style={{ color: accentColor }} />
                            <div>
                                <span className="text-2xl font-serif text-[#111]">24/7</span>
                                <span className="block text-xs font-mono uppercase text-[#666]">Availability</span>
                            </div>
                        </div>
                    </section>

                    {/* Landmarks (if available) */}
                    {areaData?.landmarks && areaData.landmarks.length > 0 && (
                        <section className="py-12 border-b border-black/5">
                            <p className="text-center text-sm text-[#666]">
                                <span className="font-mono uppercase tracking-wider">Near: </span>
                                {areaData.landmarks.join(" • ")}
                            </p>
                        </section>
                    )}

                    {/* Services Grid */}
                    <section className="py-20">
                        <h2 className="text-3xl font-serif text-[#111] mb-12 text-center">
                            Our Services in <span className="italic" style={{ color: accentColor }}>{areaName}</span>
                        </h2>
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
                    </section>

                    {/* CTA */}
                    <div className="py-16 p-12 rounded-3xl text-center relative overflow-hidden" style={{ backgroundColor: accentColor }}>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                                Ready for Help in <span className="italic">{areaName}</span>?
                            </h2>
                            <p className="text-white/80 mb-8 max-w-xl mx-auto">
                                Our team is standing by to respond within 60 minutes.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-black px-8 py-4 rounded-full font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>

                    {/* Other Areas */}
                    <section className="py-20">
                        <h3 className="text-xl font-serif text-[#111] mb-8 text-center">We Also Serve</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {AREA_DATA.filter(a => a.slug !== params.location && a.featured).slice(0, 8).map((area) => (
                                <Link
                                    key={area.slug}
                                    href={`/areas/${area.slug}`}
                                    className="px-4 py-2 text-sm bg-white text-[#555] rounded-full border border-black/5 hover:bg-[#111] hover:text-white transition-colors"
                                >
                                    {area.name}
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

