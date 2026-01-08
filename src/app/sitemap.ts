import { MetadataRoute } from 'next'
import { DUBAI_AREAS } from '@/lib/constants'
import { blogPosts } from '@/data/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
    const services = ['ac', 'plumbing', 'electrical', 'cleaning', 'stoves', 'handyman', 'other', 'emergency'];
    const areas = DUBAI_AREAS.map(area => area.toLowerCase().replace(/ /g, "-"));

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
        {
            url: 'https://dakeek.ae/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        // Individual Services - High Priority
        ...services.map((slug) => ({
            url: `https://dakeek.ae/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        // All 37 Location Pages
        ...areas.map((slug) => ({
            url: `https://dakeek.ae/areas/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
        // Blog Posts
        ...blogPosts.map((post) => ({
            url: `https://dakeek.ae/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ]
}


