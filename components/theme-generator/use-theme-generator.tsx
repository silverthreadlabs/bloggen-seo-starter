

import { useState, useCallback, useMemo } from 'react';
import {
  getDefaultSelectedColors,
  updateSelectedColor,
  generateCSSVariables,
  generateTailwindV3Config,
  generateTailwindV4Complete,
  type SelectedColors,
  type ColorCategory,
  type RadixColors
} from '@/lib/theme-generator';

interface UseThemeGeneratorProps {
  radixColors: RadixColors;
}

export const useThemeGenerator = ({ radixColors }: UseThemeGeneratorProps) => {
  const [selectedColors, setSelectedColors] = useState<SelectedColors>(
    getDefaultSelectedColors()
  );

  const handleColorSelect = useCallback((category: ColorCategory, color: string) => {
    setSelectedColors((prev) => updateSelectedColor(prev, category, color));
  }, []);

  const cssVariables = useMemo(() => 
    generateCSSVariables(selectedColors, radixColors), 
    [selectedColors, radixColors]
  );

  const tailwindV3Config = useMemo(() => 
    generateTailwindV3Config(selectedColors), 
    [selectedColors]
  );

  const tailwindV4Complete = useMemo(() => 
    generateTailwindV4Complete(selectedColors, radixColors), 
    [selectedColors, radixColors]
  );

  const resetToDefaults = useCallback(() => {
    setSelectedColors(getDefaultSelectedColors());
  }, []);

  return {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete,
    resetToDefaults
  };
};