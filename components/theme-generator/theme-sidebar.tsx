
import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { CodeDialog } from '@/components/ui/code-dialog';
import { ColorCategorySection } from './color-category-section';
import {
  allColors,
  canvasRecommendedColors,
  colorCategories,
  getPrimaryRecommendations,
  type SelectedColors,
  type ColorCategory
} from '@/lib/theme-generator';

import { useTheme } from 'next-themes';
import LogoDark from '../logo/logo-dark';
import LogoLight from '../logo/logo-light';

interface ThemeSidebarProps {
  selectedColors: SelectedColors;
  onColorSelect: (category: ColorCategory, color: string) => void;
  cssVariables: string;
  tailwindV3Config: string;
  tailwindV4Complete: string;
}

export const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
  selectedColors,
  onColorSelect,
  cssVariables,
  tailwindV3Config,
  tailwindV4Complete 
}) => {
  const primaryRecommendations = getPrimaryRecommendations(selectedColors.canvas);
  const { theme } = useTheme();
  return (
    <aside className="bg-canvas-bg border-canvas-border w-full border-r md:w-96 md:h-full flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-1">
          {theme==='dark' ? <LogoLight /> : <LogoDark />}
          <p className="text-canvas-text mb-4 text-sm">
          Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility. Set up once, customize infinitely.
          </p>
        </div>
        
        <AppearanceTabs>
          <div className="flex flex-col space-y-6">
            {/* Canvas Colors */}
            <ColorCategorySection
              title="Canvas"
              swatchColors={canvasRecommendedColors}
              recommendedColors={canvasRecommendedColors}
              allColors={allColors}
              selectedColor={selectedColors.canvas}
              onColorSelect={(color) => onColorSelect('canvas', color)}
              showSelect={true}
            />
            {/* Primary Colors */}
            <ColorCategorySection
              title="Primary"
              swatchColors={primaryRecommendations}
              recommendedColors={primaryRecommendations}
              allColors={allColors}
              selectedColor={selectedColors.primary}
              onColorSelect={(color) => onColorSelect('primary', color)}
              showSelect={true}
            />
            {/* Secondary Colors */}
            <ColorCategorySection
              title="Secondary"
              swatchColors={[]}
              recommendedColors={[]}
              allColors={allColors}
              selectedColor={selectedColors.secondary}
              onColorSelect={(color) => onColorSelect('secondary', color)}
              showSelect={true}
            />
            {/* Destructive Color */}
            <ColorCategorySection
              title="Destructive"
              swatchColors={colorCategories.alert}
              selectedColor={selectedColors.alert}
              onColorSelect={(color) => onColorSelect('alert', color)}
            />
            {/* Success Colors */}
            <ColorCategorySection
              title="Success"
              swatchColors={colorCategories.success}
              selectedColor={selectedColors.success}
              onColorSelect={(color) => onColorSelect('success', color)}
            />
            {/* Warning Colors */}
            <ColorCategorySection
              title="Warning"
              swatchColors={colorCategories.warning}
              selectedColor={selectedColors.warning}
              onColorSelect={(color) => onColorSelect('warning', color)}
            />
            {/* Info Colors */}
            <ColorCategorySection
              title="Info"
              swatchColors={colorCategories.info}
              selectedColor={selectedColors.info}
              onColorSelect={(color) => onColorSelect('info', color)}
            />
          </div>
        </AppearanceTabs>
      </div>

      {/* Sticky footer section */}
      <div className="bg-canvas-bg border-canvas-border sticky bottom-0 border-t p-4 space-y-3">
        <div className="border-canvas-border pt-2">
          <CodeDialog 
            cssCode={cssVariables} 
            tailwindV3Config={tailwindV3Config} 
            tailwindV4Complete={tailwindV4Complete} 
          />
        </div>
        
        <div className="border-canvas-border flex items-center justify-between border-t pt-4">
          <p className="text-fg-text text-sm">
            Built by
            <Link
              href="https://syed-saif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-solid hover:text-primary-text ml-1 underline transition-colors"
            >
              Syed Saif
            </Link>
          </p>
          
          <Link
            href="https://github.com/syedsaif666/designrift"
            target="_blank"
            rel="noopener noreferrer"
            className="text-canvas-solid hover:text-primary-solid transition-colors"
            title="View on GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </aside>
  );
};