'use client';

import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Cta() {
    return (
        <section id='cta' className='w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 xl:py-16'>
            {/* CTA Section */}
            <div>
                <div className='from-canvas-bg via-canvas-bg-hover to-canvas-bg-subtle relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 shadow-xl sm:p-12 lg:p-16'>
                    {/* Floating Elements */}
                    <div className='bg-canvas-bg-hover absolute -top-4 -right-4 h-32 w-32 rounded-full blur-2xl'></div>
                    <div className='bg-canvas-bg-hover absolute -bottom-8 -left-8 h-40 w-40 rounded-full blur-3xl'></div>

                    {/* Content */}
                    <div className='relative z-10 mx-auto max-w-4xl text-center'>
                        <div className='mb-6'>
                            <span className='bg-canvas-bg-subtle text-canvas-text-contrast inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm'>
                                🎨 Discover the power of designrift
                            </span>
                        </div>

                        <h2 className='text-canvas-text-contrast mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                            Ready to Create Stunning, Accessible Themes?
                        </h2>

                        <p className='text-canvas-text mb-8 text-lg text-balance sm:text-xl lg:text-2xl'>
                            Join designers and developers building stunning, accessible sites with Radix color palettes, built-in dark mode, and infinite customization. Designrift makes theming effortless and scalable.
                        </p>

                        {/* CTA Section */}
                        <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
                            <Link href='/theme-editor' target='_blank' rel='noopener noreferrer'>
                                <Button
                                    color='primary'
                                    variant='solid'
                                    size='lg'
                                    className='group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25'>
                                    <span className='relative z-10'>Try designrift Now</span>
                                    <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full'></div>
                                </Button>
                            </Link>

                            <Link href='#docs' target='_blank' rel='noopener noreferrer'>
                                <Button
                                    color='primary'
                                    variant='ghost'
                                    size='lg'
                                    className='group'
                                    trailingIcon={
                                        <svg
                                            className='h-5 w-5 transition-transform group-hover:translate-x-1'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                                            />
                                        </svg>
                                    }>
                                    Read the Docs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
