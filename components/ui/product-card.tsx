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
        cardBg: 'bg-gradient-to-br from-[#F28C38]/10 via-[#F4A261]/5 to-[#F7C948]/10 backdrop-blur-xl',
        border: 'border-[#F28C38]/30',
        text: 'text-warmGray-900',
        textSecondary: 'text-warmGray-700',
        accent: 'bg-gradient-to-r from-[#F28C38] to-[#F4A261] hover:from-[#E07B30] hover:to-[#E89B51]',
        accentSecondary: 'border-[#F28C38] text-[#F28C38] hover:bg-[#F28C38]/20',
        buttonSecondary: 'bg-[#F28C38]/20 hover:bg-[#F28C38]/30 text-[#F28C38] border-[#F28C38]/50',
        shadow: 'shadow-2xl shadow-[#F28C38]/20',
        indicator: 'bg-gradient-to-br from-[#F28C38] to-[#F4A261]',
        imageBg: 'bg-gradient-to-br from-[#F28C38]/20 via-[#F4A261]/15 to-[#F7C948]/20',
        priceColor: 'text-warmGray-900',
        discountBg: 'bg-gradient-to-r from-[#F28C38] to-[#F4A261]',
        sizeSelected: 'bg-gradient-to-r from-[#F28C38] to-[#F4A261] text-white',
        sizeUnselected: 'bg-[#F28C38]/20 hover:bg-[#F28C38]/30 text-[#F28C38] border-[#F28C38]/50'
    },
    supabase: {
        name: 'supabase',
        cardBg: 'bg-gradient-to-br from-[#3FCF8E]/10 via-[#2DBF7F]/5 to-[#1AAF70]/10 backdrop-blur-xl',
        border: 'border-[#3FCF8E]/30',
        text: 'text-gray-900',
        textSecondary: 'text-gray-700',
        accent: 'bg-gradient-to-r from-[#3FCF8E] to-[#2DBF7F] hover:from-[#36B57A] hover:to-[#27A66F]',
        accentSecondary: 'border-[#3FCF8E] text-[#3FCF8E] hover:bg-[#3FCF8E]/20',
        buttonSecondary: 'bg-[#3FCF8E]/20 hover:bg-[#3FCF8E]/30 text-[#3FCF8E] border-[#3FCF8E]/50',
        shadow: 'shadow-2xl shadow-[#3FCF8E]/20',
        indicator: 'bg-gradient-to-br from-[#3FCF8E] to-[#2DBF7F]',
        imageBg: 'bg-gradient-to-br from-[#3FCF8E]/20 via-[#2DBF7F]/15 to-[#1AAF70]/20',
        priceColor: 'text-gray-900',
        discountBg: 'bg-gradient-to-r from-[#3FCF8E] to-[#2DBF7F]',
        sizeSelected: 'bg-gradient-to-r from-[#3FCF8E] to-[#2DBF7F] text-white',
        sizeUnselected: 'bg-[#3FCF8E]/20 hover:bg-[#3FCF8E]/30 text-[#3FCF8E] border-[#3FCF8E]/50'
    },
    nextjs: {
        name: 'nextjs',
        cardBg: 'bg-gradient-to-br from-[#000000]/80 via-[#111111]/60 to-[#222222]/80 backdrop-blur-xl',
        border: 'border-[#FAFAFA]/20',
        text: 'text-white',
        textSecondary: 'text-gray-200',
        accent: 'bg-gradient-to-r from-[#000000] to-[#222222] hover:from-[#111111] hover:to-[#333333]',
        accentSecondary: 'border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#FAFAFA]/10',
        buttonSecondary: 'bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 text-[#FAFAFA] border-[#FAFAFA]/30',
        shadow: 'shadow-2xl shadow-[#000000]/40',
        indicator: 'bg-gradient-to-br from-[#000000] via-[#666666] to-[#FAFAFA]',
        imageBg: 'bg-gradient-to-br from-[#000000]/30 via-[#111111]/20 to-[#222222]/30',
        priceColor: 'text-white',
        discountBg: 'bg-gradient-to-r from-[#FAFAFA] to-[#D4D4D4] text-black',
        sizeSelected: 'bg-[#FAFAFA] text-black',
        sizeUnselected: 'bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 text-[#FAFAFA] border-[#FAFAFA]/30'
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
