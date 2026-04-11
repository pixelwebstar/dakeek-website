"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const InstallModal = dynamic(
    () => import("@/components/shared/InstallModal"),
    { ssr: false }
);

export default function DigitalJournalSection() {
    const { install, isIOS } = usePWAInstall();
    const [showInstallModal, setShowInstallModal] = useState(false);

    const handleInstallClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const outcome = await install();
        if (outcome === "IOS_INSTRUCTION_NEEDED" || outcome === "INSTALL_UNAVAILABLE") {
            setShowInstallModal(true);
        }
    };

    return (
        <>
            <section className="relative w-full bg-[#0A0A0A] text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5A4A32] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-[5vw] lg:px-[8vw] grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block font-mono text-xs text-[#C4A67C] uppercase tracking-[0.3em] mb-4">
                                Intelligent Living
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif italic font-light leading-tight mb-6">
                                Control at your fingertips.
                            </h2>
                            <p className="text-[#999] text-lg font-light leading-relaxed max-w-md">
                                Streamline your service requests and track real-time progress.
                                <span className="block mt-4 text-white">
                                    Exclusive <span className="text-[#C4A67C]">10% privilege</span> for all app bookings.
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="#" onClick={handleInstallClick} className="flex items-center gap-4 px-8 py-4 bg-white text-[#000] rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl group">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-full h-full"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download for</div>
                                    <div className="font-sans font-bold leading-none text-xl tracking-tight">Apple</div>
                                </div>
                            </a>

                            <a href="#" onClick={handleInstallClick} className="flex items-center gap-4 px-8 py-4 bg-[#222] text-white border border-[#333] rounded-2xl hover:bg-[#333] hover:border-[#555] hover:scale-105 transition-all duration-300 shadow-lg group">
                                <div className="w-7 h-7 flex items-center justify-center text-white">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" /></svg>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download for</div>
                                    <div className="font-sans font-bold leading-none text-xl tracking-tight">Android</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative p-8 lg:p-12 border border-[#222] bg-[#111]/50 backdrop-blur-sm rounded-sm">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-serif mb-2">The Dakeek Journal.</h2>
                                <p className="text-[#888] text-sm font-light leading-relaxed">
                                    Curated maintenance insights and seasonal care guides for the modern homeowner. Zero clutter.
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-transparent border-b border-[#333] text-white py-3 px-1 text-sm font-light placeholder-stone-500 focus:outline-none focus:border-[#5A4A32] transition-colors"
                                    />
                                </div>
                                <button className="w-full py-3 bg-[#5A4A32] hover:bg-[#6B5A40] text-white font-mono text-xs uppercase tracking-[0.2em] transition-colors rounded-sm shadow-lg">
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-[10px] text-[#9CA3AF] font-mono uppercase tracking-widest text-center">
                                Join 2,000+ Dubai Residents
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <InstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
                isIOS={isIOS}
            />
        </>
    );
}
