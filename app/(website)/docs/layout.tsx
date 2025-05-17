import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
// import '@/app/global.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="">
            <DocsLayout
                tree={source.pageTree}
                {...baseOptions}
                sidebar={{ enabled: true }}
                searchToggle={{ enabled: true }}
            >
                {children}
            </DocsLayout>
        </div>
    );
}
