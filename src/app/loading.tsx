import React from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E5E7EB]">
            <div className="flex flex-col items-center gap-4">
                {/* Simple animated logo/spinner matching the brand */}
                <div className="w-12 h-12 border-4 border-[#111] border-t-[#C4A67C] rounded-full animate-spin" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#555] animate-pulse">
                    Loading Dakeek...
                </span>
            </div>
        </div>
    );
}
