"use client";

import { useEffect, useState } from "react";
import { useTransitionContext } from "../../lib/context/TransitionContext";

/**
 * Ultra-optimized Preloader using CSS animations only.
 * No Framer Motion - pure CSS for maximum performance.
 */
export default function Preloader() {
    const { setLoaded } = useTransitionContext();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Fast exit - 500ms total
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Allow exit animation to complete
            setTimeout(() => setLoaded(true), 400);
        }, 500);

        return () => clearTimeout(timer);
    }, [setLoaded]);

    if (!isVisible) {
        return (
            <div
                className="fixed inset-0 z-[9999] bg-[#0c0a09] animate-slide-up pointer-events-none"
                style={{ animationDuration: '0.4s', animationFillMode: 'forwards' }}
            />
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c0a09]">
            {/* Logo text with CSS animation */}
            <h1
                className="text-6xl md:text-9xl font-mono font-bold tracking-tighter text-[#E7E5E4] animate-fade-in"
                style={{ animationDuration: '0.3s' }}
            >
                DAKEEK
            </h1>

            {/* Progress bar - CSS only */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#333]">
                <div
                    className="h-full bg-[#A18262] animate-progress-bar"
                    style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
                />
            </div>
        </div>
    );
}
