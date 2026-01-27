"use client";

import React from "react";
import { Briefcase, ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import Link from "next/link";
import GradientHero from "../hero/GradientHero";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C4A67C] selection:text-white">

            {/* 1. HERO: Premium Dark - "Join The Elite" */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[#0A0A0A]">
                    <div className="absolute inset-0 bg-[url('/images/texture-noise.png')] opacity-20 Mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/50 to-[#0A0A0A]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6 inline-block px-4 py-2 rounded-full border border-white/10 text-[#888] bg-white/5 backdrop-blur-md">
                        Talent Acquisition
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans tracking-tight mb-8 leading-[0.9] text-white">
                        Join the <span className="text-[#C4A67C]">Elite.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-stone-400 mb-12">
                        We don't just hire technicians. We recruit craftsmen who define the standard for luxury home maintenance in Dubai.
                    </p>
                </div>
            </section>

            {/* 2. NO VACANCY / WAITLIST */}
            <section className="py-32 px-[5vw] lg:px-[8vw] bg-[#0A0A0A] relative">
                <div className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 p-12 md:p-20 rounded-2xl backdrop-blur-sm relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C4A67C]/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-[#C4A67C]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#C4A67C]/20">
                            <Briefcase className="w-8 h-8 text-[#C4A67C]" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">No Current Openings.</h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                            Our team is currently at full capacity. However, we are always scouting for exceptional talent to join our reserve list for future deployments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left bg-black/20 p-8 rounded-xl border border-white/5">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <ShieldCheck className="w-4 h-4 text-[#C4A67C]" />
                                    <span>Vetted Skills</span>
                                </div>
                                <p className="text-xs text-stone-500 uppercase tracking-wider">Top 1% Only</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <Star className="w-4 h-4 text-[#C4A67C]" />
                                    <span>Premium Pay</span>
                                </div>
                                <p className="text-xs text-stone-500 uppercase tracking-wider">Above Market Rates</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <Users className="w-4 h-4 text-[#C4A67C]" />
                                    <span>Top Culture</span>
                                </div>
                                <p className="text-xs text-stone-500 uppercase tracking-wider">Growth Focused</p>
                            </div>
                        </div>

                        <a
                            href="mailto:careers@dakeek.ae?subject=Application for Reserve List - [Your Name]"
                            className="group relative inline-flex items-center justify-center px-12 py-4 bg-white text-black overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl hover:shadow-[#C4A67C]/20"
                        >
                            <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                Apply for Reserve List
                            </span>
                            <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </a>
                        <p className="mt-6 text-xs text-stone-600 font-mono uppercase tracking-widest">
                            Send CV & Portfolio
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. VALUES (SEO Content) */}
            <section className="py-24 px-[5vw] lg:px-[8vw] border-t border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-[#C4A67C] font-mono text-xs uppercase tracking-widest block mb-4">Why Dakeek?</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">Defining the Standard.</h2>
                        <p className="text-stone-400 leading-relaxed mb-6">
                            Dakeek isn't just a maintenance company; it's a promise of perfection. working here means adhering to the strictest standards in Dubai's residential service sector.
                        </p>
                        <p className="text-stone-400 leading-relaxed">
                            We serve exclusive communities like Palm Jumeirah, Emirates Hills, and Downtown Dubai. Our clients expect invisibility, precision, and technical mastery. If you have these traits, you belong here.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                            <h3 className="text-xl text-white font-serif mb-3">AC Technicians</h3>
                            <p className="text-sm text-stone-500">Masters of cooling efficiency, ductwork, and smart climate control systems.</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                            <h3 className="text-xl text-white font-serif mb-3">Master Plumbers</h3>
                            <p className="text-sm text-stone-500">Experts in leak detection, pressure optimization, and luxury fixture care.</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                            <h3 className="text-xl text-white font-serif mb-3">Electricians</h3>
                            <p className="text-sm text-stone-500">Certified for smart home integration, safety audits, and complex wiring.</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                            <h3 className="text-xl text-white font-serif mb-3">Specialists</h3>
                            <p className="text-sm text-stone-500">From furniture assembly to specialized deep cleaning protocols.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
