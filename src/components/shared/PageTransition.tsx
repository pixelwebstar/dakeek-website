"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * PageTransition - Smooth page navigation transitions (Phase 22)
 * Wraps page content with entry/exit animations for seamless navigation.
 */

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1] as const,
            when: "beforeChildren",
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.25,
            ease: "easeIn",
        },
    },
};

// Curtain reveal variant for premium pages
const curtainVariants: Variants = {
    initial: {
        scaleY: 1,
    },
    enter: {
        scaleY: 0,
        transition: {
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    },
    exit: {
        scaleY: 1,
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    },
};

interface PageTransitionProps {
    children: ReactNode;
    variant?: "fade" | "curtain";
}

export default function PageTransition({
    children,
    variant = "fade",
}: PageTransitionProps) {
    const pathname = usePathname();

    if (variant === "curtain") {
        return (
            <>
                {/* Curtain Overlay */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`curtain-${pathname}`}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={curtainVariants}
                        className="fixed inset-0 z-50 bg-[#0c0c0c] origin-top pointer-events-none"
                    />
                </AnimatePresence>

                {/* Page Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={pageVariants}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </>
        );
    }

    // Default fade transition
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

/**
 * Simple fade wrapper for individual sections
 */
export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Stagger children animations
 */
export function StaggerChildren({
    children,
    staggerDelay = 0.1,
    className = "",
}: {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                initial: {},
                animate: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerChildVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};
