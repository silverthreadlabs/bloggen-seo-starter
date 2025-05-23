
import type { ReactNode } from 'react';

import '@/app/global.css';
import { blogSource } from '@/lib/source';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';

// import "fumadocs-ui/style.css";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='mx-auto max-w-7xl flex-auto'>
            <DocsLayout
                tree={blogSource.pageTree}
                sidebar={{ enabled: false }}
                searchToggle={{ enabled: false }}
                nav={{ enabled: false }}>
                {children}
            </DocsLayout>
        </div>
    );
}
