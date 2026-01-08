"use client";

/**
 * SkipNavigation - Accessibility skip link (Phase 13: A11y)
 * Allows keyboard users to skip repeated navigation and jump to main content.
 */
export default function SkipNavigation() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#111] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#A18262]"
        >
            Skip to main content
        </a>
    );
}
