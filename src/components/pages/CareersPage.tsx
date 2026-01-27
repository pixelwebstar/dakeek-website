"use client";

import React from "react";
import { Briefcase, ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import GradientHero from "../hero/GradientHero";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C4A67C] selection:text-white">

            {/* 1. HERO: Exact Replica of Home Page Design */}
            <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-canvas">
                <GradientHero
                    color1="#9CA3AF"
                    color2="#E5E7EB"
                    initialColor="#E5E7EB"
                />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="flex flex-col items-center">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                            Talent Acquisition
                        </span>
                        <span className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink animate-hero-fade block" style={{ animationDelay: '0s' }}>
                            <Balancer>Join the Elite.</Balancer>
                        </span>
                        <span className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12 animate-hero-fade block" style={{ animationDelay: '0.3s' }}>
                            <Balancer>
                                We don&apos;t just hire technicians. We recruit craftsmen who define the standard for luxury home maintenance in Dubai.
                            </Balancer>
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <a
                            href="mailto:careers@dakeek.ae"
                            className="group relative inline-flex items-center justify-center px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl"
                        >
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Apply Now</span>
                            <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-[#999] animate-bounce">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
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

            {/* 3. LIGHT SECTION: "Equipped for Excellence" (The Rhythm Breaker) */}
            <section className="py-24 px-[5vw] lg:px-[8vw] bg-[#FAFAF9] text-[#111] border-y border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="inline-block font-mono text-xs text-[#6B5344] uppercase tracking-[0.3em] mb-2">
                                The Environment
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                                Equipped to <br />
                                <span className="italic text-[#C4A67C]">Perform.</span>
                            </h2>
                            <p className="text-[#444] text-lg leading-relaxed">
                                We provide the tools you need to do your best work. Dakeek technicians operate from organized, fully stocked vans and use quality professional equipment.
                            </p>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[#111]">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-serif text-lg">Clear Job Details</div>
                                        <div className="text-xs font-mono uppercase text-[#666] tracking-wider">Organized Schedule</div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[#111]">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-serif text-lg">Professional Gear</div>
                                        <div className="text-xs font-mono uppercase text-[#666] tracking-wider">Quality Uniforms</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Visual Abstract - Typography/Grid */}
                        <div className="w-full md:w-1/2 relative h-[500px] border border-black/10 rounded-2xl overflow-hidden bg-white p-8 md:p-12 flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Star className="w-32 h-32" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl md:text-8xl font-serif text-[#111]">100%</div>
                                <div className="text-sm font-mono uppercase tracking-[0.2em] text-[#666]">Support Ratio</div>
                            </div>
                            <div className="space-y-6">
                                <p className="text-[#333] font-light italic text-xl border-l-2 border-[#C4A67C] pl-6">
                                    &quot;You focus on the fix. We handle the logistics, the bookings, and the client. Complete freedom to practice your craft.&quot;
                                </p>
                                <div className="text-xs font-bold uppercase tracking-widest text-[#111]">— Operations Command</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. VALUES (SEO Content) */}
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
