"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";

import HyperHero from "@/components/hero/HyperHero";
import { FAQAccordion, type FAQItem } from "@/components/shared/FAQAccordion";
import { TrustIndicators } from "@/components/shared/TrustIndicators";

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
        answer: "You can book through our contact form, WhatsApp at 800-DAKEEK, or call us directly. We'll confirm your appointment within minutes and send a technician profile 30 minutes before arrival.",
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

export default function QueriesPage() {
    return (
        <main className="relative min-h-screen bg-[#FAFAF9] text-[#111] overflow-hidden">

            {/* Global Noise Texture */}
            <div className="fixed inset-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-multiply"></div>

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col justify-center items-center px-[8vw] overflow-hidden">
                {/* HyperHero Background - Platinum/Cool Grey */}
                <HyperHero
                    color1="#D1D5DB" // Platinum
                    color2="#F3F4F6" // Cool Grey
                    initialColor="#F3F4F6"
                />

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-4 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5 text-[#A18262] bg-white/50">
                            FAQ Concierge
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-serif italic leading-[0.9] mb-8 text-[#111]"
                    >
                        Questions? <br />
                        <span className="text-[#A18262]">Answered.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-[#444] mb-12"
                    >
                        No sales pitch. Just honest, straightforward answers to help you make the right decision.
                    </motion.p>

                    {/* FAQ Count Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E5E5E5] shadow-lg"
                    >
                        <HelpCircle className="w-5 h-5 text-[#A18262]" />
                        <span className="font-mono text-sm">
                            <span className="font-bold text-[#A18262]">{FAQS.length}</span> Questions Answered
                        </span>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#999] animate-bounce"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </motion.div>
            </section>

            {/* TRUST INDICATORS */}
            <section className="relative z-10 px-[8vw] py-16 bg-white border-y border-[#E5E5E5]">
                <TrustIndicators />
            </section>

            {/* FAQ SECTION */}
            <section className="relative z-10 px-[8vw] py-24 bg-[#FAFAF9]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="block font-mono text-xs text-[#A18262] uppercase tracking-[0.2em] mb-4">Everything You Need to Know</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic text-[#111] mb-4">
                            The Complete Guide
                        </h2>
                        <p className="text-lg text-[#666] max-w-2xl mx-auto">
                            Search below or browse by category to find exactly what you're looking for.
                        </p>
                    </div>

                    <FAQAccordion faqs={FAQS} showSearch={true} defaultOpen={0} />
                </div>
            </section>

            {/* STILL LOST CTA */}
            <section className="relative z-10 px-[8vw] py-24 bg-white border-t border-[#E5E5E5]">
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
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-[#A18262] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>

                        <a
                            href="tel:800332533"
                            className="px-12 py-4 border border-black/10 text-[#111] rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white hover:bg-[#FAFAF9] transition-all shadow-sm hover:shadow-md"
                        >
                            Call 800-DAKEEK
                        </a>
                    </div>
                </div>
            </section>


        </main>
    );
}
