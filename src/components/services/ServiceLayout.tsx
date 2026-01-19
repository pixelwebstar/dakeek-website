"use client";

import { useEffect } from "react";
import GradientHero from "../hero/GradientHero";
import TechSpecs from "./TechSpecs";
import ServiceNavigation from "./ServiceNavigation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, ChevronDown, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { ServicePageData, serviceData } from "../../data/serviceData";
import ServiceDetailSection from "./ServiceDetailSection";

interface ServiceLayoutProps {
    data?: ServicePageData;
    slug?: string;
}

export default function ServiceLayout({ data, slug }: ServiceLayoutProps) {
    const router = useRouter();

    // Resolve Data (Client Side to avoid serialization issues)
    let pageData = data || (slug ? serviceData[slug] : null);

    // CRITICAL RESTORE: If data came from server (programmatic), it lacks icons (stripped for serialization).
    // We restore them here from the local serviceData bundle using the internal slug.
    const effectiveSlug = pageData?.slug || slug;

    if (pageData && effectiveSlug && serviceData[effectiveSlug]) {
        const original = serviceData[effectiveSlug];
        pageData = {
            ...pageData,
            details: pageData.details.map((d, i) => ({
                ...d,
                icon: d.icon || original.details[i]?.icon // Fallback to original icon
            }))
        };
    }

    // Calculate Prev/Next
    const serviceKeys = Object.keys(serviceData);
    let prevKey = "";
    let nextKey = "";

    if (pageData) {
        const currentIndex = serviceKeys.indexOf(pageData.slug);
        prevKey = serviceKeys[(currentIndex - 1 + serviceKeys.length) % serviceKeys.length];
        nextKey = serviceKeys[(currentIndex + 1) % serviceKeys.length];
    }

    // Keyboard & Swipe Navigation
    useEffect(() => {
        if (!pageData) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') router.push(`/services/${prevKey}`);
            if (e.key === 'ArrowRight') router.push(`/services/${nextKey}`);
        };

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 150) {
                router.push(`/services/${nextKey}`);
            }
            if (touchEndX > touchStartX + 150) {
                router.push(`/services/${prevKey}`);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [nextKey, prevKey, router, pageData]);

    if (!pageData) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const prevService = serviceData[prevKey];
    const nextService = serviceData[nextKey];

    return (
        <main className={`min-h-screen overflow-x-hidden selection:bg-black selection:text-white ${pageData.theme.secondaryBg}`}>

            {/* 1. Custom Hero - Full Height, Premium Typography */}
            <section className={`relative h-screen w-full flex items-center justify-center overflow-hidden ${pageData.theme.secondaryBg}`}>
                <GradientHero
                    color1={pageData.theme.hero1}
                    color2={pageData.theme.hero2}
                    initialColor={pageData.theme.hero2}
                />

                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className={`font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6 md:mb-8 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-black/5 ${pageData.theme.primaryText} bg-white/40 shadow-sm`}>
                            {pageData.hero.tag}
                        </p>
                        <h1 className={`text-6xl md:text-9xl font-serif font-medium tracking-tight mb-8 leading-[0.9] text-slate-900 drop-shadow-sm`}>
                            {pageData.hero.title}
                        </h1>
                        <p className={`text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed text-slate-700`}>
                            {pageData.hero.description}
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-slate-400"
                >
                    <ChevronDown size={32} strokeWidth={1.5} />
                </motion.div>
            </section>

            {/* 2. Introduction & Stats - Improved Spacing & Typography */}
            <section className={`w-full px-[5vw] lg:px-[8vw] py-24 lg:py-32 bg-white/60 backdrop-blur-3xl`}>
                <div className="max-w-5xl mx-auto text-center">
                    <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-8 ${pageData.theme.primaryText} opacity-70`}>
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 leading-tight max-w-4xl mx-auto">
                        {pageData.intro.heading}
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-black/5">
                        {pageData.intro.stats.map((stat, i) => (
                            <div key={i} className="group">
                                <div className={`text-4xl md:text-5xl font-serif font-medium mb-3 ${pageData.theme.primaryText}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-1">{stat.label}</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-slate-400">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services */}
            <ServiceDetailSection data={pageData} />

            {/* 3.5 Add-On Service (Optional) */}
            {pageData.addOn && (
                <section className={`py-24 lg:py-32 px-[5vw] lg:px-[8vw] ${pageData.theme.secondaryBg} relative`}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 md:order-1">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-white shadow-sm ${pageData.theme.primaryText}`}>
                                <Wind className="w-4 h-4" strokeWidth={1.5} />
                                <span>{pageData.addOn.tag}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{pageData.addOn.title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                                {pageData.addOn.description}
                            </p>
                            <ul className="space-y-4 mb-10 list-none">
                                {pageData.addOn.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700">
                                        <div className={`w-2 h-2 rounded-full ${pageData.theme.primaryBg.replace('bg-', 'bg-')}`} />
                                        <span className="text-lg font-light">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                            <Image
                                src={pageData.addOn.image}
                                alt={pageData.addOn.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* 4. Technical Specs */}
            <TechSpecs
                specs={pageData.techSpecs.grid}
                tools={pageData.techSpecs.tools}
                details={pageData.techSpecs.list}
                theme={pageData.theme}
            />

            {/* 4.5 Why Dakeek for [Service]? - Improved Card Design */}
            {pageData.uniqueBenefits && pageData.uniqueBenefits.length > 0 && (
                <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-[#FAFAF9] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply bg-[url('/images/noise.svg')] bg-repeat" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h3 className="text-3xl md:text-5xl font-serif text-[#111] mb-16 text-center">
                            Why Dakeek for <span style={{ color: pageData.theme.hero1 }}>{pageData.hero.title}</span>?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pageData.uniqueBenefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className={`w-10 h-10 flex-shrink-0 rounded-full ${pageData.theme.iconBg} flex items-center justify-center`}>
                                        <span className={`text-sm font-bold ${pageData.theme.primaryText}`}>{i + 1}</span>
                                    </div>
                                    <p className="text-[#444] text-lg leading-relaxed font-light">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4.6 Service Areas */}
            <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-white border-t border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 items-start">
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-3xl font-serif text-[#111] mb-6 leading-tight">
                                We Cover All of Dubai
                            </h3>
                            <p className="text-[#666] text-sm leading-relaxed mb-8">
                                From Palm Jumeirah to Arabian Ranches, our technicians are strategically located to reach you in under 60 minutes.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#555] transition-colors border-b border-[#111] pb-1"
                            >
                                View Full Map <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
                                {["Palm Jumeirah", "Dubai Marina", "Downtown Dubai", "Arabian Ranches", "JLT", "Business Bay", "Dubai Hills", "DIFC", "Al Barsha", "Jumeirah", "The Villa", "Mudon", "Damac Hills", "Meadows", "Springs", "Greens"].map((area, i) => (
                                    <Link
                                        key={i}
                                        href={`/areas/${area.toLowerCase().replace(/ /g, '-')}`}
                                        className="text-sm text-[#444] hover:text-[#111] transition-colors py-1 hover:translate-x-1 transform duration-300 block font-light"
                                    >
                                        {area}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4.7 Related Services */}
            {pageData.relatedServices && pageData.relatedServices.length > 0 && (
                <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-[#FAFAF9] border-t border-black/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl md:text-4xl font-serif text-[#111] mb-12">
                            Related Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {pageData.relatedServices.map((relatedSlug, i) => {
                                const related = serviceData[relatedSlug];
                                if (!related) return null;
                                return (
                                    <Link
                                        key={i}
                                        href={`/services/${relatedSlug}`}
                                        className="group p-8 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-xl transition-all text-center hover:-translate-y-1"
                                    >
                                        <span className="block text-xl font-serif text-[#111] group-hover:text-[#5A4A32] transition-colors mb-2">
                                            {related.hero.title}
                                        </span>
                                        <span className="text-xs uppercase tracking-widest text-[#888]">{related.hero.tag}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Trust & Promise (Premium White) */}
            <section className={`w-full px-[5vw] lg:px-[8vw] py-24 lg:py-32 relative overflow-hidden bg-white border-t border-structure`}>
                <div className="absolute inset-0 w-full h-full opacity-[0.03] bg-[url('/images/noise.svg')] pointer-events-none mix-blend-multiply"></div>

                <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className={`p-6 rounded-full bg-white border border-black/5 mb-10 shadow-2xl`}>
                        <ShieldCheck className={`w-16 h-16 ${pageData.theme.primaryText}`} strokeWidth={1} />
                    </div>

                    <h3 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tight">The Dakeek Guarantee</h3>
                    <p className="text-xl md:text-3xl font-light text-slate-600 max-w-3xl mb-16 leading-relaxed">
                        We don&apos;t just fix it; we certify it. Every service comes with a <span className="font-medium text-slate-900">full warranty</span> and a direct line to our support team.
                    </p>

                    <div>
                        <Link href="/contact" className="group relative px-12 py-5 bg-black text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                            <span className="relative z-10 font-mono uppercase tracking-widest text-sm font-bold">
                                Book Now
                            </span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out ${pageData.theme.primaryBg}`} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. Navigation */}
            <div>
                <ServiceNavigation
                    prev={{ id: prevService.slug, name: prevService.hero.title }}
                    next={{ id: nextService.slug, name: nextService.hero.title }}
                    theme={pageData.theme}
                />
            </div>
        </main>
    );
}
