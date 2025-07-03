import { ReactElement } from 'react';
import { Palette, LayoutTemplate, SearchCheck, Rocket } from 'lucide-react';

export interface Feature {
    id: number;
    title: string;
    description: string;
    details: string;
}

export const featuresData: Feature[] = [
    {
        id: 1,
        title: 'Radix Color Palette',
        description: 'Built-in, flexible, and accessible',
        details:
            'Leverage the power of Radix color palettes for a beautiful, consistent, and accessible UI. Easily customize your theme with a robust system designed for flexibility and seamless integration.'
    },
    {
        id: 2,
        title: 'Dark Mode Built In',
        description: 'One-click toggle, fully themed',
        details:
            'Switch between light and dark modes effortlessly with a single click. Enjoy a fully themed experience that adapts instantly, providing comfort and style for every user preference.'
    },
    {
        id: 3,
        title: 'Accessibility First',
        description: 'Meets WCAG 2.1 contrast ratios',
        details:
            'Designed with accessibility at its core, every color and component meets or exceeds WCAG 2.1 contrast standards. Ensure your site is usable and welcoming for everyone, regardless of ability.'
    },
    {
        id: 4,
        title: 'One-Step Setup',
        description: 'Configure once, scale infinitely',
        details:
            'Get started quickly with a streamlined setup process. Configure your project once and scale effortlessly as your needs grow—no repetitive steps or complex onboarding required.'
    }
]; 