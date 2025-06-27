import Image from 'next/image';
import Link from 'next/link';

import { getBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils/mdx';

import { ArrowRight } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';

interface BlogPostsProps {
    isHomePage?: boolean;
}

export function BlogPosts({ isHomePage = false }: BlogPostsProps) {
    const allBlogs = getBlogPosts();
    const sortedBlogs = allBlogs.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }

        return 1;
    });

    const displayedBlogs = isHomePage ? sortedBlogs.slice(0, 3) : sortedBlogs;

    return (
        <div className='min-h-screen px-4 sm:px-6 md:px-8 lg:px-0'>
            <div className='fixed inset-0 z-[-1]'>
                <div className='absolute inset-0' />
            </div>

            <div className='relative z-10'>
                <div className='mx-auto py-10 sm:py-16'>
                    {/* Section Header */}
                    <div className='mb-16'>
                        <span className='text-primary-text mb-4 block text-sm leading-relaxed font-normal tracking-wider uppercase md:text-lg'>
                            Browse Template Blog Posts
                        </span>
                        <div className='flex flex-row items-center gap-2'>
                            <h1 className='text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                                <span className='text-canvas-text-contrast'>Latest</span>
                                <span className='from-primary-solid via-primary-text to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent'>
                                    {' '}
                                    Articles
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {displayedBlogs.map((post, index) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className='group block'>
                                <article className='bg-canvas-bg border-canvas-active hover:border-canvas-line rounded-lg border p-6 backdrop-blur-sm transition-all duration-300'>
                                    <div className='relative mb-6 aspect-video overflow-hidden rounded-sm'>
                                        <Image
                                            src={post.metadata.image || ''}
                                            alt={post.metadata.title}
                                            fill
                                            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                            loading={index < 3 ? 'eager' : 'lazy'}
                                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                            quality={index === 0 ? 85 : index < 3 ? 75 : 60}
                                            placeholder='blur'
                                            blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4='
                                            priority={index < 3}
                                            fetchPriority={index === 0 ? 'high' : index < 3 ? 'high' : 'low'}
                                        />
                                    </div>

                                    <div className='mb-4 flex items-center gap-4'>
                                        <div className='from-canvas-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover rounded-sm bg-gradient-to-br p-2'>
                                            <FaArrowRight className='text-primary-text h-4 w-4' />
                                        </div>
                                        <time className='text-canvas-text text-sm'>
                                            {formatDate(post.metadata.publishedAt)}
                                        </time>
                                    </div>

                                    <h2 className='text-canvas-text-contrast group-hover:text-primary-text mb-3 text-lg leading-relaxed font-semibold tracking-normal transition-colors duration-300 md:text-xl line-clamp-2'>
                                        {post.metadata.title}
                                    </h2>

                                    <div className='text-canvas-text group-hover:text-primary-text flex items-center text-sm transition-colors'>
                                        <span className='text-canvas-text border-canvas-line inline-flex max-w-fit rounded border border-none bg-transparent px-1 text-sm leading-normal font-normal tracking-normal whitespace-nowrap md:text-base'>
                                            Read article
                                        </span>
                                        <FaArrowRight className='ml-2 h-3 w-3 transition-transform group-hover:translate-x-1' />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* View All Link for Homepage */}
                    {isHomePage && (
                        <div className='mt-16 flex flex-col justify-center gap-4 sm:flex-row'>
                            <Link
                                href='/blog'
                                className='bg-primary-solid hover:bg-primary-solid-hover text-bg-default group flex items-center justify-center gap-2 rounded px-8 py-3 transition-all duration-300'>
                                View All Posts
                                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </Link>
                            <Link
                                href='/rss.xml'
                                className='bg-secondary-bg hover:bg-secondary-bg-hover text-canvas-text border-canvas-border hover:border-canvas-border-hover flex items-center justify-center gap-2 rounded border px-8 py-3 transition-all duration-300'>
                                Subscribe to RSS
                                <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M6.18 15.64a2.18 2.18 0 112.18 2.18 2.18 2.18 0 01-2.18-2.18zM6.18 8.91h4.36v2.18H6.18V8.91zm0-4.36h8.73v2.18H6.18V4.55z' />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
