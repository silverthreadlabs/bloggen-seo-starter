'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Input, Select, Textarea } from '@/components/ui/input';
import { send } from '@emailjs/browser';
import { Button } from '../ui/button';

type FormData = {
    name: string;
    email: string;
    company: string;
    budget: string;
    project: string;
};

type FormErrors = {
    [K in keyof FormData]?: string;
};

const budgetOptions = [
    { value: '<$5k', label: 'Less than $5,000' },
    { value: '$5k-$15k', label: '$5,000 - $15,000' },
    { value: '$15k-$50k', label: '$15,000 - $50,000' },
    { value: '$50k-$100k', label: '$50,000 - $100,000' },
    { value: '>$100k', label: 'More than $100,000' }
];

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        budget: '',
        project: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Input sanitization function
    const sanitizeInput = (input: string): string => {
        return (
            input
                // .trim()
                .replace(/[<>]/g, '') // Remove potential HTML tags
                .slice(0, 1000)
        ); // Limit length
    };

    // Email validation
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    };

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.project) {
            newErrors.project = 'Project description is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = name === 'budget' ? value : sanitizeInput(value);

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await send(
                'service_cyapyc8',
                'template_bt2twxe',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    company: formData.company,
                    budget: formData.budget,
                    message: formData.project
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                budget: '',
                project: ''
            });
        } catch (error) {
            // console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className='mb-8'>
                <h3 className='text-canvas-text-contrast mb-2 text-2xl font-semibold'>Tell us about your project</h3>
                <p className='text-canvas-text'>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {submitStatus === 'success' && (
                <div className='bg-success-bg border-success-border mb-6 rounded-lg border p-4'>
                    <p className='text-success-text font-medium'>
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className='bg-alert-bg border-alert-border mb-6 rounded-lg border p-4'>
                    <p className='text-alert-text font-medium'>
                        Something went wrong. Please try again or contact us directly.
                    </p>
                    <Link
                        className='text-canvas-text-contrast font-bold underline'
                        href='mailto:silverthreadlabs@gmail.com'>
                        silverthreadlabs@gmail.com
                    </Link>
                </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <Input
                        id='name'
                        name='name'
                        type='text'
                        label='Name'
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        error={errors.name}
                        placeholder='Your full name'
                    />

                    <Input
                        id='email'
                        name='email'
                        type='email'
                        label='Email'
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder='your@email.com'
                    />
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <Input
                        id='company'
                        name='company'
                        type='text'
                        label='Company'
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder='Your company name'
                    />

                    <Select
                        id='budget'
                        name='budget'
                        label='Budget Range'
                        value={formData.budget}
                        onChange={handleInputChange}
                        options={budgetOptions}
                        placeholder='Select budget range'
                    />
                </div>

                <Textarea
                    id='project'
                    name='project'
                    label='Project Description'
                    required
                    value={formData.project}
                    onChange={handleInputChange}
                    error={errors.project}
                    rows={6}
                    placeholder='Tell us about your project, goals, timeline, and any specific requirements...'
                />

                <div className='pt-4'>
                    <Button
                        type='submit'
                        size='lg'
                        fullWidth
                        isLoading={isSubmitting}
                        loadingText='Sending...'
                        disabled={isSubmitting}
                        aria-label='Send Message'
                        name='Send Message'>
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    );
}
