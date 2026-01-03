"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/about/SectionWrapper";
import dynamic from "next/dynamic";

const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#F4F4F5]" />,
});

// Data Structure: Categories of Questions
const FAQ_CATEGORIES = [
    {
        id: "essentials",
        title: "The Essentials",
        description: "Booking, timing, and areas.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80", // Minimal Clock/Time
        questions: [
            { q: "How quickly can you arrive?", a: "For emergency requests, our dispatch protocol targets a 60-minute arrival time anywhere in Dubai. For standard scheduled maintenance, we adhere to precise 1-hour windows to respect your schedule." },
            { q: "What areas do you cover?", a: "We serve all major freehold communities including Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, and Downtown Dubai. If you reside in a premium community, we likely cover it." },
            { q: "Is there a call-out fee?", a: "We charge a standard inspection fee of AED 150. This covers the engineer's time and professional diagnosis. Crucially, if you proceed with the quoted repair, this fee is completely waived." },
            { q: "Do I need to be home?", a: "We recommend being present for the initial diagnosis. However, for established clients in secure properties, we can coordinate access directly with your concierge or security team for seamless service." }
        ]
    },
    {
        id: "standards",
        title: "Our Standards",
        description: "Quality, vetting, and warranty.",
        image: "https://images.unsplash.com/photo-1635326444826-06c8f84991a9?auto=format&fit=crop&q=80", // Marble/Statue/Quality
        questions: [
            { q: "Who will be entering my home?", a: "We exclusively employ full-time, in-house technicians. By avoiding the variability of the freelance market, we ensure you receive a consistent, vetted, and highly trained professional every single time." },
            { q: "Is the work guaranteed?", a: "Yes. We offer a comprehensive 30-day workmanship warranty. If the issue persists, we return and rectify it at zero cost. We stand by our engineering standards." },
            { q: "Are spare parts included?", a: "Parts are charged separately as per market rates. We use only genuine, high-grade components which carry their own manufacturer warranty (typically 1 year)." },
            { q: "What if the repair is complex?", a: "Our field technicians are backed by a team of Senior Engineers. If a problem is unusually complex, we escalate it internally for technical review at no additional cost to you." }
        ]
    },
    {
        id: "trust",
        title: "Trust & Safety",
        description: "Privacy, insurance, and respect.",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80", // Handshake/Gentle
        questions: [
            { q: "Are you insured?", a: "Fully. We carry comprehensive liability insurance. Your property is protected against any accidental damage, however unlikely that may be." },
            { q: "What about privacy?", a: "Discretion is paramount. Our teams are trained to work quietly, respect your personal space, and are happy to sign confidentiality agreements for VIP residences." },
            { q: "Do you clean up after the job?", a: "Absolutely. We consider 'leaving no trace' to be part of the repair itself. Your technician carries cleaning equipment and will leave your home exactly as they found it." },
            { q: "How do I identify the technician?", a: "Security is key. You will receive a digital profile with your technician's photo and name 30 minutes before arrival. All our staff wear distinctive Dakeek uniforms and carry identification." }
        ]
    }
];

export default function QueriesPage() {
    const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const activeData = FAQ_CATEGORIES.find(c => c.id === activeCategory) || FAQ_CATEGORIES[0];

    return (
        <main className="bg-[#FDFCF8] min-h-screen text-[#1a1a1a] overflow-x-hidden selection:bg-bronze selection:text-white font-sans">

            {/* 1. HERO: The Encyclopedia (From GitHub) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F4F5] border-b border-structure">
                <div className="absolute inset-0 z-0">
                    <HyperHero
                        color1="#A1A1AA" // Zinc 400
                        color2="#F4F4F5" // Zinc 100
                        initialColor="#F4F4F5"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50">
                        Knowledge Base
                    </span>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 leading-[0.9] text-[#111]">
                        Queries.
                    </h1>
                    <p className="text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#444]">
                        Everything you need to know about our process, pricing, and promise.
                    </p>
                </div>
            </section>

            {/* 2. THE INTERFACE: Split Layout */}
            <section className="relative px-[5vw] lg:px-[8vw] py-24 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT: Content & Navigation */}
                    <div className="lg:w-1/2 relative z-10">

                        {/* Category Nav */}
                        <div className="flex gap-8 mb-20 border-b border-black/5 pb-8 overflow-x-auto">
                            {FAQ_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => { setActiveCategory(cat.id); setOpenQuestion(null); }}
                                    className={`text-sm font-mono uppercase tracking-widest pb-4 -mb-4 border-b-2 transition-all whitespace-nowrap ${activeCategory === cat.id
                                        ? "border-bronze text-ink"
                                        : "border-transparent text-stone-400 hover:text-bronze"
                                        }`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Questions List */}
                        <div className="space-y-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {activeData.questions.map((item, idx) => {
                                        const isOpen = openQuestion === item.q;
                                        return (
                                            <div
                                                key={idx}
                                                className="border-b border-black/10 group"
                                            >
                                                <button
                                                    onClick={() => setOpenQuestion(isOpen ? null : item.q)}
                                                    className="w-full py-10 flex items-start justify-between gap-8 text-left"
                                                >
                                                    <h3 className={`text-2xl md:text-4xl font-serif transition-colors duration-500 ${isOpen ? "text-bronze italic" : "text-[#111] group-hover:text-bronze"}`}>
                                                        {item.q}
                                                    </h3>
                                                    <div className={`mt-2 transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                                                        <Plus className="w-6 h-6 text-bronze" strokeWidth={1} />
                                                    </div>
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pb-12 pr-12">
                                                                <p className="text-xl text-stone-500 font-light leading-relaxed">
                                                                    {item.a}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>

                    {/* RIGHT: Dynamic Image (Sticky) */}
                    <div className="lg:w-1/2 lg:h-[80vh] sticky top-32 hidden lg:block">
                        <div className="relative w-full h-full overflow-hidden rounded-sm bg-stone-100">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={activeData.image}
                                        alt={activeData.title}
                                        fill
                                        className="object-cover grayscale-[20%] sepia-[10%]"
                                        priority
                                    />
                                    {/* Overlay for cinematic feel */}
                                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Caption */}
                            <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
                                <motion.div
                                    key={`text-${activeCategory}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <span className="font-mono text-xs uppercase tracking-widest opacity-80 mb-2 block">Focus</span>
                                    <h3 className="text-3xl font-serif italic">{activeData.title}</h3>
                                    <p className="font-light opacity-80 mt-2">{activeData.description}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CTA: Simple & Elegant */}
            <section className="py-32 text-center bg-white border-t border-black/5">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#111]">
                        Still have questions?
                    </h2>
                    <p className="text-lg text-stone-500 mb-12 font-light">
                        Our concierge team is available to discuss your specific requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-[#111] text-white rounded-full hover:bg-bronze transition-colors duration-500 shadow-xl"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">Contact Concierge</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
