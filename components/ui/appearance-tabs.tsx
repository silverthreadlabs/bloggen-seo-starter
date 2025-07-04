'use client'
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { SimpleThemeSwitcher } from './simple-theme-switcher';

interface AppearanceTabsProps {
  children: React.ReactNode;
}

const AppearanceTabs = ({ children }: AppearanceTabsProps) => {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-canvas-text-contrast">Appearance</h3>
        <SimpleThemeSwitcher />
      </div>
      
      {children}
    </div>
  );
};

export { AppearanceTabs }; 