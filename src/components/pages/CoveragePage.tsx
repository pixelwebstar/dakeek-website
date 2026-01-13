"use client";

import React from "react";
import Link from "next/link";
import { Check, Shield, Award, MapPin } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import GradientHero from "@/components/hero/GradientHero";
import { DUBAI_AREAS } from "@/lib/constants";

export default function CoveragePage() {
    return (
        <main className="min-h-screen bg-[#FDFCF8] text-[#111] overflow-x-hidden selection:bg-bronze selection:text-white font-sans">

            {/* 1. HERO: Golden Standard */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E5E5E5] border-b border-[#D4D4D4]">
                <div className="absolute inset-0 z-0">
                    <GradientHero
                        color1="#a8a29e"
                        color2="#d6d3d1"
                        initialColor="#e7e5e4"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#333] bg-white/50">
                        Service Excellence
                    </p>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-[#111] animate-hero-fade" style={{ animationDelay: '0s' }}>
                        Coverage.
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#333] mb-12 uppercase tracking-widest animate-hero-fade" style={{ animationDelay: '0.3s' }}>
                        Precision In Every District
                    </p>

                    <div className="flex justify-center gap-4 animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <Link href="#coverage" className="group relative inline-flex items-center justify-center px-12 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">View Map</span>
                            <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-[#111] rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Book Service
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. THE STANDARD (Quality Assurance) */}
            <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-white border-b border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif text-[#111] mb-8 leading-tight">
                                We don't just fix things.<br />
                                <span className="text-stone-400 italic">We engineer solutions.</span>
                            </h2>
                            <p className="text-lg text-[#555] font-light leading-relaxed mb-12 max-w-xl">
                                The Dakeek Standard is built on three pillars: technical rigour, absolute transparency, and unwavering respect for your home.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Vetted Professionals", desc: "Full-time, in-house staff. No freelancers, ever." },
                                    { title: "Warranty Guaranteed", desc: "30-day workmanship warranty on every single job." },
                                    { title: "Transparent Pricing", desc: "Itemized quotes pending your approval before work begins." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-bronze">
                                            {i === 0 ? <Shield className="w-5 h-5" /> : i === 1 ? <Award className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif text-[#111]">{item.title}</h3>
                                            <p className="text-sm text-[#666] font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Image/Box */}
                        <div className="relative h-[600px] w-full bg-stone-100 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-5 bg-[url('/images/noise.svg')] bg-repeat" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-12 border border-black/5 bg-white/50 backdrop-blur-sm max-w-sm rounded-xl">
                                    <h3 className="text-6xl font-serif text-bronze mb-4">500+</h3>
                                    <p className="font-mono text-xs uppercase tracking-widest text-[#111]">Hours of Training Per Technician</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COVERAGE AREAS (The Grid) */}
            <section id="coverage" className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-[#FAFAF9]">
                <SectionWrapper>
                    <div className="text-center mb-16 px-4">
                        <span className="font-mono text-xs text-bronze uppercase tracking-widest mb-4 block">Our Territory</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Serving Dubai's Premier Communities</h2>
                        <p className="text-[#555] font-light max-w-2xl mx-auto">
                            Our fleet is strategically positioned to ensure rapid response times to major freehold areas typically within 60 minutes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                        {DUBAI_AREAS.map((area, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-3 p-4 bg-white border border-black/5 rounded-xl hover:border-bronze/30 hover:shadow-lg transition-all duration-300"
                            >
                                <MapPin className="w-4 h-4 text-stone-300 group-hover:text-bronze transition-colors" />
                                <span className="text-sm font-medium text-[#444] group-hover:text-[#111] transition-colors">
                                    {area}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-sm text-[#777] mb-8">
                            Don't see your area listed? We likely still cover it.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#111] text-white rounded-full hover:bg-bronze transition-colors shadow-lg">
                            <span className="font-mono text-xs uppercase tracking-[0.2em]">Check Availability</span>
                        </Link>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
