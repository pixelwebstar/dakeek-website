import { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Scale, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms and Conditions | Dakeek Service Agreement",
    description: "Our standard terms of service, warranty information, and agreement for property maintenance in Dubai.",
    alternates: {
        canonical: "https://dakeek.ae/terms-and-conditions",
        languages: { 'en-AE': 'https://dakeek.ae/terms-and-conditions' },
    },
};

export default function TermsConditionsPage() {
    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] selection:bg-[#C4A67C] selection:text-white pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-[5vw] lg:px-8">

                {/* Header */}
                <div className="mb-16 border-b border-black/10 pb-8">
                    <div className="flex items-center gap-3 mb-4 text-[#C4A67C]">
                        <Scale className="w-6 h-6" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">Service Agreement</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Terms & Conditions</h1>
                    <p className="text-xl text-[#666] font-light max-w-2xl leading-relaxed">
                        These terms govern the use of Dakeek Technical Services. By booking a service, you agree to these conditions.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12">

                    {/* 1. Service Scope */}
                    <section className="bg-white p-8 rounded-lg border border-[#E5E5E5] shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#FAFAF9] rounded-full">
                                <FileText className="w-6 h-6 text-[#111]" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif mb-4">1. Scope of Service</h2>
                                <p className="text-[#555] leading-relaxed">
                                    Dakeek provides professional property maintenance including AC, plumbing, electrical, and handyman services across Dubai. All services are performed by trained technicians.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Bookings & Payments */}
                    <section>
                        <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                            <Clock className="w-5 h-5 text-[#C4A67C]" />
                            Bookings & Payments
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#111] text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2 text-[#C4A67C]">Scheduling</h3>
                                <p className="text-sm text-stone-300 leading-relaxed">
                                    Appointments are scheduled based on availability. While we aim for punctuality, arrival times may vary due to Dubai traffic or unpredictable job complexities.
                                </p>
                            </div>
                            <div className="bg-[#E5E5E5] p-6 rounded-lg">
                                <h3 className="font-bold mb-2 text-[#111]">Payment Terms</h3>
                                <p className="text-sm text-[#555] leading-relaxed">
                                    Payments are due upon completion of the service unless otherwise agreed. We accept cash, cards, and online transfers.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Warranty & Liability */}
                    <section className="space-y-6 text-[#444]">
                        <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                            <Shield className="w-5 h-5 text-[#C4A67C]" />
                            Warranty & Liability
                        </h2>

                        <div className="border-l-2 border-[#E5E5E5] pl-6">
                            <h3 className="font-bold text-[#111] mb-2">Service Warranty</h3>
                            <p className="text-sm leading-relaxed">
                                We provide a standard warranty on our workmanship. Specific parts used carry manufacturer warranties. Warranty is void if the repair is tampered with by third parties.
                            </p>
                        </div>

                        <div className="border-l-2 border-[#E5E5E5] pl-6">
                            <h3 className="font-bold text-[#111] mb-2">Liability Limitation</h3>
                            <p className="text-sm leading-relaxed">
                                Dakeek is not liable for pre-existing property damage or issues arising from structural defects not related to the specific repair performed.
                            </p>
                        </div>

                        <div className="border-l-2 border-[#E5E5E5] pl-6">
                            <h3 className="font-bold text-[#111] mb-2">Cancellations</h3>
                            <p className="text-sm leading-relaxed">
                                Please notify us at least 2 hours in advance for cancellations. Repeated late cancellations may incur a nominal call-out fee.
                            </p>
                        </div>
                    </section>

                    {/* Footer Link */}
                    <div className="mt-16 pt-8 border-t border-black/10 text-center">
                        <p className="text-sm text-[#666] mb-4">Need clarification on our terms?</p>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-[#111] text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#C4A67C] transition-colors">
                            Contact Support
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
