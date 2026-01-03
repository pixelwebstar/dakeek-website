"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HyperHero from "@/components/hero/HyperHero";
import { FAQAccordion, type FAQItem } from "@/components/shared/FAQAccordion";
import { TrustIndicators } from "@/components/shared/TrustIndicators";
import SectionWrapper from "@/components/about/SectionWrapper";

// Expanded FAQ data with categories
const FAQS: FAQItem[] = [
    // Getting Started
    {
        question: "How fast do you arrive?",
        answer: "For emergency calls, we arrive in 60 minutes or less anywhere in Dubai. For scheduled appointments, we arrive within your chosen 1-hour window. We respect your time.",
        category: "Getting Started"
    },
    {
        question: "Is there a callout fee?",
        answer: "There is a standard inspection fee of AED 150. However, if you proceed with the repair work, this fee is waived completely. You only pay for the actual service.",
        category: "Getting Started"
    },
    {
        question: "What areas do you cover?",
        answer: "We currently serve all major freehold communities in Dubai, including Emirates Hills, Palm Jumeirah, Arabian Ranches, Jumeirah Park, Dubai Marina, JBR, Downtown Dubai, and surrounding areas.",
        category: "Getting Started"
    },
    {
        question: "How do I book a service?",
        answer: "You can book through our contact form, WhatsApp at +971 54 247 2151, or call us directly. We'll confirm your appointment within minutes and send a technician profile 30 minutes before arrival.",
        category: "Getting Started"
    },

    // Services & Technicians
    {
        question: "Do you use subcontractors?",
        answer: "Never. Every technician is a full-time Dakeek employee, trained in our own academy. We do not use random freelancers or outsource our work. You get the same quality every time.",
        category: "Services & Technicians"
    },
    {
        question: "Are your technicians certified?",
        answer: "Yes. All technicians are certified professionals with minimum 5 years experience. They undergo continuous training and are evaluated monthly on quality and customer satisfaction.",
        category: "Services & Technicians"
    },
    {
        question: "Do you offer a warranty?",
        answer: "Yes. All our workmanship is guaranteed for 30 days. If the same problem comes back, we fix it for free, no questions asked. Spare parts carry their own manufacturer warranty (usually 1 year).",
        category: "Services & Technicians"
    },

    // Trust & Safety
    {
        question: "Are your technicians insured?",
        answer: "Yes, fully. We carry comprehensive liability insurance covering both property damage and personal liability. If we accidentally break something in your home (which rarely happens), we pay for it.",
        category: "Trust & Safety"
    },
    {
        question: "Do you do background checks?",
        answer: "Absolutely. Every technician undergoes thorough background verification, police clearance, and reference checks before joining our team. Your safety is our priority.",
        category: "Trust & Safety"
    },
    {
        question: "What about privacy and discretion?",
        answer: "We treat your home with the utmost respect. Technicians wear shoe covers, never enter unannounced rooms, and sign strict confidentiality agreements. Many of our clients are VIPs who value privacy.",
        category: "Trust & Safety"
    },

    // Emergency & Urgency
    {
        question: "Are you available 24/7?",
        answer: "Yes! Our emergency service operates 24/7/365 for critical issues like AC failures in summer, electrical hazards, gas leaks, or major plumbing emergencies. We never close.",
        category: "Emergency & Urgency"
    },
    {
        question: "What qualifies as an emergency?",
        answer: "Any issue that poses immediate safety risk, significant property damage, or makes your home unlivable. Examples: gas leaks, electrical sparks, flooding, AC failure in peak summer, or sewage backups.",
        category: "Emergency & Urgency"
    }
];

import { useState, useMemo } from "react";

export default function QueriesPage() {
    const categories = ["All", ...Array.from(new Set(FAQS.map(f => f.category || "General")))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredFaqs = useMemo(() => {
        if (activeCategory === "All") return FAQS;
        return FAQS.filter(f => f.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="relative min-h-screen bg-[#FAFAF9] text-[#111] overflow-hidden">

            {/* Global Noise Texture */}
            <div className="fixed inset-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-multiply"></div>

            {/* 1. HERO: The Encyclopedia */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F4F5] border-b border-structure">
                <HyperHero
                    color1="#A1A1AA" // Zinc 400
                    color2="#F4F4F5" // Zinc 100
                    initialColor="#F4F4F5"
                />

                <SectionWrapper className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                        Knowledge Base
                    </span>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 leading-[0.9] text-ink">
                        Queries.
                    </h1>
                    <p className="text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium">
                        Everything you need to know about our process, pricing, and promise.
                    </p>
                </SectionWrapper>
            </section>

            {/* TRUST INDICATORS */}
            <section className="relative z-10 px-[5vw] lg:px-[8vw] py-24 lg:py-32 bg-white border-y border-[#E5E5E5]">
                <TrustIndicators />
            </section>

            {/* 2. FAQ SECTION */}
            <section className="py-24 px-[5vw] lg:px-[8vw] bg-white min-h-[60vh]">
                <div className="max-w-4xl mx-auto">
                    <SectionWrapper>
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                            {/* Categories */}
                            <div className="w-full md:w-1/4 space-y-4">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-[#888] mb-6">Categories</h3>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`block w-full text-left font-serif text-lg transition-colors ${activeCategory === cat ? "text-bronze italic" : "text-titanium hover:text-ink"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* FAQ Accordion */}
                            <div className="w-full md:w-3/4">
                                <FAQAccordion faqs={filteredFaqs} showSearch={true} defaultOpen={0} />
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* STILL LOST CTA */}
            <section className="relative z-10 px-[5vw] lg:px-[8vw] py-24 lg:py-32 bg-white border-t border-[#E5E5E5]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-[#111]">
                        Still can't find what you're looking for?
                    </h2>
                    <p className="text-lg text-[#666] mb-12 max-w-xl mx-auto">
                        Our team is standing by to help. Get in touch, and we'll answer within minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="group relative px-12 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl"
                        >
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em] flex items-center gap-2">
                                Contact Us
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                            </span>
                            <div className="absolute inset-0 bg-[#A18262] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>

                        <a
                            href="tel:+971542472151"
                            className="px-12 py-4 border border-black/10 text-[#111] rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white hover:bg-[#FAFAF9] transition-all shadow-sm hover:shadow-md"
                        >
                            Call +971 54 247 2151
                        </a>
                    </div>
                </div>
            </section>


        </main>
    );
}
