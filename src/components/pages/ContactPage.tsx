"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Bot } from "lucide-react";

import dynamic from "next/dynamic";

const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#D1D5DB]" />,
});
// @ts-ignore
const TrustIndicators = dynamic(() => import("@/components/shared/TrustIndicators").then(mod => mod.TrustIndicators));
import { SmartForm } from "@/components/contact/SmartForm";
import SectionWrapper from "@/components/about/SectionWrapper";

// @ts-ignore
import { useState } from "react";

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
                <HyperHero
                    color1="#D1D5DB" // Platinum
                    color2="#F3F4F6" // Silver Mist
                    initialColor="#D1D5DB"
                />

                <SectionWrapper className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                        Get in Touch
                    </span>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink">
                        Start the <br />
                        <span className="italic text-titanium">Conversation.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12">
                        Questions? Custom projects? Emergency? We are here to help.
                    </p>
                </SectionWrapper>
            </section>

            {/* TRUST INDICATORS */}
            <section className="relative z-10 px-[5vw] lg:px-[8vw] py-24 lg:py-32 bg-white border-y border-structure">
                <TrustIndicators />
            </section>

            {/* MAIN CONTACT SECTION */}
            <section className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-canvas">

                {/* Left Column: Contact Info & Map */}
                <div className="relative flex flex-col justify-between p-8 lg:p-24 border-b lg:border-b-0 lg:border-r border-structure bg-white">
                    <div className="space-y-12">
                        {/* Contact Methods */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-sans font-light tracking-tight text-ink mb-2">Get in Touch</h2>
                                <p className="text-titanium text-lg font-light mb-6">Choose how you'd like to connect.</p>

                                {/* NEW: Bot Trigger Button */}
                                <button
                                    onClick={openChat}
                                    className="group flex items-center gap-3 px-5 py-3 bg-[#f3f4f6] hover:bg-[#A18262] text-ink hover:text-white rounded-xl transition-all duration-300 w-full md:w-auto border border-black/5"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <Bot className="w-4 h-4 text-[#A18262]" />
                                    </div>
                                    <span className="font-medium">Use AI Assistant</span>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-auto md:ml-2"></div>
                                </button>
                            </div>

                            <div className="h-px bg-black/5 w-full my-8"></div>

                            {/* Phone */}
                            <motion.a
                                href="tel:+971542472151"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-bronze text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-titanium">Call Us</p>
                                    <p className="text-lg font-medium text-ink group-hover:text-bronze transition-colors">+971 54 247 2151</p>
                                </div>
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/971542472151"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-titanium">WhatsApp</p>
                                    <p className="text-lg font-medium text-ink group-hover:text-green-500 transition-colors">Chat with us</p>
                                </div>
                            </motion.a>

                            {/* Email */}
                            <motion.a
                                href="mailto:asheejajayan@gmail.com"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-titanium">Email</p>
                                    <p className="text-lg font-medium text-ink group-hover:text-bronze transition-colors">asheejajayan@gmail.com</p>
                                </div>
                            </motion.a>

                            {/* Hours */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-canvas text-bronze flex items-center justify-center">
                                    <Clock className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-titanium">Hours</p>
                                    <p className="text-lg font-medium text-ink">24/7 Emergency</p>
                                    <p className="text-sm text-titanium">8 AM - 10 PM Standard</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    {/* Footer Info */}
                    <div className="hidden lg:block space-y-2 text-sm text-stone font-mono pt-12 border-t border-structure mt-12">
                        <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" strokeWidth={1.5} />
                            DUBAI HEADQUARTERS
                        </p>
                        <p className="pl-6">ANZAR GALLERY BUILDING, AL KARAMA</p>
                        <p className="pl-6">LICENSE NO. 1382290</p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="relative h-full bg-canvas flex items-center justify-center p-6 lg:p-24">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="w-full max-w-xl relative z-10">
                        <div className="mb-8">
                            <h2 className="text-3xl font-sans font-light tracking-tight text-ink mb-3">Send us a message</h2>
                            <p className="text-titanium">We'll respond within 2 minutes during business hours.</p>
                        </div>
                        <SmartForm />
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
                            <div className="w-1.5 h-1.5 bg-[#A18262] rounded-full shadow-[0_0_10px_#A18262]"></div>
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
                        className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#A18262] transition-colors shadow-lg active:scale-95"
                        aria-label="Zoom In"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </button>
                    <button
                        onClick={() => setZoom(prev => Math.max(prev - 1, 1))}
                        className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#A18262] transition-colors shadow-lg active:scale-95"
                        aria-label="Zoom Out"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </button>
                </div>

                {/* Location Card (Side) */}
                <div className="absolute z-20 bottom-8 left-4 md:bottom-12 md:left-12 w-full max-w-xs pointer-events-none">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl pointer-events-auto shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#A18262]/20 to-transparent rounded-bl-3xl"></div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-[#A18262] text-white flex items-center justify-center shrink-0 shadow-lg">
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
                                    className="inline-flex items-center gap-2 text-[#A18262] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group/link"
                                >
                                    Get Directions <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
