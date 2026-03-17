"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
    { year: "2018", title: "The Foundation", desc: "Started with a single van and a toolbox." },
    { year: "2020", title: "The Expansion", desc: "Grew to 50+ technicians covering all of Dubai." },
    { year: "2022", title: "The Digital Shift", desc: "Launched the first app-based booking system." },
    { year: "2024", title: "The Standard", desc: "Defining the future of property maintenance." },
    { year: "2025", title: "Hyper-Service", desc: "AI-driven diagnostics and 3D visualization." },
];

export function Timeline() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#111] text-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 px-[10vw]">
                    {timelineData.map((item, i) => (
                        <div key={i} className="relative w-[60vw] md:w-[40vw] flex-shrink-0 group">
                            <div className="text-[12rem] font-serif opacity-10 leading-none absolute -top-20 -left-10 select-none group-hover:opacity-20 transition-opacity">
                                {item.year}
                            </div>
                            <div className="relative z-10 glass-card p-12 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h3 className="text-4xl font-serif mb-4 text-blue-400">{item.title}</h3>
                                <p className="text-xl text-slate-300 font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                        className="h-full bg-blue-500"
                    />
                </div>
            </div>
        </section>
    );
}
