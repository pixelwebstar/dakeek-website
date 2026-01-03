import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://dakeek.ae',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://dakeek.ae/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://dakeek.ae/services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://dakeek.ae/queries',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://dakeek.ae/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        // Individual Services - High Priority
        ...[
            'ac', 'plumbing', 'electrical', 'cleaning',
            'stoves', 'handyman', 'emergency'
        ].map((slug) => ({
            url: `https://dakeek.ae/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        // Location Pages
        ...[
            "palm-jumeirah", "dubai-marina", "jumeirah-lake-towers", "jlt", "downtown-dubai",
            "business-bay", "arabian-ranches", "emirates-hills", "jumeirah-islands", "the-meadows",
            "the-springs", "jumeirah-park", "al-barsha", "umm-suqeim", "jumeirah", "mudon",
            "damac-hills", "dubai-hills-estate", "meydan", "difc", "sheikh-zayed-road",
            "greens", "views", "victory-heights", "sports-city", "motor-city", "sustainable-city"
        ].map((slug) => ({
            url: `https://dakeek.ae/areas/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
    ]
}
