import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Globe } from "lucide-react";

import GradientHero from "@/components/hero/GradientHero";

export const metadata: Metadata = {
    title: "Privacy Policy | Dakeek Data Protection",
    description: "Our commitment to data privacy under UAE and International Law. Your data is secure and never sold.",
    alternates: {
        canonical: "https://dakeek.ae/privacy-policy",
        languages: { 'en-AE': 'https://dakeek.ae/privacy-policy' },
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] selection:bg-[#C4A67C] selection:text-white pb-24">

            {/* HERO SECTION */}
            <section className="relative min-h-[50vh] md:min-h-[60vh] w-full flex items-center justify-center overflow-hidden border-b border-black/5 text-[#111] pt-20 mb-16">
                <GradientHero color1="#9CA3AF" color2="#E5E7EB" initialColor="#E5E7EB" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50 flex flex-row items-center gap-2 w-fit mx-auto">
                        <Shield className="w-3 h-3 text-[#C4A67C]" /> Legal Compliance
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans tracking-tight mb-6 md:mb-8 leading-[0.9] text-[#111]">
                        Privacy Policy
                    </h1>
                    <p className="text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed backdrop-blur-sm text-[#555] uppercase tracking-widest">
                        Your trust is our foundation.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-[5vw] lg:px-8">
                {/* Content */}
                <div className="space-y-12">

                    {/* 1. Core Commitment */}
                    <section className="bg-white p-8 rounded-lg border border-[#E5E5E5] shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#FAFAF9] rounded-full">
                                <Lock className="w-6 h-6 text-[#111]" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif mb-4">Our Data Promise</h2>
                                <p className="text-[#555] leading-relaxed mb-4">
                                    We collect necessary data (Name, Phone, Location) solely to provide our property maintenance services.
                                    <strong className="text-[#111] block mt-2">We do NOT sell, trade, or rent your personal identification information to others.</strong>
                                </p>
                                <p className="text-[#555]">
                                    Your data is stored securely and is only accessed by authorized Dakeek personnel for service fulfillment and communication purposes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Compliance */}
                    <section>
                        <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                            <Globe className="w-5 h-5 text-[#C4A67C]" />
                            Regional Compliance
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#111] text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2 text-[#C4A67C]">UAE & Dubai</h3>
                                <p className="text-sm text-stone-300 leading-relaxed">
                                    Compliant with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL). We respect your rights to access and correct your data.
                                </p>
                            </div>
                            <div className="bg-[#E5E5E5] p-6 rounded-lg">
                                <h3 className="font-bold mb-2 text-[#111]">Global Standards</h3>
                                <p className="text-sm text-[#555] leading-relaxed">
                                    We align our practices with general international privacy principles, ensuring robust data handling for all our international clients and partners.
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* Contact for Privacy */}
                    <div className="mt-16 pt-8 border-t border-black/10 text-center">
                        <p className="text-sm text-[#666] mb-4">Questions about your data?</p>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-[#111] text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#C4A67C] transition-colors">
                            Contact Privacy Officer
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
