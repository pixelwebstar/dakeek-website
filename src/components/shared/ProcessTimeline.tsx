"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type ProcessStep = {
    title: string;
    desc: string;
    img: string;
};

interface ProcessTimelineProps {
    steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <div className="relative mt-20 space-y-16 lg:space-y-24">
            {/* Connecting Line */}
            <div className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-px bg-bronze/30 lg:-translate-x-1/2 hidden lg:block" />

            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${i % 2 === 0 ? 'lg:flex-row-reverse text-left lg:text-right' : 'lg:text-left'}`}
                >
                    {/* Center Marker */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-bronze ring-8 ring-white z-10 hidden lg:block" />

                    {/* IMAGE BLOCK */}
                    <div className="w-full lg:w-1/2">
                        <div className={`relative h-64 lg:h-80 w-full overflow-hidden shadow-2xl ${i % 2 === 0 ? 'rounded-l-2xl rounded-r-none' : 'rounded-r-2xl rounded-l-none'}`}>
                            <Image
                                src={step.img}
                                alt={step.title}
                                fill
                                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-contrast/10 mix-blend-multiply" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 pt-2">
                        <span className="font-mono text-xs text-bronze uppercase tracking-[0.2em] mb-4 block">
                            Step {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-serif text-ink mb-6">{step.title}</h3>
                        <p className="text-titanium text-lg font-light leading-relaxed max-w-sm inline-block">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
