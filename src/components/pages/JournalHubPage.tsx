"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blogData";
import { ArrowRight, Clock, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#E7E5E4]" />, // Warm Stone Loading
});

export default function JournalHubPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    // Filter Logic
    const filteredPosts = blogPosts.filter(p => {
        if (activeCategory === "all") return true;
        return p.category === activeCategory;
    });

    const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
    const remainingPosts = filteredPosts.filter(p => p.slug !== featuredPost?.slug);

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] font-sans selection:bg-bronze selection:text-white">

            {/* 1. HERO: The Journal (Warm Stone / Silver Metallic) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F5F5F4] border-b border-[#E7E5E4]">
                <div className="absolute inset-0 z-0">
                    <HyperHero
                        color1="#d6d3d1" // Stone-300 (Lighter Warm Silver)
                        color2="#fafaf9" // Stone-50 (Very Light Stone)
                        initialColor="#F5F5F4"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#444] bg-white/40">
                        Editorial
                    </p>
                    <h1 className="text-6xl md:text-9xl font-serif italic tracking-tight mb-6 leading-[0.9] text-[#1c1917]">
                        The Journal.
                    </h1>
                    <p className="text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#444]">
                        Insights on home maintenance, Dubai living, and technical excellence.
                    </p>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">

                {/* 2. Categories (Minimal Tab Bar) */}
                <div className="flex justify-center mb-20 md:mb-24">
                    <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-black/10 pb-4">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`text-xs font-mono uppercase tracking-widest transition-colors relative pb-1 ${activeCategory === "all" ? "text-bronze" : "text-[#999] hover:text-[#111]"}`}
                        >
                            All Stories
                            {activeCategory === "all" && <motion.div layoutId="tab" className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-bronze" />}
                        </button>
                        {Object.entries(BLOG_CATEGORIES).map(([key, cat]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`text-xs font-mono uppercase tracking-widest transition-colors relative pb-1 ${activeCategory === key ? "text-bronze" : "text-[#999] hover:text-[#111]"}`}
                            >
                                {cat.label}
                                {activeCategory === key && <motion.div layoutId="tab" className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-bronze" />}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* 3. FEATURED POST (Cinematic Layout) */}
                        {featuredPost && (
                            <Link href={`/blog/${featuredPost.slug}`} className="group block mb-24 md:mb-32">
                                <article className="relative">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                                        {/* Image */}
                                        <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden rounded-sm bg-[#E5E5E5] shadow-2xl shadow-stone-200">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                            <Image
                                                src={featuredPost.image}
                                                alt={featuredPost.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                                priority
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-center">
                                            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#888] mb-6">
                                                <span className="text-bronze font-bold">Featured</span>
                                                <span className="w-px h-3 bg-[#ddd]" />
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 text-[#1c1917] group-hover:text-bronze transition-colors duration-300 leading-[1.1]">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-lg text-[#666] leading-relaxed mb-8 border-l-2 border-bronze/20 pl-6">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111] group-hover:gap-4 transition-all">
                                                Read Story <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )}

                        {/* 4. RECENT STORIES (Clean Vertical List - No Cards) */}
                        <div className="max-w-4xl mx-auto space-y-16">
                            {remainingPosts.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.slug} className="group block border-t border-black/5 pt-16 first:border-0 first:pt-0">
                                    <article className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">

                                        {/* Content Left */}
                                        <div className="md:col-span-2 order-2 md:order-1">
                                            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#999] mb-3">
                                                <span style={{ color: BLOG_CATEGORIES[post.category].color }}>
                                                    {BLOG_CATEGORIES[post.category].label}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                                                <span>{post.readTime}</span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-serif mb-3 text-[#1c1917] group-hover:text-bronze transition-colors duration-300">
                                                {post.title}
                                            </h3>

                                            <p className="text-[#666] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                                                {post.excerpt}
                                            </p>

                                            <div className="text-xs font-medium text-[#ccc] group-hover:text-[#111] transition-colors flex items-center gap-2">
                                                Read Article <span className="block w-4 h-px bg-current transition-all group-hover:w-8" />
                                            </div>
                                        </div>

                                        {/* Thumbnail Right */}
                                        <div className="relative aspect-[4/3] md:aspect-square w-full md:w-full overflow-hidden rounded-sm bg-[#E5E5E5] order-1 md:order-2 shadow-lg group-hover:shadow-xl transition-all duration-500">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                    </article>
                                </Link>
                            ))}
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* 5. Subscribe (Minimal) */}
                <div className="mt-32 border-t border-black/10 pt-20 text-center">
                    <BookOpen className="w-8 h-8 mx-auto text-bronze mb-6 opacity-80" />
                    <h4 className="font-serif italic text-3xl md:text-4xl mb-4 text-[#1c1917]">Stay Informed.</h4>
                    <p className="text-[#666] mb-8 max-w-md mx-auto">Get the expert advice you need to maintain a perfect home.</p>

                    <div className="flex justify-center flex-col md:flex-row gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-b border-[#999] px-4 py-3 text-sm flex-grow focus:border-bronze transition-colors outline-none text-center md:text-left placeholder:text-[#ccc]"
                        />
                        <button className="text-xs font-mono uppercase tracking-widest text-[#111] hover:text-bronze transition-colors py-3 px-4">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
