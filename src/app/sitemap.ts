import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogData'
import { serviceData } from '@/data/serviceData'

export default function sitemap(): MetadataRoute.Sitemap {
    const services = Object.keys(serviceData);
    const baseUrl = 'https://www.dakeek.ae';

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/contact',
        '/careers',
        '/queries',
        '/privacy-policy',
        '/journal',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Service Routes
    const serviceRoutes = services.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
    }));

    // Dynamic Blog Post Routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/journal/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
