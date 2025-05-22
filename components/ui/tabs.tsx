import { ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsComponentProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
}

export default function TabsComponent({ 
  tabs, 
  defaultValue, 
  className = '' 
}: TabsComponentProps) {
  return (
    <Tabs.Root defaultValue={defaultValue || tabs[0]?.value} className={`w-full ${className}`}>
      <Tabs.List className="flex w-full max-w-md mx-auto mb-12 bg-fg-line rounded-md p-1  shadow-inner">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="flex-1 px-6 py-1.5 text-sm font-medium rounded-sm transition-all duration-200 
                     data-[state=active]:bg-bg-base data-[state=active]:text-contrast data-[state=active]:shadow-sm
                     data-[state=inactive]:text-fg-text data-[state=inactive]:hover:text-fg-text-contrast 
                    cursor-pointer"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Content 
          key={tab.value} 
          value={tab.value} 
          className="focus:outline-none"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}