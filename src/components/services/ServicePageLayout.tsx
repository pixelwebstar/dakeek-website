"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
const HyperHero = dynamic(() => import("../hero/HyperHero"), { ssr: false });
import TechSpecs from "./TechSpecs";
import ServiceNavigation from "./ServiceNavigation";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, ChevronDown, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { ServicePageData, serviceData } from "../../data/serviceData";
import ServiceDetailSection from "./ServiceDetailSection";

export default function ServicePageLayout({ data, slug }: { data?: ServicePageData; slug?: string }) {
    const router = useRouter();

    // Resolve Data (Client Side to avoid serialization issues)
    const pageData = data || (slug ? serviceData[slug] : null);

    if (!pageData) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    // Calculate Prev/Next
    const serviceKeys = Object.keys(serviceData);
    const currentIndex = serviceKeys.indexOf(pageData.slug);
    const prevKey = serviceKeys[(currentIndex - 1 + serviceKeys.length) % serviceKeys.length];
    const nextKey = serviceKeys[(currentIndex + 1) % serviceKeys.length];
    const prevService = serviceData[prevKey];
    const nextService = serviceData[nextKey];

    // Keyboard & Swipe Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') router.push(`/services/${prevKey}`);
            if (e.key === 'ArrowRight') router.push(`/services/${nextKey}`);
        };

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 150) {
                // Swipe Left -> Next
                router.push(`/services/${nextKey}`);
            }
            if (touchEndX > touchStartX + 150) {
                // Swipe Right -> Previous
                router.push(`/services/${prevKey}`);
            }
        };


        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [nextKey, prevKey, router]);

    return (
        <main className={`min-h-screen overflow-x-hidden selection:bg-black selection:text-white ${pageData.theme.secondaryBg}`}>

            {/* 1. Custom Hero */}
            <section className={`relative h-screen w-full flex items-center justify-center overflow-hidden ${pageData.theme.secondaryBg}`}>
                <HyperHero
                    color1={pageData.theme.hero1}
                    color2={pageData.theme.hero2}
                    initialColor={pageData.theme.hero2} // Match the shader's base color instantly
                />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className={`font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 ${pageData.theme.primaryText} bg-white/50`}>
                        {pageData.hero.tag}
                    </p>
                    <h1 className={`text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-slate-900`}>
                        {pageData.hero.title}
                    </h1>
                    <p className={`text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-slate-700`}>
                        {pageData.hero.description}
                    </p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-slate-400"
                >
                    <ChevronDown size={32} strokeWidth={1.5} />
                </motion.div>
            </section>

            {/* 2. Introduction */}
            <section className={`w-full px-[5vw] lg:px-[8vw] py-24 lg:py-32 bg-white/50`}>
                <div className="max-w-4xl mx-auto text-center">
                    <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-8 ${pageData.theme.primaryText}`}>
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                        {pageData.intro.heading}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5">
                        {pageData.intro.stats.map((stat, i) => (
                            <div key={i}>
                                <div className={`text-3xl font-bold mb-2 ${pageData.theme.primaryText}`}>{stat.value}</div>
                                <div className="text-sm uppercase tracking-wide text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Detailed Services */}
            <ServiceDetailSection data={pageData} />

            {/* 3.5 Add-On Service (Optional) */}
            {pageData.addOn && (
                <section className={`py-24 lg:py-32 px-[5vw] lg:px-[8vw] ${pageData.theme.secondaryBg} relative`}>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-white shadow-sm ${pageData.theme.primaryText}`}>
                                <Wind className="w-4 h-4" strokeWidth={1.5} />
                                <span>{pageData.addOn.tag}</span>
                            </div>
                            <h3 className="text-4xl font-serif text-slate-900 mb-6">{pageData.addOn.title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {pageData.addOn.description}
                            </p>
                            <ul className="space-y-4 mb-8 list-none">
                                {pageData.addOn.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-titanium">
                                        <div className={`w-2 h-2 rounded-full ${pageData.theme.primaryBg.replace('bg-', 'bg-')}`} />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative aspect-square md:aspect-video bg-white rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={pageData.addOn.image}
                                alt={pageData.addOn.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />

                        </div>
                    </div>
                </section>
            )}

            {/* 4. Technical Specs */}
            <TechSpecs
                specs={pageData.techSpecs.grid}
                tools={pageData.techSpecs.tools}
                details={pageData.techSpecs.list}
                theme={pageData.theme}
            />

            {/* 5. Trust & Promise (Premium White) */}
            <section className={`w-full px-[5vw] lg:px-[8vw] py-24 lg:py-32 relative overflow-hidden bg-white border-t border-structure`}>
                {/* Noise Texture */}
                <div className="absolute inset-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply"></div>

                <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className={`p-4 rounded-full bg-white border border-black/5 mb-8 shadow-xl`}>
                        {/* Use primaryText (Dark Premium Shade) directly. Remove hero1 override. */}
                        <ShieldCheck className={`w-12 h-12 ${pageData.theme.primaryText}`} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight">The Dakeek Guarantee</h3>
                    <p className="text-xl md:text-2xl font-light text-slate-600 max-w-2xl mb-12 leading-relaxed">
                        We don&apos;t just fix it; we certify it. Every service comes with a <span className="font-medium text-slate-900">full warranty</span> and a direct line to our support team.
                    </p>

                    <div className="mt-12">
                        <Link href="/contact" className="group relative px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3">
                            <span className="relative z-10 font-mono uppercase tracking-widest text-sm">
                                Book Now
                            </span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out ${pageData.theme.primaryBg}`} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. Navigation */}
            <div>
                <ServiceNavigation
                    prev={{ id: prevService.slug, name: prevService.hero.title }}
                    next={{ id: nextService.slug, name: nextService.hero.title }}
                    theme={pageData.theme}
                />
            </div>
        </main>
    );
}
