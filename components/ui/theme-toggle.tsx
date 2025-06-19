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

    // Handle system theme detection - but don't override system choice
    useEffect(() => {
        if (!mounted) return;

        // Only set a theme if none is set, but don't override 'system'
        if (!theme) {
            setTheme('system');
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
        // Cycle through: light -> dark -> system -> light
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('system');
        } else {
            setTheme('light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer relative inline-flex h-8 w-14 items-center rounded-full  overflow-hidden"
            aria-label={`Switch theme (current: ${theme})`}
            title={`Switch theme (current: ${theme})`}
        >
            {/* Animated background */}
            <motion.div
                className={`absolute inset-0 rounded-full ${
                    theme === 'dark' ? 'bg-primary-solid' : 
                    theme === 'system' ? 'bg-gradient-to-r from-canvas-line to-primary-solid' :
                    'bg-canvas-line'
                }`}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            />
            
            {/* Single background icon */}
            <motion.div
                className={`absolute ${
                    theme === 'light' ? 'right-2' : theme === 'dark' ? 'left-2' : 'left-1/2 transform -translate-x-1/2'
                }`}
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
                {theme === 'light' ? (
                    <FaMoon size={14} className="text-canvas-text" />
                ) : theme === 'dark' ? (
                    <FaSun size={14} className="text-white" />
                ) : (
                    <div className="w-3 h-3 rounded-full border-2 border-white bg-transparent" />
                )}
            </motion.div>
            
            {/* Toggle circle with spring animation */}
            <motion.div
                className=" relative flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg z-10"
                animate={{
                    x: theme === 'light' ? 4 : theme === 'dark' ? 28 : 16
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