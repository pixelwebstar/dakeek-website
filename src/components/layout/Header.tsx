"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { serviceData } from "../../data/serviceData";
import { useTransitionContext } from "../../lib/context/TransitionContext";
import { usePWAInstall } from "../../hooks/usePWAInstall";
import InstallModal from "../shared/InstallModal";

const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/queries", label: "QUERIES" },
    { href: "/journal", label: "JOURNAL" },
    { href: "/contact", label: "CONTACT" },
];

export default function Header() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isLoaded } = useTransitionContext();
    const { install, isIOS } = usePWAInstall();
    const [showInstallModal, setShowInstallModal] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setMounted(true);
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const handleInstallClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const outcome = await install();
        if (outcome === "IOS_INSTRUCTION_NEEDED") {
            setShowInstallModal(true);
        }
    };

    const progressBarColor = (() => {
        const pathParts = pathname?.split('/') || [];
        if (pathParts[1] === 'services' && pathParts[2]) {
            const service = serviceData[pathParts[2]];
            if (service) return service.theme.hero1;
        }
        return "#A18262";
    })();

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-[100] px-6 md:px-[8vw] flex justify-between items-center transition-all duration-500 will-change-transform",
                    scrolled
                        ? "bg-white/80 backdrop-blur-lg py-4 border-b border-black/5"
                        : "bg-transparent py-6"
                )}
            >
                {/* Logo */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isLoaded ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Link
                        href="/"
                        className="relative z-50 text-3xl font-serif font-bold tracking-tighter text-[#111]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dakeek.
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
                    <ul className="flex gap-8 text-sm font-medium tracking-wide">
                        {links.map((link, i) => {
                            const isActive = mounted && pathname === link.href;
                            return (
                                <motion.li
                                    key={link.href}
                                    className="relative group"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={isLoaded ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 + (i * 0.1), ease: "easeOut" }}
                                >
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
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* Get App Button (Desktop) */}
                    <button
                        onClick={handleInstallClick}
                        className="px-6 py-2 bg-[#111] text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#A18262] transition-colors border border-transparent hover:border-[#A18262]/20 shadow-lg shadow-black/5"
                    >
                        Get App
                    </button>
                </nav>


                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Get App Button (Visible on Navbar) */}
                    <button
                        onClick={handleInstallClick}
                        className="px-4 py-2 bg-[#111] text-white rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-[#A18262] transition-colors border border-transparent shadow-md whitespace-nowrap"
                    >
                        Get App
                    </button>

                    {/* Mobile Menu Toggle (Custom Animated Icon) */}
                    <button
                        className="relative z-[200] w-10 h-10 flex flex-col justify-center items-center gap-[6px] group"
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
                </div>

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
                        className="fixed inset-0 z-[90] bg-[#FAFAF9] flex flex-col pt-32 px-6 md:hidden text-center"
                    >
                        <div className="flex flex-col gap-8 items-center">
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
                                        className="text-4xl font-serif text-[#111] hover:text-[#A18262] transition-colors text-center w-full block"
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
                                href="https://wa.me/971542472151?text=Hello%20Dakeek%20Residential%20Services%2C%20I%20would%20like%20to%20book%20a%20service."
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
            </AnimatePresence >

            {/* PWA Install Modal */}
            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
                isIOS={isIOS}
            />
        </>
    );
}
