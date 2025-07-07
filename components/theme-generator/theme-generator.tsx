'use client';

import React, { useContext, useEffect, useState, useRef } from 'react';
import { DashboardPreview } from '@/components/ui/dashboard-preview';
import { ThemeSidebar, themeColorMap } from './theme-sidebar';
import { useThemeGenerator } from './use-theme-generator';
import type { RadixColors } from '@/lib/theme-generator';
import { GlobalThemeContext } from '@/lib/theme-generator/global-theme-context';
import type { ColorCategory } from '@/lib/theme-generator/types';

interface ThemeGeneratorProps {
  radixColors: RadixColors;
}

export const ThemeGenerator: React.FC<ThemeGeneratorProps> = ({ radixColors }) => {
  const {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete,
    setSelectedColors
  } = useThemeGenerator({ radixColors });

  const { currentTheme, setCurrentTheme } = useContext(GlobalThemeContext);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const prevTheme = useRef(currentTheme);

  // Sync sidebar color fields with theme
  useEffect(() => {
    if (themeColorMap[currentTheme]) {
      setSelectedColors({ ...selectedColors, ...themeColorMap[currentTheme] });
      setIsCustomizing(false);
    }
    prevTheme.current = currentTheme;
  }, [currentTheme]);

  // When cssVariables change, update the global theme CSS only if customizing
  useEffect(() => {
    if (!isCustomizing) return;
    const styleId = 'global-theme-style';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = cssVariables;
  }, [cssVariables, isCustomizing]);

  // Set customizing mode when colors are changed
  const handleColorSelectWithCustomizing = (category: ColorCategory, color: string) => {
    setIsCustomizing(true);
    setCurrentTheme('custom');
    handleColorSelect(category, color);
  };

  return (
    <div className="min-h-screen w-full">
      {/* Apply generated CSS variables */}
      {/* <style>{cssVariables}</style> */}
      <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
        {/* Left Sidebar - Color Selection Panel */}
        <ThemeSidebar
          selectedColors={selectedColors}
          onColorSelect={handleColorSelectWithCustomizing}
          cssVariables={cssVariables}
          tailwindV3Config={tailwindV3Config}
          tailwindV4Complete={tailwindV4Complete}
        />

        {/* Right Side - Dashboard Preview */}
        <div className="flex-1 min-h-screen md:h-full md:overflow-hidden">
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
};