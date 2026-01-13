"use client";

import { MapPin } from "lucide-react";

import GradientHero from "@/components/hero/GradientHero";
import dynamic from "next/dynamic";

const TrustIndicators = dynamic(() => import("@/components/shared/TrustIndicators").then(mod => mod.TrustIndicators));
import { SmartForm } from "@/components/contact/SmartForm";
import SectionWrapper from "@/components/about/SectionWrapper";


import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [zoom, setZoom] = useState(15);


    // Function to trigger global chat open
    const openChat = () => {
        if (typeof window !== 'undefined') {
            const event = new Event('open-chat');
            window.dispatchEvent(event);
        }
    };

    return (
        <main className="min-h-screen bg-canvas text-ink overflow-x-hidden selection:bg-bronze selection:text-white">

            {/* SECTION 1: HERO (Hyper Metal) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E5E7EB] border-b border-structure">
                <GradientHero
                    color1="#D1D5DB"
                    color2="#F3F4F6"
                    initialColor="#D1D5DB"
                />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                        Start The Conversation
                    </p>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink animate-hero-fade" style={{ animationDelay: '0s' }}>
                        Contact
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12 uppercase tracking-widest animate-hero-fade" style={{ animationDelay: '0.3s' }}>
                        Ready To Serve You
                    </p>

                    <div className="flex justify-center gap-4 animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <a href="tel:+971542472151" className="group relative inline-flex items-center justify-center px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Call Dakeek</span>
                            <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </a>
                        <Link href="https://wa.me/971542472151" target="_blank" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-ink rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            WhatsApp Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* TRUST INDICATORS */}
            <section className="relative z-10 px-[5vw] lg:px-[8vw] py-24 lg:py-32 bg-white border-y border-structure">
                <TrustIndicators />
            </section>

            {/* MAIN CONTACT SECTION: The Concierge Desk (Dark Premium) */}
            <section className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0c0c0c]">

                {/* Left Column: Direct Access (VIP Info) */}
                <div className="relative flex flex-col justify-center p-8 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0c0c0c]">
                    <div className="space-y-16 max-w-lg">

                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze mb-4 block">Direct Access</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">The Concierge.</h2>
                            <p className="text-stone-400 text-lg font-light leading-relaxed">
                                You are not entering a queue. You are contacting a dedicated engineering team. We value precision in communication as much as in repair.
                            </p>
                        </div>

                        {/* Contact Methods (Vertical Elegant List) */}
                        <div className="space-y-10">

                            {/* Phone */}
                            <div className="group flex items-start gap-6">
                                <span className="font-mono text-xs text-stone-600 mt-1">01</span>
                                <div>
                                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-bronze transition-colors">Emergency & Support</h3>
                                    <a href="tel:+971542472151" className="text-2xl md:text-3xl font-light text-stone-300 hover:text-white transition-colors block mb-1">
                                        +971 54 247 2151
                                    </a>
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-green-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Live 24/7
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="group flex items-start gap-6">
                                <span className="font-mono text-xs text-stone-600 mt-1">02</span>
                                <div>
                                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-bronze transition-colors">Instant Chat</h3>
                                    <a href="https://wa.me/971542472151?text=Hello%20Dakeek%20Residential%20Services%2C%20I%20would%20like%20to%20book%20a%20service." target="_blank" className="text-2xl md:text-3xl font-light text-stone-300 hover:text-white transition-colors block mb-1">
                                        WhatsApp Concierge
                                    </a>
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500">Avg. Response: 2 mins</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-6">
                                <span className="font-mono text-xs text-stone-600 mt-1">03</span>
                                <div>
                                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-bronze transition-colors">Formal Inquiries</h3>
                                    <a href="mailto:asheejajayan@gmail.com" className="text-lg md:text-xl font-light text-stone-300 hover:text-white transition-colors block mb-1">
                                        asheejajayan@gmail.com
                                    </a>
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500">Projects & Partnerships</p>
                                </div>
                            </div>

                        </div>

                        {/* Location Context */}
                        <div className="pt-12 border-t border-white/5">
                            <p className="flex items-center gap-3 text-stone-500 text-sm font-mono uppercase tracking-widest">
                                <MapPin className="w-4 h-4 text-bronze" />
                                Dubai Headquarters • Al Karama
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Smart Form (Glass Card) */}
                <div className="relative h-full flex items-center justify-center p-6 lg:p-24 bg-[#0a0a0a]">

                    {/* Background Noise/Gradient */}
                    <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] animate-grain"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] via-[#111] to-[#0c0c0c] z-0"></div>

                    <div className="w-full max-w-xl relative z-10">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
                            <div className="mb-8 border-b border-white/5 pb-8">
                                <h2 className="text-2xl font-serif text-white mb-2">Priority Request</h2>
                                <p className="text-stone-400 font-light text-sm">Fill out the details below. This goes directly to our dispatch desk.</p>
                            </div>

                            {/* The SmartForm (Preserved Functionality, Inherits Transparency if built correctly, or we wrap it carefully) */}
                            <div className="contact-form-dark-override">
                                <SmartForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: LOCATION MAP (Dark Mode & Interactive) */}
            <section className="relative w-full h-[60vh] min-h-[500px] border-t border-structure bg-[#18181b] overflow-hidden group">
                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>

                {/* VISUAL: Transparent Glassy Target */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                    <div className="relative">
                        {/* Subtle Pulse Ring */}
                        <div className="absolute inset-0 rounded-full border border-white/10 scale-150 animate-ping opacity-20"></div>

                        {/* Glassy Lens */}
                        <div className="w-24 h-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px] shadow-2xl flex items-center justify-center overflow-hidden">
                            {/* Thin Crosshair */}
                            <div className="absolute w-full h-[1px] bg-white/20"></div>
                            <div className="absolute h-full w-[1px] bg-white/20"></div>

                            {/* Central Dot */}
                            <div className="w-1.5 h-1.5 bg-[#5A4A32] rounded-full shadow-[0_0_10px_#5A4A32]"></div>
                        </div>
                    </div>
                </div>

                {/* Google Map Iframe (Unlocked) */}
                {/* Google Map Iframe (Locked & Custom Zoom) */}
                <iframe
                    src={`https://maps.google.com/maps?q=25.2487,55.3003&hl=es;z=${zoom}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 z-0 opacity-80 transition-opacity duration-700 hover:opacity-100 pointer-events-none" // LOCKED: pointer-events-none
                ></iframe>

                {/* Custom Zoom Controls (Glassy) */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 z-30">
                    <button
                        onClick={() => setZoom(prev => Math.min(prev + 1, 20))}
                        className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#5A4A32] transition-colors shadow-lg active:scale-95"
                        aria-label="Zoom In"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </button>
                    <button
                        onClick={() => setZoom(prev => Math.max(prev - 1, 1))}
                        className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#5A4A32] transition-colors shadow-lg active:scale-95"
                        aria-label="Zoom Out"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </button>
                </div>

                {/* Location Card (Side) */}
                <div className="absolute z-20 bottom-8 left-4 md:bottom-12 md:left-12 w-full max-w-xs pointer-events-none">
                    <div
                        className="bg-black/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl pointer-events-auto shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#5A4A32]/20 to-transparent rounded-bl-3xl"></div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-[#5A4A32] text-white flex items-center justify-center shrink-0 shadow-lg">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Visit Our HQ</h3>
                                <p className="text-gray-400 font-mono text-xs uppercase tracking-widest leading-relaxed mb-4">
                                    Anzar Gallery Building<br />
                                    Al Karama, Dubai, UAE
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/kXjXjXjXjXjXjXjX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#5A4A32] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group/link"
                                >
                                    Get Directions <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
