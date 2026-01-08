/**
 * Blog Post Data Structure (Phase 12)
 * Content marketing for SEO and user engagement
 */

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML
    author: string;
    date: string; // ISO date
    readTime: string;
    category: 'tips' | 'guides' | 'news' | 'case-study';
    tags: string[];
    image: string;
    featured: boolean;
    seoKeywords: string[];
}

export const BLOG_CATEGORIES = {
    tips: { label: 'Tips & Tricks', color: '#10B981' },
    guides: { label: 'How-To Guides', color: '#3B82F6' },
    news: { label: 'Company News', color: '#8B5CF6' },
    'case-study': { label: 'Case Studies', color: '#F59E0B' },
};

export const blogPosts: BlogPost[] = [
    {
        slug: 'when-to-service-your-ac',
        title: 'When Should You Service Your AC in Dubai? The Complete Guide',
        excerpt: 'Learn the signs that your AC needs maintenance and the best times of year to schedule service in Dubai.',
        content: `
# When Should You Service Your AC in Dubai?

Dubai's extreme climate puts significant stress on air conditioning units. Here's everything you need to know about optimal AC maintenance timing.

## Signs Your AC Needs Service

1. **Weak Airflow** - If you notice reduced air pressure from vents
2. **Warm Air** - When the AC blows room temperature or warm air
3. **Unusual Sounds** - Grinding, squealing, or rattling noises
4. **Bad Odors** - Musty or burning smells from vents
5. **High Electricity Bills** - Sudden spikes in DEWA bills

## Best Time to Service

**March-April**: Ideal time for pre-summer maintenance
**September-October**: Post-summer checkup to assess wear

## How Often?

- **Residential**: Every 3-4 months
- **Commercial**: Monthly
- **New Units**: Annual for first 2 years

## The Dakeek Recommendation

We recommend quarterly maintenance for Dubai homes. Our technicians can identify issues before they become expensive repairs.

[Book Your AC Service](/contact)
        `,
        author: 'Dakeek Team',
        date: '2024-03-15',
        readTime: '5 min read',
        category: 'guides',
        tags: ['AC', 'Maintenance', 'Dubai', 'Summer'],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80',
        featured: true,
        seoKeywords: ['AC service Dubai', 'when to service AC', 'AC maintenance timing']
    },
    {
        slug: 'emergency-plumbing-tips',
        title: '5 Things to Do Before the Plumber Arrives',
        excerpt: 'Quick actions that can save thousands in water damage while waiting for emergency plumbing service.',
        content: `
# 5 Things to Do Before the Plumber Arrives

A burst pipe or major leak can cause panic. Here's what to do in the first crucial minutes.

## 1. Shut Off the Water Main

Locate your main water valve (usually near the DEWA meter) and turn it clockwise to shut off water to your entire property.

## 2. Turn Off the Water Heater

Prevent potential damage to your water heater by switching it off at the electrical panel.

## 3. Drain the Pipes

Open faucets to drain remaining water from the pipes and reduce pressure.

## 4. Document the Damage

Take photos and videos for insurance purposes before any cleanup.

## 5. Protect Your Belongings

Move furniture and electronics away from the affected area.

## Call Dakeek 24/7

Our emergency plumbers arrive within 60 minutes, fully equipped to handle any situation.

[Emergency Contact](/contact)
        `,
        author: 'Dakeek Team',
        date: '2024-02-20',
        readTime: '3 min read',
        category: 'tips',
        tags: ['Plumbing', 'Emergency', 'Water Damage'],
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80',
        featured: true,
        seoKeywords: ['emergency plumber Dubai', 'plumbing emergency', 'water leak what to do']
    },
    {
        slug: 'smart-home-electrical-guide',
        title: 'Smart Home Setup: What Your Electrician Needs to Know',
        excerpt: 'Planning a smart home conversion? Here\'s the electrical work required for a seamless installation.',
        content: `
# Smart Home Setup: Electrical Considerations

Converting to a smart home involves more than just buying devices. Here's the electrical infrastructure you need.

## Essential Electrical Upgrades

### 1. Dedicated Circuits
Smart hubs, NAS devices, and always-on equipment need dedicated circuits to prevent overloads.

### 2. Neutral Wires
Many smart switches require neutral wires. Older Dubai apartments may need rewiring.

### 3. USB Outlets
Modern convenience requires USB-C outlets in key locations.

### 4. Ethernet Backbone
For the most reliable smart home, hardwired ethernet beats WiFi.

## Popular Smart Home Systems in Dubai

- **Google Home** - Works well with most devices
- **Apple HomeKit** - Premium integration for Apple users
- **Amazon Alexa** - Wide device compatibility

## Dakeek Smart Home Services

Our electricians are certified in smart home installation. We handle:
- Wiring assessment
- Circuit upgrades
- Device installation
- System configuration

[Get a Consultation](/contact)
        `,
        author: 'Dakeek Team',
        date: '2024-01-10',
        readTime: '6 min read',
        category: 'guides',
        tags: ['Electrical', 'Smart Home', 'IoT'],
        image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80',
        featured: false,
        seoKeywords: ['smart home electrician Dubai', 'home automation setup', 'smart switches installation']
    },
    {
        slug: 'water-tank-cleaning-importance',
        title: 'Why Water Tank Cleaning is Mandatory in Dubai (And How Often)',
        excerpt: 'Understanding Dubai Municipality requirements and health reasons for regular water tank maintenance.',
        content: `
# Water Tank Cleaning: A Dubai Necessity

In Dubai's climate, water tanks are breeding grounds for bacteria without proper maintenance.

## Dubai Municipality Requirements

- Cleaning required **every 6 months** for residential properties
- Commercial properties: **every 3 months**
- Failure to comply can result in fines

## Health Risks of Dirty Tanks

1. **Legionella bacteria** - Causes respiratory illness
2. **E. coli** - Gastrointestinal infections
3. **Algae growth** - Affects water taste and smell
4. **Sediment buildup** - Reduces water pressure

## The Cleaning Process

1. Drain the tank completely
2. Scrub interior walls
3. Apply approved sanitizing agents
4. Rinse thoroughly
5. Refill and test water quality

## Dakeek Certification

We provide official cleaning certificates accepted by Dubai Municipality for all property types.

[Book Tank Cleaning](/contact)
        `,
        author: 'Dakeek Team',
        date: '2023-12-05',
        readTime: '4 min read',
        category: 'guides',
        tags: ['Cleaning', 'Water Tank', 'Health', 'Municipality'],
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80',
        featured: true,
        seoKeywords: ['water tank cleaning Dubai', 'tank cleaning certificate', 'Dubai Municipality water tank']
    }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
    return blogPosts.filter(post => post.category === category);
}
