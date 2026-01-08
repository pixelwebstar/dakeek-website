"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Shield, Heart, Clock, PenTool, Check, Phone, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/about/SectionWrapper";
import ImageWithFallback from "@/components/shared/ImageWithFallback";

const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#E7E5E4]" />,
});

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax & Opacity transforms
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

    const storyY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
    const storyOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

    return (
        <main ref={containerRef} className="bg-[#0c0c0c] min-h-screen text-white overflow-x-hidden selection:bg-bronze selection:text-white">

            {/* SECTION 1: HERO (Hyper Metal - From GitHub) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E7E5E4] border-b border-structure text-[#111]">
                <div className="absolute inset-0 z-0">
                    <HyperHero
                        color1="#A8A29E" // Stone 400 (Human/Warm)
                        color2="#E7E5E4" // Stone 200
                        initialColor="#E7E5E4"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
                    <div className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50">
                        <span className="w-2 h-2 rounded-full bg-bronze animate-pulse inline-block mr-2" />
                        Our Promise
                    </div>

                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-[#111]">
                        Built Different.
                    </h1>

                    {/* Minimal Tags as requested */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {["Background-checked & verified", "No surprise visits", "Full-time Employees"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-sm">
                                <Check className="w-3 h-3 text-bronze" strokeWidth={1.5} />
                                <span className="font-mono text-[10px] uppercase tracking-wider text-[#111]">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="group relative px-12 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-sm font-medium uppercase tracking-[0.2em]">Book a Visit</span>
                            <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="#story" className="px-12 py-4 border border-black/10 text-[#111] rounded-full font-mono text-sm font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Our Story
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#111]/30">
                    <span className="sr-only">Scroll Down</span>
                </div>
            </section>

            {/* 2. THE CONFLICT: "The Intruder" (Text Reveal) */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative py-32 px-[5vw] md:px-[10vw] max-w-4xl mx-auto"
            >
                <p className="text-3xl md:text-5xl font-serif text-stone-300 leading-snug">
                    <span className="text-bronze">The world is loud.</span> Your home is the only place where the noise stops.
                    But when a pipe bursts, or the AC dies, that silence is broken.
                </p>
                <p className="mt-12 text-xl md:text-2xl font-light text-stone-500 leading-relaxed">
                    We know the anxiety that follows. The frantic calls. The 4-hour windows. The stranger walking through your door with muddy boots.
                    It feels like an invasion.
                </p>
            </motion.section>

            {/* 2b. THE ORIGIN: "It Started with a Leak" (New Content) */}
            <section className="relative py-32 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[600px] w-full rotate-3 transform hover:rotate-0 transition-all duration-700 opacity-80 hover:opacity-100">
                        <Image
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" // Blueprint/Sketch/Coffee
                            alt="Origins"
                            fill
                            className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-bronze mb-6 block">The Origin</span>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8">It started with a Sunday morning leak.</h2>
                        <div className="prose prose-lg text-stone-400 font-light leading-relaxed space-y-6">
                            <p>
                                Ten years ago, our founder woke up to water dripping from the ceiling. He called a "24/7" service.
                                They arrived 6 hours late. They didn't have the part. They tracked mud on the carpet and left a bill that changed three times.
                            </p>
                            <p>
                                <h3 className="text-xl md:text-2xl font-light leading-relaxed text-stone-300">
                                    The founder of Dakeek noticed a gap in the market. Homes were beautiful, but the care they received was often unreliable.
                                    <br /><br />
                                    So he built Dakeek not just as a maintenance company, but as a professional service provider.
                                    Where "on time" means to the minute. Where "clean" means spotless.
                                    And where every technician is someone you can trust.
                                </h3>    </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. THE SOLUTION: "Our Commitment" */}
            <section className="relative border-t border-white/5 bg-[#111]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Side - Matches Text Height */}
                    <div className="relative min-h-[400px] lg:min-h-full h-full w-full overflow-hidden group">
                        <ImageWithFallback
                            src="/images/about/guardian.jpg"
                            alt="Professional Service"
                            fill
                            className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
                    </div>
                    {/* Text Side */}
                    <div className="flex flex-col justify-center px-8 lg:px-24 py-16 lg:py-24">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <Shield className="w-5 h-5 text-bronze" />
                            <span className="font-mono text-xs uppercase tracking-widest text-bronze">Our Commitment</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-sans mb-8 leading-none text-white">
                            Reliable service. <br />
                            <span className="font-serif italic text-stone-400">Professional care.</span>
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-12">
                            Dakeek was built to set a new standard. We believe that the person entering your home should be professional, respectful, and skilled.
                            Verified backgrounds. Clean uniforms. Quality work.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-6">
                            <div>
                                <h4 className="text-2xl font-serif text-white mb-2">Expert</h4>
                                <p className="text-xs font-mono uppercase text-stone-500">Skilled Technicians</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-serif text-white mb-2">Trusted</h4>
                                <p className="text-xs font-mono uppercase text-stone-500">Background Checked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3b. OUR PROCESS: "Before We Knock" */}
            <section className="py-32 bg-[#080808] relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-[5vw] text-center relative z-10">
                    <Clock className="w-8 h-8 text-bronze mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-serif mb-16 text-white/90">Our Process. <span className="italic text-stone-600">Before we arrive.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div className="relative pl-8 border-l border-white/10">
                            <span className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-bronze" />
                            <h3 className="text-xl font-sans text-white mb-4">The Preparation</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                Every morning, uniforms are inspected. Tools are checked. The van is organized. Disorder in the van leads to disorder in your home. We start with organization.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l border-white/10">
                            <span className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-700" />
                            <h3 className="text-xl font-sans text-white mb-4">The Threshold</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                We pause at your door. We wear fresh shoe covers. We check our ID badge. We are entering your home, and we treat it with respect.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l border-white/10">
                            <span className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-700" />
                            <h3 className="text-xl font-sans text-white mb-4">The Explanation</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                We don't just start drilling. We look you in the eye, explain the issue, show you the price, and ask for permission. You are in control. Always.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE ETHOS: Interactive Cards (Heart Touching) */}
            <section className="py-32 px-[5vw] relative bg-[#0c0c0c]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <Heart className="w-8 h-8 text-bronze mx-auto mb-6 animate-pulse" />
                        <h2 className="text-4xl md:text-7xl font-serif mb-6">Built on Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Transparency",
                                desc: "No hidden costs. No 'we'll see'. You know the name, face, and price before we arrive.",
                                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" // Clarity
                            },
                            {
                                title: "Empathy",
                                desc: "We understand that a broken home is stressful. We arrive calm, prepared, and ready to listen.",
                                image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80" // Connection
                            },
                            {
                                title: "Mastery",
                                desc: "We don't guess. We diagnose with engineering precision. If we fix it, it stays fixed.",
                                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" // Technical
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="relative h-[500px] overflow-hidden rounded-sm group bg-stone-900"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-10 flex flex-col justify-end">
                                    <h3 className="text-3xl font-serif mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{item.title}</h3>
                                    <p className="text-stone-400 font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LICENSE VERIFICATION: Official Credentials */}
            <section className="py-32 bg-[#0c0c0c] relative border-t border-white/5">
                <div className="max-w-4xl mx-auto px-[5vw] text-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-bronze mb-4 block">Verify Our Credentials</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-8">Officially <span className="italic text-stone-500">Licensed</span></h2>

                    <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                        Dakeek Technical Services is fully licensed and registered with the Dubai Department of Economy and Tourism.
                        You can verify our credentials directly on the official government portal.
                    </p>

                    {/* License Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-10 md:p-14 mb-10 max-w-xl mx-auto"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-bronze/10 flex items-center justify-center">
                                <Shield className="w-10 h-10 text-bronze" />
                            </div>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-2">Trade License Number</p>
                                <p className="text-5xl md:text-6xl font-serif text-white tracking-wide">1382290</p>
                            </div>
                            <p className="text-xs font-mono uppercase tracking-wider text-stone-600">
                                Dakeek Technical Services L.L.C
                            </p>
                        </div>
                    </motion.div>

                    {/* Verify Button */}
                    <a
                        href="https://app.invest.dubai.ae/search-license"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-bronze text-white rounded-full font-mono text-sm uppercase tracking-widest hover:bg-bronze/80 transition-colors group"
                    >
                        <span>Verify on Dubai DET Portal</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <p className="text-stone-600 text-xs mt-8 font-mono">
                        Enter license number <span className="text-stone-400">1382290</span> to verify
                    </p>
                </div>
            </section>

            {/* APP PROMO SECTION */}
            <section id="download-app" className="w-full bg-[#FAFAF9] py-24 border-b border-[#E5E5E5] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E5E5E5]/50 to-transparent pointer-events-none" />
                <div className="max-w-6xl mx-auto px-[5vw] lg:px-[8vw] flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A18262] mb-6 block">The Dakeek App</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-[#111] mb-6 leading-tight">
                            Your Home.<br />
                            <span className="italic text-[#666]">In your pocket.</span>
                        </h2>
                        <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-md">
                            Book instantly. Track your technician. Manage detailed reports. The ultimate tool for modern home ownership.
                        </p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-3 px-6 py-3 bg-[#111] text-white rounded-xl hover:scale-105 transition-transform shadow-xl">
                                <img src="/images/app-logo.png" className="w-8 h-8 rounded-lg" alt="Icon" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download on the</div>
                                    <div className="font-sans font-bold leading-none text-sm">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 bg-[#111] text-white rounded-xl hover:scale-105 transition-transform shadow-xl">
                                <div className="text-left pl-2">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60">Get it on</div>
                                    <div className="font-sans font-bold leading-none text-sm">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative flex justify-center">
                        <div className="relative w-64 h-[500px] bg-[#111] rounded-[40px] border-8 border-[#333] shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0c0c] text-white p-8 text-center">
                                <img src="/images/app-logo.png" className="w-24 h-24 mb-6 rounded-2xl shadow-2xl border border-white/10" alt="App Logo" />
                                <h3 className="text-2xl font-serif mb-2">Dakeek</h3>
                                <p className="text-xs font-mono text-bronze uppercase tracking-widest mb-8">Residential Services</p>
                                <div className="w-full h-12 bg-bronze/20 rounded-full flex items-center justify-center text-xs font-mono text-bronze uppercase tracking-widest">
                                    Book Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINALE: Clean CTA Section */}
            <section className="bg-[#111] py-24 lg:py-32">
                <div className="max-w-6xl mx-auto px-[5vw] lg:px-[8vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-bronze mb-4 block">Get Started</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                                Ready to book<span className="text-bronze">?</span>
                            </h2>
                            <p className="text-stone-400 text-lg leading-relaxed mb-8 max-w-md">
                                Tell us what you need. We&apos;ll provide a clear quote with no hidden fees or obligation.
                            </p>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-4 px-10 py-5 bg-bronze text-white rounded-full hover:bg-white hover:text-[#111] transition-all duration-300"
                            >
                                <span className="font-mono text-sm uppercase tracking-widest">Get a Free Quote</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: Contact Info Cards */}
                        <div className="space-y-4">
                            <a href="tel:+971542472151" className="flex items-center gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-full bg-bronze/20 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-bronze" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Call Us</p>
                                    <p className="text-xl text-white group-hover:text-bronze transition-colors">+971 54 247 2151</p>
                                </div>
                            </a>
                            <a href="https://wa.me/971542472151?text=Hello%20Dakeek%20Residential%20Services%2C%20I%20would%20like%20to%20book%20a%20service." target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">WhatsApp</p>
                                    <p className="text-xl text-white group-hover:text-emerald-400 transition-colors">Message Us</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
