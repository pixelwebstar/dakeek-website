import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Dakeek Data Protection",
    description: "Our commitment to data privacy under UAE and International Law. Your data is secure and never sold.",
    alternates: {
        canonical: "https://dakeek.ae/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] selection:bg-[#C4A67C] selection:text-white pt-32 pb-24">

            <div className="max-w-4xl mx-auto px-[5vw] lg:px-8">

                {/* Header */}
                <div className="mb-16 border-b border-black/10 pb-8">
                    <div className="flex items-center gap-3 mb-4 text-[#C4A67C]">
                        <Shield className="w-6 h-6" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">Legal Compliance</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Privacy Policy</h1>
                    <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">
                        Your trust is our foundation. We strictly adhere to UAE Data Protection Laws and international standards to ensure your personal information remains private and secure.
                    </p>
                </div>

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
                                    We collect necessary data (Name, Phone, Location) solely to provide our home maintenance services.
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

                    {/* 3. Detailed Clauses */}
                    <section className="space-y-6 text-[#444]">
                        <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                            <FileText className="w-5 h-5 text-[#C4A67C]" />
                            Terms of Use
                        </h2>

                        <div className="border-l-2 border-[#E5E5E5] pl-6">
                            <h3 className="font-bold text-[#111] mb-2">1. Information Collection</h3>
                            <p className="text-sm leading-relaxed">
                                We collect information you provide directly to us when requesting a service, creating an account, or communicating with us. This includes contact details and property locations.
                            </p>
                        </div>

                        <div className="border-l-2 border-[#E5E5E5] pl-6">
                            <h3 className="font-bold text-[#111] mb-2">2. Data Usage</h3>
                            <p className="text-sm leading-relaxed">
                                Information is used to dispatch technicians, process payments, send service updates, and improve our platform. We may use your contact info to send critical service alerts.
                            </p>
                        </div>

                        <div className="border-l-2 border-[#E5E5E5] pl-6">
                            <h3 className="font-bold text-[#111] mb-2">3. Security</h3>
                            <p className="text-sm leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                            </p>
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
