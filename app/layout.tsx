import { Suspense } from 'react';
import type { Viewport } from 'next';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import { RootProvider } from 'fumadocs-ui/provider';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header/Header';
import { env } from '@/lib/utils/env';
import './global.css';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-manrope',
    preload: true, // Add this
    fallback: ['system-ui', 'arial'] // Add fallback
});
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
    // maximumScale: 1,
    // userScalable: false,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html suppressHydrationWarning lang='en' className={`${manrope.variable}`} >
            <Suspense fallback={null}>
                <GoogleAnalytics gaId={env?.GOOGLE_ANALYTICS_MEASUREMENT_ID || ''} />
            </Suspense>
       {/* Ahrefs Analytics */}
                <Script
                    src="https://analytics.ahrefs.com/analytics.js"
                    data-key={process.env?.AHREFS_ANALYTICS_KEY || ''}
                    strategy="afterInteractive"
                />
            <body className='antialiased lg:mx-auto' suppressHydrationWarning>
                {/* <main className="flex-auto items-center bg-gradient-to-tr from-canvas-base from- via-canvas-hover via-min-w-0 flex flex-col md:px-0"> */}
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem={true}
                    storageKey='bloggen-seo-starter-theme'
                    disableTransitionOnChange>
                    <main className='from-canvas-bg to-canvas-bg-base flex flex-auto flex-col items-center bg-gradient-to-b md:px-0'>
                        <Header />
                        <RootProvider>{children}</RootProvider>
                        <Footer />
                    </main>
                </ThemeProvider>
                {/* <Script
          src="https://analytics.ahrefs.com/analytics.js"
          strategy="lazyOnload"
          data-key="sQQb4vR/PAMuQQuYe+LiXQ"
        /> */}
            </body>
        </html>
    );
}
