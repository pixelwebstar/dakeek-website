"use client";

import React, { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
    id: number;
    author: string;
    role: string;
    content: string;
    rating: number;
    date: string;
}

interface ReviewsData {
    overall_rating: number;
    total_reviews: number;
    reviews: Review[];
    from_google?: boolean;
}

// SVG component for Google Logo
const GoogleLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        <path d="M1 1h22v22H1z" fill="none"/>
    </svg>
);

export default function ReviewsSection() {
    const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let isMounted = true;
        fetch('/api/reviews')
            .then(res => res.json())
            .then(data => {
                if (isMounted && data && data.reviews) {
                    setReviewsData(data);
                }
            })
            .catch(err => console.error("Error loading reviews:", err));
        
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        if (!reviewsData || !reviewsData.reviews || reviewsData.reviews.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviewsData.reviews.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [reviewsData]);

    if (!reviewsData || !reviewsData.reviews || reviewsData.reviews.length === 0) {
        return (
            <section className="py-24 bg-[#FAFAF9] min-h-[500px] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#C4A67C] border-t-transparent rounded-full animate-spin opacity-50" />
            </section>
        );
    }

    const currentReview = reviewsData.reviews[currentIndex];

    return (
        <section className="py-32 bg-[#FAFAF9] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                
                <div className="flex flex-col lg:flex-row gap-16 justify-between items-start mb-20">
                    
                    {/* Left: Headers */}
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Testimonials</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif text-[#111] mb-6">Client trust.</h2>
                        <p className="text-xl text-stone-500 font-light leading-relaxed">
                            Don&apos;t just take our word for it. Discover why hundreds of Dubai residents and businesses rely on Dakeek for their maintenance needs.
                        </p>
                    </div>

                    {/* Right: Google Business Master Card */}
                    <div className="w-full lg:w-auto">
                        <a 
                            href="https://maps.app.goo.gl/ibmvUdgpqxifw8sS9" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block bg-white rounded-3xl border border-black/5 p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden w-full md:w-[380px]"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                            
                            <div className="flex items-center gap-5 border-b border-black/5 pb-6 mb-6">
                                <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
                                    <GoogleLogo className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#111] text-lg font-sans">Dakeek Technical</h3>
                                    <p className="text-sm text-[#666] flex items-center gap-1">
                                        Google Profile <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#4285F4]" />
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-serif text-[#111] -mt-1">{reviewsData.overall_rating}</span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-[#666] font-medium tracking-wide">Based on {reviewsData.total_reviews} reviews</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Animated Carousel Section */}
                <div className="relative h-[300px] w-full max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 bg-white p-10 md:p-14 rounded-3xl border border-black/5 shadow-md flex flex-col justify-center"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(Math.round(currentReview.rating || 5))].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-stone-700 font-serif leading-snug mb-8 line-clamp-4">
                                &ldquo;{currentReview.content}&rdquo;
                            </p>

                            <div className="flex justify-between items-end mt-auto">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#4285F4]/10 rounded-full flex items-center justify-center text-[#4285F4] font-bold text-lg">
                                        {currentReview.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#111]">{currentReview.author}</h4>
                                        <span className="text-xs text-stone-500 font-mono tracking-wider">{currentReview.role}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <GoogleLogo className="w-6 h-6 grayscale opacity-40" />
                                    <span className="text-xs text-stone-400">{currentReview.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
