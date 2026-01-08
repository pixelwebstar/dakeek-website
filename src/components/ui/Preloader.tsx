"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransitionContext } from "../../lib/context/TransitionContext";

export default function Preloader() {
    const { setLoaded } = useTransitionContext();
    const [isPresent, setIsPresent] = useState(true);

    useEffect(() => {
        // Simulate initial loading or wait for resources
        const timer = setTimeout(() => {
            setIsPresent(false);
        }, 2000); // 2 second mock load

        return () => clearTimeout(timer);
    }, []);

    const handleExitComplete = () => {
        setLoaded(true);
    };

    return (
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {isPresent && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAFAF9]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-[#111]">
                            Dakeek.
                        </h1>
                        <motion.div
                            className="h-[2px] bg-[#A18262]"
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
