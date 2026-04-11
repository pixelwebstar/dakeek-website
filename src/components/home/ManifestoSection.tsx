import Balancer from "react-wrap-balancer";

export default function ManifestoSection() {
    return (
        <section className="relative px-[5vw] lg:px-[8vw] py-20 lg:py-28 border-b border-[#333] bg-[#111] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4A32] to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-6">
                        Who We Are
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight max-w-4xl mx-auto mb-8">
                        <Balancer>
                            Your Property, Our Priority.
                        </Balancer>
                    </h2>
                    <p className="text-lg md:text-xl text-[#CCC] font-light max-w-3xl mx-auto leading-relaxed">
                        Dakeek provides premium technical support and the best AC repair in Dubai. Whether it’s a family villa in the Marina or a busy restaurant in Downtown, we ensure your systems run perfectly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                        <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                        <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                        <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">01</span>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Precision</h3>
                        <p className="text-[#999] text-sm leading-relaxed mb-6">
                            &quot;Dakeek&quot; means precise in Arabic. We diagnose accurately, quote fairly, and execute flawlessly. No guesswork. No surprises.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Accurate</span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Exact</span>
                        </div>
                    </div>

                    <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                        <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                        <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                        <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">02</span>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Respect</h3>
                        <p className="text-[#999] text-sm leading-relaxed mb-6">
                            We respect your home and your privacy. Our technicians arrive on time, work quietly, and clean up before they leave.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Private</span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Respectful</span>
                        </div>
                    </div>

                    <div className="group relative p-8 lg:p-10 border border-[#333] hover:border-[#5A4A32] transition-all duration-500 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                        <div className="absolute top-0 left-0 w-12 h-px bg-[#5A4A32] group-hover:w-full transition-all duration-700" />
                        <div className="absolute top-0 left-0 h-12 w-px bg-[#5A4A32] group-hover:h-full transition-all duration-700" />

                        <span className="block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">03</span>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C4A67C] transition-colors">Excellence</h3>
                        <p className="text-[#999] text-sm leading-relaxed mb-6">
                            Our licensed technicians use quality materials and proven methods. We get it right the first time, so you don&apos;t have to call twice.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Quality</span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] px-2 py-1 border border-[#333]">Premium</span>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-[#333]">
                    <p className="font-mono text-xs text-[#C4A67C] uppercase tracking-[0.2em] mb-4">Our Commitment</p>
                    <p className="text-lg md:text-xl text-[#CCC] font-light max-w-2xl mx-auto leading-relaxed">
                        Licensed professionals, transparent pricing, and guaranteed precision. This is the Dakeek standard.
                    </p>
                </div>
            </div>
        </section>
    );
}
