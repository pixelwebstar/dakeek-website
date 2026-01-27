"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Prefetches key application routes in the background
 * after the main page has loaded.
 */
export default function BackgroundLoader() {
    const router = useRouter();

    useEffect(() => {
        // Wait for the main thread to settle
        const currentTimer = setTimeout(() => {
            // Prefetch high-probability routes
            router.prefetch('/services');
            router.prefetch('/contact');
            router.prefetch('/about');

            console.log("Background prefetching initiated");
        }, 2500); // 2.5s delay to prioritize LCP

        return () => clearTimeout(currentTimer);
    }, [router]);

    return null;
}
