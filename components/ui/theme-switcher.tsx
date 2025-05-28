'use client'
import React, { useEffect, memo } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as RadioGroup from '@radix-ui/react-radio-group';

const ThemeSwitcher = () => {
    const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();

    // Debug logging
    // useEffect(() => {
    //     console.log('Theme State:', {
    //         currentTheme: theme,
    //         systemTheme,
    //         resolvedTheme,
    //     });
    // }, [theme, systemTheme, resolvedTheme]);

    // Avoid hydration mismatch and handle system theme
    useEffect(() => {
        // Set system as default theme if none is set
        if (!theme) {
            console.log('No theme set, defaulting to system');
            setTheme('system');
        }

        // Debug system theme detection
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        console.log('System prefers dark:', mediaQuery.matches);

        // Listen for system theme changes
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            console.log('System theme changed:', e.matches ? 'dark' : 'light');
            if (theme === 'system') {
                // Force a re-render when system theme changes
                setTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [theme, setTheme]);

    if (!theme) {
        return null;
    }

    return (
        <RadioGroup.Root
            className="w-fit border border-canvas-line rounded-full p-1 space-x-0.5"
            value={theme}
            onValueChange={(value) => {
                console.log('Theme changed to:', value);
                setTheme(value);
            }}
            aria-label="Theme selection"
        >
            {[
                { value: 'system', icon: <Monitor size={18} />, title: 'System theme' },
                { value: 'light', icon: <Sun size={18} />, title: 'Light theme' },
                { value: 'dark', icon: <Moon size={18} />, title: 'Dark theme' },
            ].map(({ value, icon, title }) => (
                <RadioGroup.Item
                    key={value}
                    className="p-2 rounded-full data-[state=checked]:bg-canvas-bg-hover data-transition-colors"
                    value={value}
                    title={title}
                    aria-label={title}
                >
                    <div className="text-canvas-text">
                        {icon}
                    </div>
                </RadioGroup.Item>
            ))}
        </RadioGroup.Root>
    );
};

const ThemeSwitcherMemoized = memo(ThemeSwitcher);
export { ThemeSwitcherMemoized as ThemeSwitcher };
