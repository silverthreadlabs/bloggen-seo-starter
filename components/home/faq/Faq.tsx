'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'How do I get started?',
        answer: "Getting started is simple! Sign up for an account, complete the onboarding process, and you'll have access to all our features. Our intuitive interface and helpful tutorials will guide you through every step."
    },
    {
        id: 2,
        question: 'What pricing plans do you offer?',
        answer: 'We offer flexible pricing plans to suit different needs - from individuals to enterprise teams. Our plans include a free tier for basic usage, professional plans for growing teams, and enterprise solutions with advanced features and dedicated support.'
    },
    {
        id: 3,
        question: 'Is there customer support available?',
        answer: 'Yes! We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our expert support team is always ready to help you resolve any issues and make the most of our platform.'
    },
    {
        id: 4,
        question: 'Can I integrate with other tools?',
        answer: 'Absolutely! Our platform supports integrations with over 100+ popular tools and services. We provide APIs, webhooks, and pre-built connectors to ensure seamless workflow integration with your existing tech stack.'
    },
    {
        id: 5,
        question: 'Is my data secure?',
        answer: 'Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR. Your data is protected with multiple layers of security and backup systems.'
    }
];

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
        <section className='w-full px-4 py-16 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <h2 className='text-canvas-text-contrast mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Frequently Asked Questions
                    </h2>
                    {/* <p className='text-canvas-text mx-auto max-w-2xl text-lg'>
                        Find answers to the most common questions about our platform and services.
                    </p> */}
                </div>

                {/* FAQ Items */}
                <div className='space-y-4'>
                    {faqData.map((item) => {
                        const isOpen = openItems.has(item.id);

                        return (
                            <div key={item.id} className='duration-300'>
                                {/* Question Button */}
                                <div
                                    onClick={() => toggleItem(item.id)}
                                    className='flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:cursor-pointer'
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${item.id}`}>
                                    <span className='text-canvas-text-contrast pr-4 text-lg font-semibold'>
                                        {item.question}
                                    </span>
                                    <div className='flex-shrink-0'>
                                        {isOpen ? (
                                            <ChevronUp className='text-canvas-text h-5 w-5 transition-transform duration-300' />
                                        ) : (
                                            <ChevronDown className='text-canvas-text h-5 w-5 transition-transform duration-300' />
                                        )}
                                    </div>
                                </div>

                                {/* Answer Content */}
                                <div
                                    id={`faq-answer-${item.id}`}
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}>
                                    <div className='overflow-hidden'>
                                        <div className='px-6 pb-5'>
                                            <div className='bg-canvas-line mb-4 h-px'></div>
                                            <p className='text-canvas-text leading-relaxed'>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

             
            </div>
        </section>
    );
}
