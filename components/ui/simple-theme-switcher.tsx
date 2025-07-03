'use client'
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as Tabs from '@radix-ui/react-tabs';

const SimpleThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component only renders after hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render until after hydration to prevent mismatch
  if (!mounted) {
    return (
      <div className="w-full">
        <div className="flex w-full rounded-lg border border-canvas-border overflow-hidden p-1">
          <div className="flex-1 flex items-center justify-center rounded-md gap-2 py-1 text-canvas-solid">
            <Sun size={16} />
            <span>Light</span>
          </div>
          <div className="flex-1 flex items-center justify-center rounded-md gap-2 py-1 text-canvas-solid">
            <Moon size={16} />
            <span>Dark</span>
          </div>
        </div>
      </div>
    );
  }
  
  const isDark = resolvedTheme === 'dark';
  const currentValue = isDark ? 'dark' : 'light';
  
  return (
    <Tabs.Root 
      value={currentValue} 
      onValueChange={setTheme}
      className="w-full"
    >
      <Tabs.List 
        className="flex w-full rounded-lg border border-canvas-border hover:border-canvas-border-hover overflow-hidden p-1 transition-all ease-out"
        aria-label="Theme selection"
      >
        <Tabs.Trigger
          value="light"
          className="flex-1 flex items-center justify-center rounded-md cursor-pointer data-[state=active]:shadow-sm gap-2 py-1 transition-colors data-[state=active]:bg-canvas-bg-active data-[state=active]:text-canvas-text-contrast data-[state=inactive]:text-canvas-solid data-[state=inactive]:hover:text-canvas-text"
        >
          <Sun size={16} />
          <span>Light</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="dark"
          className="flex-1 flex items-center justify-center rounded-md cursor-pointer data-[state=active]:shadow-sm gap-2 py-1 transition-colors data-[state=active]:bg-canvas-bg-active data-[state=active]:text-canvas-text-contrast data-[state=inactive]:text-canvas-solid data-[state=inactive]:hover:text-canvas-text"
        >
          <Moon size={16} />
          <span>Dark</span>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
};

export { SimpleThemeSwitcher };