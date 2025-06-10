'use client';

import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/product-card';

import { motion } from 'framer-motion';

export default function Performance() {
    return (
        <section className='overflow-hidden px-4 sm:px-6 md:px-8 lg:px-0'>
            <div className='mx-auto max-w-7xl py-10 xl:py-16'>
                <div className='grid grid-cols-1 items-center lg:grid-cols-2'>
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='lg:pr-8'>
                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='text-canvas-text-contrast mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                            Design
                            <span className='from-primary-solid via-primary-text to-primary-text-contrast inline bg-gradient-to-r bg-clip-text text-transparent'>
                                rift
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className='text-canvas-text mb-8 max-w-lg text-lg leading-relaxed lg:text-xl'>
                            Build beautiful, accessible themes for your webapp using Radix color palettes. Create
                            stunning designs with consistent color systems.
                        </motion.p>

                        {/* Feature List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className='mb-8 space-y-4'>
                            {[
                                'Radix color palette integration',
                                'Accessible design tokens',
                                'Theme customization tools'
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className='flex items-center space-x-3'>
                                    <div className='from-primary-solid to-primary-text flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r'>
                                        <svg className='h-3 w-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                    <span className='text-canvas-text-contrast font-medium'>{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className='flex flex-wrap gap-4'>
                            <Link href='https://designrift.vercel.app/' target='_blank'>
                                <Button color='primary' variant='solid' size='lg' aria-label='Start Customizing Theme'>
                                    Start Customizing
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Graphics Side */}
                    <div className='flex items-center justify-center'>
                        {/* Interactive Card Side */}
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
