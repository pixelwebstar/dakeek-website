import {
    Wind, Zap,
    Flame, Gauge,
    Wrench, Thermometer,
    Droplet, Activity,
    Search,
    Sparkles, ShieldCheck
} from "lucide-react";
import { DUBAI_AREAS } from "@/lib/constants";

export { DUBAI_AREAS };



export interface ServiceDetail {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;


    details: string[];
    image: string;
}

export interface ServicePageData {
    id: string;
    slug: string;
    theme: {
        primaryText: string;
        primaryBg: string; // Dark bg
        secondaryBg: string; // Light bg
        accentText: string; // Lighter text for dark bg
        iconBg: string;
        hero1: string; // Hex for canvas
        hero2: string; // Hex for canvas
    };
    hero: {
        tag: string;
        title: string;
        description: string;
    };
    seo: {  // [NEW] Hard Core SEO Data
        title: string;
        keywords: string[];
        schemaType: string;
        qna?: { question: string; answer: string }[];
        description?: string;
    };
    intro: {
        heading: string;
        stats: { value: string; label: string; sub: string }[];
    };
    details: ServiceDetail[];
    addOn?: {
        title: string;
        tag: string;
        description: string;
        benefits: string[];
        image: string;
    };
    techSpecs: {
        grid: { label: string; value: string }[];
        tools: string;
        list: string[];
    };
    // Phase 3 Additions
    uniqueBenefits?: string[]; // Why Dakeek for this service?
    relatedServices?: string[]; // Slugs of related services for internal linking
}




export const serviceData: Record<string, ServicePageData> = {
    ac: {
        id: "01",
        slug: "ac",
        theme: {
            primaryText: "text-slate-900", // Premium Slate
            primaryBg: "bg-slate-950",
            secondaryBg: "bg-slate-50",
            accentText: "text-slate-500",
            iconBg: "bg-slate-500/10",
            hero1: "#94a3b8",
            hero2: "#f8fafc"
        },
        hero: {
            tag: "Cooling Experts",
            title: "AC Services",
            description: "Reliable AC repair and maintenance for homes and businesses across Dubai."
        },
        seo: {
            title: "AC Repair & Maintenance Dubai | Dakeek",
            keywords: [
                "AC Repair Dubai", "Commercial AC Repair", "Restaurant AC Maintenance", "Home AC Service",
                "Chiller Repair Dubai", "VRF System Maintenance", "Split AC Repair", "Central AC Maintenance",
                "Duct Cleaning Dubai", "AC AMC Contract Dubai", "Emergency AC Repair", "Best AC Company Dubai",
                "Office AC Maintenance", "Villa AC Repair", "Industrial AC Services",
                ...DUBAI_AREAS.map(area => `AC Repair ${area}`),
                ...DUBAI_AREAS.map(area => `AC Maintenance ${area}`)
            ],
            schemaType: "HVACBusiness",
            qna: [
                {
                    question: "How quickly can you fix my AC in Dubai?",
                    answer: "We offer rapid response times across Dubai, including Marina, Palm Jumeirah, and Downtown. Our technicians aim to resolve issues efficiently."
                },
                {
                    question: "Do you offer warranty on AC repairs?",
                    answer: "Yes, we provide a service warranty on our workmanship. We ensure quality repairs for your peace of mind."
                },
                {
                    question: "What is the cost of AC service in Dubai?",
                    answer: "We provide clear, upfront pricing before starting any work. Contact us for our latest rates."
                }
            ]
        },
        intro: {
            heading: "Excellence shouldn't have an entry fee. That's why we start with clear pricing and finish with quality work.",
            stats: [
                { value: "Check", label: "Inspection", sub: "Diagnosis" },
                { value: "Fair", label: "Pricing", sub: "Service" },
                { value: "Yes", label: "Warranty", sub: "Included" },
                { value: "Clear", label: "Transparent", sub: "Quotes" }
            ]
        },
        details: [
            {
                id: "installation",
                title: "Installation & Fit-outs",
                subtitle: "Home & Business",
                description: "From split units in villas to VRF systems for offices. We ensure efficiency.",
                icon: Wind,
                details: ["Split Unit Install", "VRF Systems", "Ductwork Design", "Smart Controls"],
                image: "/images/services/ac.webp"
            },
            {
                id: "maintenance",
                title: "Maintenance & AMC",
                subtitle: "Preventive Care",
                description: "Tailored contracts for restaurants, shops, and private residences.",
                icon: Thermometer,
                details: ["Deep Coil Cleaning", "Filter Exchange", "Performance Reports", "Scheduled Visits"],
                image: "/images/ac/maintenance_new.png"
            },
            {
                id: "repair",
                title: "Repair Service",
                subtitle: "Fast Response",
                description: "Is your AC blowing hot air? Our technicians diagnose and fix issues rapidly.",
                icon: Wrench,
                details: ["Compressor Fix", "Gas Top-up", "Leak Repair", "Circuit Board"],
                image: "/images/ac/maintenance_final.jpg"
            }
        ],
        addOn: {
            title: "Duct Cleaning",
            tag: "Add-On Service",
            description: "Dust and allergens accumulate over time. We thoroughly clean your system for better air quality.",
            benefits: ["Removes bad smells", "Reduces dust", "Improves airflow"],
            image: "/images/ac/deep_clean_new.png"
        },
        techSpecs: {
            grid: [
                { label: "COOLING", value: "RESTORED" },
                { label: "NOISE", value: "REDUCED" },
                { label: "AIR FLOW", value: "OPTIMIZED" },
                { label: "WARRANTY", value: "INCLUDED" }
            ],
            tools: "Professional diagnostic tools for accurate readings.",
            list: ["Filter cleaning", "Gas check", "Motor inspection", "Coil washing", "Leak test"]
        },
        uniqueBenefits: [
            "Specialized AC training",
            "Equipped for major brands",
            "Priority emergency service",
            "Clear upfront pricing"
        ],
        relatedServices: ["cleaning", "electrical", "emergency"]
    },
    plumbing: {
        id: "02",
        slug: "plumbing",
        theme: {
            primaryText: "text-cyan-900", // Premium Deep Cyan
            primaryBg: "bg-cyan-950",
            secondaryBg: "bg-cyan-50",
            accentText: "text-cyan-400",
            iconBg: "bg-cyan-500/10",
            hero1: "#06b6d4",
            hero2: "#ecfeff"
        },
        hero: {
            tag: "Water Systems",
            title: "Plumbing Services",
            description: "Leak detection, heaters, pumps, and grease traps for all properties."
        },
        seo: {
            title: "Plumber Dubai | Home & Business | Dakeek",
            keywords: [
                "Plumber Dubai", "Commercial Plumber Dubai", "Restaurant Plumbing", "Leak Detection Dubai",
                "Water Heater Repair", "Drain Cleaning Dubai", "Grease Trap Cleaning", "Water Pump Repair",
                "Emergency Plumber", "Villa Plumbing Maintenance", "Office Plumbing Services", "Blocked Toilet Fix",
                ...DUBAI_AREAS.map(area => `Plumber ${area}`),
                ...DUBAI_AREAS.map(area => `Leak Detection ${area}`)
            ],
            schemaType: "Plumber",
            qna: [
                {
                    question: "Can you find a water leak under my floor tiles?",
                    answer: "Yes, we use advanced finding technology to aim to locate hidden leaks efficiently."
                },
                {
                    question: "Do you fix blocked drains on weekends?",
                    answer: "We offer services throughout the week, including weekends. We can check blocked drains, toilets, and sinks."
                }
            ]
        },
        intro: {
            heading: "Water belongs in pipes, not on your floor. We use modern tools to find leaks you can't see.",
            stats: [
                { value: "Free", label: "Check", sub: "Diagnosis" },
                { value: "Fair", label: "Rates", sub: "Service" },
                { value: "Yes", label: "Warranty", sub: "Included" },
                { value: "Fast", label: "Response", sub: "Time" }
            ]
        },
        details: [
            {
                id: "leaks",
                title: "Leak Detection",
                subtitle: "Precision Tracing",
                description: "Hidden leaks cause damage. We trace them in walls and floors accurately.",
                icon: Search,
                details: ["Acoustic Tracing", "Thermal Imaging", "Water Bill Check", "Non-Invasive"],
                image: "/images/services/plumbing.webp"
            },
            {
                id: "commercial",
                title: "Commercial Plumbing",
                subtitle: "Business Ready",
                description: "Grease trap cleaning, high-flow drainage, and restroom maintenance.",
                icon: Droplet,
                details: ["Grease Traps", "Drain Jetting", "Staff Washrooms", "Kitchen Drainage"],
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
            },
            {
                id: "pumps",
                title: "Pumps & Heaters",
                subtitle: "Systems",
                description: "From villa water heaters to industrial booster pumps.",
                icon: Activity,
                details: ["Booster Pumps", "Water Heaters", "Pressure Switches", "Tank Valves"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "PRESSURE", value: "OPTIMAL" },
                { label: "LEAKS", value: "SEALED" },
                { label: "DRAINS", value: "CLEAR" },
                { label: "WARRANTY", value: "INCLUDED" }
            ],
            tools: "Advanced diagnostic systems for non-invasive finding.",
            list: ["Pressure testing", "Drain snaking", "Heater flush", "Valve seating", "Pipe insulation"]
        },
        uniqueBenefits: [
            "Advanced leak detection",
            "Emergency response available",
            "Experienced plumbers",
            "Clear upfront pricing"
        ],
        relatedServices: ["cleaning", "ac", "emergency"]
    },
    electrical: {
        id: "03",
        slug: "electrical",
        theme: {
            primaryText: "text-yellow-900", // High Voltage Yellow
            primaryBg: "bg-yellow-950",
            secondaryBg: "bg-yellow-50",
            accentText: "text-yellow-400",
            iconBg: "bg-yellow-500/10",
            hero1: "#facc15",
            hero2: "#fefce8"
        },
        hero: {
            tag: "Power Systems",
            title: "Electrical Services",
            description: "From fixing a socket at home to wiring a retail shop. Safe & Certified."
        },
        seo: {
            title: "Electrician Dubai | Licensed Services | Dakeek",
            keywords: [
                "Electrician Dubai", "Commercial Electrician", "Office Lighting", "3 Phase Wiring Dubai",
                "Home Wiring Dubai", "Retail Electrical Services", "Short Circuit Fix", "DB Dressing",
                "Electrical Maintenance AMC", "Chandelier Installation", "Emergency Electrician",
                ...DUBAI_AREAS.map(area => `Electrician ${area}`),
                ...DUBAI_AREAS.map(area => `Electrical Services ${area}`)
            ],
            schemaType: "Electrician",
            qna: [
                {
                    question: "Why does my DEWA bill keep increasing?",
                    answer: "High bills can indicate potential issues. We can check your electrical consumption for efficiency."
                },
                {
                    question: "Are your electricians qualified?",
                    answer: "Yes, our technicians are trained to handle residential and commercial electrical systems safely."
                }
            ]
        },
        intro: {
            heading: "Electricity requires care. Our technicians ensure your home is wired for safety and efficiency.",
            stats: [
                { value: "Free", label: "Safety", sub: "Check" },
                { value: "Fair", label: "Rates", sub: "Service" },
                { value: "Safe", label: "Work", sub: "Standard" },
                { value: "0", label: "Hazards", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "wiring",
                title: "Wiring & Safety",
                subtitle: "Inspections",
                description: "DB dressing, short circuit tracing, and safety audits for homes and offices.",
                icon: Zap,
                details: ["Load Balancing", "Breaker Testing", "Short Circuit Fix", "Rewiring"],
                image: "/images/services/electrical.webp"
            },
            {
                id: "lighting",
                title: "Lighting Solutions",
                subtitle: "Retail & Home",
                description: "From chandelier hanging in villas to track lighting in retail shops.",
                icon: Sparkles,
                details: ["LED Upgrades", "Retail Tracks", "Garden Lighting", "Chandelier Install"],
                image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80"
            },
            {
                id: "power",
                title: "Power Systems",
                subtitle: "Heavy Duty",
                description: "3-Phase connections for industrial equipment and server rooms.",
                icon: Activity,
                details: ["3-Phase Wiring", "Isolator Switches", "Control Panels", "Data Cabling"],
                image: "https://images.unsplash.com/photo-1556911220-e1584149fa74?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "VOLTAGE", value: "STABLE" },
                { label: "LOAD", value: "BALANCED" },
                { label: "SAFETY", value: "CHECKED" },
                { label: "WARRANTY", value: "INCLUDED" }
            ],
            tools: "Certified testing equipment for total safety.",
            list: ["Load check", "Breaker test", "Grounding", "Insulation test", "Socket polarity"]
        },
        uniqueBenefits: [
            "Trained technicians",
            "Detailed safety audits",
            "Smart home integration",
            "Efficiency audits"
        ],
        relatedServices: ["ac", "handyman", "emergency"]
    },
    // 04. Cleaning (Consolidated)
    cleaning: {
        id: "04",
        slug: "cleaning",
        theme: {
            primaryText: "text-emerald-900", // Already good, kept as 900
            primaryBg: "bg-emerald-950",
            secondaryBg: "bg-emerald-50",
            accentText: "text-emerald-500",
            iconBg: "bg-emerald-500/10",
            hero1: "#10b981",
            hero2: "#ecfdf5"
        },
        hero: {
            tag: "Hygiene",
            title: "Cleaning Services",
            description: "Deep cleaning, water tank sanitization, and duct cleaning."
        },
        seo: {
            title: "Deep Cleaning & Water Tank Dubai | Dakeek",
            keywords: [
                "Deep Cleaning Service Dubai", "Water Tank Cleaning Dubai", "Home Sanitization Dubai", "AC Duct Cleaning",
                "Best Cleaning Company Dubai", "Move In Cleaning Dubai", "Villa Deep Cleaning", "Apartment Cleaning Service",
                "Floor Scrubbing Dubai", "Kitchen Deep Clean", "Mold Removal Dubai", "Hygiene Cleaning Services",
                "Disinfection Service Dubai", "Water Tank Sanitization", "Dubai Municipality Approved Cleaning",
                ...DUBAI_AREAS.map(area => `Deep Cleaning ${area}`),
                ...DUBAI_AREAS.map(area => `Water Tank Cleaning ${area}`)
            ],
            schemaType: "ProfessionalService",
            qna: [
                {
                    question: "How often should I clean my water tank in Dubai?",
                    answer: "It is generally recommended to clean water tanks every 6 months for optimal hygiene."
                },
                {
                    question: "What is included in a deep clean?",
                    answer: "Our deep clean covers floor scrubbing, window cleaning, and sanitizing bathrooms and kitchens."
                }
            ]
        },
        intro: {
            heading: "From ducts to water tanks, we ensure a cleaner environment.",
            stats: [
                { value: "Full", label: "Sanitization", sub: "Deep" },
                { value: "Safe", label: "Water", sub: "Tanks" },
                { value: "Pure", label: "Air", sub: "Ducts" },
                { value: "Clean", label: "Hygiene", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "deep-clean",
                title: "Cleaning Services",
                subtitle: "Intensive",
                description: "Thorough home sanitization for move-ins or seasonal cleaning.",
                icon: Sparkles,
                details: ["Floor Scrubbing", "Window Cleaning", "Kitchen Degreasing", "Bathroom Sanitize"],
                image: "/images/services/cleaning.webp"
            },
            {
                id: "tanks",
                title: "Water Tank Cleaning",
                subtitle: "Safe Water",
                description: "Removal of sediment and disinfection of your main water supply.",
                icon: Droplet,
                details: ["Drain & Scrub", "Chlorination", "Pump Check", "Lab Test Option"],
                image: "https://images.unsplash.com/photo-1562654501-a03df0438548?auto=format&fit=crop&q=80" // Water/Tank
            },
            {
                id: "ducts",
                title: "AC Duct Cleaning",
                subtitle: "Air Quality",
                description: "Removing dust and debris from your AC ductwork.",
                icon: Wind,
                details: ["Rotary Brush", "HEPA Vacuum", "Fogging", "Filter Wash"],
                image: "https://images.unsplash.com/photo-1504384308090-c54be385507d?auto=format&fit=crop&q=80" // Ventilation / Air
            }
        ],
        techSpecs: {
            grid: [
                { label: "GERMS", value: "REDUCED" },
                { label: "AIR", value: "CLEANER" },
                { label: "WATER", value: "CLEAN" },
                { label: "HOME", value: "FRESH" }
            ],
            tools: "Professional cleaning equipment.",
            list: ["Steam sanitize", "Vacuum extraction", "Scrubbing", "Fogging", "Polishing"]
        },
        uniqueBenefits: [
            "Approved cleaning products",
            "Trained cleaning staff",
            "Lab testing available",
            "Safe for families"
        ],
        relatedServices: ["ac", "plumbing", "electrical"]
    },
    // 05. Stoves (Renumbered)
    stoves: {
        id: "06",
        slug: "stoves",
        theme: {
            primaryText: "text-orange-900",
            primaryBg: "bg-orange-950",
            secondaryBg: "bg-orange-50",
            accentText: "text-orange-400",
            iconBg: "bg-orange-500/10",
            hero1: "#fb923c",
            hero2: "#fff7ed"
        },
        hero: {
            tag: "Gas Systems",
            title: "Gas & Cookers",
            description: "Domestic cooker repair and commercial gas line maintenance."
        },
        seo: {
            title: "Gas Stove & Burner Repair Dubai | Dakeek",
            keywords: [
                "Stove Repair Dubai", "Cooker Repair Dubai", "Commercial Burner Repair", "Restaurant Kitchen Maintenance",
                "Oven Repair Service", "Gas Line Installation", "IGD System Maintenance", "Cooking Range Repair",
                "Ariston Stove Repair", "Pizza Oven Repair", "Kitchen Gas Safety", "Hotel Kitchen Maintenance",
                ...DUBAI_AREAS.map(area => `Stove Repair ${area}`),
                ...DUBAI_AREAS.map(area => `Gas Line Repair ${area}`)
            ],
            schemaType: "GeneralContractor",
            qna: [
                {
                    question: "Why is my stove flame yellow instead of blue?",
                    answer: "A yellow flame indicates incomplete combustion. We clean and adjust the burners to improve flame quality."
                },
                {
                    question: "Do you repair all brands of cookers?",
                    answer: "We repair many major brands. Contact us to confirm your specific model."
                }
            ]
        },
        intro: {
            heading: "A bad stove ruins dinner. A broken cooker risks your home. We fix both.",
            stats: [
                { value: "Blue", label: "Flame", sub: "Target" },
                { value: "Glass", label: "Top", sub: "Care" },
                { value: "Oven", label: "Heat", sub: "Check" },
                { value: "Many", label: "Brands", sub: "Service" }
            ]
        },
        details: [
            {
                id: "cookers",
                title: "Domestic Cookers",
                subtitle: "Home Kitchens",
                description: "We repair Ariston, Elba, and all major home cooker brands.",
                icon: Flame,
                details: ["Flame Issues", "Oven Heating", "Glass Replacement", "Knob Repair"],
                image: "/images/services/stoves.webp"
            },
            {
                id: "commercial-burners",
                title: "Commercial Burners",
                subtitle: "Restaurants",
                description: "High-BTU burner maintenance, nozzle cleaning, and pilot light fixes.",
                icon: Flame,
                details: ["Nozzle Cleaning", "Air Mix Adjust", "Valve Repair", "Carbon Removal"],
                image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80"
            },
            {
                id: "gas-lines",
                title: "Gas Pipelines",
                subtitle: "Safety First",
                description: "IGD & LPG gas line installation and leak detection systems.",
                icon: ShieldCheck,
                details: ["Leak Detection", "Pressure Testing", "Solenoid Valves", "Safety Interlocks"],
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "FLAME", value: "BLUE" },
                { label: "IGNITION", value: "WORKING" },
                { label: "HEAT", value: "EVEN" },
                { label: "WARRANTY", value: "INCLUDED" }
            ],
            tools: "Digital tools for checking operation.",
            list: ["Flame adjust", "Igniter gap", "Fuel flow", "Temp accuracy", "Leak check"]
        },
        uniqueBenefits: [
            "Specialists in major brands",
            "Safe handling of connections",
            "Oven temperature checks",
            "Burner cleaning services"
        ],
        relatedServices: ["electrical", "handyman", "cleaning"]
    },
    // 07. Handyman (Moved Up)
    handyman: {
        id: "07",
        slug: "handyman",
        theme: {
            primaryText: "text-violet-900",
            primaryBg: "bg-violet-950",
            secondaryBg: "bg-violet-50",
            accentText: "text-violet-500",
            iconBg: "bg-violet-500/10",
            hero1: "#8b5cf6",
            hero2: "#f5f3ff"
        },
        hero: {
            tag: "Versatile",
            title: "Handyman Services",
            description: "Furniture assembly, TV mounting, and fit-out repairs for shops and homes."
        },
        seo: {
            title: "Handyman & Fit-out Dubai | Dakeek",
            keywords: [
                "Handyman Dubai", "Shop Fitout Dubai", "Furniture Assembly", "TV Mounting Service",
                "Retail Shop Maintenance", "Office Furniture Assembly", "Curtain Installation", "Door Closer Repair",
                "Shelving Installation", "Commercial Handyman", "Home Repairs Dubai", "Odd Jobs Service",
                ...DUBAI_AREAS.map(area => `Handyman ${area}`),
                ...DUBAI_AREAS.map(area => `Furniture Assembly ${area}`)
            ],
            schemaType: "GeneralContractor",
            qna: [
                {
                    question: "Do you assemble IKEA furniture?",
                    answer: "Yes, we assemble flat-pack furniture from various retailers."
                },
                {
                    question: "Can you mount a TV on a gypsum wall?",
                    answer: "Yes, we use appropriate heavy-duty anchors for different wall types to ensure secure mounting."
                }
            ]
        },
        intro: {
            heading: "Small tasks pile up. We knock them down. From hanging art to assembling furniture, we handle the details.",
            stats: [
                { value: "Any", label: "Task", sub: "Solution" },
                { value: "Fast", label: "Assembly", sub: "Service" },
                { value: "Precise", label: "Level", sub: "Mounting" },
                { value: "Spotless", label: "Clean", sub: "Finish" }
            ]
        },
        details: [
            {
                id: "home-tasks",
                title: "Home Handyman",
                subtitle: "Residential",
                description: "Mounting TVs, hanging curtains, and fixing door handles in your home.",
                icon: Wrench,
                details: ["TV Mounting", "Curtain Rods", "Picture Hanging", "Minor Plumbing"],
                image: "/images/services/handyman.webp"
            },
            {
                id: "assembly",
                title: "Furniture Assembly",
                subtitle: "IKEA & Custom",
                description: "We assemble wardrobes, beds, and office desks efficiently.",
                icon: Gauge,
                details: ["Furniture Assembly", "Bed Frames", "Wardrobes", "Office Desks"],
                image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80"
            },
            {
                id: "fit-out",
                title: "Shop Fit-out",
                subtitle: "Commercial",
                description: "Shelving, partitions, and repairs for retail shops and offices.",
                icon: Gauge,
                details: ["Shelving Install", "Partition Walls", "Door Closers", "Ceiling Tiles"],
                image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "LEVEL", value: "CHECKED" },
                { label: "ANCHORS", value: "RATED" },
                { label: "SOLID", value: "YES" },
                { label: "SPEED", value: "FAST" }
            ],
            tools: "Professional installation tools.",
            list: ["Leveling", "Stud finding", "Drilling", "Anchoring", "Touch-ups"]
        },
        uniqueBenefits: [
            "Furniture assembly experts",
            "Appropriate wall anchors used",
            "Precision mounting",
            "Clean workspace post-job"
        ],
        relatedServices: ["electrical", "cleaning", "ac"]
    },

    // 08. Emergency (Moved Down)
    emergency: {
        id: "08",
        slug: "emergency",
        theme: {
            primaryText: "text-rose-900",
            primaryBg: "bg-rose-950",
            secondaryBg: "bg-rose-50",
            accentText: "text-rose-400",
            iconBg: "bg-rose-500/10",
            hero1: "#be123c",
            hero2: "#fff1f2"
        },
        hero: {
            tag: "SOS",
            title: "Emergency Services",
            description: "We are on the way. Right now."
        },
        seo: {
            title: "24/7 Emergency Repair Dubai | Dakeek",
            keywords: [
                "Emergency Home Maintenance Dubai", "24 Hour Repair Service Dubai", "Urgent AC Repair", "Emergency Plumber 24/7",
                "Power Outage Emergency Dubai", "Flood Cleanup Service", "Emergency Handyman Dubai", "Fast Response Maintenance",
                "After Hours Repair Dubai", "Holiday Maintenance Service", "Critical Home Repair", "SOS Home Services",
                ...DUBAI_AREAS.map(area => `Emergency Repair ${area}`)
            ],
            schemaType: "EmergencyService",
            qna: [
                {
                    question: "How long does it take for you to arrive in an emergency?",
                    answer: "We aim for rapid arrival times for all emergency calls within Dubai limits."
                },
                {
                    question: "Is there an extra charge for after-hours service?",
                    answer: "Emergency call-outs may carry a surcharge, which will be confirmed with you."
                }
            ]
        },
        intro: {
            heading: "Disasters don't keep office hours. Neither do we. If there is an issue, we deploy immediately.",
            stats: [
                { value: "Fast", label: "Arrival", sub: "Target" },
                { value: "24/7", label: "Open", sub: "Always" },
                { value: "Fully", label: "Stocked", sub: "Vans" },
                { value: "Fixed", label: "Solution", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "flood",
                title: "Water Flood",
                subtitle: "Containment",
                description: "We extract water and stop the flow to limit damage.",
                icon: Droplet,
                details: ["Valve Shutoff", "Water Vac", "Pipe Repair", "Damage Control"],
                image: "/images/services/emergency.webp" // Flooded floor/water
            },
            {
                id: "power",
                title: "Power Outage",
                subtitle: "Restoration",
                description: "We trace shorts and restore lights.",
                icon: Zap,
                details: ["Trip Trace", "Bypass", "Generator", "Safety Check"],
                image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80" // Dark room/candle or circuit
            },
            {
                id: "ac",
                title: "AC Failure",
                subtitle: "Heat Relief",
                description: "We prioritize AC failures during heatwaves.",
                icon: Wind,
                details: ["Rapid Cooling", "Portable Units", "Priority Fix", "Night Service"],
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" // AC unit again (appropriate here)
            }
        ],
        techSpecs: {
            grid: [
                { label: "SPEED", value: "MAX" },
                { label: "TOOLS", value: "READY" },
                { label: "TEAM", value: "AWAKE" },
                { label: "SOLUTION", value: "NOW" }
            ],
            tools: "Fully stocked vans for immediate repairs.",
            list: ["Stop leak", "Isolate power", "Cool down", "Clean up", "Report"]
        },
        uniqueBenefits: [
            "Rapid arrival target in Dubai",
            "Vans stocked for emergencies",
            "Night and weekend availability",
            "Immediate damage control"
        ],
        relatedServices: ["ac", "plumbing", "electrical"]
    },

    // 09. AMC Contracts (Formerly Other)
    amc: {
        id: "09",
        slug: "amc",
        theme: {
            primaryText: "text-slate-900",
            primaryBg: "bg-slate-950",
            secondaryBg: "bg-slate-50",
            accentText: "text-slate-500",
            iconBg: "bg-slate-500/10",
            hero1: "#64748b",
            hero2: "#f1f5f9"
        },
        hero: {
            tag: "Peace of Mind",
            title: "AMC Contracts",
            description: "Annual maintenance packages for homes and businesses. Priority support, scheduled visits, and zero worries."
        },
        seo: {
            title: "AMC Contracts Dubai | Home & Business | Dakeek",
            keywords: [
                "AMC Contract Dubai", "Home Maintenance Package", "Annual AC Maintenance Contract", "Villa AMC Dubai",
                "Office Maintenance Contract", "Property Management AMC", "Building Maintenance Dubai", "Restaurant AMC Services",
                ...DUBAI_AREAS.map(area => `AMC Contract ${area}`)
            ],
            schemaType: "Service",
            qna: [
                {
                    question: "What is included in an AMC package?",
                    answer: "Our packages typically include scheduled AC maintenance, plumbing and electrical inspections, and priority emergency response."
                },
                {
                    question: "Do you offer AMC for commercial properties?",
                    answer: "Yes, we provide tailored maintenance contracts for offices, restaurants, and retail spaces."
                }
            ]
        },
        intro: {
            heading: "Don't wait for things to break. Our Annual Maintenance Contracts keep your property running smoothly year-round.",
            stats: [
                { value: "365", label: "Coverage", sub: "Days" },
                { value: "Priority", label: "Response", sub: "Speed" },
                { value: "Fixed", label: "Cost", sub: "Budget" },
                { value: "Total", label: "Care", sub: "Asset" }
            ]
        },
        details: [
            {
                id: "home-amc",
                title: "Home Packages",
                subtitle: "Residential",
                description: "Comprehensive care for villas and apartments. Includes AC, plumbing, and electrical upkeep.",
                icon: ShieldCheck,
                details: ["Scheduled Visits", "Emergency Callouts", "AC Servicing", "Handyman Help"],
                image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80"
            },
            {
                id: "business-amc",
                title: "Business Support",
                subtitle: "Commercial",
                description: "Operational stability for restaurants, offices, and retail. Minimize downtime.",
                icon: Activity,
                details: ["Preventive Maintenance", "Compliance Checks", "After-hours Service", "Asset Asset Management"],
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            },
            {
                id: "preventive",
                title: "Preventive Care",
                subtitle: "Long-term",
                description: "Regular inspections to catch small issues before they become expensive repairs.",
                icon: Search,
                details: ["System Audits", "Report Logs", "Efficiency Tuning", "Safety Checks"],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "SCOPE", value: "365 DAYS" },
                { label: "TEAM", value: "PRIORITY" },
                { label: "PLAN", value: "CUSTOM" },
                { label: "RESULT", value: "PEACE" }
            ],
            tools: "Scheduled maintenance checklists and tracking.",
            list: ["System Audits", "Performance Logs", "Safety Checks", "Priority Status", "Asset History"]
        },
        uniqueBenefits: [
            "Priority response for contract holders",
            "Preventive maintenance reduces failure",
            "Fixed annual cost for budgeting",
            "Extended asset lifespan"
        ],
        relatedServices: ["ac", "plumbing", "electrical"]
    }
};
