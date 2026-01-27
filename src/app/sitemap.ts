import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogData'
import { serviceData } from '@/data/serviceData'

export default function sitemap(): MetadataRoute.Sitemap {
    const services = Object.keys(serviceData);

    return [
        {
            url: 'https://www.dakeek.ae',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.dakeek.ae/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.dakeek.ae/services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.dakeek.ae/queries',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.dakeek.ae/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.dakeek.ae/journal',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://www.dakeek.ae/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.dakeek.ae/discover',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Individual Services - High Priority
        ...services.map((slug) => ({
            url: `https://www.dakeek.ae/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),

        // Blog Posts
        ...blogPosts.map((post) => ({
            url: `https://www.dakeek.ae/journal/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ]
}


