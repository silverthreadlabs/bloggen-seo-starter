'use client'
import React from 'react';
import { ColorSwatch } from './color-swatch';
import { ColorSelect } from './color-select';

interface ColorCategorySectionProps {
  title: string;
  swatchColors: string[];
  recommendedColors?: string[];
  allColors?: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  showSelect?: boolean;
}

const ColorCategorySection = ({ 
  title, 
  swatchColors, 
  recommendedColors = [], 
  allColors = [], 
  selectedColor, 
  onColorSelect,
  showSelect = false
}: ColorCategorySectionProps) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold tracking-wider text-canvas-text-contrast">
        {title}
      </h4>
      
      {swatchColors.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-3">
          {swatchColors.map((color) => (
            <ColorSwatch
              key={color}
              colorName={color}
              isSelected={selectedColor === color}
              onClick={() => onColorSelect(color)}
            />
          ))}
        </div>
      )}
      
      {showSelect && (
        <div className="w-full">
          <ColorSelect
            value={selectedColor}
            onValueChange={onColorSelect}
            recommendedColors={recommendedColors}
            allColors={allColors}
          />
        </div>
      )}
    </div>
  );
};

export { ColorCategorySection }; 