"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import ProcessStepper from "@/components/about/ProcessStepper";
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

export default function ServicesHubPage() {
    // List of services in order
    const serviceKeys = ["ac", "plumbing", "electrical", "cleaning", "gas", "stoves", "handyman", "emergency"];

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

                    <ProcessStepper steps={[
                        { id: 1, label: "You Book a Slot", description: "Choose a time that works for you. No 4-hour windows. Precise arrival times.", icon: Check, strokeWidth: 1.5 },
                        { id: 2, label: "We Assign a Master", description: "Our system picks the best technician for your specific problem, not just whoever is free.", icon: ShieldCheck, strokeWidth: 1.5 },
                        { id: 3, label: "Identity Verification", description: "You get a photo and name of who is coming before they knock. No surprises.", icon: ShieldCheck, strokeWidth: 1.5 },
                        { id: 4, label: "White-Glove Service", description: "Shoe covers on. Floor protection down. We explain everything before we start.", icon: Check, strokeWidth: 1.5 },
                        { id: 5, label: "The Follow-up", description: "We don't disappear. We check in to make sure the fix held up.", icon: Check, strokeWidth: 1.5 }
                    ]} />
                </div>
            </section>

            {/* 3. RICH CATALOG (Zig-Zag with Alternating Backgrounds) */}
            <div className="flex flex-col">
                {serviceKeys.map((slug, index) => {
                    // @ts-ignore
                    const service = serviceData[slug];
                    const isEven = index % 2 === 0;
                    const coverImage = getServiceImage(slug);

                    // Alternating Backgrounds: White vs Warm Alabaster
                    const bgClass = isEven ? "bg-white" : "bg-canvas";

                    return (
                        <section key={slug} className={`py-16 lg:py-32 px-[5vw] lg:px-[8vw] ${bgClass}`}>
                            <div className="max-w-7xl mx-auto">
                                <SectionWrapper delay={0.1}>
                                    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                        {/* VISUAL - CLICKABLE */}
                                        <Link href={`/services/${slug}`} className="w-full lg:w-1/2 relative h-[280px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 group block cursor-pointer">
                                            <Image
                                                src={coverImage}
                                                alt={service.hero.title}
                                                fill
                                                priority={index < 2}
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                                            {/* Floating Tag */}
                                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                                                    {service.id} // {service.hero.tag}
                                                </span>
                                            </div>
                                        </Link>

                                        {/* CONTENT */}
                                        <div className="w-full lg:w-1/2 space-y-8">
                                            <div>
                                                {/* TITLE - CLICKABLE */}
                                                <Link href={`/services/${slug}`} className="block group">
                                                    <h2 className="text-4xl lg:text-5xl font-serif text-ink mb-4 group-hover:text-bronze transition-colors">
                                                        {service.hero.title}
                                                    </h2>
                                                </Link>
                                                <p className="text-titanium text-lg leading-relaxed">
                                                    {service.intro.heading}
                                                </p>
                                            </div>

                                            {/* Feature List (Problem/Solution) */}
                                            <div className="space-y-4 pt-4 border-t border-structure">
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                                        <span className="text-red-500 text-xs font-bold">!</span>
                                                    </div>
                                                    <p className="text-sm text-[#888]">
                                                        <strong className="text-[#444] uppercase tracking-wider text-xs mr-2">Problem:</strong>
                                                        {slug === 'ac' ? "Leaks, noise, warm air, and high bills." :
                                                            slug === 'plumbing' ? "Hidden leaks, low pressure, blocked drains." :
                                                                slug === 'electrical' ? "Tripping breakers, sparking outlets, hazards." :
                                                                    slug === 'cleaning' ? "Dust, mold, allergens, unhygienic tanks." :
                                                                        slug === 'gas' ? "Gas smell, leaks, safety compliance issues." :
                                                                            slug === 'stoves' ? "Uneven heat, yellow flame, burner failure." :
                                                                                slug === 'emergency' ? "Floods, power outages, AC failure at night." :
                                                                                    "Broken furniture, mounting issues, odd jobs."}
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-green-600" strokeWidth={1.5} />
                                                    </div>
                                                    <p className="text-sm text-[#888]">
                                                        <strong className="text-[#444] uppercase tracking-wider text-xs mr-2">Solution:</strong>
                                                        {service.hero.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="pt-4">
                                                <Link
                                                    href={`/services/${slug}`}
                                                    className="inline-flex items-center gap-2 text-ink font-mono text-xs uppercase tracking-widest border-b border-ink pb-1 hover:text-bronze hover:border-bronze transition-all group"
                                                >
                                                    Explore {service.hero.title}
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
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
