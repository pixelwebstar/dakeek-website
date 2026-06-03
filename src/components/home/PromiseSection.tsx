import Link from "next/link";

export default function PromiseSection() {
    return (
        <section className="w-full bg-[#FAFAF9] py-16 lg:py-24 border-b border-[#E5E5E5]">
            <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw] flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111]">The Dakeek Promise.</h2>
                    <p className="text-xl font-light text-[#444] leading-relaxed">
                        If the issue returns within 30 days, so do we. <br />
                        <span className="text-[var(--color-bronze)] font-medium">Free of charge.</span> No questions asked.
                    </p>
                </div>

                <Link href="/contact" className="group relative px-10 py-4 bg-[#111] text-white overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl shrink-0">
                    <span className="relative z-10 font-mono text-xs uppercase tracking-[0.2em] font-medium">Book Now</span>
                    <div className="absolute inset-0 bg-[#5A4A32] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                </Link>
            </div>
        </section>
    );
}
