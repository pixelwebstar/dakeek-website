import { ImageResponse } from 'next/og'

// export const runtime = 'edge'

export const alt = 'DAKEEK | Precision Technical Services'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#09090b', // Zinc-950
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '4px solid #3f3f46',
                        borderRadius: '40px',
                        padding: '60px 100px',
                        background: 'linear-gradient(to bottom, #18181b, #09090b)',
                    }}
                >
                    {/* Logo Mark: Shield + Check */}
                    <svg
                        width="160"
                        height="160"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginBottom: '40px' }}
                    >
                        <path
                            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                            stroke="#9A7B4F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 12L10.5 15.5L17 9"
                            stroke="#9A7B4F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Brand Name */}
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: 'white',
                            letterSpacing: '-0.03em',
                            marginBottom: '10px',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        DAKEEK
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 32,
                            textTransform: 'uppercase',
                            letterSpacing: '0.4em',
                            color: '#9A7B4F', // Bronze
                            fontFamily: 'monospace',
                        }}
                    >
                        Guaranteed Quality
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
