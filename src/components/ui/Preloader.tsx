"use client";

import { useEffect, useState } from "react";
import { useTransitionContext } from "../../lib/context/TransitionContext";

/**
 * Ultra-fast Preloader - 300ms total, CSS only
 */
export default function Preloader() {
    const { setLoaded } = useTransitionContext();
    const [phase, setPhase] = useState<'show' | 'exit' | 'done'>('show');

    useEffect(() => {
        // Show for 200ms then exit
        const showTimer = setTimeout(() => setPhase('exit'), 200);

        // Remove completely after exit animation
        const exitTimer = setTimeout(() => {
            setPhase('done');
            setLoaded(true);
        }, 400);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(exitTimer);
        };
    }, [setLoaded]);

    if (phase === 'done') return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0c0a09] ${phase === 'exit' ? 'animate-preloader-exit' : ''
                }`}
        >
            <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter text-[#E7E5E4]">
                DAKEEK
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#333]">
                <div className="h-full bg-[#5A4A32] animate-preloader-progress" />
            </div>
        </div>
    );
}
