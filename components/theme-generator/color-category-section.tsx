import React from 'react';
import { ColorSelect } from '@/components/ui/color-select';
import { ColorSwatch } from '@/components/ui/color-swatch';

interface ColorCategorySectionProps {
  title: string;
  swatchColors: readonly string[];
  recommendedColors?: readonly string[];
  allColors?: readonly string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  showSelect?: boolean;
}

export const ColorCategorySection: React.FC<ColorCategorySectionProps> = ({
  title,
  swatchColors,
  recommendedColors = [] as readonly string[],
  allColors = [] as readonly string[],
  selectedColor,
  onColorSelect,
  showSelect = false
}) => {
  return (
    <div className="">
      <div className="space-y-3">
        <h3 className="text-canvas-text-contrast text-sm font-medium">{title}</h3>
        {swatchColors.length > 0 && (
          <div className="flex flex-wrap gap-3">
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
          <ColorSelect
            value={selectedColor}
            onValueChange={onColorSelect}
            recommendedColors={recommendedColors}
            allColors={allColors}
          />
        )}
      </div>
      
    </div>
  );
};