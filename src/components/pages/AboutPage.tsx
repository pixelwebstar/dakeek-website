"use client";

import SectionWrapper from "@/components/about/SectionWrapper";
import { Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

import AnimatedCounter from "@/components/about/AnimatedCounter";
import ProcessStepper from "@/components/about/ProcessStepper";
import TrustBadge from "@/components/about/TrustBadge";
import dynamic from "next/dynamic";
const HyperHero = dynamic(() => import("@/components/hero/HyperHero"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-[#C0C0C0]" />,
});

// NO 3D Imports - Pure Editorial Design

export default function AboutPage() {
    return (
        <main className="bg-canvas min-h-screen text-ink overflow-x-hidden selection:bg-bronze selection:text-white">

            {/* SECTION 1: HERO (Hyper Metal) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E7E5E4] border-b border-structure">
                <HyperHero
                    color1="#A8A29E" // Stone 400 (Human/Warm)
                    color2="#E7E5E4" // Stone 200
                    initialColor="#E7E5E4"
                />

                <SectionWrapper className="max-w-6xl mx-auto z-10 text-center px-6" delay={0.2}>
                    <div className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-black/5 text-titanium bg-white/50">
                        <span className="w-2 h-2 rounded-full bg-bronze animate-pulse inline-block mr-2" />
                        Our Promise
                    </div>

                    <h1 className="text-6xl md:text-9xl font-sans tracking-tighter mb-6 md:mb-8 leading-[0.9] text-ink">
                        Built Different.
                    </h1>

                    {/* Minimal Tags as requested */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {["Background-checked & verified", "No surprise visits", "In-house Academy", "Full-time Employees"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-sm">
                                <Check className="w-3 h-3 text-bronze" strokeWidth={1.5} />
                                <span className="font-mono text-[10px] uppercase tracking-wider text-ink">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="group relative px-12 py-4 bg-ink text-white overflow-hidden rounded-full transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 font-mono text-sm font-medium uppercase tracking-[0.2em]">Book a Visit</span>
                            <div className="absolute inset-0 bg-bronze transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        </Link>
                        <Link href="#story" className="px-12 py-4 border border-black/10 text-ink rounded-full font-mono text-sm font-medium uppercase tracking-[0.2em] bg-white/40 hover:bg-white/80 transition-all backdrop-blur-sm shadow-sm hover:shadow-md">
                            Our Story
                        </Link>
                    </div>
                </SectionWrapper>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#111]/30">
                    <span className="sr-only">Scroll Down</span>
                </div>
            </section>

            {/* SECTION 2: THE STORY (Minimal) */}
            <section id="story" className="relative py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <SectionWrapper>
                        <h2 className="text-3xl font-serif text-ink mb-6">We don't outsource trust.</h2>
                        <p className="text-[#666] text-lg leading-relaxed">
                            Most home service apps are just matchmakers. We are different.
                            We employ every single technician. We train them in our own academy.
                            We verify their backgrounds. So when we say "precise", we mean it.
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* SECTION 3: THE ACADEMY (Centered / No 3D) */}
            <section className="relative py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-ink text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <SectionWrapper>
                        <div className="inline-block px-3 py-1 bg-bronze text-xs font-mono uppercase tracking-widest text-white rounded-sm mb-8">
                            Controlled Environment
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif italic mb-6">The Dakeek Academy</h2>
                        <p className="text-[#a3a3a3] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                            Quality isn't accidental. It's engineered. Our state-of-the-art facility trains technicians for hundreds of hours on real-world scenarios before they graduate to your home.
                        </p>
                    </SectionWrapper>

                    {/* Animated Counters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                        <div className="flex flex-col items-center">
                            <AnimatedCounter value={500} label="Training Hours" suffix="+" />
                        </div>
                        <div className="flex flex-col items-center">
                            <AnimatedCounter value={120} label="Skill Checks" />
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl lg:text-6xl font-serif text-bronze mb-2">0</span>
                            <span className="text-xs font-mono uppercase tracking-widest text-[#666]">
                                Random Freelancers
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: HOW WE WORK (The Process) */}
            <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-white border-b border-[#E5E5E5]">
                <div className="max-w-4xl mx-auto">
                    <SectionWrapper className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[#111] mb-4">Peace of mind, standard.</h2>
                        <p className="text-[#666] font-light max-w-lg mx-auto">
                            We engineered a process that removes the anxiety of letting a stranger into your home.
                        </p>
                    </SectionWrapper>

                    <ProcessStepper steps={[
                        { id: 1, label: "You Book a Slot", description: "Choose a time that works for you. No 4-hour windows. Precise arrival times.", icon: Check },
                        { id: 2, label: "We Assign a Master", description: "Our system picks the best technician for your specific problem, not just whoever is free.", icon: ShieldCheck },
                        { id: 3, label: "Identity Verification", description: "You get a photo and name of who is coming before they knock. No surprises.", icon: ShieldCheck },
                        { id: 4, label: "White-Glove Service", description: "Shoe covers on. Floor protection down. We explain everything before we start.", icon: Check },
                        { id: 5, label: "The Follow-up", description: "We don't disappear. We check in to make sure the fix held up.", icon: Check }
                    ]} />
                </div>
            </section>

            {/* SECTION 6: PROOF (Trust Signals) */}
            <section className="py-24 lg:py-32 border-y border-[#E5E5E5] bg-white">
                <div className="max-w-6xl mx-auto px-[5vw]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <TrustBadge icon={ShieldCheck} label="Background Checked" />
                        <TrustBadge icon={Check} label="In-House Academy" />
                        <TrustBadge icon={ShieldCheck} label="Insured Service" />
                        <TrustBadge icon={Check} label="30-Day Guarantee" />
                    </div>
                </div>
            </section>

            {/* SECTION 7: CALL TO ACTION */}
            <section className="relative py-24 lg:py-32 bg-[#A18262] text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

                <SectionWrapper>
                    <h2 className="text-4xl md:text-7xl font-serif italic mb-8 relative z-10">
                        Ready when your home needs us.
                    </h2>
                    <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto font-light relative z-10">
                        No random freelancers. Just trained experts who respect your time and space.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <Link href="/contact" className="px-10 py-4 bg-white text-[#A18262] font-mono text-xs uppercase tracking-widest hover:bg-[#111] hover:text-white transition-colors rounded-full shadow-lg">
                            Book a Visit
                        </Link>
                        <Link href="https://wa.me/971542472151" className="px-10 py-4 border border-white text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-[#A18262] transition-colors rounded-full">
                            Talk to a Human
                        </Link>
                    </div>
                </SectionWrapper>
            </section>
        </main>
    );
}
