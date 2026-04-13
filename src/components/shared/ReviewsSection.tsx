"use client";

import React, { useState, useEffect } from "react";
import { Star, MapPin, Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewsSection() {
    const [reviewsData, setReviewsData] = useState<any>(null);
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
        <section className="py-24 bg-[#FAFAF9]">
            <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Testimonials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#111]">Voices of Trust.</h2>
                    </div>
                    
                    <a href="https://maps.app.goo.gl/ibmvUdgpqxifw8sS9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-white border border-[#E5E5E5] hover:border-[#C4A67C] transition-colors rounded-2xl shadow-sm">
                        <div className="bg-[#111] group-hover:bg-[#C4A67C] transition-colors p-2 rounded-lg">
                            <MapPin className="w-6 h-6 text-[#C4A67C] group-hover:text-[#111]" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-2 font-bold text-[#111]">{reviewsData.overall_rating}</span>
                                <span className="ml-1 text-sm text-stone-500">({reviewsData.total_reviews} Reviews)</span>
                            </div>
                            <p className="text-xs text-stone-500 font-mono uppercase tracking-tighter flex items-center gap-1 group-hover:text-black">
                                Verified on Google Maps <ExternalLink className="w-3 h-3" />
                            </p>
                        </div>
                    </a>
                </div>

                <div className="relative h-[380px] md:h-[280px] w-full max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-center"
                        >
                            <Quote className="w-8 h-8 text-[#C4A67C]/30 mb-6" />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(Math.round(currentReview.rating || 5))].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed mb-8 italic">
                                "{currentReview.content}"
                            </p>

                            <div className="flex justify-between items-center mt-auto">
                                <div>
                                    <h4 className="font-bold text-[#111]">{currentReview.author}</h4>
                                    <span className="text-xs text-[#C4A67C] font-mono uppercase tracking-widest">{currentReview.role}</span>
                                </div>
                                <span className="text-sm text-stone-400">{currentReview.date}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <a 
                        href="https://maps.app.goo.gl/ibmvUdgpqxifw8sS9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-black/10 hover:border-[#C4A67C] rounded-full text-xs font-mono uppercase tracking-widest transition-all hover:bg-stone-50"
                    >
                        View Business Profile <Star className="w-4 h-4 text-[#C4A67C]" />
                    </a>
                </div>
            </div>
        </section>
    );
}
