

import { notFound } from 'next/navigation';

import { BlogPosts } from '@/components/blog/blog-post';
import BlogHeader from '@/components/blog/blog-header';
import { siteConfig } from '@/lib/config/site';
import { defaultMetadata } from '@/lib/seo/metadata/create-base-metadata';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import { blogSource, source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
    const params = await props.params;

    // // If this is the root /games path (empty slug)
    if (!params.slug || params.slug.length === 0) {
        return (
            <main role='main' className='min-h-screen'>
                <script
                    type='application/ld+json'
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Blog',
                            url: `${siteConfig.baseUrl}/blog`,
                            author: {
                                '@type': 'Person',
                                name: 'Silverthread Labs'
                            }
                        })
                    }}
                />

                <BlogPosts />
            </main>
        );
    }

    const page = blogSource.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <main role='main' className='relative min-h-screen'>
            <script
                type='application/ld+json'
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: page.data.title,
                        datePublished: page.data.publishedAt,
                        dateModified: page.data.publishedAt,
                        description: page.data.description,
                        image: page.data.image
                            ? `${siteConfig.baseUrl}${page.data.image}`
                            : `/og?title=${encodeURIComponent(page.data.title)}`,
                        url: `${siteConfig.baseUrl}/blog/${params.slug?.join('/') || ''}`,
                        author: {
                            '@type': 'Person',
                            name: 'Silverthread Labs'
                        }
                    })
                }}
            />
            <div className='flex max-w-7xl flex-col py-16 md:py-28'>
                <BlogHeader title={page.data.title} publishedAt={page.data.publishedAt} image={page.data.image} />
                <div className='flex flex-row'>
                    <DocsPage
                        tableOfContent={{ enabled: true }}
                        tableOfContentPopover={{ enabled: true }}
                        toc={page.data.toc}
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
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return blogSource.generateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
    const resolvedParams = await params;

    
    const currentPath ='blog';
    // If this is the root path
    if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
        return createPageMetadata({
            path: currentPath,
            description:
                'Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.',
            baseMetadata: defaultMetadata
        });
    }

    const page = blogSource.getPage(resolvedParams.slug);
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
