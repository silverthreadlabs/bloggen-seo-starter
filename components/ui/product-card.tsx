'use client';

import type React from 'react';
import { useState } from 'react';

import { Button } from './button';
import { ThemeToggle } from './theme-toggle';
import { Heart } from 'lucide-react';

// Enhanced theme definitions with actual color changes
const themes = {
    amber: {
        name: 'amber',
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
        sizeUnselected: 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-600 border-orange-400/50',
        gradient: 'bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500'
    },
    modern: {
        name: 'modern',
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
        sizeUnselected: 'bg-green-500/20 hover:bg-green-500/30 text-green-600 border-green-400/50',
        gradient: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    minimal: {
        name: 'minimal',
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
        sizeUnselected: 'bg-white/10 hover:bg-white/20 text-white border-white/30',
        gradient: 'bg-gradient-to-br from-yellow-400 via-blue-500 to-purple-600'
    }
};

type ThemeKey = keyof typeof themes;

interface ProductCardProps {
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ className = '' }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeKey>('amber');
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
            <div className='mb-12 flex items-center justify-between pt-8'>
                <div className='flex items-center gap-6'>
                    {Object.entries(themes).map(([key, themeData]) => (
                        <div key={key} className='text-center'>
                            <button
                                onClick={() => handleThemeChange(key as ThemeKey)}
                                className={`relative h-12 w-12 transform overflow-hidden rounded-full transition-all duration-500 hover:scale-110 hover:cursor-pointer ${
                                    currentTheme === key ? 'ring-4 ring-blue-400' : ''
                                }`}>
                                {/* Canvas color half (top-left) */}
                                <div
                                    className={`absolute inset-0 ${
                                        key === 'amber'
                                            ? 'bg-[#dad8d8]'
                                            : key === 'modern'
                                              ? 'bg-[#dad8d8]'
                                              : key === 'minimal'
                                                ? 'bg-white'
                                                : ''
                                    }`}
                                    style={{
                                        clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)'
                                    }}></div>

                                {/* Theme color half (bottom-right) */}
                                <div
                                    className={`absolute inset-0 ${
                                        key === 'amber'
                                            ? 'bg-amber-500'
                                            : key === 'modern'
                                              ? 'bg-emerald-500'
                                              : key === 'minimal'
                                                ? 'bg-black'
                                                : ''
                                    }`}
                                    style={{
                                        clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)'
                                    }}></div>

                                {/* Optional overlay for better visual effect */}
                                {/* <div className='absolute inset-0.5 rounded-full backdrop-blur-xs '></div> */}
                            </button>
                            <p className='mt-3 text-sm font-medium text-gray-400 capitalize'>{themeData.name}</p>
                        </div>
                    ))}
                </div>
                <ThemeToggle />
            </div>

            {/* Product Card */}
            <div
                className={`relative transform overflow-hidden rounded-3xl border transition-all duration-700 ${isAnimating ? 'scale-95 opacity-70 ' : ' scale-100 opacity-100'} ${theme.cardBg} ${theme.border} mx-auto`}>
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
                                className={`rounded-full p-2 hover:cursor-pointer ${theme.buttonSecondary} border transition-all duration-300`}>
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
                                        className={`rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300 hover:cursor-pointer ${selectedSize === size ? `${theme.sizeSelected}` : `${theme.sizeUnselected}`} `}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-4'>
                            <button
                                className={`flex-1 rounded-xl px-2 py-2 text-base font-bold hover:cursor-pointer ${theme.accent} transform text-white transition-all duration-300 hover:shadow-2xl`}>
                                Buy Now
                            </button>

                            <button
                                className={`flex-1 rounded-xl px-2 py-2 text-base font-bold hover:cursor-pointer ${theme.accentSecondary} transform border-2 transition-all duration-300 hover:shadow-xl`}>
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
