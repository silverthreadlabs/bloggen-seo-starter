'use client';

import type React from 'react';
import { useState } from 'react';

import { Button } from './button';
import { ThemeSwitcher } from './theme-switcher';
import { Heart } from 'lucide-react';

// Enhanced theme definitions with actual color changes
const themes = {
    claude: {
        name: 'claude',
        cardBg: 'bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10 backdrop-blur-xl',
        border: 'border-orange-300/30',
        text: 'text-canvas-text-contrast',
        textSecondary: 'text-canvas-text',
        accent: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
        accentSecondary: 'border-orange-400 text-orange-400 hover:bg-orange-500/20',
        buttonSecondary: 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-600 border-orange-400/50',
        shadow: 'shadow-2xl shadow-orange-500/20',
        indicator: 'bg-gradient-to-br from-orange-400 to-amber-500',
        imageBg: 'bg-gradient-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/20',
        priceColor: 'text-canvas-text',
        discountBg: 'bg-gradient-to-r from-orange-500 to-amber-500',
        sizeSelected: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
        sizeUnselected: 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-600 border-orange-400/50'
    },
    supabase: {
        name: 'supabase',
        cardBg: 'bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-xl',
        border: 'border-green-300/30',
        text: 'text-canvas-text-contrast',
        textSecondary: 'text-canvas-text',
        accent: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
        accentSecondary: 'border-green-400 text-green-400 hover:bg-green-500/20',
        buttonSecondary: 'bg-green-500/20 hover:bg-green-500/30 text-green-600 border-green-400/50',
        shadow: 'shadow-2xl shadow-green-500/20',
        indicator: 'bg-gradient-to-br from-green-400 to-emerald-500',
        imageBg: 'bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-teal-500/20',
        priceColor: 'text-canvas-text',
        discountBg: 'bg-gradient-to-r from-green-500 to-emerald-500',
        sizeSelected: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
        sizeUnselected: 'bg-green-500/20 hover:bg-green-500/30 text-green-600 border-green-400/50'
    },
    nextjs: {
        name: 'nextjs',
        cardBg: 'bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80 backdrop-blur-xl',
        border: 'border-gray-300/20',
        text: 'text-white',
        textSecondary: 'text-white',
        accent: 'bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-gray-700',
        accentSecondary: 'border-white text-white hover:bg-white/10',
        buttonSecondary: 'bg-white/10 hover:bg-white/20 text-white border-white/30',
        shadow: 'shadow-2xl shadow-black/40',
        indicator: 'bg-gradient-to-br from-black via-gray-600 to-white',
        imageBg: 'bg-gradient-to-br from-gray-900/30 via-black/20 to-gray-700/30',
        priceColor: 'text-white',
        discountBg: 'bg-gradient-to-r from-white to-gray-200 text-black',
        sizeSelected: 'bg-white text-black',
        sizeUnselected: 'bg-white/10 hover:bg-white/20 text-white border-white/30'
    }
};

type ThemeKey = keyof typeof themes;

interface ProductCardProps {
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ className = '' }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeKey>('claude');
    const [selectedSize, setSelectedSize] = useState<string>('256GB');
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const theme = themes[currentTheme];
    const sizes = ['128GB', '256GB', '512GB', '1TB', '2TB'];

    const handleThemeChange = (themeKey: ThemeKey) => {
        if (themeKey === currentTheme) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentTheme(themeKey);
            setTimeout(() => setIsAnimating(false), 200);
        }, 150);
    };

    return (
        <div className={`mx-auto w-full ${className}`}>
            {/* Theme Switcher - Circular Indicators */}
            <div className='mb-12 flex justify-between items-center pt-8'>
                <div className='flex gap-6 items-center'>
                    {Object.entries(themes).map(([key, themeData]) => (
                        <div key={key} className='text-center'>
                            <button
                                onClick={() => handleThemeChange(key as ThemeKey)}
                                className={`relative h-12 w-12 transform rounded-full transition-all duration-500 hover:cursor-pointer ${themeData.indicator} ${
                                    currentTheme === key
                                        ? 'shadow-2xl ring-4 ring-white/40'
                                        : 'hover:shadow-lg hover:ring-2 hover:ring-white/30'
                                } `}>
                                <div className='absolute inset-2 rounded-full bg-black/20 backdrop-blur-sm'></div>
                            </button>
                            <p className='mt-3 text-sm font-medium text-gray-400 capitalize'>{themeData.name}</p>
                        </div>
                    ))}
                </div>
                <ThemeSwitcher />
            </div>

            {/* Product Card */}
            <div
                className={`relative transform overflow-hidden rounded-3xl border transition-all duration-700 ${isAnimating ? 'scale-95 opacity-70 blur-sm' : 'blur-0 scale-100 opacity-100'} ${theme.cardBg} ${theme.border} mx-auto `}>
                {/* Horizontal Layout */}
                <div className=''>
                    {/* Left Side - Product Image */}
                   

                    {/* Right Side - Product Details */}
                    <div className='flex flex-col justify-between gap-4 p-6'>
                        {/* Header with Heart */}
                        <div className='flex items-start justify-between'>
                            <div>
                                <h1 className={`text-xl font-bold ${theme.text} mb-3`}>MacBook Pro 16"</h1>
                                <p className={`${theme.textSecondary} text-sm leading-relaxed`}>
                                    Supercharged for pros. The most powerful MacBook Pro ever.
                                </p>
                            </div>

                            <button
                                className={`rounded-full hover:cursor-pointer p-2 ${theme.buttonSecondary} border transition-all duration-300`}>
                                <Heart className='h-3 w-3' fill='none' stroke='currentColor' />
                            </button>
                        </div>

                        {/* Price */}
                        <div className='flex items-center gap-4'>
                            <span className={`text-xl font-bold ${theme.priceColor}`}>$2,399</span>
                            <span className={`text-xl line-through ${theme.textSecondary}`}>$2,799</span>
                        </div>

                        {/* Storage Selection */}
                        <div className=''>
                            <div className='flex flex-wrap gap-3'>
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`rounded-xl hover:cursor-pointer px-2 py-2 text-sm font-semibold transition-all duration-300 ${selectedSize === size ? `${theme.sizeSelected}` : `${theme.sizeUnselected}`} `}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-4'>
                            <button
                                className={`flex-1 hover:cursor-pointer rounded-xl px-2 py-2 text-base font-bold ${theme.accent} transform text-white transition-all duration-300 hover:shadow-2xl`}>
                                Buy Now
                            </button>

                            <button
                                className={`flex-1 hover:cursor-pointer rounded-xl px-2 py-2 text-base font-bold ${theme.accentSecondary} transform border-2 transition-all duration-300 hover:shadow-xl`}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
