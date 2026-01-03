"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";
import StaticFooterWatermark from "./StaticFooterWatermark";
import { serviceData } from "../../data/serviceData";

export default function Footer() {
    const pathname = usePathname();

    // Dynamic Theme Logic
    const theme = useMemo(() => {
        // Extract service slug from path /services/[slug]
        const pathParts = pathname?.split('/') || [];
        const isServicePage = pathParts[1] === 'services' && pathParts[2];
        const serviceTheme = isServicePage ? serviceData[pathParts[2]]?.theme : null;

        if (serviceTheme) {
            return {
                bg: serviceTheme.secondaryBg,
                text: serviceTheme.primaryText.replace('text-', 'text-'), // Assuming primaryText is like 'text-blue-600'
                // For text colors that act as accents or headers, we can derive or use the provided theme
                // Let's map the serviceTheme to the footer structure
                accent: serviceTheme.accentText,
                header: serviceTheme.primaryText,
                border: serviceTheme.primaryText.replace('text-', 'border-').replace('600', '200').replace('500', '200'), // Hacky derivation for lighter border
                iconBg: `hover:${serviceTheme.primaryText.replace('text-', 'bg-')} hover:text-white`,
                secondaryText: "text-slate-600",
                mutedText: "text-slate-400",
                copyright: "text-slate-300",
                isDark: false // Service pages are generally light/colored
            };
        }

        // Default Theme (Home / Other)
        return {
            bg: "bg-canvas",
            text: "text-ink",
            accent: "text-bronze",
            header: "text-bronze",
            border: "border-structure",
            iconBg: "hover:bg-bronze hover:border-bronze",
            secondaryText: "text-[#555]",
            mutedText: "text-[#888]",
            copyright: "text-[#999]",
            isDark: false
        };
    }, [pathname]);

    // Calculate Physics Color (The 'watermark' color)
    // For service pages, we use the hero1 color (which is usually the lighter one)
    const getWatermarkColor = () => {
        const pathParts = pathname?.split('/') || [];
        if (pathParts[1] === 'services' && pathParts[2]) {
            const service = serviceData[pathParts[2]];
            if (service) return service.theme.hero1;
        }
        return "#E5E5E5"; // Default grey structure
    };

    const socialLinks = [
        { name: "Instagram", href: "https://www.instagram.com/dakeektechnicalservice/" },
        { name: "Facebook", href: "https://www.facebook.com/dakeektechnicalservice/" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/dakeek-technical-service-co-llc/" },
        { name: "Email", href: "mailto:asheejajayan@gmail.com" },
        { name: "Phone", href: "tel:+971542472151" }
    ];

    return (
        <footer className={`w-full px-[5vw] lg:px-[8vw] pt-24 pb-8 ${theme.bg} ${theme.text} relative overflow-hidden flex flex-col items-center justify-between border-t ${theme.border} min-h-[50vh]`}>

            {/* 1. LAYER 0: The Watermark (Static) */}
            <StaticFooterWatermark color={getWatermarkColor()} />

            {/* 2. LAYER 10: The Content (Floating Above) */}
            <div
                className={`relative z-10 w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24 md:mb-32 transition-opacity duration-300 pointer-events-auto opacity-100`}
            >
                {/* Col 1: Brand */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">DAKEEK</h2>
                    <p className={`font-serif italic text-lg leading-relaxed ${theme.secondaryText}`}>
                        &quot;Engineering rigor for Dubai’s finest homes. Precision in every detail.&quot;
                    </p>
                    <div className="flex flex-col gap-1 items-start">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Anzar+Gallery+Building+Al+Karama+Dubai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 text-sm ${theme.mutedText} hover:text-black transition-colors cursor-pointer duration-300`}
                        >
                            <MapPin size={16} />
                            <span>Anzar Gallery Building, Al Karama, Dubai</span>
                        </a>
                        <a
                            href="https://app.invest.dubai.ae/search-license"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full border border-black/5 bg-black/5 hover:bg-black/10 transition-colors cursor-pointer group`}
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className={`text-[10px] font-mono uppercase tracking-widest ${theme.mutedText} group-hover:text-black`}>
                                Official License: 1382290
                            </span>
                        </a>
                    </div>
                </div>

                {/* Col 2: Navigation */}
                <div className="space-y-6">
                    <h3 className={`font-mono text-xs uppercase tracking-widest opacity-70`}>Explore</h3>
                    <div className="flex flex-col gap-4">
                        <Link href="/" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}>
                            About
                        </Link>
                        <Link href="/services" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}>
                            Services
                        </Link>
                        <Link href="/queries" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}>
                            Queries
                        </Link>
                        <Link href="/contact" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}>
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Col 3: Support */}
                <div className="space-y-6">
                    <h3 className={`font-mono text-xs uppercase tracking-widest opacity-70`}>Support</h3>
                    <div className="flex flex-col gap-4">

                        <Link href="/services/emergency" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}>
                            Emergency (24/7)
                        </Link>
                        <Link href="/all-pages" className={`font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header} opacity-50`}>
                            All Pages (Temp)
                        </Link>
                    </div>
                </div>


                {/* Col 4: Connect (Text Links) */}
                <div className="space-y-6">
                    <h3 className={`font-mono text-xs uppercase tracking-widest opacity-70`}>Connect</h3>
                    <div className="flex flex-col gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 block w-fit ${theme.header}`}
                            >
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. LAYER 60: Copyright (Floating perfectly ON TOP) */}
            <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-4 transition-opacity duration-300 pointer-events-none select-none`}
                style={{ zIndex: 60 }}
            >
                <p className={`text-[10px] font-mono uppercase tracking-widest ${theme.copyright}`}>
                    © {new Date().getFullYear()} Dakeek Technical Services LLC.
                </p>
            </div>
        </footer>
    );
}

