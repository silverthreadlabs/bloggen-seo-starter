'use client';

import React from 'react';

import { AhrfeIcon } from '../../../public/assets/seo-tools/ahref';
import { GtmetrixIcon } from '../../../public/assets/seo-tools/gtmetrix';
import { LighthouseIcon } from '../../../public/assets/seo-tools/lighthouse';
import { PageSpeedIcon } from '../../../public/assets/seo-tools/pagespeed';

export default function LogoCloud() {
    const logos = [
        {
            name: 'PageSpeed Insights',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <PageSpeedIcon width={225} />
                </div>
            )
        },
        {
            name: 'Lighthouse',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <LighthouseIcon width={200} />
                </div>
            )
        },
        {
            name: 'GTmetrix',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <GtmetrixIcon width={144} />
                </div>
            )
        },
        {
            name: 'Ahrefs',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <AhrfeIcon width={128} />
                </div>
            )
        }
    ];

    return (
        <div className='relative overflow-hidden px-6 py-10'>
            {/* Subtle background pattern */}
            <div className='absolute inset-0 opacity-[0.02]'>
                <div
                    className='h-full w-full'
                    style={{
                        backgroundImage: `
                             radial-gradient(circle at 1px 1px, rgb(var(--canvas-text-contrast)) 1px, transparent 0)
                         `,
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            {/* Gradient overlay for depth */}
            <div className='absolute inset-0' />

            <div className='relative z-10'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4'>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className={`border-canvas-border hover:bg-canvas-bg hover:border-canvas-border group relative -mt-px -ml-px flex h-48 items-center justify-center border backdrop-blur-sm transition-all duration-200 ease-out`}
                                style={{
                                    animationDelay: `${index * 150}ms`
                                }}>
                                {/* Subtle inner glow effect */}
                                <div className='from-canvas-bg/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-100 ease-out group-hover:opacity-100' />
                                {/* Content */}
                                <div className='relative z-10 px-6'>{logo.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
