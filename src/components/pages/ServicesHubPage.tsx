"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import { serviceData } from "@/data/serviceData";
import Image from "next/image";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import GradientHero from "@/components/hero/GradientHero";

// Helper to get the first image from details as the "Cover"
const getServiceImage = (slug: string) => {
    // @ts-ignore
    const service = serviceData[slug];
    return service?.details?.[0]?.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80";
};

export default function ServicesHubPage() {
    // List of services in order - Included 'other'
    const serviceKeys = ["ac", "plumbing", "electrical", "cleaning", "stoves", "handyman", "other", "emergency"];

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] overflow-x-hidden selection:bg-[#A18262] selection:text-white">

            {/* 1. HERO: The Standard - PLATINUM/SILVER */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E5E5E5] border-b border-[#D4D4D4]">
                <GradientHero
                    color1="#a8a29e"
                    color2="#d6d3d1"
                    initialColor="#e7e5e4"
                />

                <SectionWrapper className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#333] bg-white/50">
                        The Dakeek Standard
                    </span>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-[#111]">
                        Excellence. <br />
                        <span className="italic text-[#333]">Standardized.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#333] mb-12">
                        AC, Plumbing, Electrical, and more. One call. One team. One standard.
                    </p>
                </SectionWrapper>

                {/* Scroll Indicator - CSS animation */}
                <div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#111]/30 animate-bounce"
                >
                    <ChevronDown size={32} strokeWidth={1.5} />
                </div>
            </section>

            {/* 2. THE PROCESS (Peace of Mind) */}
            <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-[#FAFAF9] border-b border-[#E5E5E0] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <SectionWrapper className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[#111] mb-4">Peace of mind, standard.</h2>
                        <p className="text-[#333] font-light max-w-lg mx-auto">
                            We engineered a process that removes the anxiety of letting a stranger into your home.
                        </p>
                    </SectionWrapper>

                    {/* Custom Elegant Process Timeline */}
                    <ProcessTimeline />
                </div>
            </section>

            {/* 3. RICH CATALOG (Cinematic Chapters) */}
            <div className="flex flex-col bg-[#FAFAF9]">
                {serviceKeys.map((slug, index) => {
                    // @ts-ignore
                    const service = serviceData[slug];
                    const isEven = index % 2 === 0;
                    const coverImage = getServiceImage(slug);

                    // Refined colors for alternating sections with Texture
                    const bgClass = isEven ? "bg-[#FAFAF9]" : "bg-[#F5F5F4]";

                    return (
                        <section
                            key={slug}
                            className={`relative py-24 lg:py-40 px-[5vw] lg:px-[8vw] ${bgClass} overflow-hidden`}
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                            <div className="max-w-7xl mx-auto relative z-10">
                                <SectionWrapper delay={0.1}>
                                    <div className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                        {/* VISUAL - Cinematic Card */}
                                        <div
                                            className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-none overflow-hidden shadow-xl shadow-black/5 group cursor-pointer hover:scale-[1.02] transition-transform duration-700">
                                            <Link href={`/services/${slug}`} className="block w-full h-full relative">
                                                <ImageWithFallback
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
                                                    <span className="text-white font-mono text-xs uppercase tracking-[0.2em] border-b border-[#A18262] pb-1">
                                                        Discover {service.hero.title}
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* CONTENT - Editorial Layout */}
                                        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
                                            <div>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className="h-[1px] w-12 bg-[#A18262]"></span>
                                                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#A18262]">
                                                        {service.hero.tag}
                                                    </span>
                                                </div>

                                                {/* TITLE - CLICKABLE */}
                                                <Link href={`/services/${slug}`} className="block group/text">
                                                    <h2 className="text-5xl lg:text-7xl font-serif text-[#111] mb-6 leading-[0.9] group-hover/text:text-[#A18262] transition-colors duration-500">
                                                        {service.hero.title}
                                                    </h2>
                                                </Link>

                                                <p className="text-[#333] text-lg lg:text-xl font-light leading-relaxed max-w-md">
                                                    {service.intro.heading}
                                                </p>
                                            </div>

                                            {/* Feature List (Rich & Dense) */}
                                            <div className="space-y-8 pt-8 border-t border-black/5 pb-12">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-4">
                                                        <h3 className="font-mono text-xs uppercase tracking-wider text-[#333] flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                                            Common Issues
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {(slug === 'ac' ? [
                                                                "Warm air blowing", "Water leakage & drips", "Strange noises/rattling", "Bad odors/smells", "High energy bills"
                                                            ] : slug === 'plumbing' ? [
                                                                "Hidden leaks", "Low water pressure", "Blocked drains", "Water heater failure", "Burst pipes"
                                                            ] : slug === 'electrical' ? [
                                                                "Frequent tripping", "Sparking outlets", "flickering lights", "Power failure", "Faulty wiring"
                                                            ] : slug === 'cleaning' ? [
                                                                "Dust accumulation", "Mold & allergens", "Post-renovation mess", "Stained uptime", "Grease buildup"
                                                            ] : slug === 'stoves' ? [
                                                                "Uneven heating", "Burner not lighting", "Gas smell (Urgent)", "Oven not heating", "Broken knobs"
                                                            ] : slug === 'handyman' ? [
                                                                "Furniture assembly", "TV mounting", "Curtain installation", "Picture hanging", "Door alignment"
                                                            ] : slug === 'emergency' ? [
                                                                "Major floods", "Total blackout", "AC failure (Summer)", "Gas leaks", "Lockouts"
                                                            ] : [
                                                                "Custom projects", "Complex installations", "Unique repairs", "Renovations", "Special requests"
                                                            ]).map((issue, i) => (
                                                                <li key={i} className="text-sm text-[#333] font-serif italic flex items-start gap-2">
                                                                    <span className="text-xs text-red-300 mt-1">•</span> {issue}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="space-y-4 md:border-l md:border-black/5 md:pl-8 pt-8 md:pt-0 border-t border-black/5 md:border-t-0">
                                                        <h3 className="font-mono text-xs uppercase tracking-wider text-[#333] flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                            The Dakeek Fix
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {(slug === 'ac' ? [
                                                                "Coil chemical cleaning", "Gas top-up (Freon)", "Drain line flushing", "Thermostat calibration", "Duct sanitization"
                                                            ] : slug === 'plumbing' ? [
                                                                "Ultrasonic leak detect", "Pipe replacement", "Drain hydro-jetting", "Heater repair", "Pressure balancing"
                                                            ] : slug === 'electrical' ? [
                                                                "Circuit tracing", "Breaker replacement", "Load balancing", "Rewiring safety", "Socket upgrading"
                                                            ] : slug === 'cleaning' ? [
                                                                "Deep steam cleaning", "Anti-bacterial mist", "Grout scrubbing", "Tank sanitization", "Upholstery revival"
                                                            ] : slug === 'stoves' ? [
                                                                "Jet cleaning", "Igniter replacement", "Valve safety check", "Element replacement", "Thermostat fix"
                                                            ] : slug === 'handyman' ? [
                                                                "Precision mounting", "IKEA expert assembly", "Drilling & fixing", "Carpentry repairs", "Hardware install"
                                                            ] : slug === 'emergency' ? [
                                                                "60-min response", "Water extraction", "Power restoration", "Leak isolation", "Emergency secure"
                                                            ] : [
                                                                "Tailored solutions", "Project planning", "Specialist sourcing", "Custom fabrication", "End-to-end manage"
                                                            ]).map((fix, i) => (
                                                                <li key={i} className="text-sm text-[#111] font-medium flex items-start gap-2">
                                                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                                    {fix}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className="pt-2">
                                                <Link
                                                    href={`/services/${slug}`}
                                                    className="inline-flex items-center gap-3 group/btn"
                                                >
                                                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:bg-[#111] group-hover/btn:border-[#111] transition-all duration-300">
                                                        <ArrowRight className="w-5 h-5 text-[#111] group-hover/btn:text-white transition-colors" strokeWidth={1} />
                                                    </div>
                                                    <span className="font-mono text-xs uppercase tracking-widest text-[#111] group-hover/btn:text-[#A18262] transition-colors">
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
            <section className="py-24 lg:py-32 bg-[#111] text-white text-center">
                <SectionWrapper>
                    <h2 className="text-4xl lg:text-6xl font-serif italic mb-8">
                        Ready to experience the standard?
                    </h2>
                    <Link href="/contact" className="group relative px-12 py-4 bg-white text-[#111] overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl inline-block text-left">
                        <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Book a Service Now</span>
                        <div className="absolute inset-0 bg-[#A18262] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
