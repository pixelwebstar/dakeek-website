"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import dynamic from "next/dynamic";
import { serviceData } from "@/data/serviceData";
import Image from "next/image";

const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#F3F4F6]" />,
});

// Helper to get the first image from details as the "Cover"
const getServiceImage = (slug: string) => {
    // @ts-ignore
    const service = serviceData[slug];
    return service?.details?.[0]?.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80";
};

const PROCESS_STEPS = [
    {
        title: "You Book a Slot",
        desc: "Choose a time that works for you. No 4-hour windows. Precise arrival times.",
        img: "https://images.unsplash.com/photo-1507914372817-549929d8b761?auto=format&fit=crop&q=80"
    },
    {
        title: "We Assign a Master",
        desc: "Our system picks the best technician for your specific problem, not just whoever is free.",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd90f9?auto=format&fit=crop&q=80"
    },
    {
        title: "Identity Verification",
        desc: "You get a photo and name of who is coming before they knock. No surprises.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80"
    },
    {
        title: "White-Glove Service",
        desc: "Shoe covers on. Floor protection down. We explain everything before we start.",
        img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80"
    },
    {
        title: "The Follow-up",
        desc: "We don't disappear. We check in to make sure the fix held up.",
        img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
    }
];

export default function ServicesHubPage() {
    // List of services in order
    const serviceKeys = ["ac", "plumbing", "electrical", "cleaning", "stoves", "handyman", "emergency"];

    return (
        <main className="min-h-screen bg-canvas text-ink overflow-x-hidden selection:bg-bronze selection:text-white">

            {/* 1. HERO: The Standard - PLATINUM/SILVER */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E2E8F0] border-b border-structure">
                <HyperHero
                    color1="#94A3B8" // Slate 400 (Technical/Cool)
                    color2="#E2E8F0" // Slate 200
                    initialColor="#E2E8F0"
                />

                <SectionWrapper className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                        The Dakeek Standard
                    </span>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink">
                        Excellence. <br />
                        <span className="italic text-titanium">Standardized.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12">
                        500 hours of training. Fully employed technicians. 30-day guarantee.
                    </p>
                </SectionWrapper>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#111]/30"
                >
                    <ChevronDown size={32} strokeWidth={1.5} />
                </motion.div>
            </section>

            {/* 2. THE PROCESS (Peace of Mind) */}
            <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-white border-b border-structure">
                <div className="max-w-5xl mx-auto">
                    <SectionWrapper className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-ink mb-4">Peace of mind, standard.</h2>
                        <p className="text-titanium font-light max-w-lg mx-auto">
                            We engineered a process that removes the anxiety of letting a stranger into your home.
                        </p>
                    </SectionWrapper>

                    {/* Custom Elegant Process Timeline */}
                    {/* Custom Elegant Process Timeline */}
                    <ProcessTimeline steps={PROCESS_STEPS} />
                </div>
            </section>

            {/* 3. RICH CATALOG (Cinematic Chapters) */}
            <div className="flex flex-col bg-stone-50">
                {serviceKeys.map((slug, index) => {
                    // @ts-ignore
                    const service = serviceData[slug];
                    const isEven = index % 2 === 0;
                    const coverImage = getServiceImage(slug);

                    // Refined colors for alternating sections
                    const bgClass = isEven ? "bg-[#FAFAF9]" : "bg-white";

                    return (
                        <section
                            key={slug}
                            className={`relative py-24 lg:py-40 px-[5vw] lg:px-[8vw] ${bgClass} overflow-hidden`}
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none mix-blend-multiply" />

                            <div className="max-w-7xl mx-auto relative z-10">
                                <SectionWrapper delay={0.1}>
                                    <div className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                        {/* VISUAL - Cinematic Card */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-none overflow-hidden shadow-2xl shadow-black/5 group cursor-pointer"
                                        >
                                            <Link href={`/services/${slug}`} className="block w-full h-full relative">
                                                <Image
                                                    src={coverImage}
                                                    alt={service.hero.title}
                                                    fill
                                                    priority={index < 2}
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                                />
                                                {/* Cinematic Vignette */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-60 transition-opacity duration-700 group-hover:opacity-40" />

                                                {/* Floating Elegant Badge */}
                                                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
                                                    <span className="font-serif italic text-xl text-white">
                                                        No. {service.id}
                                                    </span>
                                                </div>

                                                {/* Bottom Floating Title for Impact */}
                                                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                    <span className="text-white font-mono text-xs uppercase tracking-[0.2em] border-b border-bronze pb-1">
                                                        Discover {service.hero.title}
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>

                                        {/* CONTENT - Editorial Layout */}
                                        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
                                            <div>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className="h-[1px] w-12 bg-bronze"></span>
                                                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-bronze">
                                                        {service.hero.tag}
                                                    </span>
                                                </div>

                                                {/* TITLE - CLICKABLE */}
                                                <Link href={`/services/${slug}`} className="block group/text">
                                                    <h2 className="text-5xl lg:text-7xl font-serif text-ink mb-6 leading-[0.9] group-hover/text:text-bronze transition-colors duration-500">
                                                        {service.hero.title}
                                                    </h2>
                                                </Link>

                                                <p className="text-titanium text-lg lg:text-xl font-light leading-relaxed max-w-md">
                                                    {service.intro.heading}
                                                </p>
                                            </div>

                                            {/* Feature List (Elegant) */}
                                            <div className="space-y-6 pt-8 border-t border-black/5">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <h4 className="font-mono text-xs uppercase tracking-wider text-black/40">The Issue</h4>
                                                        <p className="text-sm text-stone-600 font-serif italic">
                                                            {slug === 'ac' ? "Leaks, noise, warm air." :
                                                                slug === 'plumbing' ? "Hidden leaks, pressure loss." :
                                                                    slug === 'electrical' ? "Tripping, sparking hazards." :
                                                                        slug === 'cleaning' ? "Dust, allergens, grime." :
                                                                            slug === 'stoves' ? "Uneven heat, burner failure." :
                                                                                slug === 'emergency' ? "Floods, power failures." :
                                                                                    "Broken parts, assembly needs."}
                                                        </p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h4 className="font-mono text-xs uppercase tracking-wider text-black/40">The Fix</h4>
                                                        <p className="text-sm text-ink flex items-start gap-2">
                                                            <Check className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                                                            {service.hero.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className="pt-2">
                                                <Link
                                                    href={`/services/${slug}`}
                                                    className="inline-flex items-center gap-3 group/btn"
                                                >
                                                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:bg-ink group-hover/btn:border-ink transition-all duration-300">
                                                        <ArrowRight className="w-5 h-5 text-ink group-hover/btn:text-white transition-colors" strokeWidth={1} />
                                                    </div>
                                                    <span className="font-mono text-xs uppercase tracking-widest text-ink group-hover/btn:text-bronze transition-colors">
                                                        View Details
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </SectionWrapper>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* 4. FOOTER CTA */}
            <section className="py-24 lg:py-32 bg-ink text-white text-center">
                <SectionWrapper>
                    <h2 className="text-4xl lg:text-6xl font-serif italic mb-8">
                        Ready to experience the standard?
                    </h2>
                    <Link href="/contact" className="group relative px-12 py-4 bg-white text-ink overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl inline-block text-left">
                        <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Book a Service Now</span>
                        <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
