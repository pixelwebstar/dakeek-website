"use client";
import { motion } from "framer-motion";
import React from "react";
import { CheckCircle2, Snowflake, ShieldCheck, DollarSign, Award } from "lucide-react";
import { ServicePageData } from "../../data/serviceData";

interface TechSpecsProps {
    specs: { label: string; value: string }[];
    tools: string;
    details: string[]; // List of specific operations
    theme: ServicePageData['theme'];
}

export default function TechSpecs({ specs, tools, details, theme }: TechSpecsProps) {
    const dynamicBorder = "border-[length:var(--border-width)] border-black/5";
    const dynamicBg = theme.secondaryBg;

    return (
        <section className={`w-full px-[5vw] py-16 md:py-24 ${dynamicBg}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left: Operational Details */}
                    <div className="flex-1">
                        <h3 className={`text-sm font-mono uppercase tracking-[0.2em] mb-12 ${theme.accentText}`}>
                            Operational Protocol
                        </h3>
                        <ul className="space-y-6">
                            {details.map((item, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-1 ${theme.primaryText}`} />
                                    <span className="text-lg font-light text-slate-700 group-hover:text-black transition-colors leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Data Grid */}
                    <div className="flex-1">
                        <h3 className={`text-sm font-mono uppercase tracking-[0.2em] mb-12 ${theme.accentText}`}>
                            Technical Data
                        </h3>
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-px border ${dynamicBorder} bg-black/5`}>
                            {specs.map((spec, i) => (
                                <div key={i} className="bg-white/80 p-8 hover:bg-white transition-colors group">
                                    <div className={`text-xs font-mono mb-3 ${theme.accentText}`}>{spec.label}</div>
                                    <div className="text-xl font-serif text-slate-900">{spec.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Service Insight Cards - Full Width Row */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className={`p-8 bg-white/60 border ${dynamicBorder} rounded-sm group hover:bg-white transition-all duration-500`}>
                        <div className="flex items-start gap-4">
                            <Snowflake className={`w-5 h-5 mt-1 shrink-0 ${theme.primaryText}`} />
                            <div>
                                <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${theme.primaryText}`}>Why It Matters</div>
                                <div className="text-slate-700 font-serif text-lg italic leading-relaxed opacity-90">
                                    &ldquo;{tools}&rdquo;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`p-8 bg-white/60 border ${dynamicBorder} rounded-sm group hover:bg-white transition-all duration-500`}>
                        <div className="flex items-start gap-4">
                            <ShieldCheck className={`w-5 h-5 mt-1 shrink-0 ${theme.primaryText}`} />
                            <div>
                                <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${theme.primaryText}`}>Why People Trust Us</div>
                                <div className="text-slate-700 font-serif text-lg italic leading-relaxed opacity-90">
                                    &ldquo;We build trust through free inspections, transparent pricing, and guaranteed workmanship. No surprises, just quality service.&rdquo;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`p-8 bg-white/60 border ${dynamicBorder} rounded-sm group hover:bg-white transition-all duration-500`}>
                        <div className="flex items-start gap-4">
                            <DollarSign className={`w-5 h-5 mt-1 shrink-0 ${theme.primaryText}`} />
                            <div>
                                <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${theme.primaryText}`}>Why It Saves You Money</div>
                                <div className="text-slate-700 font-serif text-lg italic leading-relaxed opacity-90">
                                    &ldquo;Preventive care costs less than emergency repairs. Our regular maintenance catches small issues before they become expensive breakdowns.&rdquo;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`p-8 bg-white/60 border ${dynamicBorder} rounded-sm group hover:bg-white transition-all duration-500`}>
                        <div className="flex items-start gap-4">
                            <Award className={`w-5 h-5 mt-1 shrink-0 ${theme.primaryText}`} />
                            <div>
                                <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${theme.primaryText}`}>Why It&apos;s Better Than Others</div>

                                <div className="text-slate-700 font-serif text-lg italic leading-relaxed opacity-90">
                                    &ldquo;We combine technical expertise with honest service. No upselling, no hidden fees—just skilled technicians who fix it right the first time.&rdquo;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

