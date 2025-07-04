'use client'
import React, { useState, memo, useMemo, useCallback } from 'react';
import { useTheme } from 'next-themes';
import radixColors from '../../public/radix-colors.json';

interface ColorSwatchProps {
  colorName: string;
  isSelected: boolean;
  onClick: () => void;
  showTooltip?: boolean;
}

// Create a cached color lookup map to avoid recomputing colors
const colorCache = new Map<string, string>();

const ColorSwatch = memo(({ colorName, isSelected, onClick, showTooltip = true }: ColorSwatchProps) => {
  const [showTooltipState, setShowTooltipState] = useState(false);
  const { resolvedTheme } = useTheme();
  
  // Memoize the color calculation to prevent recalculation on every render
  const colorValue = useMemo(() => {
    const cacheKey = `${colorName}-${resolvedTheme}`;
    
    if (colorCache.has(cacheKey)) {
      return colorCache.get(cacheKey);
    }
    
    const colorKey = resolvedTheme === 'dark' ? `${colorName}Dark` : colorName;
    const colorData = radixColors[colorKey];
    const value = colorData && colorData['900'] ? colorData['900'].value : '#8f8f8f';
    
    colorCache.set(cacheKey, value);
    
    return value;
  }, [colorName, resolvedTheme]);
  
  // Memoize event handlers to prevent recreating functions on each render
  const handleMouseEnter = useCallback(() => {
    if (showTooltip) {
      setShowTooltipState(true);
    }
  }, [showTooltip]);
  
  const handleMouseLeave = useCallback(() => {
    setShowTooltipState(false);
  }, []);

  // Optimize the style by pre-computing it
  const swatchStyle = useMemo(() => ({
    backgroundColor: colorValue
  }), [colorValue]);
  
  const swatchClass = `w-7 h-7 rounded-full cursor-pointer border-2 transition-all duration-200 hover:scale-110 ${isSelected ? 'border-canvas-text-contrast shadow-lg' : 'border-transparent'}`;

  return (
    <div className="relative">
      <div
        className={swatchClass}
        style={swatchStyle}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showTooltip && showTooltipState && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
          {colorName}
        </div>
      )}
    </div>
  );
});

// Add display name for better debugging
ColorSwatch.displayName = 'ColorSwatch';

export { ColorSwatch }; 