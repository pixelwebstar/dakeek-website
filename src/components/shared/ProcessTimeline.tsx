"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, UserCheck, ShieldCheck, Sparkles, MessageSquare, LucideIcon } from "lucide-react";

export type ProcessStep = {
    title: string;
    desc: string;
    icon: LucideIcon;
};

const STEPS: ProcessStep[] = [
    {
        title: "Book Online",
        desc: "Pick a date and time. We&apos;ll be there when we say we will.",
        icon: Calendar,
    },
    {
        title: "Meet Your Tech",
        desc: "You get their name and photo before they arrive.",
        icon: UserCheck,
    },
    {
        title: "ID Verified",
        desc: "Every technician carries official identification.",
        icon: ShieldCheck,
    },
    {
        title: "Clean Service",
        desc: "Shoe covers, floor protection, and a tidy finish.",
        icon: Sparkles,
    },
    {
        title: "We Follow Up",
        desc: "We check back to make sure everything is working.",
        icon: MessageSquare,
    },
];

interface ProcessTimelineProps {
    steps?: ProcessStep[];
}

export default function ProcessTimeline({ steps = STEPS }: ProcessTimelineProps) {
    return (
        <div className="relative">
            {/* Desktop: Horizontal Timeline */}
            <div className="hidden lg:block">
                {/* Connecting Line */}
                <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A67C]/40 to-transparent" />

                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative text-center group"
                        >
                            {/* Icon Circle */}
                            <motion.div
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="mx-auto w-32 h-32 rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/5 flex items-center justify-center mb-6 group-hover:border-[#C4A67C]/30 transition-all duration-300"
                            >
                                <step.icon className="w-10 h-10 text-[#111] group-hover:text-[#C4A67C] transition-colors" strokeWidth={1.5} />
                            </motion.div>

                            {/* Step Number */}
                            <span className="font-mono text-[10px] text-[#C4A67C] uppercase tracking-[0.2em] mb-2 block">
                                Step {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-serif text-[#111] mb-2">{step.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-[#666] font-light leading-relaxed px-2">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile: Vertical Cards */}
            <div className="lg:hidden space-y-4">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-5 p-5 bg-white rounded-xl border border-black/5 shadow-sm"
                    >
                        {/* Icon */}
                        <div className="shrink-0 w-14 h-14 rounded-xl bg-[#FAFAF9] flex items-center justify-center">
                            <step.icon className="w-7 h-7 text-[#C4A67C]" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-mono text-[10px] text-[#C4A67C] uppercase tracking-wider">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-base font-sans font-medium text-[#111]">{step.title}</h3>
                            </div>
                            <p className="text-sm text-[#666] font-light">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
