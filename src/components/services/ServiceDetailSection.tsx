"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ServiceDetail, ServicePageData } from "../../data/serviceData";


function ServiceSection({ service, index, theme }: { service: ServiceDetail, index: number, theme: ServicePageData['theme'] }) {
    const isEven = index % 2 === 0;

    return (
        <section className="min-h-[auto] lg:min-h-[80vh] flex items-center justify-center py-20 md:py-32 relative overflow-hidden border-t border-white/10">
            <div className="max-w-7xl mx-auto px-[5vw] lg:px-[8vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
                {/* Content - Subtle Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                    <div className="flex items-center gap-4">
                        <span className={`p-3 rounded-full ${theme.iconBg} ${theme.accentText}`}>
                            <service.icon className="w-8 h-8" />
                        </span>
                        <span className={`font-mono text-sm tracking-widest uppercase ${theme.accentText}`}>
                            {service.subtitle}
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
                        {service.title}
                    </h2>

                    <p className={`text-xl font-light leading-relaxed max-w-xl opacity-70 text-white`}>
                        {service.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-white/90">
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${theme.primaryText.replace('text-', 'text-white ')}`} />
                                {/* Assuming we want white text but maybe colored icon? 
                                    Actually let's just make the checkmark specific color if possible, 
                                    but theme.primaryText is like "text-blue-600". 
                                    Since we are in a dark bg, let's just use the accent color */}
                                <span className="font-light">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Visual - Static & Clean */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative h-[600px] w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                    <div className={`relative w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${theme.iconBg}`}>
                        <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay z-10`} />
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 border border-white/10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ServiceDetailSection({
    data
}: {
    data: ServicePageData
}) {
    return (
        <div className={`${data.theme.primaryBg} text-white relative`}>
            {/* Subtle Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30 pointer-events-none" />

            {/* Title Section */}
            <div className="max-w-4xl mx-auto px-[5vw] lg:px-[8vw] pt-24 pb-20 text-center">
                <p className={`font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6 ${data.theme.accentText}`}>
                    Our Approach
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                    What We Do & How We Do It
                </h2>
                <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
                    Every service is designed around precision, transparency, and long-term performance.
                </p>
            </div>

            {/* Service Cards */}
            {data.details.map((service, index) => (
                <ServiceSection key={service.id} service={service} index={index} theme={data.theme} />
            ))}
        </div>
    );
}
