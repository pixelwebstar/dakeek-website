"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { serviceData } from "../../data/serviceData";

const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/queries", label: "QUERIES" },
    { href: "/contact", label: "CONTACT" },
];

export default function Header() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);



    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        if ("scrollRestoration" in history) {

            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // Dynamic Theme Logic for Progress Bar
    // Dynamic Theme Logic for Progress Bar
    const progressBarColor = (() => {
        const pathParts = pathname?.split('/') || [];
        if (pathParts[1] === 'services' && pathParts[2]) {
            // We need to import serviceData to use this.
            // But Header is a client component.
            // We can lazy load or just rely on the path mapping if we imported it.
            // Let's assume we import serviceData at the top.
            const service = serviceData[pathParts[2]];
            if (service) return service.theme.hero1; // Use the primary hero color
        }
        return "#A18262";
    })();

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 px-6 md:px-[8vw] flex justify-between items-center transition-all duration-500 will-change-transform",
                    scrolled
                        ? "bg-white/80 backdrop-blur-lg py-4 border-b border-black/5"
                        : "bg-transparent py-6"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="relative z-50 text-3xl font-serif font-bold tracking-tighter text-[#111]"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Dakeek.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
                    <ul className="flex gap-8 text-sm font-medium tracking-wide">
                        {links.map((link) => {
                            const isActive = mounted && pathname === link.href;
                            return (
                                <li key={link.href} className="relative group">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative z-10 transition-colors duration-300 hover:text-[#A18262]",
                                            isActive ? "text-[#111] font-bold" : "text-[#666] hover:text-[#A18262]"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                    <span
                                        className={cn(
                                            "absolute -bottom-1 left-0 w-full h-[1px] bg-[#A18262] transform origin-left transition-transform duration-300 ease-out",
                                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        )}
                                    />
                                </li>
                            );
                        })}
                    </ul>


                </nav>


                {/* Mobile Menu Toggle (Custom Animated Icon) */}
                <button
                    className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-[6px] group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-[2px] bg-[#111] block rounded-full"
                    />
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-[2px] bg-[#111] block rounded-full"
                    />
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-[2px] bg-[#111] block rounded-full"
                    />
                </button>

                {/* Mobile Scroller */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[3px] origin-left z-50"
                    style={{ scaleX, width: "100%", backgroundColor: progressBarColor }}
                />
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-[#FAFAF9] flex flex-col pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-serif text-[#111] hover:text-[#A18262] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Footer Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto pb-12 space-y-4"
                        >
                            <div className="h-[1px] w-full bg-[#E5E5E5] mb-6" />
                            <a
                                href="https://wa.me/971500000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full py-4 bg-[#25D366] text-white text-center font-bold uppercase tracking-widest mt-4"
                            >
                                WhatsApp Now
                            </a>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
