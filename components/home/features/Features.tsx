'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface Feature {
    id: number;
    title: string;
    description: string;
    details: string;
}

const featuresData: Feature[] = [
    {
        id: 1,
        title: 'Plug‑in MDX',
        description: 'Instant Content Integration',
        details:
            'Bloggen AI exports MDX posts that drop straight into the /content folder - no edits needed. Your content renders instantly, making content management seamless and efficient.'
    },
    {
        id: 2,
        title: 'Designrift',
        description: 'Powerful Theme Creation',
        details:
            'Create stunning themes for your web application leveraging Radix color palettes for cohesive styling. Build beautiful, consistent user interfaces with our comprehensive theming system.'
    },
    {
        id: 3,
        title: 'SEO All Set',
        description: 'Complete SEO Infrastructure',
        details:
            'Launch with confidence knowing all SEO essentials are pre-configured. From sitemaps and robots.txt to JSON-LD and dynamic OG images, plus an RSS feed - everything is pre-wired.'
    },
    {
        id: 4,
        title: 'One‑Command Launch',
        description: 'Effortless Deployment',
        details:
            'Get started in seconds with a single command: npx create-bloggen-app. Push to Vercel and your typed Next.js 15 template goes live immediately.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    }
};

export default function Features() {
    const [activeFeature, setActiveFeature] = useState<number>(1);

    const handleFeatureHover = (featureId: number) => {
        setActiveFeature(featureId);
    };

    const currentFeature = featuresData.find((feature) => feature.id === activeFeature) || featuresData[0];

    return (
        <section className='py:10 w-full px-4 sm:px-6 lg:px-8 xl:py-16'>
            <div className='mx-auto mb-16 max-w-7xl'>
                {/* Header */}
                <motion.div
                    className='mb-16 text-center'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <h2 className='text-canvas-text-contrast mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Powerful Features
                    </h2>
                    <p className='text-canvas-text mx-auto max-w-2xl text-lg'>
                        Discover the tools and capabilities that make our platform the perfect solution for your needs.
                    </p>
                </motion.div>

                {/* Features Content */}
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                    {/* Feature List - Left Side */}
                    <motion.div
                        className='space-y-2'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-50px' }}>
                        {featuresData.map((feature) => {
                            const isActive = feature.id === activeFeature;

                            return (
                                <motion.div
                                    key={feature.id}
                                    variants={itemVariants}
                                    onMouseEnter={() => handleFeatureHover(feature.id)}
                                    className={`group cursor-pointer rounded-lg border-l-4 p-6 transition-all duration-300 ease-out ${
                                        isActive
                                            ? 'border-primary-solid bg-primary-bg text-primary-text-contrast'
                                            : 'border-canvas-line bg-canvas-bg hover:border-primary-border hover:bg-primary-bg-subtle'
                                    }`}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { type: 'spring', stiffness: 400, damping: 25 }
                                    }}
                                    whileTap={{ scale: 0.98 }}>
                                    <motion.h3
                                        className={`text-xl font-semibold tracking-wide uppercase transition-colors duration-300 ${
                                            isActive
                                                ? 'text-primary-text-contrast'
                                                : 'text-canvas-text-contrast group-hover:text-primary-text-contrast'
                                        }`}
                                        layout>
                                        {feature.title}
                                    </motion.h3>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Feature Description - Right Side */}
                    <div className='flex items-center'>
                        <div className='w-full'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentFeature.id}
                                    variants={{
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -20 }
                                    }}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className='border-canvas-active hover:border-canvas-line bg-canvas-bg rounded-2xl border p-8 shadow-lg transition-all duration-300 ease-out hover:shadow-lg'>
                                    {/* Feature Badge */}
                                    <motion.div
                                        className='mb-6'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}>
                                        <span className='bg-primary-bg text-primary-text-contrast inline-flex items-center rounded-full px-4 py-2 text-sm font-medium'>
                                            Feature Highlight
                                        </span>
                                    </motion.div>

                                    {/* Feature Title */}
                                    <motion.h3
                                        className='text-canvas-text-contrast mb-4 text-2xl font-bold sm:text-3xl'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}>
                                        {currentFeature.description}
                                    </motion.h3>

                                    {/* Feature Details */}
                                    <motion.p
                                        className='text-canvas-text mb-6 text-lg leading-relaxed'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}>
                                        {currentFeature.details}
                                    </motion.p>

                                    {/* Visual Indicator */}
                                    <motion.div
                                        className='flex items-center gap-3'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}>
                                        <motion.div
                                            className='bg-primary-solid h-2 w-2 rounded-full'
                                            animate={{
                                                opacity: [0.6, 1, 0.6]
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                            }}
                                        />
                                        <span className='text-canvas-text text-sm font-medium tracking-wide uppercase'>
                                            {currentFeature.title}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
