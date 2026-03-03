import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private', '/admin', '/api/*', '/areas/*'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            }
        ],
        sitemap: 'https://dakeek.ae/sitemap.xml',
        host: 'https://dakeek.ae',
    }
}
