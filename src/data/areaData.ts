/**
 * Area-specific data for unique theming and SEO optimization (Phase 6 & 25)
 * Each area has a unique theme, tagline, and SEO keywords for distinct Google indexing.
 */

export interface AreaData {
    name: string;
    slug: string;
    theme: {
        accentColor: string; // Hex color for accents
        heroGradient: string; // CSS gradient
    };
    tagline: string;
    description: string;
    landmarks: string[];
    seoKeywords: string[];
    featured: boolean; // Priority areas
}

// Helper function to get area data by slug
export function getAreaDataBySlug(slug: string): AreaData | undefined {
    return AREA_DATA.find(a => a.slug === slug);
}

export const AREA_DATA: AreaData[] = [
    // Tier 1: Premium Areas (Featured)
    {
        name: "Palm Jumeirah",
        slug: "palm-jumeirah",
        theme: { accentColor: "#0EA5E9", heroGradient: "from-sky-900 to-sky-600" },
        tagline: "Island-Class Service for Island Living",
        description: "Palm Jumeirah's unique architecture requires specialized expertise. Our technicians are trained in high-rise systems, seawater-resistant fixtures, and the specific HVAC demands of coastal properties.",
        landmarks: ["Atlantis The Palm", "The Pointe", "Nakheel Mall"],
        seoKeywords: ["AC repair Palm Jumeirah", "Plumber Palm Jumeirah", "Electrician Palm Island Dubai"],
        featured: true
    },
    {
        name: "Dubai Marina",
        slug: "dubai-marina",
        theme: { accentColor: "#3B82F6", heroGradient: "from-blue-900 to-blue-600" },
        tagline: "High-Rise Expertise at Your Doorstep",
        description: "Marina towers demand technicians who understand high-rise plumbing pressure, centralized AC systems, and modern apartment layouts. We've serviced every major building in the Marina.",
        landmarks: ["Marina Mall", "JBR Beach", "Marina Walk"],
        seoKeywords: ["AC maintenance Dubai Marina", "Plumber Dubai Marina", "Handyman Marina"],
        featured: true
    },
    {
        name: "Downtown Dubai",
        slug: "downtown-dubai",
        theme: { accentColor: "#8B5CF6", heroGradient: "from-violet-900 to-violet-600" },
        tagline: "Precision Service for Iconic Living",
        description: "Home to the world's tallest building and most recognized address, Downtown requires technicians who respect the premium environment and deliver flawless results.",
        landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Opera"],
        seoKeywords: ["Maintenance Downtown Dubai", "AC repair Burj Khalifa area", "Plumber DIFC"],
        featured: true
    },
    {
        name: "Arabian Ranches",
        slug: "arabian-ranches",
        theme: { accentColor: "#D97706", heroGradient: "from-amber-900 to-amber-600" },
        tagline: "Villa Specialists in the Heart of the Desert",
        description: "Arabian Ranches villas have unique pool systems, garden irrigation, and larger-scale AC needs. Our teams specialize in villa maintenance across all sub-communities.",
        landmarks: ["Arabian Ranches Golf Club", "Arabian Center"],
        seoKeywords: ["Villa maintenance Arabian Ranches", "Pool repair Ranches", "AC villa Dubai"],
        featured: true
    },
    {
        name: "Emirates Hills",
        slug: "emirates-hills",
        theme: { accentColor: "#059669", heroGradient: "from-emerald-900 to-emerald-600" },
        tagline: "White-Glove Service for Exclusive Estates",
        description: "Emirates Hills estates require discretion, expertise, and an understanding of luxury home systems. We provide VIP-level service with confidentiality.",
        landmarks: ["Montgomerie Golf Course", "Emirates Hills Meadows"],
        seoKeywords: ["Luxury home maintenance Emirates Hills", "Private villa repair Dubai"],
        featured: true
    },
    // Tier 2: Major Areas
    {
        name: "Jumeirah Lake Towers (JLT)",
        slug: "jumeirah-lake-towers-(jlt)",
        theme: { accentColor: "#14B8A6", heroGradient: "from-teal-900 to-teal-600" },
        tagline: "Lake District Maintenance Experts",
        description: "JLT's cluster-based layout means we know exactly which buildings have which systems. Rapid response across all clusters.",
        landmarks: ["JLT Park", "Cluster D-Q Towers"],
        seoKeywords: ["JLT maintenance", "AC repair JLT", "Plumber Jumeirah Lakes"],
        featured: false
    },
    {
        name: "Business Bay",
        slug: "business-bay",
        theme: { accentColor: "#6366F1", heroGradient: "from-indigo-900 to-indigo-600" },
        tagline: "Efficiency for the Business District",
        description: "Business Bay's mix of residential and commercial demands fast, professional service that respects working hours and building protocols.",
        landmarks: ["Bay Avenue", "Business Bay Metro"],
        seoKeywords: ["Business Bay maintenance", "Office repair Dubai", "AC Business Bay"],
        featured: false
    },
    {
        name: "Jumeirah Islands",
        slug: "jumeirah-islands",
        theme: { accentColor: "#0D9488", heroGradient: "from-teal-800 to-teal-500" },
        tagline: "Island Villa Specialists",
        description: "Jumeirah Islands' cluster design requires technicians familiar with waterfront properties and villa systems.",
        landmarks: ["Jumeirah Islands Clubhouse"],
        seoKeywords: ["Jumeirah Islands maintenance", "Villa repair Dubai"],
        featured: false
    },
    {
        name: "The Meadows",
        slug: "the-meadows",
        theme: { accentColor: "#22C55E", heroGradient: "from-green-800 to-green-500" },
        tagline: "Community Care for Family Living",
        description: "The Meadows' family-friendly communities appreciate our respectful, thorough, and child-safe service approach.",
        landmarks: ["The Meadows Town Centre"],
        seoKeywords: ["Meadows Dubai maintenance", "Villa repair Meadows"],
        featured: false
    },
    {
        name: "The Springs",
        slug: "the-springs",
        theme: { accentColor: "#10B981", heroGradient: "from-emerald-800 to-emerald-500" },
        tagline: "Reliable Service for Established Communities",
        description: "The Springs' mature community trusts Dakeek for consistent, long-term maintenance partnerships.",
        landmarks: ["The Springs Souk"],
        seoKeywords: ["Springs Dubai maintenance", "AC repair Springs"],
        featured: false
    },
    {
        name: "Jumeirah Park",
        slug: "jumeirah-park",
        theme: { accentColor: "#34D399", heroGradient: "from-emerald-700 to-emerald-400" },
        tagline: "Park-Side Villa Expertise",
        description: "Jumeirah Park's distinctive villa designs require technicians who understand modern landscaping and smart home integration.",
        landmarks: ["Jumeirah Park Pavilion"],
        seoKeywords: ["Jumeirah Park maintenance", "Smart home repair Dubai"],
        featured: false
    },
    {
        name: "Al Barsha",
        slug: "al-barsha",
        theme: { accentColor: "#F59E0B", heroGradient: "from-yellow-800 to-yellow-500" },
        tagline: "Central Dubai, Fast Response",
        description: "Al Barsha's central location means we can often arrive in under 45 minutes. A mix of apartments and villas.",
        landmarks: ["Mall of the Emirates", "Al Barsha Park"],
        seoKeywords: ["Al Barsha maintenance", "AC repair Barsha", "MOE area plumber"],
        featured: false
    },
    {
        name: "Umm Suqeim",
        slug: "umm-suqeim",
        theme: { accentColor: "#F97316", heroGradient: "from-orange-800 to-orange-500" },
        tagline: "Beachside Property Specialists",
        description: "Umm Suqeim's coastal environment requires expertise in salt-air corrosion prevention and outdoor systems.",
        landmarks: ["Jumeirah Beach", "Burj Al Arab"],
        seoKeywords: ["Umm Suqeim maintenance", "Beach villa repair Dubai"],
        featured: false
    },
    {
        name: "Jumeirah",
        slug: "jumeirah",
        theme: { accentColor: "#EC4899", heroGradient: "from-pink-800 to-pink-500" },
        tagline: "Heritage Area Expertise",
        description: "Jumeirah's mix of older villas and new construction requires versatile technicians who can work with any system.",
        landmarks: ["Jumeirah Mosque", "City Walk"],
        seoKeywords: ["Jumeirah maintenance", "Villa repair Jumeirah Dubai"],
        featured: false
    },
    {
        name: "Mudon",
        slug: "mudon",
        theme: { accentColor: "#84CC16", heroGradient: "from-lime-800 to-lime-500" },
        tagline: "Community-First Service",
        description: "Mudon's family-oriented design appreciates our respectful service and attention to detail.",
        landmarks: ["Mudon Central Park"],
        seoKeywords: ["Mudon maintenance", "Villa repair Mudon Dubai"],
        featured: false
    },
    {
        name: "Damac Hills",
        slug: "damac-hills",
        theme: { accentColor: "#EAB308", heroGradient: "from-yellow-700 to-yellow-400" },
        tagline: "Golf Community Specialists",
        description: "Damac Hills' resort-style living requires technicians familiar with pool systems and outdoor entertainment areas.",
        landmarks: ["Trump Golf Course", "Damac Hills Park"],
        seoKeywords: ["Damac Hills maintenance", "Pool repair Dubai Hills"],
        featured: false
    },
    {
        name: "Dubai Hills Estate",
        slug: "dubai-hills-estate",
        theme: { accentColor: "#A3E635", heroGradient: "from-lime-700 to-lime-400" },
        tagline: "Modern Living, Modern Service",
        description: "Dubai Hills Estate's smart homes and modern infrastructure require forward-thinking technicians.",
        landmarks: ["Dubai Hills Mall", "Dubai Hills Golf Club"],
        seoKeywords: ["Dubai Hills maintenance", "Smart villa repair Dubai"],
        featured: true
    },
    {
        name: "Meydan",
        slug: "meydan",
        theme: { accentColor: "#A855F7", heroGradient: "from-purple-800 to-purple-500" },
        tagline: "Racing District Excellence",
        description: "Meydan's premium developments near the racecourse demand top-tier service and discretion.",
        landmarks: ["Meydan Racecourse", "Meydan Hotel"],
        seoKeywords: ["Meydan maintenance", "Villa repair Meydan Dubai"],
        featured: false
    },
    {
        name: "DIFC",
        slug: "difc",
        theme: { accentColor: "#6366F1", heroGradient: "from-indigo-800 to-indigo-500" },
        tagline: "Financial District Precision",
        description: "DIFC residences require discreet, efficient service that respects the professional environment.",
        landmarks: ["Gate Building", "DIFC Art Galleries"],
        seoKeywords: ["DIFC maintenance", "Apartment repair DIFC Dubai"],
        featured: false
    },
    {
        name: "Sheikh Zayed Road",
        slug: "sheikh-zayed-road",
        theme: { accentColor: "#475569", heroGradient: "from-slate-800 to-slate-500" },
        tagline: "Tower Specialists Along the Spine",
        description: "SZR's iconic towers require high-rise expertise and understanding of legacy building systems.",
        landmarks: ["Emirates Towers", "World Trade Centre"],
        seoKeywords: ["Sheikh Zayed Road maintenance", "Tower repair Dubai"],
        featured: false
    },
    {
        name: "The Greens",
        slug: "the-greens",
        theme: { accentColor: "#16A34A", heroGradient: "from-green-700 to-green-400" },
        tagline: "Garden Community Care",
        description: "The Greens' apartment complexes trust our efficient, professional approach to common building issues.",
        landmarks: ["Emirates Golf Club"],
        seoKeywords: ["Greens Dubai maintenance", "Apartment repair Greens"],
        featured: false
    },
    {
        name: "The Views",
        slug: "the-views",
        theme: { accentColor: "#15803D", heroGradient: "from-green-800 to-green-500" },
        tagline: "Scenic Living, Seamless Service",
        description: "The Views' lakeside setting requires technicians who understand the area's unique microclimate.",
        landmarks: ["Lake View Promenade"],
        seoKeywords: ["The Views maintenance", "Apartment repair Views Dubai"],
        featured: false
    },
    {
        name: "Victory Heights",
        slug: "victory-heights",
        theme: { accentColor: "#CA8A04", heroGradient: "from-yellow-800 to-yellow-500" },
        tagline: "Sporting Community Specialists",
        description: "Victory Heights' golf-course villas require expertise in outdoor systems and large-scale AC.",
        landmarks: ["Els Club"],
        seoKeywords: ["Victory Heights maintenance", "Golf villa repair Dubai"],
        featured: false
    },
    {
        name: "Sports City",
        slug: "sports-city",
        theme: { accentColor: "#EF4444", heroGradient: "from-red-700 to-red-400" },
        tagline: "Active Living, Active Service",
        description: "Sports City's athletic community appreciates our fast, reliable approach to home maintenance.",
        landmarks: ["Dubai Sports City Stadium"],
        seoKeywords: ["Sports City maintenance", "Apartment repair Sports City"],
        featured: false
    },
    {
        name: "Motor City",
        slug: "motor-city",
        theme: { accentColor: "#DC2626", heroGradient: "from-red-800 to-red-500" },
        tagline: "Fast Lane Service",
        description: "Motor City residents appreciate efficiency and precision - values we share.",
        landmarks: ["Autodrome"],
        seoKeywords: ["Motor City maintenance", "Villa repair Motor City Dubai"],
        featured: false
    },
    {
        name: "Sustainable City",
        slug: "sustainable-city",
        theme: { accentColor: "#22C55E", heroGradient: "from-green-700 to-green-400" },
        tagline: "Eco-Conscious Maintenance",
        description: "Sustainable City's green mandate aligns with our commitment to efficient, waste-reducing repairs.",
        landmarks: ["Urban Farming Domes"],
        seoKeywords: ["Sustainable City maintenance", "Solar villa repair Dubai"],
        featured: false
    },
    {
        name: "Al Furjan",
        slug: "al-furjan",
        theme: { accentColor: "#F59E0B", heroGradient: "from-amber-700 to-amber-400" },
        tagline: "Growing Community, Growing Trust",
        description: "Al Furjan's expanding community trusts Dakeek for consistent, quality service.",
        landmarks: ["Al Furjan Pavilion"],
        seoKeywords: ["Al Furjan maintenance", "Villa repair Al Furjan"],
        featured: false
    },
    {
        name: "Jumeirah Village Circle (JVC)",
        slug: "jumeirah-village-circle-(jvc)",
        theme: { accentColor: "#F97316", heroGradient: "from-orange-700 to-orange-400" },
        tagline: "Central Village Expertise",
        description: "JVC's diverse building styles require versatile technicians - we've seen them all.",
        landmarks: ["Circle Mall"],
        seoKeywords: ["JVC maintenance", "AC repair JVC Dubai", "Plumber JVC"],
        featured: false
    },
    {
        name: "Jumeirah Village Triangle (JVT)",
        slug: "jumeirah-village-triangle-(jvt)",
        theme: { accentColor: "#FB923C", heroGradient: "from-orange-600 to-orange-300" },
        tagline: "Triangle Area Specialists",
        description: "JVT's villa and townhouse layouts are familiar territory for our trained teams.",
        landmarks: ["JVT Community Centre"],
        seoKeywords: ["JVT maintenance", "Villa repair JVT Dubai"],
        featured: false
    },
    {
        name: "Remraam",
        slug: "remraam",
        theme: { accentColor: "#D97706", heroGradient: "from-amber-800 to-amber-500" },
        tagline: "Affordable Excellence",
        description: "Remraam residents receive the same premium service as any Dubai community - quality never varies.",
        landmarks: ["Remraam Community Park"],
        seoKeywords: ["Remraam maintenance", "Apartment repair Remraam"],
        featured: false
    },
    {
        name: "Town Square",
        slug: "town-square",
        theme: { accentColor: "#84CC16", heroGradient: "from-lime-700 to-lime-400" },
        tagline: "New Community, Trusted Service",
        description: "Town Square's modern infrastructure is perfectly matched with our forward-thinking approach.",
        landmarks: ["Town Square Park", "Reel Cinemas"],
        seoKeywords: ["Town Square maintenance", "Apartment repair Town Square Dubai"],
        featured: false
    },
    {
        name: "Mira",
        slug: "mira",
        theme: { accentColor: "#65A30D", heroGradient: "from-lime-800 to-lime-500" },
        tagline: "Townhouse Specialists",
        description: "Mira's townhouse layouts require technicians who understand multi-floor home systems.",
        landmarks: ["Mira Town Centre"],
        seoKeywords: ["Mira maintenance", "Townhouse repair Dubai"],
        featured: false
    },
    {
        name: "Mira Oasis",
        slug: "mira-oasis",
        theme: { accentColor: "#4D7C0F", heroGradient: "from-lime-900 to-lime-600" },
        tagline: "Oasis of Quality",
        description: "Mira Oasis residents trust Dakeek for consistent, high-quality maintenance.",
        landmarks: ["Mira Oasis Park"],
        seoKeywords: ["Mira Oasis maintenance", "Villa repair Mira Oasis"],
        featured: false
    },
    {
        name: "Silicon Oasis",
        slug: "silicon-oasis",
        theme: { accentColor: "#0EA5E9", heroGradient: "from-sky-800 to-sky-500" },
        tagline: "Tech Park Trusted Service",
        description: "Silicon Oasis's tech-savvy community appreciates our modern booking and efficient service.",
        landmarks: ["DSO Headquarters"],
        seoKeywords: ["Silicon Oasis maintenance", "DSO repair Dubai"],
        featured: false
    },
    {
        name: "Academic City",
        slug: "academic-city",
        theme: { accentColor: "#0284C7", heroGradient: "from-sky-700 to-sky-400" },
        tagline: "Student-Friendly Service",
        description: "Academic City's young residents appreciate our transparent pricing and fast response.",
        landmarks: ["Dubai Academic City"],
        seoKeywords: ["Academic City maintenance", "Student housing repair Dubai"],
        featured: false
    },
    {
        name: "Mirdif",
        slug: "mirdif",
        theme: { accentColor: "#EAB308", heroGradient: "from-yellow-700 to-yellow-400" },
        tagline: "Established Area, Established Trust",
        description: "Mirdif's mix of villas and apartments is well-known to our experienced teams.",
        landmarks: ["City Centre Mirdif", "Uptown Mirdif"],
        seoKeywords: ["Mirdif maintenance", "Villa repair Mirdif Dubai"],
        featured: false
    },
    {
        name: "Al Warqa",
        slug: "al-warqa",
        theme: { accentColor: "#CA8A04", heroGradient: "from-yellow-800 to-yellow-500" },
        tagline: "Eastern Dubai Experts",
        description: "Al Warqa's villa communities trust our reliable, neighborhood-based service.",
        landmarks: ["Al Warqa City Mall"],
        seoKeywords: ["Al Warqa maintenance", "Villa repair Al Warqa"],
        featured: false
    }
];
