"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, CheckCircle, Upload, Send, FileText, CheckCircle2 } from "lucide-react";
import GradientHero from "@/components/hero/GradientHero";

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string>("Sales Officer");
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleApply = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const formData = new FormData(e.currentTarget);
        formData.append("position", selectedJob);

        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                body: formData, // FormData sends correctly parsed multipart data in Next.js
            });

            if (res.ok) {
                setFormStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setFormStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] selection:bg-[#C4A67C] selection:text-white">
            
            {/* HERO SECTION */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden border-b border-black/5 text-[#111]">
                <GradientHero color1="#9CA3AF" color2="#E5E7EB" initialColor="#E5E7EB" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50">
                        Join Dakeek
                    </p>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans tracking-tight mb-6 md:mb-8 leading-[0.9] text-[#111]">
                        Careers
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#555] mb-12 uppercase tracking-widest">
                        Build The Future Of Property Maintenance
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-24 px-[5vw] lg:px-[8vw] bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* LEFT COLUMN: Job Listings */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Open Positions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-12">Current Opportunities.</h2>

                        <div className="space-y-8">
                            {/* Job 1: Sales Officer */}
                            <div 
                                className={`p-8 rounded-3xl border transition-all duration-300 \${selectedJob === "Sales Officer" ? "border-[#C4A67C] bg-[#FAFAF9] shadow-md" : "border-black/5 hover:border-black/10 cursor-pointer"}`}
                                onClick={() => setSelectedJob("Sales Officer")}
                            >
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold font-sans tracking-tight text-[#111] mb-2">Sales Officer</h3>
                                        <div className="flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest text-[#666]">
                                            <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-black/5"><Briefcase className="w-3 h-3"/> Full Time</span>
                                            <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-black/5"><MapPin className="w-3 h-3"/> Dubai (Deira radius)</span>
                                            <span className="bg-[#111] text-white px-3 py-1.5 rounded-full">3 Openings</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#555] leading-relaxed mb-6 font-light">
                                    We are looking for ambitious and experienced Sales Officers to join our growing team. You will be responsible for driving B2B and B2C sales across our property maintenance portfolio.
                                </p>
                                <ul className="space-y-3 text-sm text-[#444]">
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> <strong>Mandatory Requirement:</strong> Proven sales experience and a strong track record.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> Excellent communication and negotiation skills.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> Ideal candidate is located near our business location (Deira / max 25km radius).</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> <strong>Visa Status:</strong> Must own a valid UAE visa.</li>
                                </ul>
                            </div>

                            {/* Job 2: Senior Maintenance Technician */}
                            <div 
                                className={`p-8 rounded-3xl border transition-all duration-300 \${selectedJob === "Senior Maintenance Technician" ? "border-[#C4A67C] bg-[#FAFAF9] shadow-md" : "border-black/5 hover:border-black/10 cursor-pointer"}`}
                                onClick={() => setSelectedJob("Senior Maintenance Technician")}
                            >
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold font-sans tracking-tight text-[#111] mb-2">Maintenance Technician</h3>
                                        <div className="flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest text-[#666]">
                                            <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-black/5"><Briefcase className="w-3 h-3"/> Full Time</span>
                                            <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-black/5"><MapPin className="w-3 h-3"/> Field Service</span>
                                            <span className="bg-[#111] text-white px-3 py-1.5 rounded-full">1 Opening</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#555] leading-relaxed mb-6 font-light">
                                    Dakeek is expanding its on-ground field operations. We require a versatile technician capable of handling a variety of residential and commercial property maintenance tasks.
                                </p>
                                <ul className="space-y-3 text-sm text-[#444]">
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> Experience required in AC, Electrical, Plumbing, or Gas Stove repair.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> Base experience is mandatory, but advanced hands-on training will be provided by our senior engineers.</li>
                                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C4A67C] shrink-0 mt-0.5" /> Professional demeanor and ability to diagnose complex faults on-site.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Application Form */}
                    <div className="lg:col-span-5 sticky top-32 h-fit">
                        <div className="bg-[#0A0A0A] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4A67C]/10 rounded-full blur-3xl" />
                            
                            <h3 className="text-3xl font-serif text-white mb-2 relative z-10">Apply Now</h3>
                            <p className="text-stone-400 mb-8 font-light relative z-10">Application for: <span className="text-white font-medium">{selectedJob}</span></p>

                            {formStatus === "success" ? (
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center relative z-10 animate-fade-in">
                                    <CheckCircle2 className="w-16 h-16 text-[#C4A67C] mx-auto mb-4" />
                                    <h4 className="text-2xl font-serif text-white mb-2">Application Sent</h4>
                                    <p className="text-stone-400 font-light">We have received your application and resume. Our hiring team will review it and contact you shortly.</p>
                                    <button 
                                        onClick={() => setFormStatus("idle")}
                                        className="mt-8 text-xs font-mono uppercase tracking-widest text-[#C4A67C] hover:text-white transition-colors"
                                    >
                                        Submit Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleApply} className="space-y-5 relative z-10">
                                    <div className="space-y-4">
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            placeholder="Full Name *" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C4A67C] transition-colors"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input 
                                                type="email" 
                                                name="email"
                                                required
                                                placeholder="Email Address *" 
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C4A67C] transition-colors"
                                            />
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                required
                                                placeholder="Phone Number *" 
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C4A67C] transition-colors"
                                            />
                                        </div>
                                        <textarea 
                                            name="coverLetter"
                                            rows={4}
                                            placeholder="Cover Letter / Introduction" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C4A67C] transition-colors resize-none"
                                        ></textarea>
                                        
                                        {/* File Upload handling */}
                                        <div className="relative group overflow-hidden">
                                            <input 
                                                type="file" 
                                                name="resume"
                                                accept=".pdf,.doc,.docx"
                                                required
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                            />
                                            <div className="w-full bg-white/5 border border-white/10 border-dashed rounded-xl px-5 py-6 flex flex-col items-center justify-center text-center group-hover:bg-white/10 transition-colors">
                                                <Upload className="w-6 h-6 text-[#C4A67C] mb-3" />
                                                <span className="text-white font-medium text-sm mb-1">Click to attach limit (max 5MB)</span>
                                                <span className="text-stone-500 text-xs font-mono uppercase tracking-wider">PDF, DOC, DOCX</span>
                                                <div className="mt-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span className="flex items-center gap-2 text-xs text-[#C4A67C]"><FileText className="w-3 h-3" /> Select file</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {formStatus === "error" && (
                                        <p className="text-red-400 text-xs font-mono text-center">There was an error submitting your application. Please ensure your file is under 5MB or try again later.</p>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={formStatus === "submitting"}
                                        className="w-full bg-white text-black hover:bg-[#C4A67C] hover:text-white rounded-xl py-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === "submitting" ? "Submitting..." : "Submit Application"}
                                        {formStatus !== "submitting" && <Send className="w-4 h-4" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
