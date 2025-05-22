import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/utils/mdx';

import { ArrowLeft } from 'lucide-react';

interface Props {
    title: string;
    publishedAt?: string;
    image?: string;
}

export default function BlogHeader({ title, publishedAt, image }: Props) {
    return (
        <header className='relative mx-auto max-w-6xl px-8'>
            {/* Header Section */}
            <div className='mb-20'>
                <div className='mb-8 flex items-center space-x-3'>
                    {/* <Link 
            href="/blog" 
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-bg-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover border border-fg-border hover:border-fg-border-hover transition-all duration-300 group"
          > 
            <ArrowLeft className="w-4 h-4 text-primary-text group-hover:-translate-x-1 transition-transform" />
            <span 
              className="max-w-fit font-normal text-sm md:text-base leading-normal tracking-normal text-fg-text bg-bg-bg px-1 inline-flex whitespace-nowrap rounded border border-fg-line border-none bg-transparent text-primary-text font-medium tracking-wider uppercase text-sm group-hover:text-primary-text-contrast transition-colors"
            >
              Back to Blog
            </span>
          </Link> */}
                    <Link
                        href='/blog'
                        className='text-fg-text hover:text-primary-text inline-flex items-center transition-colors'>
                        <ArrowLeft className='mr-2 h-4 w-4' />
                        Back to Blogs
                    </Link>
                </div>
                <h1 className='from-primary-solid via-primary-text to-primary-text-contrast mb-8 bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                    {title}
                </h1>
                {publishedAt && <time className='text-fg-text text-lg'>{formatDate(publishedAt)}</time>}
            </div>

            {/* Featured Image */}
            {image && (
                <div className='border-fg-border relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-sm border shadow-2xl'>
                    <Image src={image} alt={title} fill className='object-cover' priority />
                </div>
            )}
        </header>
    );
}
