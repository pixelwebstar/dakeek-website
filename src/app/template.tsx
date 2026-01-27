"use client";

// Framer Motion handled in layout.tsx via PageTransition
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen">
            {children}
        </main>
    );
}
