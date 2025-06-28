import type { ReactNode } from 'react';

import '@/app/global.css';
import { productSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='product-page mx-auto max-w-7xl '>
            <DocsLayout
                tree={productSource.pageTree}
                sidebar={{ enabled: false }}
                searchToggle={{ enabled: false }}
                nav={{ enabled: false }}>
                {children}
            </DocsLayout>
        </div>
    );
}
