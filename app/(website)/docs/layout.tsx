
import type { ReactNode } from 'react';

import { source } from '@/lib/source';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';

// import '@/app/global.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className=''>
            <DocsLayout tree={source.pageTree} sidebar={{ enabled: true }} searchToggle={{ enabled: true }}>
                {children}
            </DocsLayout>
        </div>
    );
}
