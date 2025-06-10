import { Metadata } from 'next';

import Cta from '@/components/home/cta/Cta';
import DesignRift from '@/components/home/design-rift/index';
import Faq from '@/components/home/faq/Faq';
import Features from '@/components/home/features/Features';
import Hero from '@/components/home/hero/Hero';
import Performance from '@/components/home/perfomance/Perfomance';
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
            <Performance />
            <DesignRift />
            <Features />
            <Faq />
            <Cta />
        </main>
    );
}
