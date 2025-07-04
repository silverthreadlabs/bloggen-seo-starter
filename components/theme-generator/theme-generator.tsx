
'use client';

import React from 'react';
import { DashboardPreview } from '@/components/ui/dashboard-preview';
import { ThemeSidebar } from './theme-sidebar';
import { useThemeGenerator } from './use-theme-generator';
import type { RadixColors } from '@/lib/theme-generator';

interface ThemeGeneratorProps {
  radixColors: RadixColors;
}

export const ThemeGenerator: React.FC<ThemeGeneratorProps> = ({ radixColors }) => {
  const {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete
  } = useThemeGenerator({ radixColors });

  return (
    <div className="min-h-screen w-full">
      {/* Apply generated CSS variables */}
      <style>{cssVariables}</style>
      
      <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
        {/* Left Sidebar - Color Selection Panel */}
        <ThemeSidebar
          selectedColors={selectedColors}
          onColorSelect={handleColorSelect}
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