"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import dynamic from "next/dynamic";

const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#D1D5DB]" />,
});
import { ContactHero } from "@/components/contact/ContactHero";
import { SmartForm } from "@/components/contact/SmartForm";
// @ts-ignore
const TrustIndicators = dynamic(() => import("@/components/shared/TrustIndicators").then(mod => mod.TrustIndicators));
import SectionWrapper from "@/components/about/SectionWrapper";

export default function ContactPage() {
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
                            <h2 className="text-4xl font-serif italic text-ink mb-8">Get in Touch</h2>

                            {/* Phone */}
                            <motion.a
                                href="tel:800332533"
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
                                    <p className="text-lg font-medium text-ink group-hover:text-bronze transition-colors">800-DAKEEK</p>
                                </div>
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/971800332533"
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
                                href="mailto:hello@dakeek.ae"
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
                                    <p className="text-lg font-medium text-ink group-hover:text-bronze transition-colors">hello@dakeek.ae</p>
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
                        <p className="pl-6">AL QUOZ INDUSTRIAL AREA 4</p>
                        <p className="pl-6">LICENSE NO. 827192</p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="relative h-full bg-canvas flex items-center justify-center p-6 lg:p-24">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="w-full max-w-xl relative z-10">
                        <div className="mb-8">
                            <h2 className="text-3xl font-serif italic text-ink mb-3">Send us a message</h2>
                            <p className="text-titanium">We'll respond within 2 minutes during business hours.</p>
                        </div>
                        <SmartForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
