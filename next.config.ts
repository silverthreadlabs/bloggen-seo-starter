// import type { NextConfig } from 'next';

// import { createMDX } from 'fumadocs-mdx/next';

// const withMDX = createMDX();

// const config: NextConfig = {
//     reactStrictMode: true
// };

// export default withMDX(config);

import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const config: NextConfig = {
    reactStrictMode: true,
    
    // Security headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Content Security Policy
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.cal.com https://app.cal.com https://*.cal.com https://js.stripe.com https://checkout.stripe.com https://www.googletagmanager.com https://www.google-analytics.com",
                            "style-src 'self' 'unsafe-inline' https://embed.cal.com https://app.cal.com https://*.cal.com",
                            "img-src 'self' data: blob: https: http:",
                            "font-src 'self' data: https:",
                            "connect-src 'self' https://embed.cal.com https://app.cal.com https://*.cal.com https://api.stripe.com https://www.google-analytics.com https://stats.g.doubleclick.net wss:",
                            "frame-src 'self' https://embed.cal.com https://app.cal.com https://*.cal.com https://js.stripe.com https://checkout.stripe.com",
                            "frame-ancestors 'self'",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self' https://embed.cal.com https://app.cal.com",
                            "upgrade-insecure-requests",
                            "block-all-mixed-content"
                        ].join('; ')
                    },
                    
                    // Prevent clickjacking
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    
                    // Prevent MIME type sniffing
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    
                    // Enable XSS protection
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    
                    // Referrer policy
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    
                    // Permissions policy
                    {
                        key: 'Permissions-Policy',
                        value: [
                            'camera=(self)',
                            'microphone=(self)',
                            'geolocation=()',
                            'interest-cohort=()'
                        ].join(', ')
                    },
                    
                    // Force HTTPS
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload'
                    }
                ]
            }
        ];
    },
     
    // Server external packages
    serverExternalPackages: ['@calcom/embed-react'],
    
};

export default withMDX(config);