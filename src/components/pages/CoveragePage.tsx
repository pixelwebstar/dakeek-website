"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowRight, Search, Building2, Home } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import GradientHero from "@/components/hero/GradientHero";
import { DUBAI_AREAS } from "@/lib/constants";

export default function CoveragePage() {
    // Group areas for better display (Mock grouping or just displaying all elegantly)
    // For now, we will display them in a sophisticated grid.

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] overflow-x-hidden selection:bg-[#C4A67C] selection:text-white">

            {/* 1. HERO: Coverage (Silver/White) */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#E5E5E5] border-b border-[#D4D4D4]">
                <GradientHero
                    color1="#D6D3D1"
                    color2="#F5F5F4"
                    initialColor="#E7E5E4"
                />

                <SectionWrapper className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#333] bg-white/50">
                        Operational Areas
                    </span>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-[#111]">
                        Coverage.
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#333] mb-12 uppercase tracking-widest">
                        Serving Dubai&apos;s Finest Communities
                    </p>

                    <div className="flex justify-center gap-4 animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Check Availability</span>
                            <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                    </div>
                </SectionWrapper>
            </section>

            {/* 2. INTERACTIVE MAP CONCEPT (Stylized) */}
            <section className="py-24 px-[5vw] lg:px-[8vw] bg-white border-b border-[#E5E5E5] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#6B5344]">The Radius</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-8 leading-tight">
                            We are where <br />
                            <span className="text-[#999]">you live.</span>
                        </h2>
                        <p className="text-lg text-[#555] font-light leading-relaxed mb-8 max-w-md">
                            From the waterfront villas of Palm Jumeirah to the serene streets of Arabian Ranches.
                            Our technicians are stationed strategically across Dubai to ensure rapid response times.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FAFAF9] rounded-xl border border-[#E5E5E5]">
                                    <Navigation className="w-6 h-6 text-[#C4A67C]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-serif mb-1">Rapid Dispatch</h3>
                                    <p className="text-xs font-mono uppercase tracking-widest text-[#888]">Avg. Arrival: 60 Mins</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FAFAF9] rounded-xl border border-[#E5E5E5]">
                                    <MapPin className="w-6 h-6 text-[#C4A67C]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-serif mb-1">Local & Licensed</h3>
                                    <p className="text-xs font-mono uppercase tracking-widest text-[#888]">Knowledgeable Experts</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stylized Map Visual */}
                    <div className="relative h-[500px] bg-[#F5F5F4] rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-lg group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231267.6667957723!2d55.13847525287889!3d25.074360667364306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1705663678082!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(90%)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="bg-stone-200"
                        ></iframe>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Cards (Decorative) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-xl"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#C4A67C] mb-1">Headquarters</div>
                                    <div className="font-serif text-lg">Al Karama, Dubai</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white">
                                    <Building2 className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. COMMUNITIES GRID */}
            <section className="py-24 px-[5vw] lg:px-[8vw] bg-[#FAFAF9]">
                <SectionWrapper className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#111] mb-6">Serviceable Areas</h2>
                    <p className="text-[#555] font-light max-w-2xl mx-auto">
                        We currently provide comprehensive maintenance services to the following residential communities.
                    </p>
                </SectionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {DUBAI_AREAS.map((area, index) => {
                        const areaSlug = area.toLowerCase().replace(/ /g, '-');
                        return (
                            <Link
                                href={`/areas/${areaSlug}`}
                                key={index}
                                className="group p-6 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#C4A67C] hover:shadow-lg transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#FAFAF9] flex items-center justify-center group-hover:bg-[#C4A67C]/10 transition-colors">
                                        <Home className="w-4 h-4 text-[#999] group-hover:text-[#C4A67C] transition-colors" />
                                    </div>
                                    <span className="font-medium text-[#333] group-hover:text-[#111] transition-colors">{area}</span>
                                </div>

                                <ArrowRight className="w-4 h-4 text-[#E5E5E5] group-hover:text-[#C4A67C] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </Link>
                        );
                    })}
                </div>

                {/* No Result Fallback */}
                <div className="mt-16 p-8 lg:p-12 bg-[#F5F5F4] rounded-2xl border border-[#E5E5E5] text-center max-w-3xl mx-auto">
                    <div className="w-12 h-12 mx-auto bg-[#E5E5E5] rounded-full flex items-center justify-center mb-6">
                        <Search className="w-6 h-6 text-[#666]" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#111] mb-2">Don&apos;t see your area?</h3>
                    <p className="text-[#555] mb-8 font-light">
                        We are expanding rapidly. Contact our dispatch team to check if we can service your specialized request.
                    </p>
                    <Link href="/contact" className="inline-block text-xs font-mono uppercase tracking-[0.2em] border-b border-[#C4A67C] pb-1 hover:text-[#C4A67C] transition-colors">
                        Contact Support
                    </Link>
                </div>
            </section>

        </main>
    );
}
