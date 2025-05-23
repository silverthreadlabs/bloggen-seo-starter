

import { Metadata } from 'next';

import Hero from '@/components/home/hero/Hero';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import HomeSchema from '@/lib/seo/schema/home';

export const metadata: Metadata = createPageMetadata({
    path: ''
});

export default function Page() {
    return (
        <main className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <HomeSchema />
            <Hero />
        </main>
    );
}
