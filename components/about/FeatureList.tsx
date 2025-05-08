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
      'Meta tags, OG data, sitemap & robots.txt baked in from the first commit.',
  },
  {
    icon: <FaFileCode className="w-5 h-5" />,
    title: 'Rich Results Ready',
    descriptionStart:
      'Auto-generated JSON-LD gives Google the context it needs for rich snippets.',
  },
  {
    icon: <FaThLarge className="w-5 h-5" />,
    title: 'MDX-Powered Blog',
    descriptionStart:
      'Drop your Bloggen-made MDX files into ',
    code: '/content',
    descriptionEnd:
      ' and they’re live—SEO and styling included.',
  },
  {
    icon: <FaCode className="w-5 h-5" />,
    title: 'Instant RSS Feed',
    descriptionStart:
      'Keep subscribers updated automatically.',
  },
];

export default function FeaturesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {FEATURES.map((feat, idx) => (
        <FeatureCard key={idx} {...feat} />
      ))}
    </div>
  );
}
