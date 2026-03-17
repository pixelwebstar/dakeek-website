import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dakeek - Commercial & Residential Property Maintenance',
        short_name: 'Dakeek',
        description: 'Professional property maintenance in Dubai. Licensed commercial and residential AC repair, plumbing, electrical, and handyman services.',
        start_url: '/',
        id: '/',
        display: 'standalone',
        background_color: '#E5E7EB',
        theme_color: '#111111',
        orientation: 'portrait',
        icons: [
            {
                src: '/icons/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icons/icon-192-maskable.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icons/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icons/icon-512-maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icons/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            }
        ],
    }
}
