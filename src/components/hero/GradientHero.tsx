"use client";

import { memo } from "react";

interface GradientHeroProps {
    color1?: string;
    color2?: string;
    initialColor?: string;
}

/**
 * High-performance CSS gradient hero background.
 * Replaces HyperHero WebGL for better LCP and INP.
 */
function GradientHero({
    color1 = "#5A4A32",
    color2 = "#E7E5E4",
    initialColor
}: GradientHeroProps) {
    return (
        <div
            className="absolute inset-0 z-0 w-full h-full overflow-hidden"
            style={{ backgroundColor: initialColor || color2 }}
        >
            {/* Primary gradient layer */}
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 50% 40%, ${color1}40 0%, transparent 70%),
                        radial-gradient(ellipse 60% 80% at 30% 60%, ${color2} 0%, transparent 60%),
                        radial-gradient(ellipse 70% 50% at 70% 30%, ${color1}30 0%, transparent 50%),
                        linear-gradient(180deg, ${color2} 0%, ${initialColor || color2} 100%)
                    `
                }}
            />

            {/* Subtle animated shimmer - CSS only, no JS */}
            <div
                className="absolute inset-0 opacity-30 animate-pulse"
                style={{
                    background: `
                        radial-gradient(ellipse 40% 30% at 60% 50%, ${color1}50 0%, transparent 60%)
                    `,
                    animationDuration: '4s'
                }}
            />

            {/* Noise texture overlay for premium feel */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: 'url("/images/noise.svg")',
                    backgroundSize: '200px'
                }}
            />
        </div>
    );
}

export default memo(GradientHero);
