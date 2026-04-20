"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export default function WhatsAppBridge() {
    const whatsappUrl = "https://wa.me/971542472151?text=Hello%20Dakeek%20Property%20Maintenance%2C%20I%20would%20like%20to%20book%20a%20service.";

    const triggerConversion = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-18076209022',
            });
            window.gtag('event', 'whatsapp_bridge_click', {
                'event_category': 'Engagement',
                'event_label': 'WhatsApp Sitelink'
            });
        }
    };

    return (
        <main className="min-h-screen bg-[#FAFAF9] flex items-center justify-center p-6 selection:bg-[#5A4A32] selection:text-white relative overflow-hidden">
            
            {/* Subtle Texture/Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/noise.svg')] bg-repeat" />

            <div className="max-w-md w-full relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center space-y-12"
                >
                    {/* Circular Logo Container */}
                    <div className="relative group">
                        <div className="w-28 h-28 rounded-full bg-[#111] shadow-2xl shadow-black/10 flex items-center justify-center p-6 overflow-hidden ring-4 ring-white transition-transform duration-500 group-hover:scale-105">
                            <Image 
                                src="/icons/logo-square.png" 
                                alt="Dakeek Technical Services" 
                                width={112}
                                height={112}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Minimalist Heading */}
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl md:text-5xl font-serif text-[#111] leading-tight tracking-tight">
                            Chat with <span className="text-[#5A4A32]">Dakeek</span>
                        </h1>
                        <p className="text-[#888] font-light text-base md:text-lg tracking-[0.1em] uppercase">
                            Connect via WhatsApp
                        </p>
                    </div>

                    {/* The Primary Button - Premium Manual Interaction */}
                    <div className="w-full space-y-6 pt-4">
                        <a 
                            href={whatsappUrl}
                            onClick={triggerConversion}
                            className="group relative flex items-center justify-center w-full px-8 py-5 bg-[#111] rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/10"
                        >
                            <span className="relative z-10 flex items-center gap-3 font-serif text-lg text-white">
                                <MessageSquare className="w-5 h-5 opacity-70" />
                                Start Conversation
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-[#5A4A32] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </a>

                        <p className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[0.25em] text-center">
                            Official Verified Account
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Aesthetic Background Flair */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#C4A67C]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[60%] bg-[#5A4A32]/5 blur-[120px] rounded-full" />
            </div>

            {/* Copyright Footer */}
            <footer className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-[10px] text-[#666] uppercase tracking-widest opacity-50">
                    &copy; {new Date().getFullYear()} Dakeek Technical Services LLC
                </p>
            </footer>
        </main>
    );
}
