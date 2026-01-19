"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Search } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/about/SectionWrapper";
import GradientHero from "@/components/hero/GradientHero";

// Data Structure: Categories of Questions (Standardized to 6 per category)
const FAQ_CATEGORIES = [
    {
        id: "essentials",
        title: "The Essentials",
        description: "Booking, timing, and areas.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80",
        questions: [
            { q: "How quickly can you arrive?", a: "For emergency requests, our dispatch protocol targets a 60-minute arrival time anywhere in Dubai. For standard scheduled maintenance, we adhere to precise 1-hour windows to respect your schedule." },
            { q: "What areas do you cover?", a: "We serve all major freehold communities including Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, Downtown Dubai, Dubai Marina, JLT, Business Bay, and 30+ other communities." },
            { q: "Is there a call-out fee?", a: "We charge a standard inspection fee of AED 150. This covers the engineer's time and professional diagnosis. Crucially, if you proceed with the quoted repair, this fee is completely waived." },
            { q: "Do I need to be home?", a: "We recommend being present for the initial diagnosis. However, for established clients in secure properties, we can coordinate access directly with your concierge or security team for seamless service." },
            { q: "Can I book online?", a: "Yes, you can book via our website, WhatsApp, or phone. Our online form is available 24/7, and you'll receive confirmation within 15 minutes during business hours." },
            { q: "Do you offer same-day service?", a: "Absolutely. Same-day service is available for most requests made before 3 PM. For emergencies, we&apos;re available around the clock." }
        ]
    },
    {
        id: "standards",
        title: "Our Standards",
        description: "Quality, vetting, and warranty.",
        image: "https://images.unsplash.com/photo-1635326444826-06c8f84991a9?auto=format&fit=crop&q=80",
        questions: [
            { q: "Who will be entering my home?", a: "We exclusively employ full-time, in-house technicians. By avoiding the variability of the freelance market, we ensure you receive a consistent, vetted, and highly trained professional every single time." },
            { q: "Is the work guaranteed?", a: "Yes. We offer a comprehensive 30-day workmanship warranty. If the issue persists, we return and rectify it at zero cost. We stand by our engineering standards." },
            { q: "Are spare parts included?", a: "Parts are charged separately as per market rates. We use only genuine, high-grade components which carry their own manufacturer warranty (typically 1 year)." },
            { q: "What if the repair is complex?", a: "Our field technicians are backed by a team of Senior Engineers. If a problem is unusually complex, we escalate it internally for technical review at no additional cost to you." },
            { q: "How are your technicians trained?", a: "Every technician completes 500+ hours of in-house training before their first solo job. Training covers technical skills, customer service, and the Dakeek standards of precision." },
            { q: "Do you use branded parts?", a: "Yes, we use genuine parts from brands like Carrier, Daikin, Bosch, and Grohe. We believe in fixing it once and fixing it right." }
        ]
    },
    {
        id: "services",
        title: "Services & Pricing",
        description: "What we do and what it costs.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
        questions: [
            { q: "What services do you offer?", a: "We specialize in AC maintenance, plumbing, electrical, deep cleaning, stove/oven repair, and general handyman work. We also handle emergencies 24/7." },
            { q: "How much does AC servicing cost?", a: "Basic AC servicing starts at AED 150 per unit. Deep cleaning with coil wash and gas check ranges from AED 250-350 depending on the unit type (split, window, or central)." },
            { q: "What is the cost for plumbing repairs?", a: "Plumbing costs vary by task. A simple drain unblocking starts at AED 200, while more complex work like water heater repairs or leak detection is quoted after inspection." },
            { q: "Do you offer annual maintenance contracts?", a: "Yes, we offer AMC packages for AC, general maintenance, and full-home coverage. Contracts include priority scheduling, discounts, and quarterly preventive visits." },
            { q: "Is there a minimum charge?", a: "Yes, the minimum service charge is AED 150 for a technician visit and diagnosis. This is waived if you proceed with our repair quote." },
            { q: "Do you provide move-in/move-out services?", a: "Yes, we offer comprehensive snagging, deep cleaning, and maintenance checks for new tenants or owners to ensure the property is in perfect condition before you move in." }
        ]
    },
    {
        id: "trust",
        title: "Trust & Safety",
        description: "Privacy, insurance, and respect.",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80",
        questions: [
            { q: "Are you insured?", a: "Fully. We carry comprehensive liability insurance. Your property is protected against any accidental damage, however unlikely that may be." },
            { q: "What about privacy?", a: "Discretion is paramount. Our teams are trained to work quietly, respect your personal space, and are happy to sign confidentiality agreements for VIP residences." },
            { q: "Do you clean up after the job?", a: "Absolutely. We consider 'leaving no trace' to be part of the repair itself. Your technician carries cleaning equipment and will leave your home exactly as they found it." },
            { q: "How do I identify the technician?", a: "Security is key. You will receive a digital profile with your technician's photo and name 30 minutes before arrival. All our staff wear distinctive Dakeek uniforms and carry identification." },
            { q: "Are your technicians background-checked?", a: "Yes. Every employee undergoes a full background check, police clearance, and reference verification before joining. We take security seriously." },
            { q: "Do you offer contactless payment?", a: "Yes, for your convenience and safety, we send a secure digital payment link upon job completion. We also accept cash or card on-site if preferred." }
        ]
    }
];

export default function QueriesPage() {
    const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const activeData = FAQ_CATEGORIES.find(c => c.id === activeCategory) || FAQ_CATEGORIES[0];

    // Search filtering
    const filteredQuestions = useMemo(() => {
        if (!searchQuery.trim()) {
            return activeData.questions;
        }
        const query = searchQuery.toLowerCase();
        return FAQ_CATEGORIES.flatMap(cat =>
            cat.questions.filter(q =>
                q.q.toLowerCase().includes(query) || q.a.toLowerCase().includes(query)
            )
        );
    }, [searchQuery, activeData.questions]);

    const isSearchMode = searchQuery.trim().length > 0;

    return (
        <main className="bg-[#FDFCF8] min-h-screen text-[#1a1a1a] overflow-x-hidden selection:bg-bronze selection:text-white font-sans">

            {/* 1. HERO: Golden Standard */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F4F5] border-b border-structure">
                <div className="absolute inset-0 z-0">
                    <GradientHero
                        color1="#a1a1aa"
                        color2="#f4f4f5"
                        initialColor="#F4F4F5"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50">
                        Answers And Insights
                    </p>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-[#111] animate-hero-fade" style={{ animationDelay: '0s' }}>
                        Queries
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#444] mb-12 uppercase tracking-widest animate-hero-fade" style={{ animationDelay: '0.3s' }}>
                        Knowledge For Your Home
                    </p>

                    <div className="flex justify-center gap-4 animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <button onClick={() => { const event = new Event('open-chat'); window.dispatchEvent(event); }} className="group relative inline-flex items-center justify-center px-12 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Start Chat</span>
                            <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </button>
                        <Link href="#topics" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-[#111] rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Browse Topics
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. THE INTERFACE: Split Layout */}
            <section id="topics" className="relative px-[5vw] lg:px-[8vw] py-16 lg:py-24 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* LEFT: Content & Navigation */}
                    <div className="lg:w-1/2 relative z-10 order-2 lg:order-1">

                        {/* Search Input */}
                        <div className="relative mb-12">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                            <input
                                type="text"
                                placeholder="Search all questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 bg-white border border-black/10 rounded-2xl text-[#111] placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C4A67C] focus:border-[#C4A67C] transition-all shadow-sm"
                            />
                        </div>

                        {/* Mobile Category Nav (Scrollable Chips) */}
                        {!isSearchMode && (
                            <div className="lg:hidden mb-12 overflow-x-auto pb-4 -mx-5 px-5 flex gap-3 snap-x no-scrollbar">
                                {FAQ_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setActiveCategory(cat.id); setOpenQuestion(null); }}
                                        className={`shrink-0 px-6 py-3 rounded-full border snap-center text-sm font-medium transition-all ${activeCategory === cat.id
                                            ? "bg-[#111] text-white border-[#111]"
                                            : "bg-white text-[#555] border-black/5"
                                            }`}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Desktop Category Nav (Tab Bar) */}
                        {!isSearchMode && (
                            <div className="hidden lg:flex gap-8 mb-12 border-b border-black/5 pb-0">
                                {FAQ_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setActiveCategory(cat.id); setOpenQuestion(null); }}
                                        className={`text-sm font-mono uppercase tracking-widest pb-4 -mb-[1px] border-b-2 transition-all whitespace-nowrap ${activeCategory === cat.id
                                            ? "border-[#C4A67C] text-[#111]"
                                            : "border-transparent text-stone-400 hover:text-[#C4A67C]"
                                            }`}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Questions List */}
                        <div className="space-y-4">
                            {filteredQuestions.map((item, idx) => {
                                const isOpen = openQuestion === item.q;
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setOpenQuestion(isOpen ? null : item.q)}
                                        className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${isOpen
                                            ? "bg-white border-[#C4A67C]/30 shadow-lg shadow-[#C4A67C]/5"
                                            : "bg-white border-black/5 hover:border-black/10"
                                            }`}
                                    >
                                        <div className="p-6 lg:p-8 flex items-start justify-between gap-6">
                                            <h3 className={`text-lg lg:text-xl font-serif leading-tight transition-colors duration-300 w-[90%] ${isOpen ? "text-[#C4A67C]" : "text-[#111] group-hover:text-[#444]"}`}>
                                                {item.q}
                                            </h3>
                                            <div className={`shrink-0 transition-transform duration-300 mt-1 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                                                <Plus className={`w-5 h-5 ${isOpen ? "text-[#C4A67C]" : "text-stone-300"}`} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        {/* Answer */}
                                        <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                            <div className="overflow-hidden">
                                                <div className="px-6 lg:px-8 pb-8 pt-0">
                                                    <p className="text-base text-stone-500 font-light leading-relaxed border-t border-dashed border-black/5 pt-6">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {filteredQuestions.length === 0 && (
                                <div className="text-center py-12 text-stone-500">
                                    No questions found matching your search.
                                </div>
                            )}
                        </div>

                    </div>

                    {/* RIGHT: Dynamic Image (Desktop Only) */}
                    <div className="hidden lg:block lg:w-1/2 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-32 order-1 lg:order-2 mt-0 lg:mt-32">
                        <div className="relative w-full h-full overflow-hidden rounded-3xl bg-stone-100 shadow-2xl shadow-black/5">
                            <Image
                                src={activeData.image}
                                alt={activeData.title}
                                fill
                                className="object-cover grayscale-[20%] sepia-[5%]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Caption */}
                            <div className="absolute bottom-12 left-12 right-12 z-10 text-white">
                                <span className="font-mono text-xs uppercase tracking-widest opacity-80 mb-3 block bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-full border border-white/10">
                                    Focus Area
                                </span>
                                <h3 className="text-5xl font-serif mb-4">{activeData.title}</h3>
                                <p className="font-light opacity-90 text-lg leading-relaxed max-w-md text-white/90">
                                    {activeData.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-24 lg:py-32 text-center bg-white border-t border-black/5">
                <SectionWrapper className="max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#111]">
                        Still have questions?
                    </h2>
                    <p className="text-lg text-stone-500 mb-12 font-light">
                        Our concierge team is available to discuss your specific requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-[#111] text-white rounded-full hover:bg-[#C4A67C] transition-colors duration-500 shadow-xl"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">Contact Concierge</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </SectionWrapper>
            </section>
        </main>
    );
}
