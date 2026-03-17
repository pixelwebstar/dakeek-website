import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Dakeek | Commercial & Residential Property Maintenance in Dubai'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    // Read the high-quality generated banner
    const logoData = readFileSync(join(process.cwd(), 'public/images/og-banner.png'))
    const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#09090b',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={logoBase64}
                    alt="Dakeek Logo"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
