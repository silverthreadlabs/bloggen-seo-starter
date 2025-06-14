'use client';

import { useState } from 'react';

import { ChevronDown } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'What is bloggen-seo-starter?',
        answer: "Bloggen SEO Starter is a production-ready Next.js 15 template designed for developers. It comes pre-configured with essential SEO features like JSON-LD, dynamic Open Graph images, sitemaps, robots.txt, and RSS feeds. Additionally, it supports MDX content, allowing seamless integration with bloggen.dev's AI-generated content."
    },
    {
        id: 2,
        question: 'How do I get started with bloggen-seo-starter?',
        answer: 'To initiate your project, run the command: `npx create-bloggen-app`. This will scaffold a fully functional Next.js 15 application with all SEO configurations in place. Once set up, you can deploy your site to platforms like Vercel and begin adding content to the `/content` directory.'
    },
    {
        id: 3,
        question: 'What SEO features are included out of the box?',
        answer: 'Bloggen SEO Starter offers a suite of built-in SEO features, including:\n\n• JSON-LD structured data for enhanced search engine understanding.\n• Dynamic Open Graph images for improved social media sharing.\n• Pre-configured sitemaps and robots.txt files.\n• RSS feed generation for content syndication.\n• Optimized metadata handling for better search engine indexing.'
    },
    {
        id: 4,
        question: 'How does bloggen.dev integrate with this template?',
        answer: 'Bloggen.dev is an AI-powered content generation platform that produces MDX files for blogs and guides. These MDX files can be directly placed into the `/content` folder of the bloggen-seo-starter template. The template is designed to automatically render these files, eliminating the need for manual edits and streamlining the content publishing process.'
    },
    {
        id: 5,
        question: 'Can I customize the design or theme of my site?',
        answer: "Absolutely! The bloggen-seo-starter template is fully compatible with DesignRift, an open-source theme builder. DesignRift allows you to modify your site's appearance using Radix color palettes. Once you've customized your theme, you can integrate it into your bloggen-seo-starter project to achieve a personalized look and feel."
    }
];

interface FAQItemComponentProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

const formatAnswer = (answer: string) => {
    // Handle code snippets
    const codeRegex = /`([^`]+)`/g;
    let formattedAnswer = answer.replace(
        codeRegex,
        '<code class="bg-canvas-bg-active px-2 py-1 rounded text-sm font-mono">$1</code>'
    );

    // Handle line breaks and bullet points
    formattedAnswer = formattedAnswer.replace(/\n\n/g, '<br><br>');
    formattedAnswer = formattedAnswer.replace(/\n•/g, '<br>•');

    return formattedAnswer;
};

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
    return (
        <div
            className='border-canvas-line hover:border-canvas-border-hover border-b transition-colors duration-300'
            role='listitem'>
            {/* Question Button */}
            <div
                onClick={() => onToggle(item.id)}
                className='flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:cursor-pointer'
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                role='button'
                aria-label={`${item.question} - Click to ${isOpen ? 'collapse' : 'expand'}`}>
                <span className='text-canvas-text-contrast pr-4 text-lg font-semibold select-none'>
                    {item.question}
                </span>
                <div className='flex-shrink-0'>
                    <ChevronDown
                        className={`text-canvas-text h-5 w-5 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden='true'
                    />
                </div>
            </div>

            {/* Answer Content */}
            <div
                id={`faq-answer-${item.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
                role='region'
                aria-labelledby={`${item.question}`}>
                <div className='overflow-hidden'>
                    <div className='px-6 pb-5'>
                        <div
                            className='text-canvas-text leading-relaxed'
                            dangerouslySetInnerHTML={{ __html: formatAnswer(item.answer) }}
                        />
                        {/* Special handling for the DesignRift link */}
                        {item.id === 5 && (
                            <p className='text-canvas-text mt-2 leading-relaxed'>
                                Visit{' '}
                                <a
                                    href='https://designrift.vercel.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary-text-contrast duration-300 hover:underline'>
                                    Designrift
                                </a>{' '}
                                to get started with theme customization.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Faq() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (id: number) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            
            return newSet;
        });
    };

    return (
        <section className='py:10 w-full px-4 sm:px-6 lg:px-8 xl:py-16' aria-label='Frequently Asked Questions'>
            <div className='mx-auto max-w-4xl'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <h2 className='text-canvas-text-contrast mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className='space-y-0' role='list'>
                    {faqData.map((item) => (
                        <FAQItemComponent
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            onToggle={toggleItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
