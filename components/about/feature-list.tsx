'use client'

import React, { useState } from 'react';
// import { Search, Palette, Grid3X3, FileText, Code, BarChart3, ExternalLink, ChevronRight } from 'lucide-react';
import { LiaMarkdown } from "react-icons/lia";
import { TbLetterD } from 'react-icons/tb'
import { FaRegStar, FaRss, FaChartLine, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

interface FeatureData {
    icon: React.ReactElement;
    title: string;
    descriptionStart: string;
    code?: string;
    descriptionEnd?: string;
    link?: string;
    color: string;
    gradient: string;
}

const FEATURES: FeatureData[] = [
    {
        icon: <FaSearch className='h-6 w-6' />,
        title: 'SEO On by Default',
        descriptionStart: 'Built-in metadata, OG Images, sitemap & much more to ensure your site is optimized from day one.',
        color: 'from-blue-500 to-cyan-500',
        gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
        icon: <TbLetterD className='h-6 w-6' />,
        title: 'Designrift',
        descriptionStart: 'Create stunning themes for your web application with ',
        descriptionEnd: ' leveraging Radix color palettes for cohesive styling.',
        link: 'https://designrift.vercel.app',
        color: 'from-purple-500 to-pink-500',
        gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
        icon: <LiaMarkdown className='h-6 w-6' />,
        title: 'MDX-Powered Blog',
        descriptionStart: 'Simply drop your MDX blog files into ',
        code: '/content',
        descriptionEnd: ' to publish SEO-friendly, responsive posts instantly.',
        color: 'from-emerald-500 to-teal-500',
        gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    },
    {
        icon: <FaRegStar className='h-6 w-6' />,
        title: 'Rich Results Ready',
        descriptionStart: 'Auto-generated JSON-LD structured data powers rich snippets for improved Google visibility.',
        color: 'from-orange-500 to-red-500',
        gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
        icon: <FaRss className='h-6 w-6' />,
        title: 'Instant RSS Feed',
        descriptionStart: 'Automatically generate an RSS feed to keep subscribers updated with every new post in real time.',
        color: 'from-indigo-500 to-blue-500',
        gradient: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
        icon: <FaChartLine className='h-6 w-6' />,
        title: 'SEO & Performance Analytics',
        descriptionStart: 'Built-in performance tracking with Google Analytics, Lighthouse metrics, and PageSpeed Insights.',
        color: 'from-green-500 to-emerald-500',
        gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    }
];

function FeatureCard({ icon, title, descriptionStart, code, descriptionEnd, link, color, gradient }: FeatureData & { index: number }) {

    return (
        <div 
            className="group relative transform transition-all duration-500 ease-out hover:-translate-y-2"
        >
           
            {/* Glow effect */}
            <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Main card */}
            <div className={`relative rounded-2xl border border-canvas-line p-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="flex flex-col z-10">
                    {/* Icon section */}
                    <div className="flex items-center justify-between mb-6">
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                            <div className="text-white">
                                {icon}
                            </div>
                            {/* Icon glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`}></div>
                        </div>
                        
                        {link && (
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                <FaExternalLinkAlt className="h-5 w-5 text-canvas-text-contrast group-hover:text-canvas-text-contrast" />
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-canvas-text-contrast mb-4 transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <div className="text-canvas-text leading-relaxed space-y-2">
                        <p className="transition-colors duration-300 group-hover:text-canvas-text-contrast">
                            {descriptionStart}
                            {code && (
                                <span className={`inline-flex items-center px-3 py-1 rounded-lg bg-canvas-bg border text-sm font-mono font-medium text-canvas-text-contrast mx-1 transition-all duration-300`}>
                                    {code}
                                </span>
                            )}
                            {descriptionEnd}
                        </p>
                    </div>

                    {/* Interactive bottom bar */}
                    {/* <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div> */}
                </div>
            </div>
        </div>
    );
}

export default function FeatureList() {
    return (
        <div className="py-16 px-4">

            {/* Features grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {feature.link ? (
                                <Link href={feature.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <FeatureCard {...feature} index={index} />
                                </Link>
                            ) : (
                                <FeatureCard {...feature} index={index} />
                            )}
                        </div>
                    ))}
                </div>
            </div>


            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}