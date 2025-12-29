"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock } from "lucide-react";

export function ContactHero() {
    return (
        <div className="relative z-10 space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-serif italic text-[#111] leading-tight mb-4">
                    Let's Fix It. <br />
                    <span className="text-[#A18262]">Right Now.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
                    Tell us what's broken, and we'll dispatch a verified technician to your doorstep. No hassle. No waiting.
                </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#A18262] flex-shrink-0" />
                    <span>Licensed & Insured Technicians</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Shield className="w-5 h-5 text-[#A18262] flex-shrink-0" />
                    <span>100% Privacy Guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Clock className="w-5 h-5 text-[#A18262] flex-shrink-0" />
                    <span>2-Minute Average Response Time</span>
                </div>
            </motion.div>

            {/* Active Technicians */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 items-center pt-4 border-t border-gray-200"
            >
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 overflow-hidden shadow-sm">
                            <span className="scale-125">👤</span>
                        </div>
                    ))}
                </div>
                <div className="text-sm">
                    <span className="font-bold text-[#111]">50+ Techs</span>
                    <span className="text-gray-600"> standing by</span>
                </div>
            </motion.div>
        </div>
    );
}
