"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blogData";
import { ArrowRight, BookOpen } from "lucide-react";
import GradientHero from "@/components/hero/GradientHero";

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
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E5E7EB] border-b border-structure">
                <div className="absolute inset-0 z-0">
                    <GradientHero
                        color1="#D1D5DB"
                        color2="#F3F4F6"
                        initialColor="#D1D5DB"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                        Editorial And Insights
                    </p>
                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink animate-hero-fade" style={{ animationDelay: '0s' }}>
                        Journal
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-titanium mb-12 uppercase tracking-widest animate-hero-fade" style={{ animationDelay: '0.3s' }}>
                        Knowledge For Better Living
                    </p>

                    <div className="flex justify-center gap-4 animate-hero-fade" style={{ animationDelay: '0.5s' }}>
                        <Link href="#latest" className="group relative inline-flex items-center justify-center px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-xs font-medium uppercase tracking-[0.2em]">Read Latest</span>
                            <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="#subscribe" className="inline-flex items-center justify-center px-12 py-4 border border-black/10 text-ink rounded-full font-mono text-xs font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Subscribe
                        </Link>
                    </div>
                </div>
            </section>

            <div id="latest" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">

                {/* 2. Categories (Minimal Tab Bar) */}
                <div className="flex justify-center mb-20 md:mb-24">
                    <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-black/10 pb-4">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`text-xs font-mono uppercase tracking-widest transition-colors relative pb-1 ${activeCategory === "all" ? "text-bronze" : "text-[#999] hover:text-[#111]"}`}
                        >
                            All Stories
                            {activeCategory === "all" && <div className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-bronze" />}
                        </button>
                        {Object.entries(BLOG_CATEGORIES).map(([key, cat]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`text-xs font-mono uppercase tracking-widest transition-colors relative pb-1 ${activeCategory === key ? "text-bronze" : "text-[#999] hover:text-[#111]"}`}
                            >
                                {cat.label}
                                {activeCategory === key && <div className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-bronze" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
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
                                        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#666] mb-3">
                                            <span style={{ color: BLOG_CATEGORIES[post.category].color }}>
                                                {BLOG_CATEGORIES[post.category].label}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-serif mb-3 text-[#1c1917] group-hover:text-bronze transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-[#333] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                                            {post.excerpt}
                                        </p>

                                        <div className="text-xs font-medium text-[#777] group-hover:text-[#111] transition-colors flex items-center gap-2">
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

                </div>

                {/* 5. Subscribe (Minimal) */}
                <div id="subscribe" className="mt-32 border-t border-black/10 pt-20 text-center">
                    <BookOpen className="w-8 h-8 mx-auto text-bronze mb-6 opacity-80" />
                    <h2 className="font-serif italic text-3xl md:text-4xl mb-4 text-[#1c1917]">Stay Informed.</h2>
                    <p className="text-[#333] mb-8 max-w-md mx-auto">Get the expert advice you need to maintain a perfect home.</p>

                    <div className="flex justify-center flex-col md:flex-row gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-b border-[#999] px-4 py-3 text-sm flex-grow focus:border-bronze transition-colors outline-none text-center md:text-left placeholder:text-[#555]"
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
