"use client";

import dynamic from 'next/dynamic';

const UnifiedContactHub = dynamic(
    () => import('./UnifiedContactHub'),
    { ssr: false }
);

export default function ContactHubLoader() {
    return <UnifiedContactHub />;
}
