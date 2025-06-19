import { Metadata } from 'next';
import Link from 'next/link';

import FeaturesList from '@/components/about/feature-list';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import AboutSchema from '@/lib/seo/schema/about';

export const metadata: Metadata = createPageMetadata({
    path: 'about',
    description:
        'Launch a fully optimized Next.js site with Bloggen SEO Starter, then create high-quality, SEO-friendly content effortlessly using Bloggen AI.'
});

export default function AboutPage() {
    return (
        <main role='main' className='min-h-screen'>
            <AboutSchema />
            <div className='mx-auto max-w-[90%] py-10 sm:py-16 xl:max-w-[1280px]'>
                {/* Page Header */}
                <header role='banner' className='mx-auto mb-16 max-w-3xl text-center'>
                    <div className='mb-6 flex flex-wrap items-center justify-center gap-2 px-4'>
                        <div className='flex items-center gap-2'>
                            <p className='text-canvas-text text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                                Powered by
                            </p>
                            <Link
                                href='https://bloggen.dev'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary-solid hover:text-primary-solid-hover transition-colors'>
                                Bloggen
                            </Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-canvas-text text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                                Authored by
                            </p>
                            <Link
                                href='https://silverthreadlabs.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary-solid hover:text-primary-solid-hover transition-colors'>
                                Silverthread Labs
                            </Link>
                        </div>
                    </div>
                    <h1
                        id='about-page-title'
                        className='text-canvas-text-contrast mb-4 text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                        Next.js SEO Template
                    </h1>
                    <h2
                        id='about-page-subtitle'
                        className='text-canvas-text text-lg leading-relaxed font-semibold tracking-normal text-balance md:text-xl'>
                        Spin up a production-ready site with SEO, performance, and content workflows already solved.
                    </h2>
                </header>

                {/* Features */}
                <section aria-labelledby='features-title' className='mb-16'>
                    <FeaturesList />
                </section>
            </div>
        </main>
    );
}
