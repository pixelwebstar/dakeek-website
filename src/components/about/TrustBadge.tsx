"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
    icon: LucideIcon;
    label: string;
}

export default function TrustBadge({ icon: Icon, label }: TrustBadgeProps) {
    return (
        <motion.div
            className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/50 border border-[#E5E5E5] backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "#5A4A32" }}
            transition={{ duration: 0.3 }}
        >
            <div className="p-3 bg-white rounded-full shadow-sm">
                <Icon className="w-6 h-6 text-[#5A4A32]" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#444] text-center">
                {label}
            </span>
        </motion.div>
    );
}
