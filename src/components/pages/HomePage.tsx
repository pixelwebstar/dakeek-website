import HeroSection from "@/components/home/HeroSection";
import TrustTicker from "@/components/home/TrustTicker";
import ManifestoSection from "@/components/home/ManifestoSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import StandardSection from "@/components/home/StandardSection";
import ProcessSection from "@/components/home/ProcessSection";
import PromiseSection from "@/components/home/PromiseSection";
import ReviewsSection from "@/components/shared/ReviewsSection";
import DigitalJournalSection from "@/components/home/DigitalJournalSection";

/**
 * HomePage - Server Component Orchestrator
 * Optimized for performance by splitting logic into smaller Client/Server components.
 * This moves the "Hydration Heavy" work into isolated parts of the page.
 */
export default function HomePage() {
    return (
        <main className="relative min-h-screen w-full selection:bg-[#C4A67C] selection:text-white premium-bg text-ink overflow-x-hidden">
            <HeroSection />
            <TrustTicker />
            <ManifestoSection />
            <ServicesSection />
            <IndustriesSection />
            <StandardSection />
            <ProcessSection />
            <PromiseSection />
            <ReviewsSection />
            <DigitalJournalSection />
        </main>
    );
}
