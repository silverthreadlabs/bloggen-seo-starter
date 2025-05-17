import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { gamesSource, source } from '@/lib/source';
import '@/app/global.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex-auto max-w-7xl">
            <DocsLayout
                tree={gamesSource.pageTree}
                sidebar={{ enabled: false }}
                searchToggle={{ enabled: false }}
                nav={{enabled: false}}
            >
                {children}
            </DocsLayout>
        </div>
    );
}
