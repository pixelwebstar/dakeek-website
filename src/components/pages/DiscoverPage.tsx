"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Instagram, Facebook, Phone, MessageSquare, Globe, Search } from "lucide-react";
import { DUBAI_AREAS } from "@/lib/constants";

export default function DiscoverPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#C4A67C] selection:text-white">

            {/* 1. HERO: The Network */}
            <section className="relative px-[5vw] lg:px-[8vw] py-32 lg:py-48 border-b border-white/10 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C4A67C] opacity-5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-6">
                        The Dakeek Universe
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter mb-8 leading-[0.9]">
                        Digital <span className="text-stone-500">Footprint.</span>
                    </h1>
                    <p className="text-xl text-stone-400 font-light max-w-2xl leading-relaxed">
                        Explore our connected ecosystem. From verified service locations to our latest digital insights.
                        Direct access to every channel.
                    </p>
                </div>
            </section>

            {/* 2. SOCIAL MATRIX: The Hub */}
            <section className="py-24 px-[5vw] lg:px-[8vw] border-b border-white/10 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-px bg-[#C4A67C]"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Official Channels</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Instagram Card - Visual */}
                        <a href="https://www.instagram.com/dakeektechnicalservice/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 p-[2px]">
                                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                                    <Instagram className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-sans mb-2">Instagram</h3>
                                <p className="text-sm font-mono text-stone-500 uppercase tracking-wider">@dakeektechnicalservice</p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </a>

                        {/* LinkedIn Card - Professional */}
                        <a href="https://www.linkedin.com/company/dakeek-technical-service-co-llc/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square p-8 border border-white/10 bg-white/5 hover:bg-[#0077b5]/10 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-[#0077b5] flex items-center justify-center rounded-sm">
                                <span className="font-bold text-white text-xl">in</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-sans mb-2">LinkedIn</h3>
                                <p className="text-sm font-mono text-stone-500 uppercase tracking-wider">Corporate Profile</p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0077b5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </a>

                        {/* Location Card - Map */}
                        <a href="https://www.google.com/maps/search/?api=1&query=Anzar+Gallery+Building+Al+Karama+Dubai" target="_blank" rel="noopener noreferrer" className="group relative aspect-square p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between md:col-span-2 lg:col-span-1">
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                {/* Abstract Map Pattern */}
                                <svg className="w-full h-full" width="100%" height="100%">
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone-500" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>
                            <div className="relative z-10 flex justify-between items-start">
                                <MapPin className="w-8 h-8 text-[#C4A67C]" />
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-sans mb-2">Headquarters</h3>
                                <p className="text-sm font-mono text-stone-500 uppercase tracking-wider mb-2">Al Karama, Dubai</p>
                                <p className="text-xs text-stone-600">25.2532° N, 55.3089° E</p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C4A67C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </a>

                        {/* WhatsApp - Direct */}
                        <a href="https://wa.me/971542472151" target="_blank" rel="noopener noreferrer" className="group relative aspect-video md:aspect-auto border border-white/10 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-center items-center text-center p-8">
                            <MessageSquare className="w-10 h-10 text-[#25D366] mb-4" />
                            <h3 className="text-xl font-sans text-white mb-2">WhatsApp Priority</h3>
                            <p className="font-mono text-xs text-[#25D366] uppercase tracking-widest">Start Chat</p>
                        </a>

                        {/* Phone - Direct */}
                        <a href="tel:+971542472151" className="group relative aspect-video md:aspect-auto border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-center items-center text-center p-8">
                            <Phone className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-sans text-white mb-2">24/7 Support</h3>
                            <p className="font-mono text-xs text-stone-500 uppercase tracking-widest">+971 54 247 2151</p>
                        </a>

                        {/* Website - Global */}
                        <Link href="/" className="group relative aspect-video md:aspect-auto border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-center items-center text-center p-8">
                            <Globe className="w-10 h-10 text-[#C4A67C] mb-4" />
                            <h3 className="text-xl font-sans text-white mb-2">Global Site</h3>
                            <p className="font-mono text-xs text-stone-500 uppercase tracking-widest">www.dakeek.ae</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. SEO GRID: Service Territory */}
            <section className="py-32 px-[5vw] lg:px-[8vw] bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                        <div>
                            <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-4">
                                Our Reach
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white">
                                Service Territories
                            </h2>
                        </div>
                        <p className="text-stone-500 max-w-sm text-right mt-8 md:mt-0 font-light">
                            Deploying certified technicians to 30+ key communities across Dubai within 60 minutes.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {DUBAI_AREAS.map((area, index) => (
                            <Link href="/" key={index} className="group block">
                                <div className="h-px w-full bg-white/10 mb-4 group-hover:bg-[#C4A67C] transition-colors duration-500" />
                                <h3 className="text-lg font-sans text-stone-300 group-hover:text-white transition-colors flex items-center justify-between">
                                    {area}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#C4A67C]" />
                                </h3>
                                <p className="text-[10px] uppercase tracking-widest text-[#333] group-hover:text-stone-600 transition-colors mt-2 font-mono">
                                    Active Coverage
                                </p>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}
