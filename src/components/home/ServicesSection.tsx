import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";

const SERVICES = [
    {
        title: "AC\nServices",
        href: "/services/ac",
        icon: "ac",
        image: "/images/services/ac.png",
        features: ["Repair & Maintenance", "Duct Cleaning", "AMC Contracts"],
        seoTitle: "The best AC repair in Dubai for homes and businesses"
    },
    {
        title: "Plumbing\nServices",
        href: "/services/plumbing",
        icon: "plumbing",
        image: "/images/services/plumbing.png",
        features: ["Leak Detection", "Water Heaters", "Grease Traps"],
        seoTitle: "Residential and commercial plumbing services"
    },
    {
        title: "Electrical\nServices",
        href: "/services/electrical",
        icon: "electrical",
        image: "/images/services/electrical.png",
        features: ["Safety Inspections", "Lighting", "3-Phase Power"],
        seoTitle: "Electrical maintenance for properties in Dubai"
    },
    {
        title: "Cleaning\nServices",
        href: "/services/cleaning",
        icon: "cleaning",
        image: "/images/services/cleaning.png",
        features: ["Deep Cleaning", "Water Tanks", "Duct Sanitization"],
        seoTitle: "Deep cleaning and sanitization services"
    },
    {
        title: "Gas & Cookers\nServices",
        href: "/services/stoves",
        icon: "stoves",
        image: "/images/services/stoves.png",
        features: ["Cooker Repair", "Gas Lines", "Commercial Burners"],
        seoTitle: "Gas stove repair and pipeline services"
    },
    {
        title: "Handyman\nServices",
        href: "/services/handyman",
        icon: "handyman",
        image: "/images/services/handyman_final.png",
        features: ["Mounting & Assembly", "General Repairs", "Shop Fit-out"],
        seoTitle: "Handyman and fit-out services for all properties"
    },
    {
        title: "AMC\nContracts",
        href: "/services/amc",
        icon: "other",
        image: "/images/services/other_final.png",
        features: ["Home Packages", "Business Support", "Preventive Care"],
        variant: "other",
        seoTitle: "Annual maintenance contracts for Dubai properties"
    },
    {
        title: "Urgent\nServices",
        href: "/services/urgent-support",
        icon: "urgent-support",
        image: "/images/services/urgent-support_final.png",
        features: ["Rapid Response", "Power Outage", "Water Leaks"],
        variant: "urgent-support",
        seoTitle: "Urgent property maintenance services"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="w-full py-8 lg:py-12 bg-[#FAFAF9]">
            <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw] space-y-8">
                <div className="flex justify-between items-end border-b border-[#E5E5E5] pb-8">
                    <div>
                        <span className="block font-mono text-xs text-[#6B5344] uppercase tracking-[0.2em] mb-4">The Scope</span>
                        <h2 className="text-4xl font-serif text-[#111]">Our Services</h2>
                    </div>
                    <Link href="/services" className="text-xs font-mono text-[#333] hover:text-[#111] transition-colors uppercase tracking-widest">Full Specifications</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            href={service.href}
                            icon={service.icon as "ac" | "plumbing" | "electrical" | "cleaning" | "stoves" | "handyman" | "urgent-support" | "other"}
                            image={service.image}
                            features={service.features}
                            variant={service.variant as "default" | "urgent-support" | "other" | undefined}
                            seoTitle={service.seoTitle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
