import React from "react";
import SectionWrapper from "@/components/about/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Dakeek",
    description: "Our commitment to your privacy. Dakeek does not sell your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-[#111] min-h-screen text-white pt-32 pb-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto px-[5vw]">
                    <h1 className="text-5xl md:text-7xl font-serif mb-12 text-white tracking-tight">
                        Privacy <span className="text-[#C4A67C]">Policy</span>
                    </h1>

                    <div className="space-y-16 text-stone-300 font-light leading-relaxed text-lg">

                        {/* Core Statement */}
                        <div className="p-8 border border-[#C4A67C]/20 bg-[#C4A67C]/5 rounded-2xl">
                            <h2 className="text-2xl font-sans text-white mb-4">Our Promise</h2>
                            <p className="text-xl text-white">
                                We do not sell your personal data. Period.
                                <br /><span className="text-stone-400 text-base mt-2 block">Your home is private, and so is your information.</span>
                            </p>
                        </div>

                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">1. Information We Collect</h2>
                            <p className="mb-4">
                                We utilize minimal data collection practices necessary to provide home maintenance services effectively.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-stone-400">
                                <li><strong>Contact Information:</strong> Name, phone number, and email address for booking and communication.</li>
                                <li><strong>Location Data:</strong> Your address to dispatch our technicians.</li>
                                <li><strong>Service History:</strong> Records of repairs and maintenance for your property's long-term care.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">2. How We Use Information</h2>
                            <p className="mb-4">
                                Your data is used exclusively for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-stone-400">
                                <li>Scheduling and completing service appointments.</li>
                                <li>Sending service confirmations, invoices, and reports.</li>
                                <li>Improving our internal service quality.</li>
                            </ul>
                            <p className="mt-4 text-white">We do NOT share your information with third-party advertisers.</p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">3. Data Security</h2>
                            <p>
                                We employ industry-standard encryption and security protocols to protect your digital information. All payment processing is handled through certified, secure payment gateways (PCI-DSS compliant).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">4. Contact Us</h2>
                            <p>
                                If you have questions regarding your data, please contact us directly at <a href="mailto:info@dakeek.ae" className="text-white hover:text-[#C4A67C] hover:underline transition-colors">info@dakeek.ae</a>.
                            </p>
                        </section>

                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
