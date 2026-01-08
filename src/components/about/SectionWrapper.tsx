"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

// Ultra-lightweight wrapper - no animation library, pure CSS
export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
