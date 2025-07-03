'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/ui/feature-card';
import { featuresData } from '@/lib/utils/features';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id='features' className="py-10 w-full px-4 sm:px-6 lg:px-8 xl:py-16">
      <div className="mx-auto mb-16 max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-canvas-text-contrast mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Powerful Features
          </h2>
          <p className="text-canvas-text mx-auto max-w-2xl text-lg text-balance">
            Discover the tools and capabilities that make our platform the perfect solution for your needs.
          </p>
        </motion.div>

        {/* Features as Cards */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              details={feature.details}
              isActive={activeFeature === feature.id}
              onHover={() => setActiveFeature(feature.id)}
              onLeave={() => setActiveFeature(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 