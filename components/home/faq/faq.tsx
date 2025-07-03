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
        question: 'What is designrift?',
        answer: 'designrift is a platform that helps you create stunning, accessible themes using Radix color palettes. It offers built-in dark mode, accessibility features, and a streamlined setup process for infinite customization.'
    },
    {
        id: 2,
        question: 'Can I customize colors beyond the Radix palette?',
        answer: 'Absolutely! While designrift leverages Radix color palettes for consistency and accessibility, you can extend or override colors to match your brand or unique design requirements.'
    },
    {
        id: 3,
        question: 'Does designrift ensure accessibility and WCAG compliance?',
        answer: 'Yes, every theme and color combination in designrift is designed to meet or exceed WCAG 2.1 contrast ratios, ensuring your site is accessible to all users.'
    },
    {
        id: 4,
        question: 'Is there a built-in dark mode?',
        answer: 'Yes! designrift includes a one-click dark mode toggle. All themes are fully styled for both light and dark modes, providing a seamless experience for your users.'
    },
    {
        id: 5,
        question: 'How easy is it to set up designrift in my project?',
        answer: 'designrift is designed for a single-step setup. Configure it once and you can scale or customize your themes infinitely without repetitive onboarding.'
    },
    {
        id: 6,
        question: 'Does designrift support frameworks like Tailwind or Chakra UI?',
        answer: 'Yes, designrift is framework-agnostic and can be integrated with popular styling solutions like Tailwind CSS, Chakra UI, or your own custom design system.'
    },
    {
        id: 7,
        question: 'Is there TypeScript support for designrift?',
        answer: 'Definitely! designrift is built with TypeScript, providing full type safety and autocompletion for a smooth developer experience.'
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
                        className={`text-canvas-text h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                        aria-hidden='true'
                    />
                </div>
            </div>

            {/* Answer Content */}
            <div
                id={`faq-answer-${item.id}`}
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                role='region'
                aria-labelledby={`${item.question}`}>
                <div className='overflow-hidden'>
                    <div className='px-6 pb-5'>
                        <div
                            className='text-canvas-text leading-relaxed'
                            dangerouslySetInnerHTML={{ __html: formatAnswer(item.answer) }}
                        />
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
        <section id='faq' className='py:10 w-full px-4 sm:px-6 lg:px-8 xl:py-16' aria-label='Frequently Asked Questions'>
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
