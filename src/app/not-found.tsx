import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#111] text-white overflow-hidden p-6 relative">

            {/* Ambient Noise / Glitch Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/images/noise.svg")' }}></div>

            {/* Top Status Bar */}
            <div className="absolute top-8 left-8 flex items-center gap-2 font-mono text-xs text-[#333] tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-red-900 animate-pulse"></div>
                Signal Lost
            </div>

            <div className="absolute top-8 right-8 font-mono text-xs text-[#333] tracking-widest uppercase">
                ERR_404_VOID
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-lg">
                <h1 className="text-[12rem] font-serif italic leading-none text-[#222] select-none mix-blend-difference mb-4">404</h1>

                <h2 className="text-2xl font-serif text-[#FAFAF9] mb-6 tracking-wide">
                    Destination Unknown.
                </h2>

                <p className="font-mono text-xs text-[#666] mb-12 uppercase tracking-widest leading-relaxed">
                    The frequency you are trying to reach is currently unassigned or has been decommissioned by the network administrator.
                    <br />
                    Return to base immediately.
                </p>

                <Link href="/" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FAFAF9] text-[#111] rounded-sm hover:bg-[#A18262] transition-colors duration-500">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Return to Base</span>
                </Link>
            </div>

            {/* Footer ID */}
            <div className="absolute bottom-8 text-center w-full font-mono text-[10px] text-[#222] tracking-[0.5em] uppercase pointer-events-none">
                Dakeek System /// 404_Protocol
            </div>
        </div>
    );
}
