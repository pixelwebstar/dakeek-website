import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private', '/admin', '/api/*'],
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
        sitemap: 'https://www.dakeek.ae/sitemap.xml',
        host: 'https://www.dakeek.ae',
    }
}
