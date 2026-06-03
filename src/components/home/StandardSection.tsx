const STANDARDS = [
    { title: "Municipality Certified", desc: "Fully compliant with Dubai regulations." },
    { title: "Priority Response", desc: "Rapid deployment for emergencies." },
    { title: "Transparent Pricing", desc: "No hidden costs. Detailed quotations." },
    { title: "Warranty Assured", desc: "30-day service guarantee on all jobs." }
];

export default function StandardSection() {
    return (
        <section className="w-full bg-[#F5F5F0] text-[#111] py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

            <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div>
                    <span className="inline-block font-mono text-xs text-slate-500 uppercase tracking-[0.3em] mb-6">
                        The Standard
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                        Licensed.<br />Certified.<br />Transparent.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                        We bridge the gap between freelance handymen and corporate facility management. Professional, compliant, and always accountable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {STANDARDS.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                            <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
