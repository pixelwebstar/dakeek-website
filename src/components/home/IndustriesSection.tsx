const INDUSTRIES = [
    "Private Villas",
    "Luxury Apartments",
    "Restaurants & Cafes",
    "Retail Showrooms",
    "Corporate Offices",
    "Property Management",
    "Fitness Centers",
    "Salons & Spas"
];

export default function IndustriesSection() {
    return (
        <section className="w-full bg-[#050505] text-white py-20 lg:py-24 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-4">
                            Sectors
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-light leading-none">
                            Serving All Spaces
                        </h2>
                    </div>
                    <p className="text-[#666] max-w-sm text-sm md:text-base leading-relaxed">
                        Specialized technical support for Dubai&apos;s most demanding environments.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {INDUSTRIES.map((industry, i) => (
                        <div key={i} className="group flex items-center gap-4 cursor-default">
                            <span className="text-[#333] font-mono text-sm group-hover:text-[#C4A67C] transition-colors">0{i + 1}</span>
                            <h3 className="text-xl md:text-2xl font-serif text-[#CCC] group-hover:text-white transition-colors">
                                {industry}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
