"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Star } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration]);

    return <span>{count}+</span>;
}

export function TrustIndicators() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Licensed */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6 text-center hover:border-[#A18262] hover:shadow-lg transition-all group"
            >
                <Shield className="w-8 h-8 text-[#A18262] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-serif font-bold text-[#111] mb-1">Licensed</p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Fully Certified</p>
            </motion.div>

            {/* Reviews */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6 text-center hover:border-[#A18262] hover:shadow-lg transition-all group"
            >
                <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#A18262] text-[#A18262]" />
                    ))}
                </div>
                <p className="text-2xl font-serif font-bold text-[#111] mb-1">
                    <AnimatedCounter target={500} />
                </p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">5-Star Reviews</p>
            </motion.div>

            {/* Technicians */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6 text-center hover:border-[#A18262] hover:shadow-lg transition-all group"
            >
                <Users className="w-8 h-8 text-[#A18262] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-serif font-bold text-[#111] mb-1">
                    <AnimatedCounter target={50} />
                </p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Expert Techs</p>
            </motion.div>

            {/* Satisfaction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6 text-center hover:border-[#A18262] hover:shadow-lg transition-all group"
            >
                <Award className="w-8 h-8 text-[#A18262] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-serif font-bold text-[#111] mb-1">99%</p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Satisfaction</p>
            </motion.div>
        </div>
    );
}
