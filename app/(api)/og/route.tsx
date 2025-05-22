

import { ImageResponse } from '@vercel/og';

export function GET(request: Request) {
    const url = new URL(request.url);
    const title = url.searchParams.get('title') || 'Bloggen SEO Starter';

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    // Updated background: Using dark blue gradient inspired by the reference
                    background: 'linear-gradient(135deg, #020617, #111827)' // Approx. rgb(2,6,23) to rgb(17,24,39)
                }}>
                {/* Subtle thread line - Updated to use blue accent */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '1px',
                        // Updated gradient: Using a subtle blue from the reference theme
                        background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)', // blue-500 at 20% opacity
                        top: '50%'
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: '48px 32px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 10
                    }}>
                    <h1
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '84px',
                            fontWeight: 700,
                            textAlign: 'center',
                            // Kept color as white, matching the primary text color in the reference
                            color: 'white',
                            letterSpacing: '-2px',
                            margin: 0,
                            padding: 0
                        }}>
                        {title}
                    </h1>
                </div>

                {/* Optional: Bottom accent line - Updated to use blue accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        width: '200px',
                        height: '2px',
                        // Updated gradient: Using a slightly stronger subtle blue
                        background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)' // blue-500 at 30% opacity
                    }}
                />
            </div>
        ),
        {
            width: 1200,
            height: 630
        }
    );
}
