'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LogoCloud from './logo-cloud';

export default function Performance() {
    return (
        <section className='px-4 sm:px-6 md:px-8 lg:px-0'>
            <div className='mx-auto max-w-7xl py-10 xl:py-16'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='text-center'>
                    <span className='text-primary-text border-canvas-line mb-4 inline-block rounded border bg-transparent px-3 py-1 font-mono text-sm font-normal tracking-widest uppercase'>
                        Performance Metrics
                    </span>
                    <h2 className='text-canvas-text-contrast mb-6 text-3xl font-bold tracking-tight md:text-5xl'>
                        Proven
                        <span className='from-primary-solid via-primary-text to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent'>
                            {' '}
                            Performance
                        </span>
                    </h2>
                    <p className='text-canvas-text mx-auto max-w-3xl text-xl leading-relaxed'>
                        Our template delivers exceptional scores across all major performance testing platforms,
                        ensuring your site loads fast and ranks high.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='text-center'>
                    <LogoCloud />
                </motion.div>
            </div>
        </section>
    );
}
