import type { Viewport } from 'next';
import { Manrope } from 'next/font/google';

import { ThemeProvider } from 'next-themes';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header/Header';
import { env } from '@/lib/utils/env';
import { GoogleAnalytics } from '@next/third-parties/google';

import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-manrope'
});
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
    // maximumScale: 1,
    // userScalable: false,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`${manrope.variable}`}>
            <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_MEASUREMENT_ID} />
            <body className='antialiased lg:mx-auto'>
                {/* <main className="flex-auto items-center bg-gradient-to-tr from-canvas-base from- via-canvas-hover via-min-w-0 flex flex-col md:px-0"> */}
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem={true}
                    storageKey='designrift-theme'
                    disableTransitionOnChange>
                    <main className='from-canvas-bg-subtle via-canvas-bg via-min-w-0 flex flex-auto flex-col items-center bg-gradient-to-tr md:px-0'>
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
