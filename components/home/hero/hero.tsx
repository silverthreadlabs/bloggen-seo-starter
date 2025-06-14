'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/ui/feature-card';

import features from './features-list';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaCopy, FaGithub } from 'react-icons/fa';

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText('npx create-bloggen-app');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-0'>
            <div className='fixed inset-0 z-[-1]'>
                <div className='absolute inset-0' />
            </div>

            <div className='relative z-10'>
                <div className='mx-auto flex max-w-7xl flex-col lg:flex-row lg:gap-16'>
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className='flex flex-1 flex-col justify-center py-10 xl:py-16'>
                        <div className='max-w-xl'>
                            <span className='text-primary-text border-canvas-line mb-4 block max-w-fit rounded border border-none bg-transparent px-1 font-mono text-sm leading-normal font-normal tracking-widest whitespace-nowrap uppercase md:text-base'>
                                Powered by Bloggen
                            </span>
                            <h1 className='text-canvas-text-contrast mb-6 text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                                All your SEO
                                <span className='from-primary-solid via-primary-text to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent'>
                                    <br />
                                    Already Done.
                                </span>
                            </h1>
                            <h2 className='text-canvas-text mb-8 text-xl leading-relaxed font-normal tracking-normal md:text-2xl'>
                                Ready‑to‑deploy Next.js template with MDX blogs, Dynamic OG images, JSON‑LD, and top
                                Lighthouse scores.
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-4 sm:flex-row'>
                                    <Link
                                        target='_blank'
                                        href='https://github.com/silverthreadlabs/bloggen-seo-starter'
                                        className='flex-1'>
                                        <Button
                                            color='primary'
                                            variant='solid'
                                            size='lg'
                                            aria-label='View source code on GitHub'
                                            name='View source code on GitHub'
                                            fullWidth
                                            leadingIcon={<FaGithub className='h-5 w-5' />}
                                            trailingIcon={
                                                <FaArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                                            }>
                                            View Source
                                        </Button>
                                    </Link>
                                    <Link target='_blank' href='https://www.bloggen.dev/' className='flex-1'>
                                        <Button
                                            color='primary'
                                            variant='surface'
                                            size='lg'
                                            aria-label='Create Your First Post with Bloggen'
                                            name='Create Your First Post with Bloggen'
                                            fullWidth>
                                            Create Your First Post
                                        </Button>
                                    </Link>
                                </div>

                                <div className='bg-canvas-base border-canvas-bg-active flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-sm shadow-inner'>
                                    <span className='text-canvas-text-contrast inline-flex max-w-fit px-1 text-sm leading-normal font-normal tracking-normal whitespace-nowrap md:text-lg '>
                                        $ npx create-bloggen-app
                                    </span>
                                    <Button
                                        onClick={handleCopy}
                                        aria-label='Copy command'
                                        name='Copy command'
                                        size='default'
                                        color='neutral'
                                        variant='ghost'
                                        iconOnly
                                        leadingIcon={
                                            copied ? (
                                                <FaCheck className='text-success-text h-4 w-4' />
                                            ) : (
                                                <FaCopy className='text-canvas-default h-4 w-4' />
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section with Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className='flex flex-1 items-center py-10 xl:py-20'>
                        <div className='grid w-full gap-6'>
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    descriptionStart={feature.descriptionStart}
                                    code={feature.code}
                                    descriptionEnd={feature.descriptionEnd}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
