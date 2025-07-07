import { Suspense } from 'react';

import type { Viewport } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { env } from '@/lib/utils/env';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { GlobalThemeProvider } from '@/lib/theme-generator/global-theme-context';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-manrope',
    preload: true, // Add this
    fallback: ['system-ui', 'arial'] // Add fallback
});

export default function ThemeEditorLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem={true}
            storageKey=''
            disableTransitionOnChange
        >
            <GlobalThemeProvider>
                {children}
            </GlobalThemeProvider>
        </ThemeProvider>
    );
}
