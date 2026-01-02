import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dakeek | Precision Home Services',
        short_name: 'Dakeek',
        description: 'The Science of Maintenance. Precision AC, Plumbing, and Electrical services.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FAFAF9',
        theme_color: '#111111',
        icons: [
            {
                src: '/icon-192',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-icon',
                sizes: '180x180',
                type: 'image/png',
            }
        ],
    }
}
