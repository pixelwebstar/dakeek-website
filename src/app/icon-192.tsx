import { ImageResponse } from 'next/og'

export const size = {
    width: 192,
    height: 192,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#09090b', // Zinc-950
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // No border for app icon to maximize logo size, or thin one
                        background: 'linear-gradient(to bottom, #18181b, #09090b)',
                    }}
                >
                    <svg
                        width="110"
                        height="110"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
