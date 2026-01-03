import {
    Wind, Zap,
    Flame, Gauge,
    ShieldAlert,
    Wrench, Thermometer,
    Droplet, Activity,
    Search,
    Sparkles, ShieldCheck
} from "lucide-react";



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
}

export const DUBAI_AREAS = [
    "Palm Jumeirah", "Dubai Marina", "Jumeirah Lake Towers", "JLT", "Downtown Dubai",
    "Business Bay", "Arabian Ranches", "Emirates Hills", "Jumeirah Islands", "The Meadows",
    "The Springs", "Jumeirah Park", "Al Barsha", "Umm Suqeim", "Jumeirah", "Mudon",
    "Damac Hills", "Dubai Hills Estate", "Meydan", "Difc", "Sheikh Zayed Road",
    "Greens", "Views", "Victory Heights", "Sports City", "Motor City", "Sustainable City"
];

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
            title: "AC Care",
            description: "Fixing leaks, noise, and heat. Fast."
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
                    answer: "We offer 60-minute emergency response times across Dubai, including Marina, Palm Jumeirah, and Downtown. Our vans are fully stocked to fix 90% of issues on the first visit."
                },
                {
                    question: "Do you offer warranty on AC repairs?",
                    answer: "Yes, we provide a 30-day warranty on all workmanship. If the same issue returns, we fix it for free. No questions asked."
                },
                {
                    question: "What is the cost of AC service in Dubai?",
                    answer: "Our inspections are free with any service. Basic maintenance starts at 179 AED. We provide upfront pricing before starting any work."
                }
            ]
        },
        intro: {
            heading: "Excellence shouldn't have an entry fee. That’s why we start with a free inspection and finish with a guaranteed warranty.",
            stats: [
                { value: "Free", label: "Inspection", sub: "Diagnosis" },
                { value: "179 AED", label: "Starts at", sub: "Service" },
                { value: "30", label: "Days", sub: "Warranty" },
                { value: "100%", label: "Transparent", sub: "Pricing" }
            ]
        },
        details: [
            {
                id: "installation",
                title: "Installation",
                subtitle: "The Perfect Start",
                description: "A flawless installation is the foundation of a decade of comfort. We calculate load, optimize placement, and calibrate airflow.",
                icon: Wind,
                details: ["Load Calculation", "Ductwork Design", "Efficiency Audits", "Smart Thermostats"],
                image: "/images/ac/maintenance.jpg" // Using reliable local asset
            },
            {
                id: "maintenance",
                title: "Maintenance",
                subtitle: "Peak Performance",
                description: "Silence the noise and lower the bills. Our comprehensive tune-up restores your unit to factory specs.",
                icon: Thermometer,
                details: ["Coil Cleaning", "Refrigerant Check", "Electrical Inspection", "Drain Flushing"],
                image: "/images/ac/maintenance_new.png"
            },
            {
                id: "repair",
                title: "Repair",
                subtitle: "Rapid Response",
                description: "When the heat rises, we drop it. Our emergency repair team identifies the root cause instantly.",
                icon: Wrench,
                details: ["Compressor Diagnostics", "Leak Repair", "Circuit Board Fix", "24/7 Service"],
                image: "/images/ac/maintenance_final.jpg"
            }
        ],
        addOn: {
            title: "Deep Clean",
            tag: "Add-On Service",
            description: "Dirty ducts mean dirty air. Dust, mold, and allergens hide inside your walls. We use industrial vacuums to clear them out.",
            benefits: ["Removes bad smells", "Reduces dust", "Improves airflow"],
            image: "/images/ac/deep_clean_new.png"
        },
        techSpecs: {
            grid: [
                { label: "COOLING", value: "RESTORED" },
                { label: "NOISE", value: "SILENT" },
                { label: "AIR FLOW", value: "OPTIMIZED" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "We use digital tools to measure gas pressure, airflow, and temperature.",
            list: ["Filter cleaning", "Gas check", "Motor inspection", "Coil washing", "Leak test"]
        }
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
            title: "Plumbing",
            description: "Flow restored. Leaks stopped. Pressure optimized."
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
                    answer: "Yes, we use advanced ultrasonic and thermal leak detection technology to locate hidden leaks without breaking your tiles or damaging your property."
                },
                {
                    question: "Do you fix blocked drains on weekends?",
                    answer: "We operate 24/7, including weekends and holidays. We can clear blocked drains, toilets, and sinks immediately."
                }
            ]
        },
        intro: {
            heading: "Water belongs in pipes, not on your floor. We use ultrasonic detection to find leaks you can't see.",
            stats: [
                { value: "Free", label: "Detection", sub: "With Repair" },
                { value: "129 AED", label: "Starts at", sub: "Service" },
                { value: "30", label: "Days", sub: "Warranty" },
                { value: "24/7", label: "Emergency", sub: "Response" }
            ]
        },
        details: [
            {
                id: "leaks",
                title: "Leak Detection",
                subtitle: "Precision Tracing",
                description: "Hidden leaks ruin foundations. We find them without tearing up your walls using thermal and acoustic sensors.",
                icon: Search,
                details: ["Ultrasonic Detection", "Thermal Imaging", "Pressure Testing", "Non-Invasive"],
                image: "/images/plumbing_brass_detail.png"
            },
            {
                id: "heaters",
                title: "Water Heaters",
                subtitle: "Thermodynamics",
                description: "Cold showers are a choice. We repair and install all major brands of electric and gas water heaters.",
                icon: Flame,
                details: ["Element Replacement", "Tank Flushing", "Thermostat Calib", "Safety Valves"],
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" // Water Heater / Boiler (Residential)
            },
            {
                id: "pumps",
                title: "Booster Pumps",
                subtitle: "Flow Dynamics",
                description: "Low pressure is frustrating. We balance your system to ensure consistent, strong flow from every tap.",
                icon: Activity,
                details: ["Pressure Switch", "Motor Rewind", "Impeller Check", "System Balancing"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80" // Water Pressure / Shower (Residential)
            }
        ],
        techSpecs: {
            grid: [
                { label: "PRESSURE", value: "BALANCED" },
                { label: "LEAKS", value: "SEALED" },
                { label: "DRAINS", value: "CLEAR" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "We use acoustic leak detectors and thermal cameras to see inside walls.",
            list: ["Pressure testing", "Drain snaking", "Heater flush", "Valve seating", "Pipe insulation"]
        }
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
            title: "Electrical",
            description: "Safe. Stable. Certified. Lighting up your life."
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
                    answer: "High bills often indicate faulty wiring, old AC units, or inefficient lighting. We perform comprehensive electrical audits to reduce your consumption."
                },
                {
                    question: "Are your electricians certified?",
                    answer: "Yes, all our senior technicians are certified and trained to handle residential and commercial electrical systems safely."
                }
            ]
        },
        intro: {
            heading: "Electricity is dangerous. Don't risk it. Our certified technicians ensure your home is wired for safety and efficiency.",
            stats: [
                { value: "Free", label: "Safety", sub: "Check" },
                { value: "179 AED", label: "Starts at", sub: "Service" },
                { value: "100%", label: "Safe", sub: "Certified" },
                { value: "0", label: "Hazards", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "wiring",
                title: "Wiring & Panels",
                subtitle: "The Nervous System",
                description: "Old wiring is a fire hazard. We inspect, upgrade, and organize your distribution boards for maximum safety.",
                icon: Zap,
                details: ["Load Balancing", "Breaker Testing", "Short Circuit Fix", "Rewiring"],
                image: "/images/modern_electrical_panel.png"
            },
            {
                id: "lights",
                title: "Lighting",
                subtitle: "Illumination",
                description: "From ambiance to security. We design and install LED systems that save energy and look stunning.",
                icon: Sparkles,
                details: ["LED Upgrades", "Dimmer Switches", "Garden Lighting", "Hidden Strips"],
                image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80" // Reliable Lighting
            },
            {
                id: "smart",
                title: "Smart Home",
                subtitle: "Automation",
                description: "Control your world. We integrate smart switches, sensors, and hubs for a truly connected experience.",
                icon: Activity,
                details: ["IoT Integration", "Sensor Install", "Voice Control", "Wifi Setup"],
                image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80" // Reliable Smart Home
            }
        ],
        techSpecs: {
            grid: [
                { label: "VOLTAGE", value: "STABLE" },
                { label: "LOAD", value: "BALANCED" },
                { label: "SAFETY", value: "CERTIFIED" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "Fluke Multimeters and thermal scanners to detect hotspots before they burn.",
            list: ["Load check", "Breaker test", "Grounding", "Insulation test", "Socket polarity"]
        }
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
            description: "Deep cleaning, water tanks, and sanitization."
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
                    answer: "Dubai Municipality recommends cleaning water tanks every 6 months to prevent bacteria, algae, and sediment buildup."
                },
                {
                    question: "What is included in a deep clean?",
                    answer: "Our deep clean covers everything from floor scrubbing and window cleaning to sanitizing bathrooms, kitchens, and hard-to-reach areas."
                }
            ]
        },
        intro: {
            heading: "From dusty ducts to water tanks, we ensure a spotless, healthy environment.",
            stats: [
                { value: "Full", label: "Sanitization", sub: "Deep" },
                { value: "Safe", label: "Water", sub: "Tanks" },
                { value: "Pure", label: "Air", sub: "Ducts" },
                { value: "100%", label: "Hygiene", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "deep-clean",
                title: "Deep Cleaning",
                subtitle: "Intensive",
                description: "Complete home sanitization for move-ins or spring cleaning. Floors, windows, and surfaces.",
                icon: Sparkles,
                details: ["Floor Scrubbing", "Window Cleaning", "Kitchen Degreasing", "Bathroom Sanitize"],
                image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80" // Clean Living Room
            },
            {
                id: "tanks",
                title: "Water Tanks",
                subtitle: "Safe Water",
                description: "Removal of sediment and disinfection of your main water supply.",
                icon: Droplet,
                details: ["Drain & Scrub", "Chlorination", "Pump Check", "Lab Test Option"],
                image: "https://images.unsplash.com/photo-1533618105727-b08e50b1df2c?auto=format&fit=crop&q=80" // Clean Water Texture
            },
            {
                id: "ducts",
                title: "Duct Cleaning",
                subtitle: "Air Quality",
                description: "Removing dust and mold from your AC ductwork.",
                icon: Wind,
                details: ["Rotary Brush", "HEPA Vacuum", "Fogging", "Filter Wash"],
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80" // Corrected Duct
            }
        ],
        techSpecs: {
            grid: [
                { label: "GERMS", value: "KILLED" },
                { label: "AIR", value: "PURE" },
                { label: "WATER", value: "CLEAN" },
                { label: "HOME", value: "FRESH" }
            ],
            tools: "Industrial steamers, wet vacuums, and rotary brushes.",
            list: ["Steam sanitize", "Vacuum extraction", "Scrubbing", "Fogging", "Polishing"]
        }
    },



    // 05. Gas (Renumbered)
    gas: {
        id: "05",
        slug: "gas",
        theme: {
            primaryText: "text-red-900",
            primaryBg: "bg-red-950",
            secondaryBg: "bg-red-50",
            accentText: "text-red-400",
            iconBg: "bg-red-500/10",
            hero1: "#ef4444",
            hero2: "#fef2f2"
        },
        hero: {
            tag: "Critical Safety",
            title: "Gas Systems",
            description: "No leaks. No risks. Civil Defense compliant."
        },
        seo: {
            title: "Gas Leak Detection & Pipe Installation Dubai | Licensed Gas Services",
            keywords: [
                "Gas Leak Detection Dubai", "Gas Pipe Installation Dubai", "Central Gas System Repair", "IGD System Installation",
                "Gas Safety Check Dubai", "Kitchen Gas Line Repair", "LPG Gas Piping", "Civil Defense Approved Gas",
                "Gas Solenoid Valve Installation", "Gas Leak Fix Dubai", "Emergency Gas Repair", "Gas Maintenance Company",
                ...DUBAI_AREAS.map(area => `Gas Leak Detection ${area}`),
                ...DUBAI_AREAS.map(area => `Gas Installation ${area}`)
            ],
            schemaType: "ProfessionalService",
            qna: [
                {
                    question: "What should I do if I smell gas?",
                    answer: "Immediately turn off the main gas valve, open windows, and evacuate. Call us immediately for emergency leak detection and repair."
                },
                {
                    question: "Are your gas technicians certified?",
                    answer: "Yes, all our gas technicians are trained and follow strict Civil Defense safety protocols for LPG and central gas systems."
                }
            ]
        },
        intro: {
            heading: "Gas is invisible and silent until it's too late. We use high-sensitivity sniffers to ensure your home is explosive-proof.",
            stats: [
                { value: "100%", label: "Sealed", sub: "Guarantee" },
                { value: "LPG", label: "Certified", sub: "Techs" },
                { value: "IGD", label: "Systems", sub: "Install" },
                { value: "24/7", label: "Emergency", sub: "Response" }
            ]
        },
        details: [
            {
                id: "detection",
                title: "Leak Detection",
                subtitle: "Zero Tolerance",
                description: "We pressure test your entire line. If there's a micro-leak, we find it and seal it. Period.",
                icon: Search,
                details: ["Pressure Testing", "Bubble Test", "Digital Sniffing", "Line Tracing"],
                image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&q=80" // Gas Safety Check
            },
            {
                id: "installation",
                title: "Pipe Installation",
                subtitle: "Copper & PEX",
                description: "New kitchen? We run safe, compliant gas lines from your central cylinder to your appliances.",
                icon: Wrench,
                details: ["Copper Piping", "Safety Valves", "Regulator Setup", "Civil Defense Approved"],
                image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80" // Industrial pipe
            },
            {
                id: "igd",
                title: "IGD Systems",
                subtitle: "Auto-Shutoff",
                description: "Install an Intelligent Gas Detection system that automatically cuts off supply if a leak is detected.",
                icon: ShieldAlert,
                details: ["Sensor Mount", "Valve Control", "Panel Setup", "Annual Test"],
                image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80" // Sensor/tech panel
            }
        ],
        techSpecs: {
            grid: [
                { label: "PRESSURE", value: "HOLDING" },
                { label: "LEAKS", value: "ZERO" },
                { label: "SAFETY", value: "MAX" },
                { label: "WARRANTY", value: "1 YEAR" }
            ],
            tools: "Calibrated manometers and combustible gas detectors.",
            list: ["Pressure hold", "Soap test", "Valve check", "Regulator flow", "Ventilation check"]
        }
    },
    // 06. Stoves (Renumbered)
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
            title: "Stove Repair",
            description: "Blue flames. Even heat. Safe cooking."
        },
        seo: {
            title: "Cooker & Gas Stove Repair Dubai | Oven Maintenance | Dakeek",
            keywords: [
                "Gas Stove Repair Dubai", "Cooker Repair Dubai", "Oven Repair Service", "Cooking Range Repair",
                "Gas Hob Fix", "Burner Cleaning Service", "Stove Maintenance Dubai", "Induction Cooker Repair",
                "Kitchen Appliance Repair Dubai", "Gas Leak Stove Fix", "Ariston Stove Repair", "Elba Cooker Repair",
                ...DUBAI_AREAS.map(area => `Stove Repair ${area}`),
                ...DUBAI_AREAS.map(area => `Oven Repair ${area}`)
            ],
            schemaType: "GeneralContractor",
            qna: [
                {
                    question: "Why is my gas stove flame yellow instead of blue?",
                    answer: "A yellow flame indicates incomplete combustion, which can produce carbon monoxide. We clean and calibrate the burners to restore a safe blue flame."
                },
                {
                    question: "Do you repair all brands of cookers?",
                    answer: "Yes, we repair major brands including Ariston, Elba, Bosch, Siemens, and Teka."
                }
            ]
        },
        intro: {
            heading: "A bad stove ruins dinner. A broken gas stove risks your home. We fix both.",
            stats: [
                { value: "Blue", label: "Flame", sub: "Target" },
                { value: "Glass", label: "Top", sub: "Care" },
                { value: "Oven", label: "Heat", sub: "Calib" },
                { value: "Any", label: "Brand", sub: "Repair" }
            ]
        },
        details: [
            {
                id: "burners",
                title: "Burner Service",
                subtitle: "Combustion",
                description: "Yellow flame? Soot? We clean nozzles and adjust air mixers for a perfect, hot blue flame.",
                icon: Flame,
                details: ["Nozzle Cleaning", "Air Mix Adjust", "Igniter Fix", "Grate Cleaning"],
                image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80" // Modern Gas Hob
            },
            {
                id: "oven",
                title: "Oven Repair",
                subtitle: "Baking",
                description: "Cakes burning on one side? We calibrate thermostats and replace heating elements.",
                icon: Thermometer,
                details: ["Element Swap", "Thermostat Calib", "Door Seal", "Fan Motor"],
                image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80" // Modern Oven Interior
            },
            {
                id: "safety",
                title: "Safety Check",
                subtitle: "Thermocouples",
                description: "Ensuring the gas cuts off if the flame blows out. A vital safety feature we test on every visit.",
                icon: ShieldCheck,
                details: ["Thermocouple Test", "Shutoff Valve", "Glass Integrity", "Knob Repair"],
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" // Safety Valve / Technical
            }
        ],
        techSpecs: {
            grid: [
                { label: "FLAME", value: "BLUE" },
                { label: "IGNITION", value: "INSTANT" },
                { label: "HEAT", value: "EVEN" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "Digital thermometers for oven calibration.",
            list: ["Flame adjust", "Igniter gap", "Gas flow", "Temp accuracy", "Leak check"]
        }
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
            title: "Handyman",
            description: "Furniture assembly. Mounting. Repairs. Done right."
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
                    answer: "Yes, we are experts in assembling all flat-pack furniture from IKEA, Home Centre, and Danube, ensuring it is sturdy and correctly built."
                },
                {
                    question: "Can you mount a TV on a gypsum wall?",
                    answer: "Yes, we use special heavy-duty anchors designed for gypsum/drywall to ensure your TV is mounted safely and securely."
                }
            ]
        },
        intro: {
            heading: "Small tasks pile up. We knock them down. From hanging art to assembling IKEA furniture, we handle the details.",
            stats: [
                { value: "Any", label: "Task", sub: "Solution" },
                { value: "Fast", label: "Assembly", sub: "Service" },
                { value: "laser", label: "Level", sub: "Mounting" },
                { value: "100%", label: "Clean", sub: "Finish" }
            ]
        },
        details: [
            {
                id: "mounting",
                title: "Mounting & Hanging",
                subtitle: "Precision",
                description: "TVs, mirrors, curtains, and art. We use laser levels and proper anchors so nothing ever falls.",
                icon: Wrench, // Reusing generic tool icon
                details: ["TV Mounting", "Curtain Rods", "Shelving", "Art Installation"],
                image: "https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80" // Drill/Wall
            },
            {
                id: "assembly",
                title: "Furniture Assembly",
                subtitle: "No Spare Parts",
                description: "Bought it in a box? We build it solid. Wardrobes, beds, tables, and desks assembled without the frustration.",
                icon: Gauge, // Symbolizing assembly/structure
                details: ["IKEA Assembly", "Bed Frames", "Wardrobes", "Office Desks"],
                image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80" // Furniture/Assembly
            },
            {
                id: "repair",
                title: "General Repairs",
                subtitle: "Fix It All",
                description: "Door handles, hinges, drawer slides, and minor touch-ups. If it's broken, we probably fix it.",
                icon: Wrench,
                details: ["Door Hinges", "Cabinet Handles", "Drawer Slides", "Caulking"],
                image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80" // Toolbox
            }
        ],
        techSpecs: {
            grid: [
                { label: "LEVEL", value: "LASER" },
                { label: "ANCHORS", value: "RATED" },
                { label: "SOLID", value: "YES" },
                { label: "SPEED", value: "FAST" }
            ],
            tools: "Laser levels, stud finders, and impact drivers.",
            list: ["Leveling", "Stud finding", "Drilling", "Anchoring", "Touch-ups"]
        }
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
                    answer: "We aim for an arrival time of under 60 minutes for all emergency calls within Dubai limits."
                },
                {
                    question: "Is there an extra charge for after-hours service?",
                    answer: "We are transparent about our pricing. Emergency call-outs may carry a standard surcharge, which will be confirmed with you before we dispatch the team."
                }
            ]
        },
        intro: {
            heading: "Disasters don't keep office hours. Neither do we. If there is water flooding or power out, we deploy immediately.",
            stats: [
                { value: "<60", label: "Mins", sub: "Arrival" },
                { value: "24/7", label: "Open", sub: "Always" },
                { value: "Fully", label: "Stocked", sub: "Vans" },
                { value: "Fixed", label: "First Time", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "flood",
                title: "Water Flood",
                subtitle: "Containment",
                description: "Burst pipe? Heater leak? We extract water and stop the flow immediately to protect your furniture.",
                icon: Droplet,
                details: ["Valve Shutoff", "Water Vac", "Pipe Repair", "Damage Control"],
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" // Flooded floor/water
            },
            {
                id: "power",
                title: "Power Outage",
                subtitle: "Restoration",
                description: "Total blackout? We bring generators if needed and trace the short circuit to restore lights.",
                icon: Zap,
                details: ["Trip Trace", "Bypass", "Generator", "Safety Check"],
                image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80" // Dark room/candle or circuit
            },
            {
                id: "ac",
                title: "AC Failure",
                subtitle: "Heat Relief",
                description: "AC died in July? We consider this an emergency. We carry portable ACs and fix compressors ASAP.",
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
            tools: "Rapid Response Kits designed for triage and containment.",
            list: ["Stop leak", "Isolate power", "Cool down", "Clean up", "Report"]
        }
    }
};
