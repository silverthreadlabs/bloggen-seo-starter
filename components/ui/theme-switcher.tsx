'use client';

import React, { memo, useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import * as RadioGroup from '@radix-ui/react-radio-group';

import { FaDesktop, FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Only render after hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid hydration mismatch and handle system theme
    useEffect(() => {
        if (!mounted) return;

        // Set system as default theme if none is set
        if (!theme) {
            setTheme('system');
        }

        // Debug system theme detection
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Listen for system theme changes
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (theme === 'system') {
                // Force a re-render when system theme changes
                setTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [theme, setTheme, mounted]);

    // Return skeleton during SSR and before hydration
    if (!mounted) {
        return (
            <div className='border-canvas-line w-fit space-x-0.5 rounded-full border p-1'>
                <div className='flex space-x-0.5'>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className='flex h-[42px] w-[42px] items-center justify-center rounded-full p-2'>
                            <div className='h-[18px] w-[18px] animate-pulse rounded bg-gray-300' />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!theme) {
        return null;
    }

    return (
        <RadioGroup.Root
            className='border-canvas-line w-fit space-x-0.5 rounded-full border p-1'
            value={theme}
            onValueChange={(value) => {
                setTheme(value);
            }}
            aria-label='Theme selection'>
            {[
                { value: 'light', icon: <FaSun size={18} />, title: 'Light theme' },
                { value: 'system', icon: <FaDesktop size={18} />, title: 'System theme' },
                { value: 'dark', icon: <FaMoon size={18} />, title: 'Dark theme' }
            ].map(({ value, icon, title }) => (
                <RadioGroup.Item
                    key={value}
                    className='text-canvas-solid group-hover:text-canvas-text-contrast data-[state=checked]:text-canvas-text-contrast hover:text-canvas-text-contrast data-[state=checked]:bg-canvas-bg-hover data-transition-colors rounded-full p-2 transition-colors duration-300 hover:cursor-pointer'
                    value={value}
                    title={title}
                    aria-label={title}>
                    {icon}
                </RadioGroup.Item>
            ))}
        </RadioGroup.Root>
    );
};

const ThemeSwitcherMemoized = memo(ThemeSwitcher);
export { ThemeSwitcherMemoized as ThemeSwitcher };
