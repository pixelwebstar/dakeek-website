"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export default function WhatsAppBridge() {
    const whatsappUrl = "https://wa.me/971542472151?text=Hello%20Dakeek%20Property%20Maintenance%2C%20I%20would%20like%20to%20book%20a%20service.";

    const handleWhatsAppClick = () => {
        // Trigger Google Ads Conversion Event
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-18076209022',
                'event_callback': () => {
                    console.log('Conversion recorded');
                }
            });
            // Generic event for other tracking
            window.gtag('event', 'whatsapp_click', {
                'event_category': 'Engagement',
                'event_label': 'WhatsApp Sitelink'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#E5E7EB] flex items-center justify-center p-6 selection:bg-[#C4A67C]/30 overflow-hidden">
            <div className="max-w-xl w-full text-center space-y-12 relative z-10">
                
                {/* Official Branding */}
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 shadow-2xl shadow-black/5 rounded-full overflow-hidden bg-white p-4 border border-white/20">
                        <Image 
                            src="/icons/logo-cropped.png" 
                            alt="Dakeek Logo" 
                            fill
                            className="object-contain p-2"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Text Content in Playfair Display */}
                <div className="space-y-6">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[#111] tracking-tighter leading-tight"
                    >
                        Connect via <br />
                        <span className="italic text-[#C4A67C]">WhatsApp</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#555] text-base md:text-lg leading-relaxed max-w-[340px] mx-auto font-medium"
                    >
                        Experience priority maintenance support. Click below to start a secure chat with our team.
                    </motion.p>
                </div>

                {/* Interaction - Matching 'Get App' Button Style */}
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="pt-4"
                >
                    <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
                        className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#111] text-white font-mono text-sm uppercase tracking-[0.2em] rounded-full hover:bg-[#C4A67C] transition-all duration-500 active:scale-[0.98] shadow-2xl shadow-black/10"
                    >
                        Start Chat Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                </motion.div>

                {/* Trust Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-12 border-t border-black/5 flex flex-col items-center gap-2"
                >
                    <div className="text-[10px] text-[#888] uppercase tracking-[0.3em] font-bold">
                        Dakeek Technical Services LLC
                    </div>
                    <div className="flex gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] text-[#A1A1AA] uppercase tracking-widest font-medium">Dubai&apos;s Professional Maintenance Partner</span>
                    </div>
                </motion.div>
            </div>
            
            {/* Background Texture - Matching Site Experience */}
            <div 
                className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay"
                style={{ backgroundImage: "url('/images/noise.svg')" }}
            />
            
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#C4A67C]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#111]/5 blur-[120px] rounded-full" />
            </div>
        </div>
    );
}
