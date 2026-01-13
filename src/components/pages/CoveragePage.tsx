"use client";

import React from "react";
import Link from "next/link";
import { DUBAI_AREAS } from "@/lib/constants";
import { serviceData } from "@/data/serviceData";

export default function CoveragePage() {
    return (
        <main className="min-h-screen bg-[#FDFCF8] text-[#111] overflow-x-hidden p-8 lg:p-16">

            <header className="mb-12 border-b border-black/10 pb-8">
                <h1 className="text-4xl font-serif mb-4">Site Index / Verification & Coverage</h1>
                <p className="text-sm font-mono text-[#555] uppercase tracking-widest">
                    Showing all {Object.keys(serviceData).length * DUBAI_AREAS.length} Programmatic Pages
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <Link href="/" className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-bronze transition-colors">
                        ← Back Home
                    </Link>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm border border-green-200">
                        Status: Live Generated
                    </span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Loop through each service */}
                {Object.values(serviceData).map((service) => (
                    <div key={service.id} className="mb-8 break-inside-avoid">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-black/5 pb-2">
                            <span className="text-2xl">{service.id === "01" ? "❄️" : service.id === "02" ? "💧" : "🔧"}</span>
                            {service.hero.title}
                        </h2>

                        {/* Main Service Link */}
                        <div className="mb-4">
                            <Link
                                href={`/services/${service.slug}`}
                                className="text-bronze font-bold hover:underline block mb-2"
                            >
                                → Main Service Page
                            </Link>
                        </div>

                        {/* Area Variations */}
                        <div className="space-y-1 h-[400px] overflow-y-auto pr-2 custom-scrollbar text-sm">
                            {DUBAI_AREAS.map((area) => {
                                const areaSlug = area.toLowerCase().replace(/ /g, '-');
                                return (
                                    <Link
                                        key={area}
                                        href={`/services/${service.slug}/${areaSlug}`}
                                        className="block p-2 rounded hover:bg-stone-100 border-b border-stone-50 transition-colors text-[#444] hover:text-black"
                                    >
                                        <span className="text-[10px] uppercase text-[#888] mr-2">
                                            {service.slug.substring(0, 3).toUpperCase()}
                                        </span>
                                        in {area}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Area Hubs Section */}
            <div className="mt-16 pt-16 border-t border-black/10">
                <h2 className="text-2xl font-serif mb-8">Area Hub Pages (37 Unique Hubs)</h2>
                <div className="flex flex-wrap gap-3">
                    {DUBAI_AREAS.map((area) => {
                        const areaSlug = area.toLowerCase().replace(/ /g, '-');
                        return (
                            <Link
                                key={area}
                                href={`/areas/${areaSlug}`}
                                className="px-4 py-2 bg-white border border-stone-200 rounded hover:border-bronze hover:text-bronze transition-colors"
                            >
                                {area}
                            </Link>
                        );
                    })}
                </div>
            </div>

        </main>
    );
}
