

import FeatureCard from '@/components/ui/feature-card';

import { FaCode, FaFileCode, FaSearch, FaThLarge } from 'react-icons/fa';

interface FeatureData {
    icon: React.ReactElement;
    title: string;
    descriptionStart: string;
    code?: string;
    descriptionEnd?: string;
}

const FEATURES: FeatureData[] = [
    {
        icon: <FaSearch className='h-5 w-5' />,
        title: 'SEO On by Default',
        descriptionStart:
            'Built-in metadata, OG Images, sitemap & much more to ensure your site is optimized from day one.'
    },
    {
        icon: <FaFileCode className='h-5 w-5' />,
        title: 'Rich Results Ready',
        descriptionStart: 'Auto-generated JSON-LD structured data powers rich snippets for improved Google visibility.'
    },
    {
        icon: <FaThLarge className='h-5 w-5' />,
        title: 'MDX-Powered Blog',
        descriptionStart: 'Simply drop your MDX blog files into ',
        code: '/content',
        descriptionEnd: ' to publish SEO-friendly, responsive posts instantly.'
    },
    {
        icon: <FaCode className='h-5 w-5' />,
        title: 'Instant RSS Feed',
        descriptionStart:
            'Automatically generate an RSS feed to keep subscribers updated with every new post in real time.'
    }
];

export default function FeaturesList() {
    return (
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2'>
            {FEATURES.map((feature, index) => (
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
    );
}
