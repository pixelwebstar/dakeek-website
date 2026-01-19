"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, LayoutGrid } from "lucide-react";
import { ServicePageData } from "../../data/serviceData";

interface ServiceNavigationProps {
    prev: { id: string; name: string } | null;
    next: { id: string; name: string } | null;
    theme: ServicePageData['theme'];
}

export default function ServiceNavigation({ prev, next, theme }: ServiceNavigationProps) {
    return (
        <section className={`px-[5vw] py-24 ${theme.secondaryBg} border-t border-black/5`}>
            <div className="max-w-6xl mx-auto">

                {/* Hub Link */}
                <div className="flex justify-center mb-16">
                    <Link
                        href="/services"
                        className="group flex items-center gap-2 px-6 py-3 bg-white border border-black/5 rounded-full shadow-sm hover:shadow-md transition-all text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-slate-900"
                    >
                        <LayoutGrid className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                        <span>All Services</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Previous Service Card */}
                    {prev ? (
                        <Link href={`/services/${prev.id}`} className="group relative block w-full p-8 bg-white border border-black/5 rounded-3xl hover:shadow-xl hover:border-black/10 transition-all overflow-hidden text-left">
                            <div className="relative z-10">
                                <span className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-4 ${theme.accentText}`}>
                                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                                    Previous
                                </span>
                                <h4 className="text-3xl font-serif text-slate-900 leading-tight group-hover:text-amber-900/80 transition-colors">
                                    {prev.name}
                                </h4>
                            </div>
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.primaryBg} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`} />
                        </Link>
                    ) : <div className="hidden md:block" />}

                    {/* Next Service Card */}
                    {next ? (
                        <Link href={`/services/${next.id}`} className="group relative block w-full p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all overflow-hidden text-right">
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-4 text-slate-400">
                                    Next Service
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <h4 className="text-3xl font-serif text-white leading-tight">
                                    {next.name}
                                </h4>
                            </div>
                            {/* Decorative background visual */}
                            <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr ${theme.primaryBg} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-700`} />
                        </Link>
                    ) : <div className="hidden md:block" />}
                </div>
            </div>
        </section>
    );
}
