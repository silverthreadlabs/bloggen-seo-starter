'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import HeroFeatureCard from '@/components/ui/hero-feature-card';

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
                            {/* <span className='text-primary-text border-canvas-line mb-4 block max-w-fit rounded border border-none bg-transparent px-1 font-mono text-sm leading-normal font-normal tracking-widest whitespace-nowrap uppercase md:text-base'>
                                Powered by Bloggen
                            </span> */}
                            <h1 className='text-canvas-text-contrast mb-6 text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                                Build stunning,
                                <span className='from-primary-solid via-primary-text to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent'>
                                    <br />
                                    Accessible Themes in few clicks
                                </span>
                            </h1>
                            <h2 className='text-canvas-text mb-8 text-xl leading-relaxed font-normal tracking-normal md:text-2xl'>
                                Design stunning interfaces using Radix colors, with built-in dark mode and accessibility.
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-4 sm:flex-row'>
                                    <Link
                                        href='/theme-editor'
                                        className=''>
                                        <Button
                                            color='primary'
                                            variant='solid'
                                            size='lg'
                                            aria-label='View source code on GitHub'
                                            name='View source code on GitHub'
                                            fullWidth
                                            // leadingIcon={<FaGithub className='h-5 w-5' />}
                                            trailingIcon={
                                                <FaArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                                            }>
                                            Get Started
                                        </Button>
                                    </Link>
                                
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
                                <HeroFeatureCard
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
