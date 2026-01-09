"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: number;
    label: string;
    suffix?: string;
}

export default function AnimatedCounter({ value, label, suffix = "" }: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl md:text-6xl font-serif text-[#5A4A32] mb-2 font-light flex justify-center items-baseline gap-1">
                <motion.span>{displayValue}</motion.span>
                {suffix && <span className="text-3xl opacity-50">{suffix}</span>}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#666]">{label}</p>
        </div>
    );
}
