"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { serviceData } from "../../data/serviceData";
import { usePWAInstall } from "../../hooks/usePWAInstall";
import dynamic from "next/dynamic";
import ScrollProgressBar from "./ScrollProgressBar";

const InstallModal = dynamic(() => import("../shared/InstallModal"), {
    ssr: false,
});

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
    const { install, isIOS } = usePWAInstall();
    const [showInstallModal, setShowInstallModal] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        setMounted(true);
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        let rafId: number;

        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 20);
                rafId = 0;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
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
        if (outcome === "IOS_INSTRUCTION_NEEDED" || outcome === "INSTALL_UNAVAILABLE") {
            setShowInstallModal(true);
        }
    };

    const progressBarColor = (() => {
        const pathParts = pathname?.split('/') || [];
        if (pathParts[1] === 'services' && pathParts[2]) {
            const service = serviceData[pathParts[2]];
            if (service) return service.theme.hero1;
        }
        return "#C4A67C";
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
                {/* Logo - CSS animation */}
                <div className="animate-header-fade" style={{ animationDelay: '0s' }}>
                    <Link
                        href="/"
                        prefetch={true}
                        className="relative z-50 text-3xl font-serif font-bold tracking-tighter text-[#111]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dakeek
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
                    <ul className="flex gap-8 text-sm font-medium tracking-wide">
                        {links.map((link, i) => {
                            const isActive = mounted && pathname === link.href;
                            return (
                                <li
                                    key={link.href}
                                    className="relative group animate-header-fade"
                                    style={{ animationDelay: `${0.05 + i * 0.05}s` }}
                                >
                                    <Link
                                        href={link.href}
                                        prefetch={true}
                                        title={`${link.label} – Dakeek property maintenance services in Dubai`}
                                        className={cn(
                                            "relative z-10 transition-colors duration-300 hover:text-[#C4A67C]",
                                            isActive ? "text-[#111] font-bold" : "text-[#555] hover:text-[#C4A67C]"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                    <span
                                        className={cn(
                                            "absolute -bottom-1 left-0 w-full h-[1px] bg-[#C4A67C] transform origin-left transition-transform duration-300 ease-out",
                                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        )}
                                    />
                                </li>
                            );
                        })}
                    </ul>

                    {/* Get App Button (Desktop) */}
                    <button
                        onClick={handleInstallClick}
                        className="get-app-button px-6 py-2 bg-[#111] text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#C4A67C] transition-colors border border-transparent hover:border-[#C4A67C]/20 shadow-lg shadow-black/5"
                    >
                        Get App
                    </button>
                </nav>


                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Get App Button (Visible on Navbar) */}
                    <button
                        onClick={handleInstallClick}
                        className="get-app-button px-4 py-2 bg-[#111] text-white rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-[#C4A67C] transition-colors border border-transparent shadow-md whitespace-nowrap"
                    >
                        Get App
                    </button>

                    {/* Mobile Menu Toggle (CSS only) */}
                    <button
                        className="relative z-[200] w-10 h-10 flex flex-col justify-center items-center gap-[6px] group"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span
                            className={cn(
                                "w-8 h-[2px] bg-[#111] block rounded-full transition-transform duration-300",
                                isMenuOpen && "rotate-45 translate-y-2"
                            )}
                        />
                        <span
                            className={cn(
                                "w-8 h-[2px] bg-[#111] block rounded-full transition-opacity duration-300",
                                isMenuOpen && "opacity-0"
                            )}
                        />
                        <span
                            className={cn(
                                "w-8 h-[2px] bg-[#111] block rounded-full transition-transform duration-300",
                                isMenuOpen && "-rotate-45 -translate-y-2"
                            )}
                        />
                    </button>
                </div>

                {/* Progress Bar - Isolated component for performance */}
                <ScrollProgressBar color={progressBarColor} />
            </header>

            {/* Mobile Menu Overlay - CSS animation */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-[90] bg-[#FAFAF9] flex flex-col pt-32 px-6 md:hidden text-center animate-menu-slide"
                >
                    <div className="flex flex-col gap-8 items-center">
                        {links.map((link, index) => (
                            <div
                                key={link.href}
                                className="animate-menu-item"
                                style={{ animationDelay: `${0.05 + index * 0.03}s` }}
                            >
                                <Link
                                    href={link.href}
                                    prefetch={true}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-serif text-[#111] hover:text-[#C4A67C] transition-colors text-center w-full block"
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Footer Info */}
                    <div className="mt-auto pb-12 space-y-4">
                        <div className="h-[1px] w-full bg-[#E5E5E5] mb-6" />
                        <a
                            href="https://wa.me/971542472151?text=Hello%20Dakeek%20Property%20Maintenance%2C%20I%20would%20like%20to%20book%20a%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full py-4 bg-[#25D366] text-white text-center font-bold uppercase tracking-widest mt-4"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            )}

            {/* PWA Install Modal */}
            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
                isIOS={isIOS}
            />
        </>
    );
}
