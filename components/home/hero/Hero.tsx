"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCopy, FaCheck, FaGithub } from "react-icons/fa";
import Link from "next/link";
import FeatureCard from "./FeatureCard";
import features from "./features-list";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx create-bloggen-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(2,6,23,0.8))]" />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen max-w-[1216px] mx-auto flex flex-col lg:flex-row lg:gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 py-10 xl:py-20 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="text-blue-500 text-sm font-mono tracking-widest uppercase mb-4 block">
                Powered by Bloggen
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                All your SEO
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                  {" "}
                  Already Done.
                </span>
              </h1>
              <h2 className="text-slate-200 text-2xl mb-8 leading-relaxed">
                Ready‑to‑deploy Next.js template with MDX blogs, Dynamic OG
                images, JSON‑LD, and top Lighthouse scores.
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    target="_blank"
                    href="https://github.com/silverthreadlabs/bloggen-seo-starter"
                    className="flex-1 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform flex items-center justify-center gap-2 group"
                    aria-label="View source code on GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Source
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    target="_blank"
                    href="https://www.bloggen.dev/"
                    className="flex-1 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 text-center"
                    aria-label="Generate my first blog post with Bloggen"
                  >
                    Generate My First Post
                  </Link>
                </div>

                <div className="flex items-center justify-between bg-black bg-opacity-50 rounded-lg px-4 py-3 font-mono text-sm border border-slate-700">
                  <span className="text-slate-200">
                    $ npx create-bloggen-app
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center cursor-pointer justify-center w-8 h-8 rounded transition-all hover:bg-slate-800"
                    aria-label="Copy command"
                  >
                    {copied ? (
                      <FaCheck className="w-4 h-4 text-green-400" />
                    ) : (
                      <FaCopy className="w-4 h-4 text-slate-400 hover:text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section with Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
