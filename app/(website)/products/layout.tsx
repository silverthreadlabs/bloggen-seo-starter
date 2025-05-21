import React from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { productSource } from '@/lib/source';
import '@/app/global.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex-auto mx-auto max-w-7xl product-page">
            <DocsLayout
                tree={productSource.pageTree}
                sidebar={{ enabled: false }}
                searchToggle={{ enabled: false }}
                nav={{enabled: false}}
            >
                {children}
            </DocsLayout>
        </div>
    );
}
