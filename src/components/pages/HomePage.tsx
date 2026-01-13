"use client";
// HMR Trigger

import { IconAC, IconElectrical, IconPlumbing, IconStoves, IconEmergency, IconCleaning, IconHandyman, IconOther } from "@/components/services/ServiceIcons";
import { ShieldCheck, HeartHandshake, Sparkles, Award, Clock, UserCheck, Home } from "lucide-react";
import Balancer from "react-wrap-balancer";

import Link from "next/link";
import React, { useRef, useState } from "react";

import GradientHero from "@/components/hero/GradientHero";
import ServiceCard from "@/components/services/ServiceCard";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import InstallModal from "@/components/shared/InstallModal";


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
        <main ref={container} className="relative min-h-screen w-full selection:bg-bronze selection:text-white premium-bg text-ink overflow-x-hidden">

            <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-canvas">
                <GradientHero
                    color1="#9CA3AF"
                    color2="#E5E7EB"
                    initialColor="#E5E7EB"
                />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="flex flex-col items-center">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                            Precision Residential Services
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
                            <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-ink rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Explore Services
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
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
                            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} /> PRIVACY GUARANTEED</span>
                            <span className="flex items-center gap-2"><UserCheck className="w-3.5 h-3.5" strokeWidth={1.5} /> TRUSTED BY FAMILIES</span>
                            <span className="flex items-center gap-2"><Home className="w-3.5 h-3.5" strokeWidth={1.5} /> RESIDENTIAL SPECIALISTS</span>
                            <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" strokeWidth={1.5} /> ALWAYS ON TIME</span>
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
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-light leading-tight max-w-4xl mx-auto mb-8">
                            <Balancer>
                                Your Home, Our Priority.
                            </Balancer>
                        </h2>
                        <p className="text-lg md:text-xl text-[#CCC] font-light max-w-3xl mx-auto leading-relaxed">
                            Dakeek is a Dubai-based home maintenance company helping families and landlords keep their homes running smoothly with fast, professional AC, plumbing, electrical, and handyman services.
                        </p>
                    </div>

                    {/* Three Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                        {/* Pillar 1: Precision */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">01</span>
                            <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#C4A67C] transition-colors">Precision</h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                &quot;Dakeek&quot; means precise in Arabic. We diagnose accurately, quote fairly, and execute flawlessly. No guesswork. No surprises.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] px-2 py-1 border border-[#333]">Accurate</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] px-2 py-1 border border-[#333]">Exact</span>
                            </div>
                        </div>

                        {/* Pillar 2: Discretion */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">02</span>
                            <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#C4A67C] transition-colors">Respect</h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                We respect your home and your privacy. Our technicians arrive on time, work quietly, and clean up before they leave.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] px-2 py-1 border border-[#333]">Private</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] px-2 py-1 border border-[#333]">Respectful</span>
                            </div>
                        </div>

                        {/* Pillar 3: Excellence */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">03</span>
                            <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#C4A67C] transition-colors">Excellence</h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                Our licensed technicians use quality materials and proven methods. We get it right the first time, so you don&apos;t have to call twice.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] px-2 py-1 border border-[#333]">Quality</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666] px-2 py-1 border border-[#333]">Premium</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Statement */}
                    <div className="text-center pt-8 border-t border-[#333]">
                        <p className="font-mono text-xs text-[#666] uppercase tracking-[0.2em] mb-4">Our Commitment</p>
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
                        <h2 className="text-4xl font-serif italic text-[#111]">Our Services</h2>
                    </div>
                    <Link href="/services" className="text-xs font-mono text-[#333] hover:text-[#111] transition-colors uppercase tracking-widest">Full Specifications</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "AC",
                            href: "/services/ac",
                            icon: IconAC,
                            image: "/images/services/ac.png",
                            features: ["Precision Cooling", "Install & Repair", "Split / Central"],
                            seoTitle: "AC maintenance and repair services in Dubai"
                        },
                        {
                            title: "Plumbing",
                            href: "/services/plumbing",
                            icon: IconPlumbing,
                            image: "/images/services/plumbing.png",
                            features: ["Water Systems", "Leak Detection", "Pumps & Heaters"],
                            seoTitle: "Plumbing repair and leak detection in Dubai"
                        },
                        {
                            title: "Electrical",
                            href: "/services/electrical",
                            icon: IconElectrical,
                            image: "/images/services/electrical.png",
                            features: ["Power Distribution", "Load Balancing", "Safety Systems"],
                            seoTitle: "Electrical works and power distribution in Dubai"
                        },
                        {
                            title: "Cleaning",
                            href: "/services/cleaning",
                            icon: IconCleaning,
                            image: "/images/services/cleaning.png",
                            features: ["Deep Cleaning", "Water Tanks", "Duct Sanitization"],
                            seoTitle: "Deep cleaning, water tank and duct sanitization in Dubai"
                        },
                        {
                            title: "Stoves",
                            href: "/services/stoves",
                            icon: IconStoves,
                            image: "/images/services/stoves.png",
                            features: ["Cooker Repair", "Calibration", "Burner Service"],
                            seoTitle: "Stove and cooker repair services in Dubai"
                        },
                        {
                            title: "Handyman",
                            href: "/services/handyman",
                            icon: IconHandyman,
                            image: "/images/services/handyman_final.png",
                            features: ["Mounting", "Assembly", "General Repairs"],
                            seoTitle: "Handyman and general home repairs in Dubai"
                        },
                        {
                            title: "Other",
                            href: "/contact",
                            icon: IconOther,
                            image: "/images/services/other_final.png",
                            features: ["Custom Request", "Consultation", "Special Projects"],
                            variant: "other",
                            seoTitle: "Custom home maintenance requests in Dubai"
                        },
                        {
                            title: "Emergency",
                            href: "/services/emergency",
                            icon: IconEmergency,
                            image: "/images/services/emergency_final.png",
                            features: ["Critical Failure", "24/7 Response", "Immediate Dispatch"],
                            variant: "emergency",
                            seoTitle: "24/7 emergency home maintenance services in Dubai"
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
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-light">
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
                            <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#C4A67C] transition-colors">Connect</h3>
                            <p className="text-[#999] text-sm leading-relaxed">
                                Tell us what you need. A dedicated coordinator will listen and arrange everything clearly.
                            </p>
                        </div>

                        {/* Step 02 */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">02</span>
                            <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#C4A67C] transition-colors">Restore</h3>
                            <p className="text-[#999] text-sm leading-relaxed">
                                We arrive on time, fix the issue quietly, and clean up afterwards.
                            </p>
                        </div>

                        {/* Step 03 */}
                        <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                            <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                            <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                            <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">03</span>
                            <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#C4A67C] transition-colors">Relax</h3>
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
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-[#111]">The Dakeek Promise.</h2>
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
                            <button
                                onClick={handleInstallClick}
                                className="group flex items-center gap-3 px-6 py-3 border border-[#333] hover:border-[#5A4A32] bg-[#111] hover:bg-[#1A1A1A] rounded-lg transition-all duration-300"
                            >
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#CCC] group-hover:text-white">Download iOS</span>
                            </button>
                            <button
                                onClick={handleInstallClick}
                                className="group flex items-center gap-3 px-6 py-3 border border-[#333] hover:border-[#5A4A32] bg-[#111] hover:bg-[#1A1A1A] rounded-lg transition-all duration-300"
                            >
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#CCC] group-hover:text-white">Android</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Newsletter (Business Intelligence) */}
                    <div className="relative p-8 lg:p-12 border border-[#222] bg-[#111]/50 backdrop-blur-sm rounded-sm">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-serif italic mb-2">The Dakeek Journal.</h2>
                                <p className="text-[#888] text-sm font-light leading-relaxed">
                                    Curated maintenance insights and seasonal care guides for the modern homeowner. Zero clutter.
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-[#333] text-white py-3 px-1 text-sm font-light placeholder-[#444] focus:outline-none focus:border-[#5A4A32] transition-colors"
                                    />
                                </div>
                                <button className="w-full py-3 bg-[#5A4A32] hover:bg-[#6B5A40] text-white font-mono text-xs uppercase tracking-[0.2em] transition-colors rounded-sm shadow-lg">
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-[10px] text-[#444] font-mono uppercase tracking-widest text-center">
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

