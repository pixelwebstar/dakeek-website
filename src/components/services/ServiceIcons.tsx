import React from 'react';

// Common SVG Props


// 01. AC: Split Unit with Airflow (More technical)
export const IconAC = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M18 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" strokeOpacity="0.5" />
        <path d="M4 10h16" strokeOpacity="0.5" />
        <path d="M14 17l-2 3-2-3" /> {/* Airflow arrow */}
        <path d="M12 14v4" />
        <path d="M16 16l-1 2" />
        <path d="M8 16l1 2" />
    </svg>
);

// 02. Plumbing: Wrench and Pipe Joint
export const IconPlumbing = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Pipe Corner */}
        <path d="M4 22V8a4 4 0 0 1 4-4h14" />
        <path d="M4 15h3" />
        <path d="M21 4v3" />
        {/* Drop */}
        <path d="M14 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
        <path d="M14 14l-1.5-2.5" />
        <path d="M14 14l1.5-2.5" />
    </svg>
);

// 03. Electrical: Circuit & Lightning Bolt (Professional)
export const IconElectrical = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M12 2v5" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 14l2-2" />
        <path d="M12 14l-2 2" />
        <path d="M6 7v-2" />
        <path d="M18 7v-2" />
    </svg>
);

// 04. Cleaning (Consolidated)
export const IconCleaning = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
        <path d="M17 12l-2 2-2-2-2 2" /> {/* Cleaning wipe motion */}
        <path d="M14 8l1-1" />
        <path d="M16 9l1-1" />
    </svg>
);



// 06. Stoves: Burner Flame
export const IconStoves = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3" />
        <path d="M12 22v-6" opacity="0.5" />
    </svg>
);

// 07. Emergency: Siren / Warning
export const IconEmergency = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
        <path d="M4.93 4.93l14.14 14.14" opacity="0.2" /> {/* Hazard line */}
    </svg>
);

// 08. Handyman: Hammer & Drill
export const IconHandyman = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);


