"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransitionContext } from "../../lib/context/TransitionContext";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export default function Preloader() {
    const { setLoaded } = useTransitionContext();
    const [isPresent, setIsPresent] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const targetText = "DAKEEK";

    useEffect(() => {
        // 1. Scramble Logic
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayText(prev =>
                    targetText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return targetText[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= targetText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 2; // Speed control (faster)
            }, 25);
        };

        // Start almost immediately
        setTimeout(startScramble, 50);

        // 2. Exit Timer (Faster: 600ms total)
        const timer = setTimeout(() => {
            setIsPresent(false);
        }, 600);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    const handleExitComplete = () => {
        setLoaded(true);
    };

    return (
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {isPresent && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c0a09] overflow-hidden"
                    initial={{ clipPath: "inset(0% 0 0 0)" }}
                    exit={{ clipPath: "inset(0% 0 100% 0)" }} // Shutter Up Wipe
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="relative">
                        {/* Glitch/Scramble Text */}
                        <motion.h1
                            className="text-6xl md:text-9xl font-mono font-bold tracking-tighter text-[#E7E5E4] mix-blend-difference"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {displayText}
                        </motion.h1>

                        {/* Precision Hairline */}
                        <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#333] overflow-hidden">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-bronze"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.0, ease: "circInOut" }}
                            />
                        </div>

                        {/* Decoration: Brackets */}
                        <motion.div
                            className="absolute -inset-x-8 -inset-y-4 border-l border-bronze/20 bg-transparent" // Removed border-r and fixed styling
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {/* Right bracket manually to ensure it appears */}
                            <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-bronze/20"></div>
                        </motion.div>
                    </div>

                    {/* Meta Status */}
                    <div className="absolute bottom-12 font-mono text-[10px] text-[#666] tracking-[0.3em] uppercase">
                        System Ready
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
