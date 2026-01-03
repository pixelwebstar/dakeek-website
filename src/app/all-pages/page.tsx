import { serviceData, DUBAI_AREAS } from "@/data/serviceData";
import Link from "next/link";

export default function HTMLSitemap() {
    return (
        <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24 px-[5vw] lg:px-[8vw]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif font-medium text-[#111] mb-12">All Pages Sitemap</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Main & Services */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-mono uppercase tracking-widest text-[#A18262] mb-6">Main Navigation</h2>
                            <ul className="space-y-3">
                                <li><Link href="/" className="hover:text-[#A18262] transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-[#A18262] transition-colors">About Us</Link></li>
                                <li><Link href="/services" className="hover:text-[#A18262] transition-colors">Services Hub</Link></li>
                                <li><Link href="/queries" className="hover:text-[#A18262] transition-colors">Queries (FAQ)</Link></li>
                                <li><Link href="/contact" className="hover:text-[#A18262] transition-colors">Contact</Link></li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-mono uppercase tracking-widest text-[#A18262] mb-6">Our Services</h2>
                            <ul className="space-y-3">
                                {Object.values(serviceData).map((service) => (
                                    <li key={service.id}>
                                        <Link href={`/services/${service.slug}`} className="hover:text-[#A18262] transition-colors">
                                            {service.hero.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Location Pages */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-mono uppercase tracking-widest text-[#A18262] mb-6">Service Area Pages ({DUBAI_AREAS.length})</h2>
                            <ul className="grid grid-cols-1 gap-2 text-sm text-[#666]">
                                {DUBAI_AREAS.map((area) => {
                                    const slug = area.toLowerCase().replace(/ /g, "-");
                                    return (
                                        <li key={slug}>
                                            <Link href={`/areas/${slug}`} className="hover:text-[#A18262] transition-colors block py-1 border-b border-black/5">
                                                Home Maintenance in {area}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
