"use client";
// HMR Trigger

import { IconAC, IconElectrical, IconPlumbing, IconStoves, IconEmergency, IconCleaning, IconHandyman, IconOther } from "@/components/services/ServiceIcons";
import { ShieldCheck, HeartHandshake, Sparkles, Award, Clock, UserCheck, Home } from "lucide-react";
import Balancer from "react-wrap-balancer";

import Link from "next/link";
import React, { useRef, useState } from "react";

import dynamic from "next/dynamic";
import GradientHero from "@/components/hero/GradientHero";
import ServiceCard from "@/components/services/ServiceCard";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import BackgroundLoader from "@/components/shared/BackgroundLoader";

// Lazy load InstallModal - rarely used, saves ~10KB from critical path
const InstallModal = dynamic(
    () => import("@/components/shared/InstallModal"),
    { ssr: false }
);


export default function HomePage() {
    const container = useRef(null);
    const { install, isIOS } = usePWAInstall();
    const [showInstallModal, setShowInstallModal] = useState(false);

    const handleInstallClick = async () => {
        const outcome = await install();
        if (outcome === "IOS_INSTRUCTION_NEEDED" || outcome === "INSTALL_UNAVAILABLE") {
            setShowInstallModal(true);
        }
    };

    return (
        <main ref={container} className="relative min-h-screen w-full selection:bg-[#C4A67C] selection:text-white premium-bg text-ink overflow-x-hidden">

            <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-canvas">
                <GradientHero
                    color1="#9CA3AF"
                    color2="#E5E7EB"
                    initialColor="#E5E7EB"
                />

                <BackgroundLoader />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="flex flex-col items-center">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                            Residential & Commercial Services
                        </span>
                        <span className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink animate-hero-fade block" style={{ animationDelay: '0s' }}>
                            <Balancer>Dakeek</Balancer>
                        </span>
                        <span className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12 uppercase tracking-widest animate-hero-fade block" style={{ animationDelay: '0.3s' }}>
                            <Balancer>TECHNICAL SERVICES CO. L.L.C</Balancer>
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Book Now</span>
                            <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-ink rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Explore Services
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-[#999] animate-bounce">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>


            </section>

            {/* 2. SOCIAL PROOF: General Trust */}
            <section className="w-full border-b border-structure bg-white py-4 overflow-hidden flex items-center">
                <div className="flex gap-8 md:gap-16 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#6B5344] animate-ticker">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-8 md:gap-16">
                            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} /> RESIDENTIAL & COMMERCIAL</span>
                            <span className="flex items-center gap-2"><UserCheck className="w-3.5 h-3.5" strokeWidth={1.5} /> TRUSTED EXPERTS</span>
                            <span className="flex items-center gap-2"><Home className="w-3.5 h-3.5" strokeWidth={1.5} /> TECHNICAL SERVICES</span>
                            <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" strokeWidth={1.5} /> 24/7 SUPPORT</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. PHILOSOPHY: The Manifesto - Enhanced Edition */}
            <section className="relative px-[5vw] lg:px-[8vw] py-20 lg:py-28 border-b border-[#333] bg-[#111] text-white overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header with Typewriter Effect */}
                    <div className="text-center mb-16">
                        <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-6">
                            Who We Are
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight max-w-4xl mx-auto mb-8">
                            <Balancer>
                                Your Property, Our Priority.
                            </Balancer>
                        </h2>
                        <p className="text-lg md:text-xl text-[#CCC] font-light max-w-3xl mx-auto leading-relaxed">
                            Dakeek provides premium technical support for homeowners and businesses alike. Whether it’s a family villa or a busy restaurant, we ensure your systems run perfectly.
                        </p>
                    </div>

                    {/* Three Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                        {/* Pillar 1: Precision */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">01</span>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Precision</h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                &quot;Dakeek&quot; means precise in Arabic. We diagnose accurately, quote fairly, and execute flawlessly. No guesswork. No surprises.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Accurate</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Exact</span>
                            </div>
                        </div>

                        {/* Pillar 2: Discretion */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">02</span>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Respect</h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                We respect your home and your privacy. Our technicians arrive on time, work quietly, and clean up before they leave.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Private</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Respectful</span>
                            </div>
                        </div>

                        {/* Pillar 3: Excellence */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">03</span>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Excellence</h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                Our licensed technicians use quality materials and proven methods. We get it right the first time, so you don&apos;t have to call twice.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Quality</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Premium</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Statement */}
                    <div className="text-center pt-8 border-t border-[#333]">
                        <p className="font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">Our Commitment</p>
                        <p className="text-lg md:text-xl text-[#CCC] font-light max-w-2xl mx-auto leading-relaxed">
                            Licensed professionals, transparent pricing, and guaranteed precision. This is the Dakeek standard.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. THE COLLECTION (Formerly Matrix) - Restored from v2.0 */}
            <section id="services" className="w-full px-[5vw] lg:px-[8vw] py-8 lg:py-12 space-y-8 bg-[#FAFAF9]">
                <div className="flex justify-between items-end border-b border-[#E5E5E5] pb-8">
                    <div>
                        <span className="block font-mono text-xs text-[#6B5344] uppercase tracking-[0.2em] mb-4">The Scope</span>
                        <h2 className="text-4xl font-serif text-[#111]">Our Services</h2>
                    </div>
                    <Link href="/services" className="text-xs font-mono text-[#333] hover:text-[#111] transition-colors uppercase tracking-widest">Full Specifications</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "AC\nServices",
                            href: "/services/ac",
                            icon: IconAC,
                            image: "/images/services/ac.png",
                            features: ["Repair & Maintenance", "Duct Cleaning", "AMC Contracts"],
                            seoTitle: "AC services for homes and businesses in Dubai"
                        },
                        {
                            title: "Plumbing\nServices",
                            href: "/services/plumbing",
                            icon: IconPlumbing,
                            image: "/images/services/plumbing.png",
                            features: ["Leak Detection", "Water Heaters", "Grease Traps"],
                            seoTitle: "Residential and commercial plumbing services"
                        },
                        {
                            title: "Electrical\nServices",
                            href: "/services/electrical",
                            icon: IconElectrical,
                            image: "/images/services/electrical.png",
                            features: ["Safety Inspections", "Lighting", "3-Phase Power"],
                            seoTitle: "Electrical maintenance for properties in Dubai"
                        },
                        {
                            title: "Cleaning\nServices",
                            href: "/services/cleaning",
                            icon: IconCleaning,
                            image: "/images/services/cleaning.png",
                            features: ["Deep Cleaning", "Water Tanks", "Duct Sanitization"],
                            seoTitle: "Deep cleaning and sanitization services"
                        },
                        {
                            title: "Gas & Cookers\nServices",
                            href: "/services/stoves",
                            icon: IconStoves,
                            image: "/images/services/stoves.png",
                            features: ["Cooker Repair", "Gas Lines", "Commercial Burners"],
                            seoTitle: "Gas stove repair and pipeline services"
                        },
                        {
                            title: "Handyman\nServices",
                            href: "/services/handyman",
                            icon: IconHandyman,
                            image: "/images/services/handyman_final.png",
                            features: ["Mounting & Assembly", "General Repairs", "Shop Fit-out"],
                            seoTitle: "Handyman and fit-out services for all properties"
                        },
                        {
                            title: "AMC\nContracts",
                            href: "/services/amc",
                            icon: IconOther,
                            image: "/images/services/other_final.png",
                            features: ["Home Packages", "Business Support", "Preventive Care"],
                            variant: "other",
                            seoTitle: "Annual maintenance contracts for Dubai properties"
                        },
                        {
                            title: "Emergency\nServices",
                            href: "/services/emergency",
                            icon: IconEmergency,
                            image: "/images/services/emergency_final.png",
                            features: ["24/7 Response", "Power Outage", "Water Leaks"],
                            variant: "emergency",
                            seoTitle: "24/7 emergency maintenance services"
                        }
                    ].map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            href={service.href}
                            icon={service.icon}
                            image={service.image}
                            features={service.features}
                            variant={service.variant as "default" | "emergency" | "other" | undefined}
                            seoTitle={service.seoTitle}
                        />
                    ))}
                </div>
            </section>

            {/* 5. INDUSTRIES WE SERVE - CLEAN TEXTUAL (Dark) */}
            <section className="w-full bg-[#050505] text-white py-20 lg:py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-4">
                                Sectors
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-light leading-none">
                                Serving All Spaces
                            </h2>
                        </div>
                        <p className="text-[#666] max-w-sm text-sm md:text-base leading-relaxed">
                            Specialized technical support for Dubai's most demanding environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {[
                            "Private Villas",
                            "Luxury Apartments",
                            "Restaurants & Cafes",
                            "Retail Showrooms",
                            "Corporate Offices",
                            "Property Management",
                            "Fitness Centers",
                            "Salons & Spas"
                        ].map((industry, i) => (
                            <div key={i} className="group flex items-center gap-4 cursor-default">
                                <span className="text-[#333] font-mono text-sm group-hover:text-[#C4A67C] transition-colors">0{i + 1}</span>
                                <h3 className="text-xl md:text-2xl font-serif text-[#CCC] group-hover:text-white transition-colors">
                                    {industry}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: LIGHT THEME BRIDGE (The Dakeek Standard) */}
            <section className="w-full bg-[#F5F5F0] text-[#111] py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block font-mono text-xs text-slate-500 uppercase tracking-[0.3em] mb-6">
                            The Standard
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                            Licensed.<br />Certified.<br />Transparent.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                            We bridge the gap between freelance handymen and corporate facility management. Professional, compliant, and always accountable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: "Municipality Certified", desc: "Fully compliant with Dubai regulations." },
                            { title: "Priority Response", desc: "Rapid deployment for emergencies." },
                            { title: "Transparent Pricing", desc: "No hidden costs. Detailed quotations." },
                            { title: "Warranty Assured", desc: "30-day service guarantee on all jobs." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                                <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. HOW IT WORKS */}

            {/* 6. HOW IT WORKS (Human Process) - Matching Philosophy Design */}
            <section className="relative w-full bg-[#111] text-white py-8 lg:py-12 border-b border-[#333] overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-6">
                            How it Works
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light">
                            Simplicity Itself.
                        </h2>
                    </div>

                    {/* Three Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Step 01 */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">01</span>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Connect</h3>
                            <p className="text-[#999] text-sm leading-relaxed">
                                Tell us what you need. A dedicated coordinator will listen and arrange everything clearly.
                            </p>
                        </div>

                        {/* Step 02 */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">02</span>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Restore</h3>
                            <p className="text-[#999] text-sm leading-relaxed">
                                We arrive on time, fix the issue quietly, and clean up afterwards.
                            </p>
                        </div>

                        {/* Step 03 */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">03</span>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Relax</h3>
                            <p className="text-[#999] text-sm leading-relaxed">
                                Your home is back to normal. We provide a full report so you can have complete peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 7. THE PROMISE (Guarantee) & CTA */}
            <section className="w-full bg-[#FAFAF9] px-[5vw] lg:px-[8vw] py-16 lg:py-24 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-[#E5E5E5]">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111]">The Dakeek Promise.</h2>
                    <p className="text-xl font-light text-[#444] leading-relaxed mb-8">
                        If the issue returns within 30 days, so do we. <br />
                        <span className="text-[var(--color-bronze)] font-medium">Free of charge.</span> No questions asked.
                    </p>
                </div>

                <Link href="/contact" className="group relative px-10 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
                    <span className="relative z-10 font-mono text-xs uppercase tracking-[0.2em] font-medium">Book Now</span>
                    <div className="absolute inset-0 bg-[#5A4A32] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                </Link>
            </section>

            {/* 8. DIGITAL & INSIGHTS (Dark Theme - Professional/Elegant) */}
            <section className="relative w-full bg-[#0A0A0A] text-white py-20 lg:py-28 overflow-hidden">
                {/* Subtle ambient light effect */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5A4A32] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-[5vw] lg:px-[8vw] grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: The App (Value Proposition) */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-4">
                                Intelligent Living
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif italic font-light leading-tight mb-6">
                                Control at your fingertips.
                            </h2>
                            <p className="text-[#999] text-lg font-light leading-relaxed max-w-md">
                                Streamline your service requests and track real-time progress.
                                <span className="block mt-4 text-white">
                                    Exclusive <span className="text-[#C4A67C]">10% privilege</span> for all app bookings.
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {/* Apple Store Button - White on Dark */}
                            <a href="#" onClick={handleInstallClick} className="flex items-center gap-4 px-8 py-4 bg-white text-[#000] rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl group">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-full h-full"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download for</div>
                                    <div className="font-sans font-bold leading-none text-xl tracking-tight">Apple</div>
                                </div>
                            </a>

                            {/* Android Button - Dark Glass on Dark */}
                            <a href="#" onClick={handleInstallClick} className="flex items-center gap-4 px-8 py-4 bg-[#222] text-white border border-[#333] rounded-2xl hover:bg-[#333] hover:border-[#555] hover:scale-105 transition-all duration-300 shadow-lg group">
                                <div className="w-7 h-7 flex items-center justify-center text-white">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" /></svg>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download for</div>
                                    <div className="font-sans font-bold leading-none text-xl tracking-tight">Android</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Newsletter (Business Intelligence) */}
                    <div className="relative p-8 lg:p-12 border border-[#222] bg-[#111]/50 backdrop-blur-sm rounded-sm">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-serif mb-2">The Dakeek Journal.</h2>
                                <p className="text-[#888] text-sm font-light leading-relaxed">
                                    Curated maintenance insights and seasonal care guides for the modern homeowner. Zero clutter.
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-transparent border-b border-[#333] text-white py-3 px-1 text-sm font-light placeholder-stone-500 focus:outline-none focus:border-[#5A4A32] transition-colors"
                                    />
                                </div>
                                <button className="w-full py-3 bg-[#5A4A32] hover:bg-[#6B5A40] text-white font-mono text-xs uppercase tracking-[0.2em] transition-colors rounded-sm shadow-lg">
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-[10px] text-[#9CA3AF] font-mono uppercase tracking-widest text-center">
                                Join 2,000+ Dubai Residents
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
                isIOS={isIOS}
            />

        </main>
    );
}

