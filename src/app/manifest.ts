import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dakeek Residential Services and Maintenance',
        short_name: 'Dakeek',
        description: 'Dubai\'s Verified Residential Maintenance Experts. AC, Plumbing, Electrical.',
        start_url: '/',
        display: 'standalone',
        background_color: '#E5E7EB',
        theme_color: '#111111',
        icons: [
            {
                src: '/icons/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                // @ts-expect-error - Next.js types don't support "any maskable" yet, but it is valid spec
                purpose: 'any maskable',
            },
            {
                src: '/icons/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                // @ts-expect-error - Next.js types don't support "any maskable" yet, but it is valid spec
                purpose: 'any maskable',
            },
            {
                src: '/icons/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            }
        ],
    }
}
