'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { minimalCSS, modernCSS, subtleCSS } from '@/lib/utils/theme';
import { useThemeGenerator } from '@/components/theme-generator/use-theme-generator';
import radixColors from '@/public/radix-colors.json';
import { RadixColors } from '@/lib/theme-generator/types';

type ThemeKey = 'minimal' | 'modern' | 'subtle' | string;

interface GlobalThemeContextProps {
    currentTheme: ThemeKey;
    setCurrentTheme: (theme: ThemeKey) => void;
    getCurrentTheme: () => ThemeKey;
}

export const GlobalThemeContext = createContext<GlobalThemeContextProps>({
    currentTheme: 'minimal',
    setCurrentTheme: () => { },
    getCurrentTheme: () => 'minimal',
});

export const GlobalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeKey>('minimal');
    const [isInitialized, setIsInitialized] = useState(false);
    const {cssVariables } = useThemeGenerator({radixColors: radixColors as RadixColors})

    // console.log('tailwindV3Config', tailwindV3Config);
    // console.log('tailwindV4Complete', tailwindV4Complete);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('global-theme');
        if (savedTheme && ['minimal', 'modern', 'subtle'].includes(savedTheme)) {
            setCurrentTheme(savedTheme as ThemeKey);
        }
        setIsInitialized(true);
    }, []);

    // Save theme to localStorage when it changes
    const handleSetCurrentTheme = (theme: ThemeKey) => {
        setCurrentTheme(theme);
        localStorage.setItem('global-theme', theme);
    };

    // Get current theme (for sidebar)
    const getCurrentTheme = () => currentTheme;

    useEffect(() => {
        // if (!isInitialized) return;

        console.log('currentTheme', currentTheme);
        let css = '';
        switch (currentTheme) {
            case 'minimal':
                css = minimalCSS;
                break;
            case 'modern':
                css = modernCSS;
                break;
            case 'subtle':
                css = subtleCSS;
                break;
            case 'custom':
                css = cssVariables;
                break;
            default:
                css = minimalCSS;
        }
        // console.log('css', css);
        // Remove any previous injected theme style
        const styleId = 'global-theme-style';
        let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            document.head.appendChild(styleTag);
        }
        styleTag.innerHTML = css;
    }, [currentTheme, cssVariables]);

    return (
        <GlobalThemeContext.Provider value={{ currentTheme, setCurrentTheme: handleSetCurrentTheme, getCurrentTheme }}>
            {children}
        </GlobalThemeContext.Provider>
    );
}; 