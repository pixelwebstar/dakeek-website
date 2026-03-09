import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()
    const host = request.headers.get('host') || ''

    // Explicitly permanently redirect www to non-www
    if (host.startsWith('www.')) {
        const nonWwwHost = host.replace(/^www\./, '')
        url.host = nonWwwHost
        url.port = '' // clear port to ensure it uses default for HTTPS in production

        // Create new URL with the new host
        const newUrl = new URL(request.url)
        newUrl.host = nonWwwHost

        return NextResponse.redirect(newUrl, 308)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Apply to all paths except api, _next/static, _next/image, and favicon.ico
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
