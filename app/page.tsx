import { Metadata } from 'next';

import Cta from '@/components/home/cta/cta';
import DesignRift from '@/components/home/designrift/designrift';
import Faq from '@/components/home/faq/faq';
import Features from '@/components/home/features/features';
import Hero from '@/components/home/hero/hero';
import Performance from '@/components/home/perfomance/performance';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import HomeSchema from '@/lib/seo/schema/home';
import FAQSchema from '@/lib/seo/schema/faq';

export const metadata: Metadata = createPageMetadata({
    path: ''
});

export default function Page() {
    return (
        <main className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <HomeSchema />
            <FAQSchema />
            <Hero />
            <Performance />
            <DesignRift />
            <Features />
            <Faq />
            <Cta />
        </main>
    );
}
