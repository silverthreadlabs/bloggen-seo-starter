'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gauge, Terminal, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Link from "next/link";


interface FeatureCard {
  icon: React.ReactElement;
  title: string;
  description: string;
  codePath?: string;
  codeCommand?: string;
  descriptionEnd?: string;
}

const features: FeatureCard[] = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Plug‑in MDX",
    description: "Bloggen AI exports MDX posts that drop straight into the ",
    codePath: "/content",
    descriptionEnd: " folder - no edits, instant render."
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "SEO All Set",
    description: "Sitemap, robots.txt, JSON‑LD, dynamic OG images, and an RSS feed come pre‑wired; Bloggen's generators just fill the blanks."
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "One‑Command Launch",
    description: "Run ",
    codeCommand: "npx create-bloggen-app",
    descriptionEnd: ", push to Vercel, and the typed Next.js 15 template goes live—ready to absorb future Bloggen content."
  }
];

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npx create-bloggen-app');
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
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 py-10 xl:py-20 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-4 block">
                Powered by BlogGen
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                All your SEO
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"> Already Done.</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Ready‑to‑deploy Next.js template with MDX blogs, Dynamic OG images, JSON‑LD, and top Lighthouse scores.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                <Link  target='_blank' href="https://github.com/silverthreadlabs/bloggen-starter-template"
                    className="flex-1 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                
                >
                    Get the SEO Starter
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  <Link target='_blank' href="https://www.bloggen.dev/ " 
                    className="flex-1 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 text-center"
                  >
                    Generate My First Post
                  </Link>
                </div>

                <div className="flex items-center justify-between bg-black bg-opacity-50 rounded-lg px-4 py-3 font-mono text-sm border border-slate-700">
                  <span className="text-slate-200">$ npx create-bloggen-app</span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center justify-center w-8 h-8 rounded transition-all hover:bg-slate-800"
                    aria-label="Copy command"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-slate-400 hover:text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 py-10 xl:py-20 flex items-center"
          >
            <div className="grid gap-6 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {feature.description}
                          {feature.codePath && (
                            <code className="bg-slate-800 px-2 py-1 rounded-md font-mono text-sm text-slate-200">
                              {feature.codePath}
                            </code>
                          )}
                          {feature.codeCommand && (
                            <code className="bg-slate-800 px-2 py-1 rounded-md font-mono text-sm text-slate-200">
                              {feature.codeCommand}
                            </code>
                          )}
                          {feature.descriptionEnd}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
