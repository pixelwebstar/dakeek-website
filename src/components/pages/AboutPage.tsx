"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Shield, Heart, Clock, PenTool, Check } from "lucide-react";
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/about/SectionWrapper";

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
                        {["Background-checked & verified", "No surprise visits", "In-house Academy", "Full-time Employees"].map((item, i) => (
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
                                <span className="text-white italic">"There has to be a better way,"</span> he thought. Not just a better repair, but a better <strong>experience</strong>.
                            </p>
                            <p>
                                So he built Dakeek not as a maintenance company, but as an engineering firm.
                                Where "on time" means to the minute. Where "clean" means forensic. And where trust is the primary product.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. THE SOLUTION: "The Guardian" (Cinematic Split) */}
            <section className="relative py-32 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="h-[60vh] lg:h-screen relative overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1505798577917-a651a5d40320?auto=format&fit=crop&q=80" // Authentic hands/craft
                            alt="Hands of a Master"
                            fill
                            className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
                    </div>
                    <div className="flex flex-col justify-center px-8 lg:px-24 py-24 bg-[#111]">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <Shield className="w-5 h-5 text-bronze" />
                            <span className="font-mono text-xs uppercase tracking-widest text-bronze">The Guardian Pact</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sans mb-8 leading-none">
                            We don't just fix things. <br />
                            <span className="font-serif italic text-stone-400">We restore peace.</span>
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-12">
                            Dakeek was built on a refusal to accept "average". We believe that the person entering your sanctuary should treat it with more respect than you do.
                            Clean uniforms. Soft voices. Precise movements.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-3xl font-serif text-white mb-2">500+</h4>
                                <p className="text-xs font-mono uppercase text-stone-500">Hours of Training</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-white mb-2">0%</h4>
                                <p className="text-xs font-mono uppercase text-stone-500">Freelancers Hired</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3b. THE RITUAL: "Before We Knock" (New Content) */}
            <section className="py-32 bg-[#080808] relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-[5vw] text-center relative z-10">
                    <Clock className="w-8 h-8 text-bronze mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-serif mb-16 text-white/90">The Ritual. <span className="italic text-stone-600">Before the knock.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div className="relative pl-8 border-l border-white/10">
                            <span className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-bronze" />
                            <h3 className="text-xl font-sans text-white mb-4">The Preparation</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                Every morning, uniforms are inspected. Tools are calibrated. The van is organized. Chaos in the van leads to chaos in your home. We start with order.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l border-white/10">
                            <span className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-stone-700" />
                            <h3 className="text-xl font-sans text-white mb-4">The Threshold</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                We pause at your door. We put on fresh shoe covers. We check our ID badge. We take a breath. We are entering a sanctuary, and we act accordingly.
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

            {/* 5. FINALE: Cinematic Footer Call */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" // Abstract/light/home
                        alt="Restored Home"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h2 className="text-5xl md:text-8xl font-serif italic mb-12 leading-tight">
                        Welcome home.
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-stone-300 mb-12">
                        Let us handle the noise, so you can enjoy the silence.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full hover:bg-bronze hover:text-white transition-all duration-500"
                    >
                        <span className="font-mono text-sm uppercase tracking-widest">Start your journey</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
