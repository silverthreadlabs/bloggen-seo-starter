'use client';

import React, { memo, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Only render after hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle system theme detection and set initial theme
    useEffect(() => {
        if (!mounted) return;

        // If no theme is set or system theme, determine the actual theme
        if (!theme || theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const systemPrefersDark = mediaQuery.matches;
            
            // Set theme based on system preference
            setTheme(systemPrefersDark ? 'dark' : 'light');
        }
    }, [theme, setTheme, mounted]);

    // Return skeleton during SSR and before hydration
    if (!mounted) {
        return (
            <div className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300">
                <div className="h-6 w-6 rounded-full bg-white shadow-lg ml-1" />
            </div>
        );
    }

    const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer relative inline-flex h-8 w-14 items-center rounded-full  overflow-hidden"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            {/* Animated background */}
            <motion.div
                className={`absolute inset-0 rounded-full ${
                    isDark ? 'bg-primary-solid' : 'bg-canvas-line'
                }`}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            />
            
            {/* Single background icon */}
            <motion.div
                className={`absolute ${isDark ? 'left-2' : 'right-2'}`}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                }}
            >
                {isDark ? (
                    <FaSun size={14} className="text-white" />
                ) : (
                    <FaMoon size={14} className="text-canvas-text" />
                )}
            </motion.div>
            
            {/* Toggle circle with spring animation */}
            <motion.div
                className=" relative flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg z-10"
                animate={{
                    x: isDark ? 28 : 4
                }}
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                }}
            />
        </button>
    );
};

const ThemeToggleMemoized = memo(ThemeToggle);
export { ThemeToggleMemoized as ThemeToggle };