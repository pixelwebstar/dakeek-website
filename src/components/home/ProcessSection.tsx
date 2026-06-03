export default function ProcessSection() {
    return (
        <section className="relative w-full bg-[#111] text-white py-8 lg:py-12 border-b border-[#333] overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw]">
                <div className="text-center mb-10">
                    <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-6">
                        How it Works
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light">
                        Simplicity Itself.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                        <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                        <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />
                        <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">01</span>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Connect</h3>
                        <p className="text-[#999] text-sm leading-relaxed">
                            Tell us what you need. A dedicated coordinator will listen and arrange everything clearly.
                        </p>
                    </div>

                    <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                        <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                        <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />
                        <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">02</span>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Restore</h3>
                        <p className="text-[#999] text-sm leading-relaxed">
                            We arrive on time, fix the issue quietly, and clean up afterwards.
                        </p>
                    </div>

                    <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] text-center">
                        <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                        <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />
                        <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">03</span>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Relax</h3>
                        <p className="text-[#999] text-sm leading-relaxed">
                            Your home is back to normal. We provide a full report so you can have complete peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
