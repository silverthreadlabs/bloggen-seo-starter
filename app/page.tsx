

import { Metadata } from 'next';

import Hero from '@/components/home/hero/Hero';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import HomeSchema from '@/lib/seo/schema/home';
import Performance from '@/components/home/perfomance/Perfomance';
import Faq from '@/components/home/faq/Faq';
import Cta from '@/components/home/cta/Cta';
import Features from '@/components/home/features/Features';

export const metadata: Metadata = createPageMetadata({
    path: ''
});

export default function Page() {
    return (
        <main className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <HomeSchema />
            <Hero />
            <Performance />
            <Features />
            <Faq />
            <Cta />
        </main>
    );
}
