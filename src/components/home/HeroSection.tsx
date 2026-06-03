"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import GradientHero from "@/components/hero/GradientHero";
import BackgroundLoader from "@/components/shared/BackgroundLoader";

export default function HeroSection() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-canvas">
            <GradientHero
                color1="#9CA3AF"
                color2="#E5E7EB"
                initialColor="#E5E7EB"
            />

            <BackgroundLoader />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="flex flex-col items-center">
                    <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-6 py-3 rounded-[2rem] border border-black/5 text-titanium bg-white/50">
                        <span className="block md:inline">Commercial & Residential</span>
                        <span className="block md:inline md:ml-2">Property Maintenance</span>
                    </span>
                    <span className="text-6xl md:text-9xl font-serif tracking-tight mb-6 md:mb-8 leading-[0.9] text-ink animate-hero-fade block" style={{ animationDelay: '0s' }}>
                        <Balancer>Dakeek</Balancer>
                    </span>
                    <span className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12 uppercase tracking-widest animate-hero-fade block" style={{ animationDelay: '0.3s' }}>
                        <Balancer>Technical Services Co. L.L.C</Balancer>
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                    <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                        <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Book Now</span>
                        <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </Link>
                    <Link href="/services" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-ink rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                        Explore Services
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-[#999] animate-bounce">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </section>
    );
}
