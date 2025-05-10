import React from 'react';
import {
  FaSearch,
  FaFileCode,
  FaThLarge,
  FaCode,
} from 'react-icons/fa';
import FeatureCard from '@/components/FeatureCard';

interface FeatureData {
  icon: React.ReactElement;
  title: string;
  descriptionStart: string;
  code?: string;
  descriptionEnd?: string;
}


const FEATURES: FeatureData[] = [
  {
    icon: <FaSearch className="w-5 h-5" />,
    title: 'SEO On by Default',
    descriptionStart:
      'Built-in metadata, OG Images, sitemap & much more to ensure your site is optimized from day one.',
  },
  {
    icon: <FaFileCode className="w-5 h-5" />,
    title: 'Rich Results Ready',
    descriptionStart:
      'Auto-generated JSON-LD structured data powers rich snippets for improved Google visibility.',
  },
  {
    icon: <FaThLarge className="w-5 h-5" />,
    title: 'MDX-Powered Blog',
    descriptionStart: 'Simply drop your MDX blog files into ',
    code: '/content',
    descriptionEnd:
      ' to publish SEO-friendly, responsive posts instantly.',
  },
  {
    icon: <FaCode className="w-5 h-5" />,
    title: 'Instant RSS Feed',
    descriptionStart:
      'Automatically generate an RSS feed to keep subscribers updated with every new post in real time.',
  },
];


export default function FeaturesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {FEATURES.map((feat, idx) => (
        <FeatureCard key={idx} {...feat} />
      ))}
    </div>
  );
}
