"use client";

import { ShieldCheck, Clock, UserCheck, Home } from "lucide-react";

export default function TrustTicker() {
    return (
        <section className="w-full border-b border-structure bg-white py-4 overflow-hidden flex items-center">
            <div className="flex gap-8 md:gap-16 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#6B5344] animate-ticker">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-8 md:gap-16">
                        <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} /> RESIDENTIAL & COMMERCIAL</span>
                        <span className="flex items-center gap-2"><UserCheck className="w-3.5 h-3.5" strokeWidth={1.5} /> TRUSTED EXPERTS</span>
                        <span className="flex items-center gap-2"><Home className="w-3.5 h-3.5" strokeWidth={1.5} /> PROPERTY MAINTENANCE</span>
                        <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" strokeWidth={1.5} /> PROFESSIONAL SUPPORT</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
