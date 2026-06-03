"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Clock, PenTool, Search, Award, CheckCircle } from "lucide-react";
import { useState } from "react";

import GradientHero from "@/components/hero/GradientHero";

export default function AboutPage() {
    const [copied, setCopied] = useState(false);

    const handleCopyLicense = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("1382290");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        window.open("https://app.invest.dubai.ae/search-license", "_blank");
    };

    return (
        <main className="bg-[#111] min-h-screen text-white overflow-x-hidden selection:bg-[#C4A67C] selection:text-white">

            {/* 1. HERO: The Arrival (Light - Clarity) - REVERTED TO CLEAN */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E7E5E4] border-b border-black/5 text-[#111]">
                <div className="absolute inset-0 z-0">
                    <GradientHero
                        color1="#9CA3AF"
                        color2="#E5E7EB"
                        initialColor="#E5E7EB"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50">
                        Our Promise Internal
                    </p>
                    <h1 className="text-6xl md:text-9xl font-serif tracking-tight mb-6 md:mb-8 leading-[0.9] text-[#111] animate-hero-fade" style={{ animationDelay: '0s' }}>
                        Origins
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#555] mb-12 uppercase tracking-widest animate-hero-fade" style={{ animationDelay: '0.3s' }}>
                        Built Different By Design
                    </p>

                    <div className="flex justify-center gap-4 animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Book a Visit</span>
                            <div className="absolute inset-0 bg-[#5A4A32] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="#story" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-[#111] rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Our Story
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#111]/30 animate-pulse">
                    <span className="sr-only">Scroll Down</span>
                    <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
            </section>

            {/* 2. THE CONFLICT: "The Intruder" (Dark - Tension) - REPLANNED (Image Added) */}
            <section
                className="relative py-32 md:py-48 bg-[#111]"
            >
                <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-stone-400">The Reality</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] tracking-tight mb-8">
                            The world is <span className="text-white font-light">loud</span>.
                            <br />
                            Your home should be where the noise stops.
                        </h2>
                        <p className="text-lg font-light text-gray-300 leading-relaxed mb-8">
                            But when a pipe bursts, or the AC dies, that silence is broken.
                            We know the anxiety that follows. The panicked calls. The 4-hour windows.
                        </p>
                        <p className="text-lg font-light text-gray-400 leading-relaxed border-l border-white/20 pl-6">
                            The stranger walking through your door with muddy boots.
                            It feels like an invasion. <span className="text-white font-medium">It doesn&apos;t have to be.</span>
                        </p>
                    </div>

                    {/* Visual Column - Added Image as requested */}
                    <div className="relative h-[500px] w-full group overflow-hidden rounded-2xl order-2 md:order-1">
                        <Image
                            src="/images/ac_vent_minimal.png"
                            alt="Noise vs Silence"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        {/* Noise Overlay for Texture */}
                        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                    </div>
                </div>
            </section>

            {/* 3. THE ORIGIN: "It Started with a Leak" (Light - The Resolution) */}
            <section id="story" className="relative py-32 bg-[#FAFAF9] text-[#1C1917] border-y border-[#E7E5E4]" >
                <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#6B5344] mb-8 block bg-[#6B5344]/10 w-fit px-3 py-1 rounded-sm">The Origin</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-10 leading-[0.9] tracking-tight text-[#111]">Built for the <span className="text-stone-500">heart of Deira.</span></h2>
                        <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                            <p className="text-base md:text-lg">
                                Founded two years ago in the heart of Al Mateena St, Dakeek was born from a simple observation: while Deira is the historic core of Dubai, its property maintenance services often lacked modern precision.
                            </p>
                            <p className="text-lg md:text-xl text-[#111]">
                                Our founder, operating from the Xavier Business Center in the BN Building, set out to create a service that treats every 20km radius around Deira with the same urgency as a high-rise in Downtown.
                            </p>
                            <p className="text-lg md:text-xl text-stone-500">
                                In just 24 months, we&apos;ve become the neighborhood&apos;s most trusted technical team. Where &quot;locally based&quot; means we&apos;re at your door in Al Mateena or Deira while others are still stuck in traffic.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[600px] w-full shadow-sm group">
                        <Image
                            src="/images/plumbing_brass_detail.png" // Local premium image
                            alt="Brass Pipe Detail"
                            fill
                            className="object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                </div>
            </section>


            {/* 4. THE SOLUTION: "Our Commitment" (Dark - Authority) - COLOR FIX */}
            <section className="relative bg-[#080808] text-white overflow-hidden" >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                    {/* Image Side - Fixed "Black Box" issue by using Next/Image proper import and sizing */}
                    <div className="relative h-[60vh] lg:h-auto w-full bg-[#111]">
                        <Image
                            src="/images/guardian_technician.png"
                            alt="Dakeek Technician"
                            fill
                            className="object-cover opacity-90"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#080808]" />
                    </div>

                    {/* Text Side */}
                    <div className="flex flex-col justify-center px-8 lg:px-24 py-24 lg:py-0 bg-[#111]">
                        <div className="inline-flex items-center gap-3 mb-12">
                            <Shield className="w-5 h-5 text-[#C4A67C]" />
                            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Our Commitment</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-12 leading-[0.9] text-white tracking-tighter">
                            Reliable service. <br />
                            <span className="font-serif text-gray-400">Professional care.</span>
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed mb-16 max-w-lg border-l-2 border-[#C4A67C]/30 pl-8">
                            Dakeek was built to set a new standard. We believe that the person entering your home should be professional, respectful, and skilled.
                            Verified backgrounds. Clean uniforms. Quality work.
                        </p>
                        <div className="grid grid-cols-2 gap-12 mb-6 border-t border-white/10 pt-12">
                            <div>
                                <h4 className="text-3xl font-serif text-white mb-2">Expert</h4>
                                <p className="text-xs font-mono uppercase text-gray-500 tracking-widest">Skilled Technicians</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-white mb-2">Trusted</h4>
                                <p className="text-xs font-mono uppercase text-gray-500 tracking-widest">Background Checked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR PROCESS: "Before We Knock" (Light - Transparency) - REPLANNED (Added Side Image) */}
            <section className="py-32 bg-white relative overflow-hidden text-[#111]" >
                {/* Subtle Grid Background */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#E5E5E5 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }}></div>

                <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                    {/* Left: Text Content */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <Clock className="w-6 h-6 text-[#6B5344]" />
                            <span className="font-mono text-xs uppercase tracking-widest text-[#111]">The Process</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-16 text-[#111] leading-tight">Our Process. <span className="text-stone-400 block">Before we arrive.</span></h2>

                        <div className="space-y-12">
                            <div className="relative group">
                                <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#6B5344]" />
                                <div className="pl-8 border-l border-[#E5E5E5] group-hover:border-[#6B5344] transition-colors duration-500 pb-2">
                                    <h3 className="text-2xl font-sans text-[#111] mb-4 tracking-tight">01. The Preparation</h3>
                                    <p className="text-stone-500 font-light text-sm leading-relaxed">
                                        Every morning, uniforms are inspected. Tools are checked. The van is organized. Disorder in the van leads to disorder in your home.
                                    </p>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#111]" />
                                <div className="pl-8 border-l border-[#E5E5E5] group-hover:border-[#111] transition-colors duration-500 pb-2">
                                    <h3 className="text-2xl font-sans text-[#111] mb-4 tracking-tight">02. The Threshold</h3>
                                    <p className="text-stone-500 font-light text-sm leading-relaxed">
                                        We pause at your door. We wear fresh shoe covers. We check our ID badge. We are entering your home, and we treat it with respect.
                                    </p>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#111]" />
                                <div className="pl-8 border-l border-[#E5E5E5] group-hover:border-[#111] transition-colors duration-500 pb-2">
                                    <h3 className="text-2xl font-sans text-[#111] mb-4 tracking-tight">03. The Explanation</h3>
                                    <p className="text-stone-500 font-light text-sm leading-relaxed">
                                        We don&apos;t just start drilling. We look you in the eye, explain the issue, show you the price, and ask for permission.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual (Added Image) */}
                    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl skew-y-1">
                        <Image
                            src="/images/services/cleaning.png"
                            alt="Clean Process"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay" />
                    </div>

                </div>
            </section>



            {/* 6. THE ETHOS: The Pillars (Dark - Intimacy) */}
            <section className="py-32 relative bg-[#0A0A0A] overflow-hidden">
                <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                        {/* Header */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-[#C4A67C]/50"></div>
                                <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">The Foundation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.1]">
                                Built on <br />
                                <span className="text-white/40">unshakeable</span> <br />
                                values.
                            </h2>
                            <p className="text-stone-400 font-light leading-relaxed max-w-sm">
                                We don&apos;t just repair homes. We restore peace of mind. Every action we take is guided by three core principles.
                            </p>
                        </div>

                        {/* Cards - Cleaned up visual noise */}
                        <div className="lg:col-span-8 space-y-24 lg:space-y-32 lg:pt-8">
                            {[
                                {
                                    title: "Transparency",
                                    subtitle: "The First Rule",
                                    desc: "No hidden costs. No 'we'll see'. You know the name, face, and price before we arrive. We believe trust is the only currency that matters.",
                                    icon: <Search className="w-6 h-6" />
                                },
                                {
                                    title: "Empathy",
                                    subtitle: "The Human Element",
                                    desc: "We understand that a broken home is stressful. We arrive calm, prepared, and ready to listen. We treat your home with the same care as our own.",
                                    icon: <Heart className="w-6 h-6" />
                                },
                                {
                                    title: "Mastery",
                                    subtitle: "The Standard",
                                    desc: "We don't guess. We diagnose with engineering precision. If we fix it, it stays fixed. Good enough is never enough.",
                                    icon: <Award className="w-6 h-6" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="group relative border-l border-white/10 pl-12 py-4 hover:border-[#C4A67C] transition-colors duration-500">
                                    <h3 className="text-3xl font-sans text-white mb-6 group-hover:text-[#C4A67C] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-xl text-stone-300 font-light leading-relaxed max-w-2xl">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6.5. THE BRIDGE (Light - Spacer) [MOVED HERE] */}
            <section className="py-32 bg-[#E7E5E4] flex items-center justify-center border-t border-white/10">
                <div className="text-center max-w-4xl px-6">
                    <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#292524] leading-tight mb-12">
                        &quot;Trust is built in drops and lost in buckets. <br /> We guard every drop.&quot;
                    </p>
                    <div className="w-24 h-px bg-[#292524]/20 mx-auto" />
                </div>
            </section>

            {/* 7. LICENSE VERIFICATION: The Gold Standard */}
            <section className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
                {/* Decorative Mesh */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#A18262 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="relative w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw]">
                    <div className="relative p-8 lg:p-12 border border-[#222] bg-[#111]/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:border-[#C4A67C]/20 transition-all duration-700">

                        {/* Metallic Sheen Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 translate-x-32 group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-full bg-[#C4A67C]/10 text-[#C4A67C]">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Official Credentials</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 tracking-tight">
                                    Trusted & <span className="text-stone-500">Verified</span>
                                </h2>
                                <p className="text-stone-500 font-mono text-sm uppercase tracking-widest">
                                    Dakeek Technical Services L.L.C
                                </p>
                            </div>

                            <div className="flex flex-col items-start md:items-end">
                                <span className="font-mono text-xs text-stone-600 mb-2 uppercase tracking-wider">Dubai DET License No.</span>
                                <span className="text-5xl md:text-7xl font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-600 tracking-tighter">
                                    1382290
                                </span>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <p className="text-stone-400 font-light max-w-lg">
                                Fully licensed by the Dubai Department of Economy and Tourism.
                                We operate with absolute transparency—it&apos;s not just a policy, it&apos;s our promise.
                            </p>
                            <button
                                onClick={handleCopyLicense}
                                className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-[#C4A67C] text-white transition-all duration-300 border border-white/10 hover:border-[#C4A67C] group cursor-pointer"
                            >
                                <span className="font-mono text-xs uppercase tracking-widest">
                                    {copied ? "Copied License No." : "Verify License"}
                                </span>
                                {copied ? <CheckCircle className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. APP PROMO: Beautiful Redesign */}
            <section id="download-app" className="relative bg-[#F5F5F4] overflow-hidden py-32 lg:py-40">
                <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <div>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B5344] mb-6 block">The Dakeek App</span>
                        <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-[0.95] text-[#111] tracking-tight">
                            Control your <br />
                            <span className="text-[#999]">home.</span>
                        </h2>
                        <p className="text-xl text-[#555] font-light leading-relaxed mb-12 max-w-lg">
                            Book instantly. Track your technician in real-time. Manage reports.
                            The entire maintenance experience, reimagined for modern living.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {/* Apple Store Button - Black on White theme (Black Button) */}
                            <a href="#" className="flex items-center gap-4 px-8 py-4 bg-[#000] text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl group">
                                <div className="w-9 h-9 flex items-center justify-center">
                                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-full h-full"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-80">Download for</div>
                                    <div className="font-sans font-bold leading-none text-xl tracking-tight">Apple</div>
                                </div>
                            </a>

                            {/* Android Button - White on Black theme (White Button) */}
                            <a href="#" className="flex items-center gap-4 px-8 py-4 bg-white text-[#000] border border-[#E5E5E5] rounded-2xl hover:border-[#CCC] hover:scale-105 transition-all duration-300 shadow-lg group">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    {/* Android Button - User Provided Logo (Black) */}
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full text-black"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" /></svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60 text-[#666]">Download for</div>
                                    <div className="font-sans font-bold leading-none text-xl tracking-tight">Android</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: iPhone 15 Pro Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-[320px] h-[650px] bg-black rounded-[55px] border-[8px] border-[#222] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-center gap-2 px-1">
                                <div className="w-2 h-2 rounded-full bg-[#111]/50" />
                                <div className="w-10 h-1 rounded-full bg-[#111]" />
                            </div>

                            {/* Screen */}
                            <div className="absolute inset-0 bg-[#F5F5F4] text-[#111] font-sans flex flex-col">
                                {/* App Header */}
                                <div className="pt-16 px-6 pb-6 flex justify-between items-center">
                                    <div>
                                        <div className="text-xs font-mono uppercase text-[#6B5344] tracking-wider mb-1">Good Morning</div>
                                        <div className="text-xl font-medium tracking-tight">Valentine</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center shadow-sm">
                                        <span className="font-serif text-white text-lg">V</span>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="px-6 mb-8">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-[#111] text-white p-5 rounded-3xl aspect-square flex flex-col justify-between group">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                                <PenTool className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="font-medium text-lg leading-tight">Book<br />Service</span>
                                        </div>
                                        <div className="bg-white border border-[#E5E5E5] p-5 rounded-3xl aspect-square flex flex-col justify-between">
                                            <div className="w-10 h-10 rounded-full bg-[#FAFAF9] flex items-center justify-center">
                                                <div className="w-5 h-5 text-[#111]"><Search className="w-5 h-5" /></div>
                                            </div>
                                            <span className="font-medium text-lg text-[#111] leading-tight">My<br />Reports</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Service */}
                                <div className="px-6 flex-1">
                                    <div className="text-xs font-mono uppercase text-[#666] tracking-wider mb-4">Upcoming</div>
                                    <div className="bg-white rounded-3xl p-5 border border-[#E5E5E5] shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-[#6B5344]/10 rounded-xl text-[#6B5344]">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <span className="bg-[#111] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">Today, 2 PM</span>
                                        </div>
                                        <h4 className="text-lg font-bold mb-1">AC Maintenance</h4>
                                        <p className="text-sm text-[#666] mb-4">Jumeirah Golf Estates</p>
                                        <div className="flex items-center gap-3 pt-4 border-t border-dashed border-[#F0F0F0]">
                                            <div className="w-8 h-8 rounded-full bg-[#E5E5E5] overflow-hidden">
                                                <Image
                                                    src="/images/guardian_technician.png"
                                                    alt="Technician"
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-cover grayscale"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[#111]">Ahmed</div>
                                                <div className="text-[10px] uppercase tracking-wider text-[#666]">Technician</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Home Bar - Footer removed (Tab bar gone) */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#111]/20 rounded-full" />
                            </div>

                            {/* Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-[50px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FINALE: The Invitation */}
            <section className="bg-[#111] py-40 px-[5vw] lg:px-[8vw] text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C4A67C] mb-8">
                        The Conclusion
                    </p>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-12 tracking-tight">
                        Ready to <span className="text-stone-600">book?</span>
                    </h2>

                    <div className="flex flex-col items-center gap-8">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-16 py-6 bg-white text-[#111] overflow-hidden rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 font-mono text-sm font-medium uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                                Get a Free Quote
                            </span>
                            <div className="absolute inset-0 bg-[#C4A67C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                    </div>
                </div>
            </section>

        </main >
    );
}
