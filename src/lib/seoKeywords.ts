/**
 * SEO Target Keywords - Phase 26: SEO Domination
 * These are the top-searched keywords for home maintenance services in Dubai.
 * Based on real keyword research for 2024.
 */

export const TARGET_KEYWORDS = {
    // Primary brand keywords
    brand: [
        "Dakeek",
        "Dakeek Technical Services",
        "Dakeek Dubai",
        "Dakeek Home Maintenance",
    ],

    // Homepage - Broadest reach
    homepage: {
        primary: [
            "Home Maintenance Dubai",
            "Best Home Maintenance Company Dubai",
            "Home Services Dubai",
            "Technical Services Dubai",
            "Handyman Dubai",
        ],
        secondary: [
            "Home Repair Dubai",
            "House Maintenance Dubai",
            "Property Maintenance Dubai",
            "Villa Maintenance Dubai",
            "Apartment Maintenance Dubai",
        ],
    },

    // AC Services - High priority in Dubai climate
    ac: {
        primary: [
            "AC Repair Dubai",
            "AC Maintenance Dubai",
            "AC Service Dubai",
            "Air Conditioning Repair Dubai",
        ],
        secondary: [
            "Emergency AC Repair Dubai",
            "AC Installation Dubai",
            "AC Duct Cleaning Dubai",
            "Split AC Repair Dubai",
            "Central AC Maintenance Dubai",
            "AC Technician Dubai",
            "AC Not Cooling Dubai",
            "AC Gas Refill Dubai",
            "AC Compressor Repair Dubai",
            "Cheap AC Repair Dubai",
            "Best AC Company Dubai",
            "24 Hour AC Repair Dubai",
        ],
        longTail: [
            "AC repair near me Dubai",
            "emergency AC repair Palm Jumeirah",
            "AC maintenance contract Dubai",
            "AC deep cleaning Dubai",
        ],
    },

    // Plumbing Services
    plumbing: {
        primary: [
            "Plumber Dubai",
            "Plumbing Services Dubai",
            "Emergency Plumber Dubai",
            "24 Hour Plumber Dubai",
        ],
        secondary: [
            "Water Heater Repair Dubai",
            "Leak Detection Dubai",
            "Drain Cleaning Dubai",
            "Pipe Repair Dubai",
            "Toilet Repair Dubai",
            "Blocked Drain Dubai",
            "Water Tank Cleaning Dubai",
            "Plumber Near Me Dubai",
            "Cheap Plumber Dubai",
            "Best Plumber Dubai",
            "Emergency Plumber 24/7 Dubai",
        ],
        longTail: [
            "emergency plumber Dubai Marina",
            "water heater installation Dubai",
            "bathroom plumbing repair Dubai",
        ],
    },

    // Electrical Services
    electrical: {
        primary: [
            "Electrician Dubai",
            "Electrical Services Dubai",
            "Emergency Electrician Dubai",
            "24 Hour Electrician Dubai",
        ],
        secondary: [
            "Electrical Repair Dubai",
            "Electrical Installation Dubai",
            "Licensed Electrician Dubai",
            "Residential Electrician Dubai",
            "Commercial Electrician Dubai",
            "Wiring Repair Dubai",
            "Short Circuit Repair Dubai",
            "Power Outage Fix Dubai",
            "Electrical Maintenance Dubai",
            "Fuse Box Repair Dubai",
        ],
        longTail: [
            "emergency electrician Downtown Dubai",
            "light fixture installation Dubai",
            "smart home electrician Dubai",
        ],
    },

    // Cleaning Services
    cleaning: {
        primary: [
            "Deep Cleaning Dubai",
            "Water Tank Cleaning Dubai",
            "AC Duct Cleaning Dubai",
        ],
        secondary: [
            "Villa Deep Cleaning Dubai",
            "Apartment Deep Cleaning Dubai",
            "Move In Cleaning Dubai",
            "Move Out Cleaning Dubai",
            "Kitchen Deep Cleaning Dubai",
            "Professional Cleaning Dubai",
        ],
    },

    // Stove/Oven Services
    stoves: {
        primary: [
            "Stove Repair Dubai",
            "Oven Repair Dubai",
            "Cooker Repair Dubai",
        ],
        secondary: [
            "Gas Stove Repair Dubai",
            "Electric Oven Repair Dubai",
            "Burner Repair Dubai",
            "Cooktop Repair Dubai",
            "Range Hood Repair Dubai",
        ],
    },

    // Handyman Services
    handyman: {
        primary: [
            "Handyman Dubai",
            "Handyman Services Dubai",
            "Home Repair Dubai",
        ],
        secondary: [
            "Furniture Assembly Dubai",
            "TV Mounting Dubai",
            "IKEA Assembly Dubai",
            "Painting Services Dubai",
            "Carpentry Dubai",
            "Door Repair Dubai",
            "Curtain Installation Dubai",
        ],
    },

    // Emergency Services
    emergency: {
        primary: [
            "24/7 Emergency Repair Dubai",
            "Emergency Home Services Dubai",
            "After Hours Repair Dubai",
        ],
        secondary: [
            "Urgent Plumber Dubai",
            "Urgent Electrician Dubai",
            "Emergency AC Repair Dubai",
            "Night Time Repair Dubai",
            "Weekend Repair Dubai",
        ],
    },

    // Location-specific (for area pages)
    locations: [
        "Palm Jumeirah", "Dubai Marina", "Downtown Dubai", "JLT", "Business Bay",
        "Arabian Ranches", "Emirates Hills", "Dubai Hills", "Al Barsha", "Jumeirah",
        "DIFC", "JBR", "The Greens", "The Springs", "The Meadows",
    ],
};

// Helper to generate area-specific keywords
export function getAreaKeywords(areaName: string): string[] {
    return [
        `Home Maintenance ${areaName}`,
        `AC Repair ${areaName}`,
        `Plumber ${areaName}`,
        `Electrician ${areaName}`,
        `Handyman ${areaName}`,
        `Emergency Repair ${areaName}`,
    ];
}

// SEO Meta Templates
export const SEO_TEMPLATES = {
    homepage: {
        title: "Best Home Maintenance & Repair Services in Dubai | Dakeek",
        description: "Dubai's #1 rated home maintenance company. Expert AC repair, plumbing, electrical, and handyman services. 60-min response. Licensed & insured. Book now!",
    },
    services: {
        title: "Professional Home Services in Dubai - AC, Plumbing, Electrical | Dakeek",
        description: "Complete home maintenance services in Dubai. AC repair & maintenance, plumbing, electrical, cleaning, and handyman services. Trusted by 10,000+ homes.",
    },
    about: {
        title: "About Dakeek - Dubai's Most Trusted Home Maintenance Company",
        description: "Licensed Technical Services LLC. 10+ years serving Dubai. Certified technicians, 30-day warranty, 24/7 support. Learn our story.",
    },
    contact: {
        title: "Contact Dakeek - Book Home Maintenance in Dubai | 24/7 Available",
        description: "Book AC repair, plumber, or electrician in Dubai. 60-minute response time. WhatsApp, call, or book online. Available 24/7 for emergencies.",
    },
    queries: {
        title: "FAQ - Home Maintenance Questions Answered | Dakeek Dubai",
        description: "Get answers about AC repair costs, plumber fees, warranty, and booking in Dubai. Everything you need to know about Dakeek services.",
    },
    blog: {
        title: "Home Maintenance Tips & Guides for Dubai | Dakeek Blog",
        description: "Expert advice on AC maintenance, plumbing tips, electrical safety, and home care in Dubai. Stay informed with the Dakeek knowledge hub.",
    },
};
