"use client";

import { useEffect, useState } from "react";

interface ScrollProgressBarProps {
    color: string;
}

export default function ScrollProgressBar({ color }: ScrollProgressBarProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let rafId: number;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;

        const handleResize = () => {
            docHeight = document.documentElement.scrollHeight - window.innerHeight;
        };

        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const newProgress = docHeight > 0 ? scrollY / docHeight : 0;
                setProgress(newProgress);
                rafId = 0;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            className="absolute bottom-0 left-0 h-[3px] origin-left z-50 transition-transform duration-100"
            style={{
                width: "100%",
                backgroundColor: color,
                transform: `scaleX(${progress})`
            }}
        />
    );
}
