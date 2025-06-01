'use client';

import React from 'react';
import { AhrfeIcon } from '../../ui/seo-tools/ahref';
import { LighthouseIcon } from '../../ui/seo-tools/lighthouse';
import { PageSpeedIcon } from '../../ui/seo-tools/pagespeed';
import { GtmetrixIcon } from '../../ui/seo-tools/gtmetrix';

export default function LogoCloud() {
    const logos = [
        {
            name: 'PageSpeed Insights',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <PageSpeedIcon width={225} />
                    {/* <div className='text-canvas-text text-center text-sm font-medium tracking-wide hover:cursor-default'>
                        PageSpeed Insights
                    </div> */}
                </div>
            )
        },
        {
            name: 'Lighthouse',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <LighthouseIcon width={200} />
                    {/* <div className='text-canvas-text text-center text-sm font-medium tracking-wide hover:cursor-default'>Lighthouse</div> */}
                </div>
            )
        },
        {
            name: 'GTmetrix',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <GtmetrixIcon width={144} />
                    {/* <div className='text-canvas-text text-center text-sm font-medium tracking-wide hover:cursor-default'>GTmetrix</div> */}
                </div>
            )
        },
        {
            name: 'Ahrefs',
            content: (
                <div className='group flex flex-col items-center gap-4'>
                    <AhrfeIcon width={128} />
                    {/* <div className='text-canvas-text text-center text-sm font-medium tracking-wide hover:cursor-default'>Ahrefs</div> */}
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
                                className={`bg-canvas-bg-subtle/50 border-t border-b border-l ${index === 0 ? 'border-l' : ''} ${index === logos.length - 1 ? 'border-r' : ''} border-canvas-border/50 hover:bg-canvas-bg-subtle hover:border-canvas-border group relative flex h-48 items-center justify-center backdrop-blur-sm transition-all duration-500`}
                                style={{
                                    animationDelay: `${index * 150}ms`
                                }}>
                                {/* Subtle inner glow effect */}
                                <div className='from-canvas-bg/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                                {/* Content */}
                                <div className='relative z-10 px-6'>{logo.content}</div>


                                {/* Bottom highlight line */}
                                {/* <div className='via-primary-solid absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-gradient-to-r from-transparent to-transparent transition-all duration-500 group-hover:w-3/4' /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
