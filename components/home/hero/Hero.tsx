'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCopy, FaCheck, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import features from './features-list';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/ui/feature-card';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npx create-bloggen-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 py-10 xl:py-20 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span
                className="max-w-fit font-normal text-sm md:text-base leading-normal text-primary-text px-1 whitespace-nowrap rounded border border-fg-line border-none bg-transparent font-mono tracking-widest uppercase mb-4 block"
              >
                Powered by Bloggen
              </span>
              <h1 className="font-bold text-4xl md:text-6xl leading-tight tracking-tight text-fg-text-contrast mb-6">
                All your SEO
                <span className="bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
                <br />
                  Already Done.
                </span>
              </h1>
              <h4 className="text-xl md:text-2xl leading-relaxed tracking-normal text-fg-text font-normal mb-8">
                Ready‑to‑deploy Next.js template with MDX blogs, Dynamic OG
                images, JSON‑LD, and top Lighthouse scores.
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    target="_blank"
                    href="https://github.com/silverthreadlabs/bloggen-seo-starter"
                    className="flex-1"
                  >
                    <Button
                      color="primary"
                      variant="solid"
                      size="lg"
                      aria-label="View source code on GitHub"
                      fullWidth
                      leadingIcon={<FaGithub className="w-5 h-5" />}
                      trailingIcon={
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      }
                    >
                      View Source
                    </Button>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.bloggen.dev/"
                    className="flex-1"
                  >
                    <Button
                      color="primary"
                      variant="surface"
                      size="lg"
                      aria-label="Generate my first blog post with Bloggen"
                      fullWidth
                    >
                      Create Your First Post
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between bg-bg-bg-subtle rounded px-4 py-3 font-mono text-sm border border-fg-line">
                  <span className="max-w-fit font-normal text-sm md:text-lg leading-normal tracking-normal text-fg-text-contrast px-1 inline-flex whitespace-nowrap">
                    $ npx create-bloggen-app
                  </span>
                  <Button
                    onClick={handleCopy}
                    aria-label="Copy command"
                    size="default"
                    color="neutral"
                    variant="ghost"
                    iconOnly
                    leadingIcon={
                      copied ? (
                        <FaCheck className="w-4 h-4 text-success-text" />
                      ) : (
                        <FaCopy className="w-4 h-4 text-fg-default" />
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
            className="flex-1 py-10 xl:py-20 flex items-center"
          >
            <div className="grid gap-6 w-full">
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
