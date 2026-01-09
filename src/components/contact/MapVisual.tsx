"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Navigation, Zap } from "lucide-react";

export function MapVisual() {
    const [activeTechs, setActiveTechs] = useState([
        { id: "T-01", x: 30, y: 40, status: "Busy" },
        { id: "T-04", x: 55, y: 65, status: "Available" },
        { id: "T-09", x: 75, y: 35, status: "En Route" },
    ]);

    // Simulate movement
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTechs(prev => prev.map(tech => ({
                ...tech,
                x: Math.max(10, Math.min(90, tech.x + (Math.random() - 0.5) * 8)),
                y: Math.max(10, Math.min(90, tech.y + (Math.random() - 0.5) * 8))
            })));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl group">
            {/* 1. Grid Background (Tech Vibe) */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 2. Radial Interface Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-[#5A4A32]/5 to-transparent opacity-50" />

            {/* 3. Radar Sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#5A4A32]/5 to-transparent animate-spin-slow w-[200%] h-[200%] -left-1/2 -top-1/2 pointer-events-none mix-blend-screen" />

            {/* 4. Active Techs Markers */}
            {activeTechs.map((tech) => (
                <motion.div
                    key={tech.id}
                    className="absolute"
                    animate={{ left: `${tech.x}%`, top: `${tech.y}%` }}
                    transition={{ duration: 2, ease: "linear" }}
                >
                    <div className="relative flex flex-col items-center justify-center group/marker">
                        {/* Ping Effect */}
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-20 ${tech.status === 'Available' ? 'bg-green-500' : 'bg-[#5A4A32]'}`}></span>

                        {/* The Dot */}
                        <div className={`relative z-10 w-3 h-3 rounded-full border border-black/50 shadow-sm transition-colors ${tech.status === 'Available' ? 'bg-green-500' : 'bg-[#5A4A32]'}`}>
                            {tech.status === 'En Route' && <Navigation className="w-2 h-2 text-white absolute inset-0 m-auto animate-pulse" />}
                        </div>

                        {/* Tech ID Label (Always visible or on hover? Let's make it always visible but subtle) */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#111]/90 border border-white/10 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-mono text-gray-300 whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity z-20 pointer-events-none shadow-xl">
                            <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${tech.status === 'Available' ? 'bg-green-500' : 'bg-[#5A4A32]'}`} />
                                {tech.id}: {tech.status}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* 5. UI Overlay (Command Center Style) */}
            <div className="absolute top-5 left-6 right-6 flex justify-between items-start pointer-events-none">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Live Grid</span>
                    </div>
                    <h3 className="text-white font-serif text-lg tracking-wide">Dubai Operations</h3>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <Zap className="w-3 h-3 text-[#5A4A32]" />
                    <span className="text-[10px] font-mono text-white/80">
                        {activeTechs.length} Units Active
                    </span>
                </div>
            </div>

            {/* 6. Bottom Status */}
            <div className="absolute bottom-5 left-6 right-6 pointer-events-none">
                <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#5A4A32] rounded-full" /> Busy</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Available</span>
                </div>
            </div>
        </div>
    );
}
