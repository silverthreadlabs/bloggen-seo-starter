import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ProductPosts } from '@/components/products/prodcut-posts';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config/site';
import { defaultMetadata } from '@/lib/seo/metadata/create-base-metadata';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import ProductsSchema from '@/lib/seo/schema/products';
import ProductPostSchema from '@/lib/seo/schema/products-posting';
import { productSource, source } from '@/lib/source';
import { getURL } from '@/lib/utils/url';
import { getMDXComponents } from '@/mdx-components';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
    const params = await props.params;

    // // If this is the root /products path (empty slug)
    if (!params.slug || params.slug.length === 0) {
        return (
            <main role='main' className='min-h-screen'>
                <ProductsSchema />
                <ProductPosts />
            </main>
        );
    }

    const page = productSource.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <main role='main' className='min-h-screen px-4 sm:px-6 md:px-8 lg:px-0'>
            <ProductPostSchema
                title={page.data.title}
                description={page.data.description}
                summary={page.data.summary}
                publishedAt={page.data.publishedAt}
                lastUpdated={page.data.lastUpdated}
                image={page.data.image}
                ogImage={page.data.ogImage}
                slug={page.slugs}
                author={page.data.author}
                tags={page.data.tags}
                category={page.data.category}
                version={page.data.version}
                link={page.data.link}
            />

            <div className='fixed inset-0 z-[-1]'>
                <div className='absolute inset-0' />
            </div>

            <div className='relative z-10'>
                <div className='mx-auto min-h-screen max-w-7xl'>
                    {/* Header Section */}
                    <div className='py-20'>
                        <span className='base border-canvas-line text-primary-text mb-4 block max-w-fit rounded border border-none bg-transparent px-1 text-sm leading-normal font-normal tracking-wider whitespace-nowrap uppercase'>
                            {page.data.category || 'Product Details'}
                        </span>

                        <div className='grid items-start gap-12 lg:grid-cols-2'>
                            <div>
                                <h1 className='text-canvas-text-contrast from-primary-solid via-primary-text to-primary-text-contrast mb-6 bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                                    {page.data.title}
                                </h1>
                                <p className='text-canvas-text mb-8 text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                                    {page.data.summary}
                                </p>

                                {/* Action Button */}
                                {page.data.link && (
                                    <Link href={page.data.link} target='_blank' className=''>
                                        <Button
                                            color='primary'
                                            variant='solid'
                                            size='lg'
                                            aria-label={`Try ${page.data.title}`}
                                            name={`Try ${page.data.title}`}
                                            trailingIcon={
                                                <ArrowUpRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                            }>
                                            {`Try ${page.data.title}`}
                                        </Button>
                                    </Link>
                                )}
                            </div>

                            <div className='grid gap-4'>
                                {[
                                    { label: 'Version', value: page.data.version },
                                    { label: 'Last Updated', value: page.data.lastUpdated }
                                ].map(
                                    (item, index) =>
                                        item.value && (
                                            <div
                                                key={index}
                                                className='bg-canvas-bg border-canvas-border hover:border-canvas-border-hover rounded-lg border p-6 backdrop-blur-sm transition-all duration-300'>
                                                <div className='text-canvas-text mb-1 text-sm'>{item.label}</div>
                                                <div className='text-canvas-text-contrast text-lg font-semibold'>
                                                    {item.value}
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='grid gap-8 pb-20 lg:grid-cols-3 lg:gap-16'>
                        {/* Main Content */}
                        <div className='lg:col-span-2'>
                            <DocsPage
                                tableOfContent={{ enabled: false }}
                                tableOfContentPopover={{ enabled: false }}
                                full={false}>
                                <DocsBody>
                                    <MDXContent
                                        components={getMDXComponents({
                                            // this allows you to link to other pages with relative file paths
                                            a: createRelativeLink(source, page)
                                        })}
                                    />
                                </DocsBody>
                            </DocsPage>
                        </div>

                        {/* Sidebar */}
                        <div className='lg:col-span-1'>
                            <div className='sticky top-24 space-y-6'>
                                <div className='bg-canvas-bg border-canvas-border hover:border-canvas-border-hover rounded-lg border p-6 backdrop-blur-sm transition-all duration-300'>
                                    <h5 className='text-canvas-text-contrast mb-4 text-lg leading-relaxed font-semibold tracking-normal md:text-xl'>
                                        Quick Links
                                    </h5>
                                    <nav className='space-y-2'>
                                        <a
                                            href='#features'
                                            className='text-canvas-text hover:text-primary-text flex items-center transition-colors'>
                                            <p className='text-canvas-text bg-primary-solid mr-2 h-1.5 w-1.5 rounded-full text-base leading-relaxed font-normal tracking-normal md:text-lg'></p>
                                            Features
                                        </a>
                                        <a
                                            href='#installation'
                                            className='text-canvas-text hover:text-primary-text flex items-center transition-colors'>
                                            <p className='text-canvas-text bg-primary-solid mr-2 h-1.5 w-1.5 rounded-full text-base leading-relaxed font-normal tracking-normal md:text-lg'></p>
                                            Installation
                                        </a>
                                        <a
                                            href='#usage'
                                            className='text-canvas-text hover:text-primary-text flex items-center transition-colors'>
                                            <p className='text-canvas-text bg-primary-solid mr-2 h-1.5 w-1.5 rounded-full text-base leading-relaxed font-normal tracking-normal md:text-lg'></p>
                                            Usage
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Back Link */}
            <div className='mx-auto max-w-7xl py-12'>
                <Link
                    href='/products'
                    className='text-canvas-text hover:text-primary-text inline-flex items-center transition-colors'>
                    <ArrowLeft className='mr-2 h-4 w-4' />
                    Back to Products
                </Link>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return productSource.generateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
    const resolvedParams = await params;

    // Get the current directory path from the file structure
    // This dynamically determines we're in the products section
    const currentPath = 'products';

    // If this is the root path
    if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
        return createPageMetadata({
            path: currentPath,
            description: 'Explore our AI-powered tools and experimental ideas turned into real-world apps.',
            baseMetadata: defaultMetadata
        });
    }

    const page = productSource.getPage(resolvedParams.slug);
    if (!page) notFound();

    const ogImage = page.data.image
        ? `${siteConfig.baseUrl}${page.data.image}`
        : `${siteConfig.baseUrl}/og?title=${encodeURIComponent(page.data.title)}`;

    const baseMeta = createPageMetadata({
        path: `${currentPath}/${resolvedParams.slug}`,
        description: page.data.description,
        baseMetadata: defaultMetadata
    });

    return {
        ...baseMeta,
        openGraph: {
            ...baseMeta.openGraph,
            type: 'article',
            publishedTime: page.data.publishedAt,
            url: `${siteConfig.baseUrl}/${currentPath}/${resolvedParams.slug?.join('/') || ''}`,
            images: [
                {
                    url: ogImage,
                    alt: page.data.title
                }
            ]
        },
        twitter: {
            ...baseMeta.twitter,
            images: [
                {
                    url: ogImage,
                    alt: page.data.title
                }
            ]
        }
    };
}
