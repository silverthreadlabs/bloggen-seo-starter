'use client'
import React, { memo, useMemo, useCallback } from 'react';
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from 'next-themes';
import radixColors from '../../public/radix-colors.json';

// Create a shared color cache similar to color-swatch.tsx
const colorCache = new Map<string, string>();

// Helper function to get color value with caching
const getColorValue = (color: string, resolvedTheme: string): string => {
  const cacheKey = `${color}-${resolvedTheme}`;

  if (colorCache.has(cacheKey)) {
    return colorCache.get(cacheKey) as string;
  }

  const colorKey = resolvedTheme === 'dark' ? `${color}Dark` : color;
  const colorData = radixColors[colorKey];
  const value = colorData && colorData['900'] ? colorData['900'].value : '#8f8f8f';

  colorCache.set(cacheKey, value);

  return value;
};

interface ColorOptionProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const ColorOption = memo(
  React.forwardRef<HTMLDivElement, ColorOptionProps>(
    ({ children, className, value, ...props }, forwardedRef) => {
      const { resolvedTheme } = useTheme();

      // Memoize the color calculation
      const backgroundColor = useMemo(() =>
        getColorValue(value, resolvedTheme || 'light'),
        [value, resolvedTheme]
      );

      return (
        <Select.Item
          className="flex items-center gap-2 px-6 py-2 text-sm text-canvas-text-contrast outline-none data-[highlighted]:bg-canvas-bg-hover data-[highlighted]:text-canvas-text-contrast cursor-pointer"
          {...props}
          value={value}
          ref={forwardedRef}
        >
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor }}
          />
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="absolute right-2">
            <Check size={16} />
          </Select.ItemIndicator>
        </Select.Item>
      );
    }
  )
);

ColorOption.displayName = 'ColorOption';

interface ColorSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  recommendedColors: readonly string[];
  allColors: readonly string[];
}

// Memoized SelectTrigger component
const SelectTrigger = memo(({ value, resolvedTheme }: { value: string; resolvedTheme: string | undefined }) => {
  const backgroundColor = useMemo(() =>
    value ? getColorValue(value, resolvedTheme || 'light') : undefined,
    [value, resolvedTheme]
  );

  return (
    <Select.Trigger
      className="flex items-center justify-between w-full px-3 py-2 bg-canvas-bg-hover border border-canvas-border hover:border-canvas-border-hover rounded text-sm gap-2
      transition-all duration-200 ease-out"
      aria-label="Select color"
    >
      <div className="flex items-center gap-2">
        {value && (
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor }}
          />
        )}
        <Select.Value placeholder="Select a color" />
      </div>
      <Select.Icon>
        <ChevronDown size={16} />
      </Select.Icon>
    </Select.Trigger>
  );
});

SelectTrigger.displayName = 'SelectTrigger';

// Main component
const ColorSelect = memo(({ value, onValueChange, recommendedColors, allColors }: ColorSelectProps) => {
  const { resolvedTheme } = useTheme();

  // Memoize the filtered colors to prevent recalculation
  const filteredColors = useMemo(() =>
    allColors.filter(color => !recommendedColors.includes(color)),
    [allColors, recommendedColors]
  );

  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <SelectTrigger value={value} resolvedTheme={resolvedTheme} />

      <Select.Portal>
        <Select.Content
          className="overflow-hidden bg-canvas-base border border-canvas-border rounded-md shadow-md z-50 w-[var(--radix-select-trigger-width)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          position="popper"
          sideOffset={5}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-canvas-base cursor-default">
            <ChevronUp size={16} />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1 max-h-[300px] overflow-y-auto">
            {recommendedColors.length > 0 && (
              <>
                <Select.Group>
                  <Select.Label className="px-6 py-1 text-xs text-canvas-text-contrast font-medium">
                    Recommended
                  </Select.Label>
                  {recommendedColors.map((color) => (
                    <ColorOption key={color} value={color}>
                      {color}
                    </ColorOption>
                  ))}
                </Select.Group>

                <Select.Separator className="h-px bg-canvas-line my-1" />
              </>
            )}

            <Select.Group>
              <Select.Label className="px-6 py-1 text-xs text-canvas-text-contrast font-medium">
                All Colors
              </Select.Label>
              {filteredColors.map((color) => (
                <ColorOption key={color} value={color}>
                  {color}
                </ColorOption>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-canvas-base cursor-default">
            <ChevronDown size={16} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
});

ColorSelect.displayName = 'ColorSelect';

export { ColorSelect }; 