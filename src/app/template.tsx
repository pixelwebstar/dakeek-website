"use client";

// Ultra-optimized template - no Framer Motion, instant render
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen animate-page-fade">
            {children}
        </main>
    );
}
