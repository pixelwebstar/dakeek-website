"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function QuickContactBar() {
    const handleWhatsApp = () => {
        window.open("https://wa.me/971800332533?text=Hi%20Dakeek,%20I%20need%20help%20with...", "_blank");
    };

    const handleCall = () => {
        window.location.href = "tel:800332533";
    };

    const handleEmail = () => {
        window.location.href = "mailto:hello@dakeek.ae";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="fixed bottom-24 right-6 z-40 hidden md:flex flex-col gap-3"
        >
            {/* WhatsApp */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="group relative w-14 h-14 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-green-500/50 transition-all overflow-hidden"
                title="WhatsApp Us"
            >
                <MessageCircle className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-green-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-2 bg-[#111] text-white text-xs font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    WhatsApp Now
                </span>
            </motion.button>

            {/* Call */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="group relative w-14 h-14 bg-[#A18262] text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-[#A18262]/50 transition-all overflow-hidden"
                title="Call Us"
            >
                <Phone className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-[#8d7154] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-2 bg-[#111] text-white text-xs font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    800-DAKEEK
                </span>
            </motion.button>

            {/* Email */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmail}
                className="group relative w-14 h-14 bg-[#111] text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-black/50 transition-all overflow-hidden"
                title="Email Us"
            >
                <Mail className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-[#333] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-2 bg-[#111] text-white text-xs font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    hello@dakeek.ae
                </span>
            </motion.button>

            {/* 24/7 Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-2 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-[#E5E5E5]"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#111] font-medium">
                    24/7
                </span>
            </motion.div>
        </motion.div>
    );
}
