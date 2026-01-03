"use client";

import { useEffect, useRef, useState } from "react";

interface StaticFooterWatermarkProps {
    color?: string;
}

export default function StaticFooterWatermark({ color = "#E5E5E5" }: StaticFooterWatermarkProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState(100);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.clientWidth;
                const isMobile = width < 768;
                // Matching the physics calculation: width * (isMobile ? 0.23 : 0.135)
                setFontSize(width * (isMobile ? 0.23 : 0.135));
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full z-0 flex items-end justify-center overflow-hidden pointer-events-none select-none"
            aria-hidden="true"
        >
            <div
                style={{
                    fontSize: `${fontSize}px`,
                    color: color,
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    lineHeight: 1,
                    marginBottom: '-0.1em' // Adjustment to align bottom like the physics floor
                }}
                className="opacity-100"
            >
                DAKEEK
            </div>
        </div>
    );
}
