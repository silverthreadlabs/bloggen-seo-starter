import React from "react";
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { blogSource } from '@/lib/source';
import '@/app/global.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex-auto mx-auto max-w-7xl">
            <DocsLayout
                tree={blogSource.pageTree}
                sidebar={{ enabled: false }}
                searchToggle={{ enabled: false }}
                nav={{enabled: false}}
            >
                {children}
            </DocsLayout>
        </div>
    );
}
