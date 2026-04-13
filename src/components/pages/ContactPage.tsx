"use client";

import React, { useState } from "react";
import {
    Clock,
    Mail,
    Phone,
    Shield,
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Briefcase,
    Search,
    MapPin,
    Star,
    ExternalLink,
    CheckCircle
} from "lucide-react";
import Link from "next/link";

import GradientHero from "../hero/GradientHero";
import { SmartForm } from "../contact/SmartForm";
import ReviewsSection from "../shared/ReviewsSection";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopyLicense = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("1382290");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        window.open("https://app.invest.dubai.ae/search-license", "_blank");
    };

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] selection:bg-[#C4A67C] selection:text-white">

            {/* 1. HERO: RESTORED STANDARD (Gradient Hero) - FULL SCREEN */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-black/5 text-[#111]">
                <GradientHero
                    color1="#9CA3AF"
                    color2="#E5E7EB"
                    initialColor="#E5E7EB"
                />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-[#666] bg-white/50">
                        Property Maintenance
                    </p>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans tracking-tight mb-6 md:mb-8 leading-[0.9] text-[#111]">
                        Contact
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed backdrop-blur-sm text-[#555] mb-12 uppercase tracking-widest">
                        Commercial & Residential
                    </p>
                </div>
            </section>

            {/* 2. DIRECT ACCESS (Black) */}
            <section id="instant-lines" className="py-24 px-[5vw] lg:px-[8vw] bg-[#0A0A0A] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Instant Lines</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif">Direct Access.</h2>
                    </div>

                    {/* NEW: GOOGLE BUSINESS PROFILE MASTER BUTTON */}
                    <div className="mb-12">
                        <a 
                            href="https://maps.app.goo.gl/ibmvUdgpqxifw8sS9" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-1 rounded-2xl transition-all duration-500 flex flex-col md:flex-row items-center gap-6 md:justify-between w-full shadow-2xl"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-6 z-10 px-8 py-6">
                                <div className="bg-white p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 shadow-lg border border-black/5">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                        <path d="M1 1h22v22H1z" fill="none"/>
                                    </svg>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-serif text-white mb-1 flex items-center justify-center md:justify-start gap-3">
                                        Dakeek Technical Services <span className="text-[10px] bg-[#4285F4] text-white px-2 py-0.5 rounded font-mono uppercase tracking-tighter">Verified</span>
                                    </h3>
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <div className="flex gap-0.5 -mt-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-stone-300 group-hover:text-white tracking-wide transition-colors">4.9 Overall Rating on Google</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-8 py-6 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 group-hover:border-white/20 flex items-center justify-center gap-3 text-stone-300 group-hover:text-white font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors">
                                View Full Profile <ExternalLink className="w-4 h-4" />
                            </div>
                            
                            {/* Decorative background flare */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-[#4285F4]/10 transition-colors duration-500" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* WhatsApp (Priority) */}
                        <a href="https://wa.me/971542472151" target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-[#25D366] bg-white/5 hover:bg-[#25D366]/10 transition-all duration-500 rounded-lg">
                            <div>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#25D366] mb-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <h3 className="text-2xl font-serif mb-2">WhatsApp</h3>
                                <p className="text-sm font-mono text-stone-400 uppercase tracking-wider mb-6">Fastest Response</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#25D366] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Start Chat <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>

                        {/* Call (Voice) */}
                        <a href="tel:+971542472151" className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-white bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-lg">
                            <div>
                                <Phone className="w-8 h-8 text-white mb-6" />
                                <h3 className="text-2xl font-serif mb-2">Voice Call</h3>
                                <p className="text-sm font-mono text-stone-400 uppercase tracking-wider mb-6">Speak to an Expert</p>
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Dial Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>


                        {/* Email (Official) */}
                        <a href="mailto:care@dakeek.ae" className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-[#C4A67C] bg-white/5 hover:bg-[#C4A67C]/10 transition-all duration-500 rounded-lg">
                            <div>
                                <Mail className="w-8 h-8 text-[#C4A67C] mb-6" />
                                <h3 className="text-2xl font-serif mb-2">Email</h3>
                                <p className="text-sm font-mono text-stone-400 uppercase tracking-wider mb-6">Official Inquiries</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#C4A67C] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Send Message <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. REQUEST FORM (White) - 'The Concierge Interface' */}
            <section className="py-32 px-[5vw] lg:px-[8vw] bg-white relative">
                <div className="max-w-5xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Side Content */}
                        <div className="lg:col-span-4">
                            <span className="font-mono text-xs text-[#111] uppercase tracking-[0.2em] mb-6 block">Formal Request</span>
                            <h2 className="text-4xl font-serif text-[#111] mb-8">Describe the issue.</h2>
                            <p className="text-stone-500 font-light leading-relaxed mb-8">
                                Please provide as much detail as possible. Our technical team reviews every request to assign the right specialist.
                            </p>

                            <div className="bg-[#FAFAF9] p-6 rounded-lg border border-[#E5E5E5]">
                                <div className="flex items-start gap-3 mb-4">
                                    <Shield className="w-5 h-5 text-[#C4A67C]" />
                                    <div>
                                        <h4 className="font-bold text-sm text-[#111]">Privacy Guaranteed</h4>
                                        <p className="text-xs text-[#666]">Your details are never shared.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-[#C4A67C]" />
                                    <div>
                                        <h4 className="font-bold text-sm text-[#111]">60-Min Response</h4>
                                        <p className="text-xs text-[#666]">During business hours.</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-[#E5E5E5] my-6" />

                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#C4A67C]" />
                                    <div>
                                        <h4 className="font-bold text-sm text-[#111]">Headquarters</h4>
                                        <p className="text-xs text-[#666] leading-relaxed">
                                            Xavier Business Center, BN Building<br />
                                            B1 Floor, M2, Al Mateena St, Deira<br />
                                            Dubai, United Arab Emirates<br />
                                            <span className="text-[10px] text-[#C4A67C] mt-2 block">Licensed Property Maintenance</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-8">
                            <SmartForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SOCIALS (Dark) */}
            <section className="py-24 bg-[#0A0A0A] text-white border-b border-white/10">
                <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-[#C4A67C]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Community</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif">Social Media.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/dakeektechnicalservice/" target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-[#1877F2] bg-white/5 hover:bg-[#1877F2]/10 transition-all duration-500 rounded-lg">
                            <div>
                                <Facebook className="w-8 h-8 text-[#1877F2] mb-6" />
                                <h3 className="text-2xl font-serif mb-2">Facebook</h3>
                                <p className="text-sm font-mono text-stone-400 uppercase tracking-wider mb-6">Community Updates</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#1877F2] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Follow Page <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/dakeek.ae/" target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-[#E4405F] bg-white/5 hover:bg-[#E4405F]/10 transition-all duration-500 rounded-lg">
                            <div>
                                <Instagram className="w-8 h-8 text-[#E4405F] mb-6" />
                                <h3 className="text-2xl font-serif mb-2">Instagram</h3>
                                <p className="text-sm font-mono text-stone-400 uppercase tracking-wider mb-6">Visual Portfolio</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#E4405F] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Follow Feed <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>

                        {/* X (Twitter) */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-white bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-lg">
                            <div>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white mb-6">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                                <h3 className="text-2xl font-serif mb-2">X (Twitter)</h3>
                                <p className="text-sm font-mono text-stone-400 uppercase tracking-wider mb-6">Real-time News</p>
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Follow Us <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. CAREERS (Light) */}
            <section className="py-24 bg-white text-[#111]">
                <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-[#111]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#111]">Growth</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif">Join Our Team.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/dakeek-technical-service-co-llc/" target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col justify-between p-8 border border-black/10 hover:border-[#0077b5] bg-[#FAFAF9] hover:bg-[#0077b5]/5 transition-all duration-500 rounded-lg">
                            <div>
                                <Linkedin className="w-8 h-8 text-[#0077b5] mb-6" />
                                <h3 className="text-2xl font-serif mb-2">LinkedIn</h3>
                                <p className="text-sm font-mono text-stone-500 uppercase tracking-wider mb-6">Professional Network</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#0077b5] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Connect <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>

                        {/* Indeed */}
                        <a href="https://ae.indeed.com/" target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col justify-between p-8 border border-black/10 hover:border-[#003A9B] bg-[#FAFAF9] hover:bg-[#003A9B]/5 transition-all duration-500 rounded-lg">
                            <div>
                                <Search className="w-8 h-8 text-[#003A9B] mb-6" />
                                <h3 className="text-2xl font-serif mb-2">Indeed</h3>
                                <p className="text-sm font-mono text-stone-500 uppercase tracking-wider mb-6">Job Openings</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#003A9B] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>

                        {/* Careers */}
                        <Link href="/careers" className="group h-full flex flex-col justify-between p-8 border border-black/10 hover:border-[#C4A67C] bg-[#FAFAF9] hover:bg-[#C4A67C]/5 transition-all duration-500 rounded-lg">
                            <div>
                                <Briefcase className="w-8 h-8 text-[#C4A67C] mb-6" />
                                <h3 className="text-2xl font-serif mb-2">Careers</h3>
                                <p className="text-sm font-mono text-stone-500 uppercase tracking-wider mb-6">View All Positions</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#C4A67C] font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Explore <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. MAP VISUALIZATION (Black) - Custom Style */}
            <section className="h-[600px] w-full bg-[#111] relative overflow-hidden flex items-center justify-center">

                {/* Fallback Map Content (In case Google Maps fails or for visual placeholder) */}
                <div className="absolute inset-0 opacity-40 grayscale contrast-125 mix-blend-luminosity">
                    <div style={{ width: '100%', height: '100%', background: '#222' }}>
                        {/* Placeholder for map iframe if needed, or keeping it abstract/premium */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14432.307414231225!2d55.318!3d25.268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dfce703db49%3A0x7ef1980d9ed37cac!2sDAKEEK%20TECHNICAL%20SERVICES%20CO.%20L.L.C!5e0!3m2!1sen!2sca!4v1773777508946!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) hover:grayscale(0%) transition-all duration-700' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dakeek Technical Services Location"
                        />
                    </div>
                </div>

                <div className="relative z-10 bg-[#0A0A0A] p-12 max-w-md w-full border border-white/10 shadow-2xl m-4">
                    <div className="flex items-center gap-4 mb-8">
                        <MapPin className="w-6 h-6 text-[#C4A67C]" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white">Visit Us</span>
                    </div>

                    <h3 className="text-3xl font-serif text-white mb-6">Our Headquarters</h3>

                    <div className="space-y-6 text-stone-400 font-light">
                        <p>
                            Xavier Business Center, BN Building<br />
                            B1 Floor, M2, Al Mateena St, Deira<br />
                            Dubai, United Arab Emirates
                        </p>

                        <div className="pt-6 border-t border-white/10">
                            <p className="text-sm">
                                <span className="text-white font-medium block mb-1">Hours of Operation</span>
                                Mon - Fri: 9:00 AM - 5:00 PM
                            </p>
                        </div>
                    </div>

                    <a href="https://www.google.com/maps/search/?api=1&query=Xavier+Business+Center+BN+Building+Al+Mateena+St+Deira+Dubai" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full py-4 text-center border border-white/20 hover:border-[#C4A67C] text-white hover:text-[#C4A67C] transition-colors font-mono text-xs uppercase tracking-widest">
                        Get Directions
                    </a>
                </div>
            </section>

            {/* 7. REVIEWS SECTION */}
            <ReviewsSection />

            {/* 8. LICENSE VERIFICATION: The Gold Standard */}
            <section className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
                {/* Decorative Mesh */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#A18262 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="relative max-w-5xl mx-auto px-[5vw] lg:px-[8vw]">
                    <div className="relative p-8 lg:p-12 border border-[#222] bg-[#111]/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:border-[#C4A67C]/20 transition-all duration-700">

                        {/* Metallic Sheen Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 translate-x-32 group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-full bg-[#C4A67C]/10 text-[#C4A67C]">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#C4A67C]">Official Credentials</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 tracking-tight">
                                    Trusted & <span className="text-stone-500">Verified</span>
                                </h2>
                                <p className="text-stone-500 font-mono text-sm uppercase tracking-widest">
                                    Dakeek Technical Services L.L.C
                                </p>
                            </div>

                            <div className="flex flex-col items-start md:items-end">
                                <span className="font-mono text-xs text-stone-600 mb-2 uppercase tracking-wider">Dubai DET License No.</span>
                                <span className="text-5xl md:text-7xl font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-600 tracking-tighter">
                                    1382290
                                </span>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <p className="text-stone-400 font-light max-w-lg">
                                Fully licensed by the Dubai Department of Economy and Tourism.
                                We operate with absolute transparency—it&apos;s not just a policy, it&apos;s our promise.
                            </p>
                            <button
                                onClick={handleCopyLicense}
                                className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-[#C4A67C] text-white transition-all duration-300 border border-white/10 hover:border-[#C4A67C] group cursor-pointer"
                            >
                                <span className="font-mono text-xs uppercase tracking-widest">
                                    {copied ? "Copied License No." : "Verify License"}
                                </span>
                                {copied ? <CheckCircle className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
