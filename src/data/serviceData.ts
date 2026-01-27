import {
    Wind, Zap,
    Flame, Gauge,
    ShieldAlert,
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
            tag: "AC & Cooling",
            title: "AC Repair & Maintenance",
            description: "Fast AC repair, duct cleaning, and maintenance services across Dubai."
        },
        seo: {
            title: "Best AC Repair & Maintenance Services in Dubai | Dakeek",
            keywords: [
                "AC Repair Dubai", "Air Conditioning Service Dubai", "AC Maintenance Dubai", "Chiller Repair Dubai",
                "Split AC Repair", "Central AC Maintenance", "Duct Cleaning Dubai", "AC Gas Refill",
                "Emergency AC Repair Dubai", "AC Technician Near Me", "Best AC Company Dubai", "24/7 AC Repair",
                "AC Installation Dubai", "Cooling System Repair", "AC Water Leak Fix", "Villa AC Maintenance",
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
                title: "AC Installation",
                subtitle: "The Perfect Start",
                description: "A proper installation ensures efficiency. We ensure correct placement and airflow calibration.",
                icon: Wind,
                details: ["Load Calculation", "Ductwork Design", "Efficiency Audits", "Smart Thermostats"],
                image: "/images/services/ac.webp" // Using reliable local asset
            },
            {
                id: "maintenance",
                title: "AC Maintenance",
                subtitle: "Peak Performance",
                description: "Maximize efficiency and comfort. Our comprehensive tune-up checks your unit's key components.",
                icon: Thermometer,
                details: ["Coil Cleaning", "Refrigerant Check", "Electrical Inspection", "Drain Flushing"],
                image: "/images/ac/maintenance_new.png"
            },
            {
                id: "repair",
                title: "AC Repair",
                subtitle: "Rapid Response",
                description: "System down? Our team identifies the root cause to restore your cooling quickly.",
                icon: Wrench,
                details: ["Compressor Diagnostics", "Leak Repair", "Circuit Board Fix", "Priority Service"],
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
            tag: "Hydraulics",
            title: "Plumbing Services",
            description: "Emergency leak detection, water heater repair, and drain cleaning."
        },
        seo: {
            title: "Emergency Plumber Dubai | Leak Detection & Water Heater Repair | Dakeek",
            keywords: [
                "Plumber Dubai", "Emergency Plumber Dubai", "Water Leak Detection Dubai", "Water Heater Repair Dubai",
                "Drain Cleaning Dubai", "Blocked Toilet Fix", "Pump Repair Dubai", "Pipe Leak Repair",
                "Bathroom Plumbing Dubai", "Kitchen Plumbing", "Water Pump Repair Dubai", "Best Plumbers in Dubai",
                "24 Hour Plumber Dubai", "Dripping Tap Fix", "Water Pressure Booster Dubai",
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
                description: "Hidden leaks can cause damage. We aim to find them with minimal disruption.",
                icon: Search,
                details: ["Hidden Leak Tracing", "Pinpoint Accuracy", "Water Bill Check", "Damage-Free"],
                image: "/images/services/plumbing.webp"
            },
            {
                id: "heaters",
                title: "Water Heaters",
                subtitle: "Thermodynamics",
                description: "We repair and install major types of electric and gas water heaters.",
                icon: Flame,
                details: ["Element Replacement", "Tank Flushing", "Thermostat Check", "Safety Valves"],
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" // Water Heater / Boiler (Residential)
            },
            {
                id: "pumps",
                title: "Booster Pumps",
                subtitle: "Flow Dynamics",
                description: "Low pressure is frustrating. We check your system to improve flow.",
                icon: Activity,
                details: ["Pressure Switch", "Motor Check", "Impeller Check", "System Check"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80" // Water Pressure / Shower (Residential)
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
            description: "Safe electrical repair, wiring, and maintenance for Dubai homes."
        },
        seo: {
            title: "Certified Electrician Dubai | Emergency Electrical Services | Dakeek",
            keywords: [
                "Electrician Dubai", "Emergency Electrician Dubai", "Electrical Maintenance Dubai", "Short Circuit Fix Dubai",
                "Electrical Panel Upgrade", "Light Installation Dubai", "Power Outage Fix", "Home Wiring Dubai",
                "Socket Repair Dubai", "Certified Electricians Dubai", "Electrical Contractor Dubai", "24/7 Electrician",
                "Breaker Tripping Fix", "Garden Lighting Installation", "Villa Electrical Maintenance",
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
                title: "Wiring & Panels",
                subtitle: "The Nervous System",
                description: "We inspect and organize your distribution boards for safety.",
                icon: Zap,
                details: ["Load Balancing", "Breaker Testing", "Short Circuit Fix", "Rewiring"],
                image: "/images/services/electrical.webp"
            },
            {
                id: "lights",
                title: "Lighting Installation",
                subtitle: "Illumination",
                description: "From ambiance to security. We install systems that save energy and look great.",
                icon: Sparkles,
                details: ["LED Upgrades", "Dimmer Switches", "Garden Lighting", "Hidden Strips"],
                image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80" // Reliable Lighting
            },
            {
                id: "smart",
                title: "Smart Home",
                subtitle: "Automation",
                description: "Control your world. We integrate smart switches and sensors for a connected experience.",
                icon: Activity,
                details: ["IoT Integration", "Sensor Install", "Voice Control", "Wifi Setup"],
                image: "https://images.unsplash.com/photo-1556911220-e1584149fa74?auto=format&fit=crop&q=80" // Reliable Smart Home
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
            title: "Deep Cleaning Services",
            description: "Deep cleaning, water tank sanitization, and duct cleaning."
        },
        seo: {
            title: "Professional Deep Cleaning & Water Tank Cleaning Dubai | Dakeek",
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
                title: "Deep Cleaning",
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
            tag: "Cooking Heat",
            title: "Stove & Cooker Repair",
            description: "Blue flames. Even heat. Safe cooking."
        },
        seo: {
            title: "Cooker & Stove Repair Dubai | Oven Maintenance | Dakeek",
            keywords: [
                "Stove Repair Dubai", "Cooker Repair Dubai", "Oven Repair Service", "Cooking Range Repair",
                "Hob Fix", "Burner Cleaning Service", "Stove Maintenance Dubai", "Induction Cooker Repair",
                "Kitchen Appliance Repair Dubai", "Cooker Hood Fix", "Ariston Stove Repair", "Elba Cooker Repair",
                ...DUBAI_AREAS.map(area => `Stove Repair ${area}`),
                ...DUBAI_AREAS.map(area => `Oven Repair ${area}`)
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
                id: "burners",
                title: "Burner Service",
                subtitle: "Combustion",
                description: "Yellow flame? We clean nozzles and adjust air mixers for a better flame.",
                icon: Flame,
                details: ["Nozzle Cleaning", "Air Mix Adjust", "Igniter Fix", "Grate Cleaning"],
                image: "/images/services/stoves.webp"
            },
            {
                id: "oven",
                title: "Oven Repair",
                subtitle: "Baking",
                description: "Uneven baking? We check thermostats and heating elements.",
                icon: Thermometer,
                details: ["Element Check", "Thermostat Check", "Door Seal", "Fan Motor"],
                image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80" // Modern Oven Interior
            },
            {
                id: "safety",
                title: "Safety Check",
                subtitle: "Connections",
                description: "We check connections for leaks and tightness.",
                icon: ShieldCheck,
                details: ["Connection Test", "Shutoff Valve", "Glass Check", "Knob Repair"],
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" // Safety Valve / Technical
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
            title: "Handyman & Assembly",
            description: "Furniture assembly, TV mounting, and general home repairs."
        },
        seo: {
            title: "Best Handyman Services Dubai | Mounting, Assembly & Repairs | Dakeek",
            keywords: [
                "Handyman Dubai", "Furniture Assembly Dubai", "TV Mounting Service", "Curtain Installation Dubai",
                "IKEA Furniture Assembly", "Home Maintenance Handyman", "Picture Hanging Service", "Drilling Services Dubai",
                "Door Handle Repair", "Shelving Installation", "Carpenter Handyman", "Odd Jobs Dubai",
                "Professional Handyman Near Me", "Cheap Handyman Dubai",
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
                id: "mounting",
                title: "TV Mounting & Hanging",
                subtitle: "Precision",
                description: "TVs, mirrors, curtains, and art. We use levels and proper anchors.",
                icon: Wrench, // Reusing generic tool icon
                details: ["TV Mounting", "Curtain Rods", "Shelving", "Art Installation"],
                image: "/images/services/handyman.webp" // Drill/Wall
            },
            {
                id: "assembly",
                title: "Furniture Assembly",
                subtitle: "No Spare Parts",
                description: "We assemble wardrobes, beds, tables, and desks solid.",
                icon: Gauge, // Symbolizing assembly/structure
                details: ["Furniture Assembly", "Bed Frames", "Wardrobes", "Office Desks"],
                image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80" // Furniture/Assembly
            },
            {
                id: "repair",
                title: "General Repairs",
                subtitle: "Fix It All",
                description: "Door handles, hinges, drawer slides, and minor touch-ups.",
                icon: Wrench,
                details: ["Door Hinges", "Cabinet Handles", "Drawer Slides", "Caulking"],
                image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80" // Toolbox
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
            title: "Emergency 24/7",
            description: "We are on the way. Right now."
        },
        seo: {
            title: "24/7 Emergency Home Maintenace Dubai | Urgent Repair Services | Dakeek",
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

    // 09. Other (Custom)
    other: {
        id: "09",
        slug: "other",
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
            tag: "Custom",
            title: "Other Services",
            description: "Unique requests? We handle special projects too."
        },
        seo: {
            title: "Custom Home Maintenance Services Dubai | Special Projects | Dakeek",
            keywords: [
                "Custom Home Repairs Dubai", "Special Maintenance Projects", "Villa Renovation Minor", "Home Improvement Dubai",
                "Odd Jobs Service", "Custom Carpentry", "General Fixes Dubai"
            ],
            schemaType: "GeneralContractor",
            qna: []
        },
        intro: {
            heading: "Not every problem fits a category. If it's broken, tricky, or unusual, let us take a look.",
            stats: [
                { value: "Custom", label: "Scope", sub: "Defined" },
                { value: "Flex", label: "Team", sub: "Adapted" },
                { value: "Quote", label: "Free", sub: "Upfront" },
                { value: "100%", label: "Solution", sub: "Found" }
            ]
        },
        details: [
            {
                id: "consult",
                title: "Consultation",
                subtitle: "Diagnosis",
                description: "Don't know what's wrong? We perform a full home health check to identify underlying issues.",
                icon: Search,
                details: ["Full Inspection", "Report", "Advice", "Plan"],
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" // Blueprint/Plan
            },
            {
                id: "special",
                title: "Special Projects",
                subtitle: "Unique",
                description: "From installing pet doors to hanging chandeliers or custom requests.",
                icon: Sparkles,
                details: ["Conversions", "Upgrades", "Installations", "Fixes"],
                image: "https://images.unsplash.com/photo-1581093588401-fbb07366f531?auto=format&fit=crop&q=80" // Mechanical/Special
            },
            {
                id: "renovation",
                title: "Minor Touch-ups",
                subtitle: "Refresh",
                description: "Grouting, sealing, painting touch-ups, and restoring the look of your home.",
                icon: Wrench,
                details: ["Grouting", "Sealing", "Patching", "Restoring"],
                image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80" // Paint/Wall
            }
        ],
        techSpecs: {
            grid: [
                { label: "SCOPE", value: "CUSTOM" },
                { label: "TEAM", value: "EXPERT" },
                { label: "PLAN", value: "CLEAR" },
                { label: "RESULT", value: "PERFECT" }
            ],
            tools: "Everything in our vans and more.",
            list: ["Diagnosis", "Planning", "Execution", "Review", "Cleanup"]
        },
        uniqueBenefits: [
            "Flexible scope for unusual requests",
            "Free consultation and upfront quote",
            "Multi-skill technicians for hybrid jobs",
            "We aim to find solutions for any problem"
        ],
        relatedServices: ["handyman", "cleaning", "plumbing"]
    }
};
