"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copy, Check } from "lucide-react";
import { serviceData } from "../../data/serviceData";
import { usePWAInstall } from "../../hooks/usePWAInstall";
import InstallModal from "../shared/InstallModal";

export default function Footer() {
    const pathname = usePathname();
    const { install, isIOS } = usePWAInstall();
    const [showInstallModal, setShowInstallModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleInstallClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const outcome = await install();
        if (outcome === "IOS_INSTRUCTION_NEEDED" || outcome === "INSTALL_UNAVAILABLE") {
            setShowInstallModal(true);
        }
    };

    const handleLicenseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("1382290");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        window.open("https://app.invest.dubai.ae/search-license", "_blank");
    };

    const openChat = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            const event = new Event('open-chat');
            window.dispatchEvent(event);
        }
    };

    // Dynamic Theme Logic
    const theme = useMemo(() => {
        const pathParts = pathname?.split('/') || [];
        const isServicePage = pathParts[1] === 'services' && pathParts[2];
        const serviceTheme = isServicePage ? serviceData[pathParts[2]]?.theme : null;

        if (serviceTheme) {
            return {
                bg: serviceTheme.secondaryBg,
                text: serviceTheme.primaryText.replace('text-', 'text-'),
                header: serviceTheme.primaryText,
                border: serviceTheme.primaryText.replace('text-', 'border-').replace('600', '200').replace('500', '200'),
                mutedText: "text-slate-500",
                hoverText: "hover:text-black",
                copyright: "text-slate-400",
            };
        }

        // Default Theme
        return {
            bg: "bg-[#FAFAF9]",
            text: "text-[#111]",
            header: "text-[#111]",
            border: "border-black/5",
            mutedText: "text-[#555]",
            hoverText: "hover:text-[#C4A67C]",
            copyright: "text-[#555]",
        };
    }, [pathname]);

    const links = {
        company: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Journal", href: "/journal" },
            { name: "Queries", href: "/queries" },
            { name: "Contact Us", href: "/contact" },
        ],
        services: [
            { name: "AC Maintenance", href: "/services/ac" },
            { name: "Plumbing Services", href: "/services/plumbing" },
            { name: "Electrical Works", href: "/services/electrical" },
            { name: "Deep Cleaning", href: "/services/cleaning" },
            { name: "Handyman", href: "/services/handyman" },
            { name: "Emergency Service", href: "/services/emergency" },
        ],
        contact: [
            { name: "Call Support", href: "tel:+971542472151" },
            { name: "WhatsApp Us", href: "https://wa.me/971542472151" },
            { name: "Dakeek Chat", href: "#chat", action: openChat },
            { name: "Email Support", href: "mailto:care@dakeek.ae" },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: "Careers", href: "/careers" },
        ],
        socials: [
            { name: "LinkedIn", href: "https://www.linkedin.com/company/dakeek-technical-service-co-llc/" },
            { name: "Indeed", href: "https://ae.indeed.com/" },
            { name: "Instagram", href: "https://www.instagram.com/dakeektechnicalservice/" },
            { name: "Facebook", href: "https://www.facebook.com/dakeektechnicalservice/" },
            { name: "X (Twitter)", href: "https://twitter.com" },
            { name: "TikTok", href: "https://tiktok.com" },
        ],
        areas: [
            "Deira", "Al Mateena", "Al Rigga", "Al Muraqqabat", "Hor Al Anz", "Al Qusais",
            "Al Nahda", "Port Saeed", "Mirdif", "Al Warqa", "Bur Dubai", "Karama",
            "Oud Metha", "Satwa", "Downtown Dubai", "Business Bay", "DIFC", "Al Mankhool",
            "Dubai Festival City", "Al Mamzar", "Al Barsha"
        ]
    };

    return (
        <footer itemScope itemType="https://schema.org/LocalBusiness" className={`w-full px-[5vw] lg:px-[8vw] py-10 ${theme.bg} ${theme.text} relative overflow-hidden text-sm border-t ${theme.border}`}>

            <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-10">

                {/* LEFT SIDE: BRANDING & UTILITY */}
                <div className="w-full lg:w-[30%] flex flex-col gap-6 lg:sticky lg:top-12">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter mb-4" itemProp="name">DAKEEK</h2>
                        <p className={`font-serif text-base leading-relaxed ${theme.mutedText} max-w-xs`} itemProp="description">
                            &quot;Engineering rigor for Dubai’s finest homes. Precision in every detail.&quot;
                        </p>
                        <meta itemProp="telephone" content="+971542472151" />
                        <meta itemProp="email" content="care@dakeek.ae" />
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
                            <meta itemProp="streetAddress" content="Xavier Business Center, BN Building, B1 Floor, M2, Al Mateena St, Deira" />
                            <meta itemProp="addressLocality" content="Dubai" />
                            <meta itemProp="addressRegion" content="Dubai" />
                            <meta itemProp="addressCountry" content="AE" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 items-start">
                        {/* License Button with SEO metadata */}
                        <button
                            onClick={handleLicenseClick}
                            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-black/10 hover:border-[#C4A67C] transition-all shadow-sm active:scale-95"
                            title="Dubai DET License 1382290 - Verify on Dubai Economy &amp; Tourism"
                        >
                            <span className={`font-mono text-xs uppercase tracking-widest ${theme.mutedText} group-hover:text-[#C4A67C] transition-colors`}>
                                DET License: 1382290
                            </span>
                            {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-stone-400 group-hover:text-[#C4A67C]" />}
                        </button>

                        {/* Install App Button */}
                        <button
                            onClick={handleInstallClick}
                            className="flex items-center gap-2 px-5 py-2.5 mt-2 rounded-full bg-[#111] text-white shadow-md hover:bg-[#C4A67C] transition-all hover:scale-105 active:scale-95 w-fit group"
                        >
                            <span className="font-mono text-[10px] uppercase tracking-widest font-medium group-hover:text-white">Install App</span>
                        </button>
                    </div>
                </div>


                {/* RIGHT SIDE: LINKS GRID */}
                <div className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">

                    {/* 1. Company */}
                    <div className="space-y-5">
                        <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-medium opacity-100">Company</h3>
                        <ul className="space-y-3">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        prefetch={true}
                                        title={`${link.name} – Dubai's Premier Home Maintenance & Technical Services`}
                                        className={`text-sm font-medium ${theme.mutedText} ${theme.hoverText} transition-colors block hover:translate-x-1 duration-200`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 2. Services */}
                    <div className="space-y-5">
                        <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-medium opacity-100">Services</h3>
                        <ul className="space-y-3">
                            {links.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        prefetch={true}
                                        title={`${link.name} in Dubai – 24/7 Emergency Service Available`}
                                        className={`text-sm font-medium ${theme.mutedText} ${theme.hoverText} transition-colors block hover:translate-x-1 duration-200`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact */}
                    <div className="space-y-5">
                        <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-medium opacity-100">Contact</h3>
                        <ul className="space-y-3">
                            {links.contact.map((link) => {
                                const isInternal = link.href.startsWith('/');
                                return (
                                    <li key={link.name}>
                                        {link.action ? (
                                            <button onClick={link.action} className={`text-sm font-medium ${theme.mutedText} ${theme.hoverText} transition-colors text-left block hover:translate-x-1 duration-200`}>
                                                {link.name}
                                            </button>
                                        ) : (
                                            isInternal ? (
                                                <Link
                                                    href={link.href}
                                                    className={`text-sm font-medium ${theme.mutedText} ${theme.hoverText} transition-colors block hover:translate-x-1 duration-200`}
                                                >
                                                    {link.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title={link.name === "Coverage Areas" ? "Coverage areas within 25 km of our Dubai base" : `${link.name} - Dakeek Dubai`}
                                                    className={`text-sm font-medium ${theme.mutedText} ${theme.hoverText} transition-colors block hover:translate-x-1 duration-200`}
                                                >
                                                    {link.name}
                                                </a>
                                            )
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* 4. Socials */}
                    <div className="space-y-5">
                        <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-medium opacity-100">Follow</h3>
                        <ul className="space-y-3">
                            {links.socials.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium ${theme.mutedText} ${theme.hoverText} transition-colors block hover:translate-x-1 duration-200`}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. Areas We Serve */}
                    <div className="col-span-2 md:col-span-4 pt-10 border-t border-black/5">
                        <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-medium opacity-100 mb-6">Areas We Serve</h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {links.areas.map((area) => (
                                <Link
                                    key={area}
                                    href="/services"
                                    className={`text-xs font-medium ${theme.mutedText} ${theme.hoverText} transition-colors`}
                                >
                                    {area}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT CENTER BOTTOM */}
            <div className="relative z-20 w-full pt-8 border-t border-black/5 text-center">
                <p className={`font-mono text-[10px] uppercase tracking-widest ${theme.copyright}`}>
                    © {new Date().getFullYear()} Dakeek Technical Services LLC. All rights reserved.
                </p>
            </div>

            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
                isIOS={isIOS}
            />
        </footer >
    );
}
