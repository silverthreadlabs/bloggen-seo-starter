import { Suspense } from 'react';

import type { Viewport } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { env } from '@/lib/utils/env';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@/app/global.css';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-manrope',
    preload: true, // Add this
    fallback: ['system-ui', 'arial'] // Add fallback
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang='en' className={`${manrope.variable}`}>
            <Suspense fallback={null}>
                <GoogleAnalytics gaId={env?.GOOGLE_ANALYTICS_MEASUREMENT_ID || ''} />
            </Suspense>
            {/* Ahrefs Analytics */}
            <Script
                src='https://analytics.ahrefs.com/analytics.js'
                data-key={process.env?.AHREFS_ANALYTICS_KEY || ''}
                strategy='afterInteractive'
            />
            <body className='antialiased lg:mx-auto' suppressHydrationWarning>
                {/* <GlobalThemeProvider> */}
                <main className='from-canvas-bg to-canvas-bg-base flex flex-auto flex-col items-center bg-gradient-to-b md:px-0'>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='minimal'
                        enableSystem={true}
                        storageKey='theme'
                        disableTransitionOnChange
                        value={{
                            minimal: 'minimal',
                            'minimal-dark': 'minimal-dark',
                            modern: 'modern',
                            'modern-dark': 'modern-dark',
                            subtle: 'subtle',
                            'subtle-dark': 'subtle-dark',
                        }}
                    >
                        {children}
                    </ThemeProvider>
                </main>
                {/* </GlobalThemeProvider> */}
            </body>
        </html>
    );
}
