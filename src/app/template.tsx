"use client";

import { motion } from "framer-motion";
import { useTransitionContext } from "../lib/context/TransitionContext";

export default function Template({ children }: { children: React.ReactNode }) {
    const { isLoaded } = useTransitionContext();

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen"
        >
            {children}
        </motion.main>
    );
}
