'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import { minimalCSS, modernCSS, subtleCSS } from '@/lib/utils/theme';

import { Button } from '../../ui/button';
import { ThemeToggle } from '../../ui/theme-toggle';
import { Heart } from 'lucide-react';

interface PlayGroundCardProps {
    className?: string;
}

const PlayGroundCard: React.FC<PlayGroundCardProps> = ({ className = '' }) => {
    const [currentTheme, setCurrentTheme] = useState<'minimal' | 'modern' | 'subtle'>('minimal');
    const [selectedSize, setSelectedSize] = useState<string>('256GB');
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const sizes = ['128GB', '256GB', '512GB', '1TB', '2TB'];

    // Get the current theme CSS and scope it to the component
    const getCurrentCSS = () => {
        let themeCSS = '';
        switch (currentTheme) {
            case 'minimal':
                themeCSS = minimalCSS;
                break;
            case 'modern':
                themeCSS = modernCSS;
                break;
            case 'subtle':
                themeCSS = subtleCSS;
                break;
            default:
                themeCSS = minimalCSS;
        }

        // Scope the CSS variables to our component
        return themeCSS
            .replace(/:root\s*{/g, '.product-card-themed {')
            .replace(/\.dark\s*{/g, '.product-card-themed.dark {');
    };

    const handleThemeChange = (themeKey: 'minimal' | 'modern' | 'subtle') => {
        if (themeKey === currentTheme) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentTheme(themeKey);
            setTimeout(() => setIsAnimating(false), 200);
        }, 150);
    };

    // Check if user prefers dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        checkDarkMode();

        // Watch for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Apply scoped CSS to the product card container */}
            <style>{getCurrentCSS()}</style>

            <div className={`mx-auto w-full ${className}`}>
                {/* Theme Switcher - Circular Indicators */}
                <div className='mb-12 product-card-themed flex items-center justify-between pt-8'>
                    <div className='flex items-center gap-6'>
                        <div className='text-center'>
                            <Button
                                onClick={() => handleThemeChange('minimal')}
                                variant='ghost'
                                color='neutral'
                                size='lg'
                                iconOnly
                                className={`relative transform overflow-hidden !rounded-full !p-0 !shadow-none transition-all duration-500 hover:scale-110 ${
                                    currentTheme === 'minimal' ? 'ring-4 ring-blue-400' : ''
                                }`}
                                leadingIcon={
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='absolute inset-0 bg-white'
                                            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
                                        />
                                        <div
                                            className='absolute inset-0 bg-black'
                                            style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}
                                        />
                                    </div>
                                }
                            />
                            <p className='text-canvas-text mt-3 text-sm font-medium capitalize'>minimal</p>
                        </div>

                        <div className='text-center'>
                            <Button
                                onClick={() => handleThemeChange('modern')}
                                variant='ghost'
                                color='neutral'
                                size='lg'
                                iconOnly
                                className={`relative transform overflow-hidden !rounded-full !p-0 !shadow-none transition-all duration-500 hover:scale-110 ${
                                    currentTheme === 'modern' ? 'ring-4 ring-blue-400' : ''
                                }`}
                                leadingIcon={
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='absolute inset-0 bg-[#f1f4f3]'
                                            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
                                        />
                                        <div
                                            className='absolute inset-0 bg-[#29a383]'
                                            style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}
                                        />
                                    </div>
                                }
                            />
                            <p className='text-canvas-text mt-3 text-sm font-medium capitalize'>modern</p>
                        </div>

                        <div className='text-center'>
                            <Button
                                onClick={() => handleThemeChange('subtle')}
                                variant='ghost'
                                color='neutral'
                                size='lg'
                                iconOnly
                                className={`relative transform overflow-hidden !rounded-full !p-0 !shadow-none transition-all duration-500 hover:scale-110 ${
                                    currentTheme === 'subtle' ? 'ring-4 ring-blue-400' : ''
                                }`}
                                leadingIcon={
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='absolute inset-0 bg-[#f5f2e9]'
                                            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
                                        />
                                        <div
                                            className='absolute inset-0 bg-[#ad7f58]'
                                            style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}
                                        />
                                    </div>
                                }
                            />
                            <p className='text-canvas-text mt-3 text-sm font-medium capitalize'>subtle</p>
                        </div>
                    </div>
                    <ThemeToggle />
                </div>

                {/* Product Card */}
                <div
                    className={`product-card-themed ${isDarkMode ? 'dark' : ''} relative transform overflow-hidden rounded-3xl border transition-all duration-700 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'} bg-canvas-bg border-canvas-border mx-auto`}>
                    <div className='flex flex-col justify-between gap-4 p-6'>
                        {/* Header with Heart */}
                        <div className='flex items-start justify-between'>
                            <div>
                                <h1 className='text-canvas-text-contrast mb-3 text-xl font-bold'>MacBook Pro 16"</h1>
                                <p className='text-canvas-text text-sm leading-relaxed'>
                                    Supercharged for pros. The most powerful MacBook Pro ever.
                                </p>
                            </div>

                            <Button
                                variant='surface'
                                color='neutral'
                                size='sm'
                                iconOnly
                                className='rounded-full transition-all duration-300'
                                leadingIcon={<Heart className='h-3 w-3' fill='none' stroke='currentColor' />}
                            />
                        </div>

                        {/* Price */}
                        <div className='flex items-center gap-4'>
                            <span className='text-canvas-text-contrast text-xl font-bold'>$2,399</span>
                            <span className='text-canvas-text text-xl line-through'>$2,799</span>
                        </div>

                        {/* Storage Selection */}
                        <div className='flex flex-wrap gap-3'>
                            {sizes.map((size) => (
                                <Button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    variant={selectedSize === size ? 'solid' : 'surface'}
                                    color={selectedSize === size ?  `${currentTheme === 'minimal' ? 'neutral' : 'primary'}` : 'neutral'}
                                    size='sm'
                                    className={`${currentTheme === 'minimal' ? 'rounded-md' : 'rounded-xl'}`}>
                                    {size}
                                </Button>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-4'>
                            
                            <Button 
                                variant='solid' 
                                color={currentTheme === 'minimal' ? 'neutral' : 'primary'} 
                                size='default' 
                                fullWidth 
                                className={`${currentTheme === 'minimal' ? 'rounded-md' : 'rounded-xl'}`}>
                                Buy Now
                            </Button>

                            <Button 
                                variant='outline' 
                                color={currentTheme === 'minimal' ? 'neutral' : 'primary'} 
                                size='default' 
                                fullWidth 
                                className={`${currentTheme === 'minimal' ? 'rounded-md' : 'rounded-xl'}`}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayGroundCard;
