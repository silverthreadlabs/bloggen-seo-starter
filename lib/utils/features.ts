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
        title: 'Plug‑in MDX',
        description: 'Instant Content Integration',
        details:
            'Bloggen AI exports MDX posts that drop straight into the content folder - no edits needed. Your content renders instantly, making content management seamless and efficient.'
    },
    {
        id: 2,
        title: 'Designrift Theming',
        description: 'Powerful Theme Creation',
        details:
            'Create stunning themes for your web application leveraging Radix color palettes for cohesive styling. Build beautiful, consistent user interfaces with our comprehensive theming system.'
    },
    {
        id: 3,
        title: 'SEO All Set',
        description: 'Complete SEO Infrastructure',
        details:
            'Launch with confidence knowing all SEO essentials are pre-configured. From sitemaps and robots.txt to JSON-LD and dynamic OG images, plus an RSS feed - everything is pre-wired.'
    },
    {
        id: 4,
        title: 'One‑Command Launch',
        description: 'Effortless Deployment',
        details:
            'Get started in seconds with a single command: npx create-bloggen-app. Push to Vercel and your typed Next.js 15 template goes live immediately.'
    }
]; 