
import { DUBAI_AREAS } from "@/lib/constants";

export interface AreaProfile {
    slug: string;
    name: string;
    type: 'villa' | 'apartment' | 'mixed' | 'luxury';
    tagline: string;
    description: string;
    seoKeywords: string[];
    priorityServices: string[]; // Slugs of services to highlight
    landmarks: string[];
    theme: {
        accentColor: string;
    };
    featured: boolean;
}

// "Research" Logic: Mapping characteristics to areas
const VILLA_AREAS = ["Palm Jumeirah", "Arabian Ranches", "Emirates Hills", "Jumeirah Islands", "The Meadows", "The Springs", "Jumeirah Park", "Victory Heights", "Mudon", "Damac Hills", "Dubai Hills Estate", "Mirdif", "Jumeirah", "Umm Suqeim", "Al Barsha"];
const HIGH_RISE_AREAS = ["Dubai Marina", "Jumeirah Lake Towers (JLT)", "Downtown Dubai", "Business Bay", "DIFC", "Sheikh Zayed Road", "Sports City", "Motor City", "Silicon Oasis"];

export const AREA_DATA: AreaProfile[] = DUBAI_AREAS.map(area => {
    const slug = area.toLowerCase().replace(/ /g, "-");
    const isVilla = VILLA_AREAS.includes(area);
    const isHighRise = HIGH_RISE_AREAS.includes(area);

    let type: AreaProfile['type'] = 'mixed';
    if (isVilla) type = 'villa';
    if (isHighRise) type = 'apartment';
    if (area === "Palm Jumeirah" || area === "Emirates Hills") type = 'luxury';

    // Custom "Researched" Data Injection
    let description = `Professional home maintenance services in ${area}.`;
    let tagline = "Expert Care for Your Home.";
    let priorityServices = ["ac", "plumbing", "electrical"];
    let accentColor = "#6B5344"; // Default Dark Brown

    switch (area) {
        case "Palm Jumeirah":
            description = "Specialized maintenance for Palm Jumeirah luxury villas and apartments. We understand the unique coastal humidity challenges affecting UV systems and desalination plumbing.";
            tagline = "Coastal Villa Specialists.";
            priorityServices = ["ac", "cleaning", "plumbing"]; // High humidity = AC + Mold/Cleaning focus
            accentColor = "#0ea5e9"; // Ocean Blue
            break;
        case "Dubai Marina":
            description = "High-rise technical services for Dubai Marina towers. Licensed access for all major towers including Princess Tower, Marina 101, and Torch.";
            tagline = "Skyline Maintenance Experts.";
            priorityServices = ["plumbing", "ac", "handyman"]; // Leaks in high-rises are critical
            accentColor = "#38bdf8"; // Sky Blue (Visible on Black & White)
            break;
        case "Arabian Ranches":
            description = "Family-focused maintenance for Arabian Ranches community. Quiet, clean, and safe service for your villa lifestyle.";
            tagline = "Community Villa Care.";
            priorityServices = ["handyman", "electrical", "ac"];
            accentColor = "#166534"; // Garden Green
            break;
        case "Downtown Dubai":
            description = "Premium service for Downtown luxury residences. 24/7 emergency response near Burj Khalifa and Dubai Mall district.";
            tagline = "The Center of Excellence.";
            priorityServices = ["emergency", "ac", "stoves"];
            accentColor = "#C4A67C"; // Gold
            break;
        case "Jumeirah Lake Towers (JLT)":
            description = "Fast, efficient office and residential maintenance in JLT. DMCC compliant service providers.";
            tagline = "Cluster-Specific Speed.";
            priorityServices = ["ac", "electrical", "cleaning"];
            accentColor = "#0d9488"; // Teal
            break;
        case "Business Bay":
            description = "Corporate and residential maintenance for Business Bay. Minimizing downtime for offices and high-end apartments.";
            tagline = "Professional Grade Service.";
            priorityServices = ["ac", "electrical", "emergency"];
            accentColor = "#4f46e5"; // Indigo
            break;
        default:
            // Algorithmic fallback to ensure "Unique" feeling even for generic areas
            if (isVilla) {
                description = `Comprehensive maintenance for villas in ${area}. We specialize in garden lighting, water tank cleaning, and central AC units common in ${area}.`;
                tagline = `Dedicated to ${area} Villas.`;
                priorityServices = ["ac", "cleaning", "handyman"];
                accentColor = "#65a30d"; // Lime/Nature
            } else if (isHighRise) {
                description = `Rapid response for apartments in ${area}. Dealing with building management and access permits is our specialty.`;
                tagline = `Apartment Experts in ${area}.`;
                priorityServices = ["plumbing", "electrical", "stoves"];
                accentColor = "#64748b"; // Slate/Urban
            }
            break;
    }

    return {
        slug,
        name: area,
        type,
        tagline,
        description,
        seoKeywords: [`${area} maintenance`, `AC repair ${area}`, `Plumber ${area}`, `Electrician ${area}`],
        priorityServices,
        landmarks: [`${area} Landmark`], // Placeholder, would need real data map
        theme: { accentColor },
        featured: true
    };
});

export function getAreaDataBySlug(slug: string): AreaProfile | undefined {
    return AREA_DATA.find(area => area.slug === slug);
}
