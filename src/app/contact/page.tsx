"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import HyperHero from "@/components/hero/HyperHero";
import { ContactHero } from "@/components/contact/ContactHero";
import { SmartForm } from "@/components/contact/SmartForm";
import { TrustIndicators } from "@/components/shared/TrustIndicators";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-[#FAFAF9] text-[#111] overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-multiply"></div>

            {/* HERO SECTION WITH HYPERHERO */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* HyperHero Background - Silver/Aluminum */}
                <HyperHero
                    color1="#C0C0C0" // Silver
                    color2="#E8E8E8" // Aluminum
                    initialColor="#E8E8E8"
                />

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-4 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5 text-[#A18262] bg-white/50">
                            24/7 Support
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-serif italic leading-[0.9] mb-8 text-[#111]"
                    >
                        Let's Fix It. <br />
                        <span className="text-[#A18262]">Together.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-[#444] mb-12"
                    >
                        Tell us what's broken, and we'll dispatch a verified technician to your doorstep. <br className="hidden md:block" />
                        No hassle. No waiting.
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E5E5E5] shadow-lg">
                            <span className="font-mono text-sm">
                                <span className="font-bold text-[#A18262]">2 min</span> Avg Response
                            </span>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E5E5E5] shadow-lg">
                            <span className="font-mono text-sm">
                                <span className="font-bold text-[#A18262]">24/7</span> Available
                            </span>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E5E5E5] shadow-lg">
                            <span className="font-mono text-sm">
                                <span className="font-bold text-[#A18262]">50+</span> Technicians
                            </span>
                        </div>
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

            {/* MAIN CONTACT SECTION */}
            <section className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FAFAF9]">

                {/* Left Column: Contact Info & Map */}
                <div className="relative flex flex-col justify-between p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#E5E5E5] bg-white">
                    <div className="space-y-12">
                        {/* Contact Methods */}
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif italic text-[#111] mb-8">Get in Touch</h2>

                            {/* Phone */}
                            <motion.a
                                href="tel:800332533"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#A18262] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Call Us</p>
                                    <p className="text-lg font-medium text-[#111] group-hover:text-[#A18262] transition-colors">800-DAKEEK</p>
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
                                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">WhatsApp</p>
                                    <p className="text-lg font-medium text-[#111] group-hover:text-green-500 transition-colors">Chat with us</p>
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
                                <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Email</p>
                                    <p className="text-lg font-medium text-[#111] group-hover:text-[#A18262] transition-colors">hello@dakeek.ae</p>
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
                                <div className="w-12 h-12 rounded-full bg-[#F5F5F4] text-[#A18262] flex items-center justify-center">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Hours</p>
                                    <p className="text-lg font-medium text-[#111]">24/7 Emergency</p>
                                    <p className="text-sm text-gray-500">8 AM - 10 PM Standard</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Map Visual */}

                    </div>

                    {/* Footer Info */}
                    <div className="hidden lg:block space-y-2 text-sm text-slate-500 font-mono pt-12 border-t border-[#E5E5E5] mt-12">
                        <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            DUBAI HEADQUARTERS
                        </p>
                        <p className="pl-6">AL QUOZ INDUSTRIAL AREA 4</p>
                        <p className="pl-6">LICENSE NO. 827192</p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="relative h-full bg-[#FAFAF9] flex items-center justify-center p-6 lg:p-16">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="w-full max-w-xl relative z-10">
                        <div className="mb-8">
                            <h2 className="text-3xl font-serif italic text-[#111] mb-3">Send us a message</h2>
                            <p className="text-gray-600">We'll respond within 2 minutes during business hours.</p>
                        </div>
                        <SmartForm />
                    </div>
                </div>
            </section>


        </main>
    );
}

