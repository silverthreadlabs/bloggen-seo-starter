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

export default function TabsComponent({ tabs, defaultValue, className = '' }: TabsComponentProps) {
    return (
        <Tabs.Root defaultValue={defaultValue || tabs[0]?.value} className={`w-full ${className}`}>
            <Tabs.List className='bg-canvas-line mx-auto mb-12 flex w-full max-w-md rounded-md p-1 shadow-inner'>
                {tabs.map((tab) => (
                    <Tabs.Trigger
                        key={tab.value}
                        value={tab.value}
                        className='data-[state=active]:bg-canvas-base data-[state=active]:text-contrast data-[state=inactive]:text-canvas-text data-[state=inactive]:hover:text-canvas-text-contrast flex-1 cursor-pointer rounded-sm px-6 py-1.5 text-sm font-medium transition-all duration-200 data-[state=active]:shadow-sm'>
                        {tab.label}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>

            {tabs.map((tab) => (
                <Tabs.Content key={tab.value} value={tab.value} className='focus:outline-none'>
                    {tab.content}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
}
