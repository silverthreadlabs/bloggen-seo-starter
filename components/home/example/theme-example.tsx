'use client';
import React, { useContext } from 'react';
import { GlobalThemeContext } from '@/lib/theme-generator/global-theme-context';

const themes = [
  {
    key: 'minimal',
    label: 'Minimal',
    swatches: ['#e5e7eb', '#a3a3a3', '#18181b'], // light gray, medium gray, dark gray
    bg: 'bg-[#000000]',
    text: 'text-gray-100',
  },
  {
    key: 'modern',
    label: 'Modern',
    swatches: ['#38bdf8', '#22d3ee', '#0ea5e9'], // blue/cyan
    bg: 'bg-[#29a383]',
    text: 'text-blue-100',
  },
  {
    key: 'subtle',
    label: 'Subtle',
    swatches: ['#fef9c3', '#fde68a', '#fbbf24'], // soft yellow/gold
    bg: 'bg-[#ad7f58]',
    text: 'text-yellow-900',
  },
];

export const ThemeExample = () => {
  const { currentTheme, setCurrentTheme } = useContext(GlobalThemeContext);

  return (
    <section id='theme-example' className="w-full py-16 px-4 md:px-0 max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-canvas-text-contrast mb-3">Theme Gallery</h2>
        <p className="text-canvas-text text-lg max-w-2xl mx-auto">
          Instantly preview and apply beautiful color themes to your site. Click a theme to see it live across the whole website.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <button
            key={theme.key}
            type="button"
            onClick={() => setCurrentTheme(theme.key)}
            className={`flex items-center gap-4 px-6 py-5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-solid font-semibold text-lg ${
              currentTheme === theme.key
                ? 'ring-2 ring-primary-solid shadow-lg'
                : 'hover:ring-2 hover:ring-primary-solid/50 shadow'
            } ${theme.bg}`}
            style={{ minHeight: 64 }}
          >
            <div className="flex gap-1">
              {theme.swatches.map((color, idx) => (
                <span
                  key={color + idx}
                  className="w-5 h-5 rounded-sm border border-black/10"
                  style={{ background: color }}
                />
              ))}
            </div>
            <span className={`ml-4 text-base md:text-lg font-semibold tracking-tight ${theme.text}`}>
              {theme.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ThemeExample; 