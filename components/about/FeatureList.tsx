import React from 'react';
import {
  FaSearch,
  FaFileCode,
  FaThLarge,
  FaCode,
} from 'react-icons/fa';

import FeatureCard from "@/components/ui/feature-card";

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
      {FEATURES.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          descriptionStart={feature.descriptionStart}
          code={feature.code}
          descriptionEnd={feature.descriptionEnd}
        />
        // <Card key={index} className="group hover:border-fg-border-hover transition-all duration-300 ease-in-out backdrop-blur-sm">
        //   <CardContent className="p-0">
        //     <div className="flex items-start gap-4 p-6">
        //       <div className="p-3 bg-gradient-to-br from-bg-bg via-primary-bg-subtle to-primary-bg group-hover:via-primary-bg hover:to-primary-bg-hover rounded-sm group-hover:scale-[1.05] transition-transform duration-300 ease-out">
        //         <div className="text-primary-text group-hover:text-primary-text-contrast transition-colors duration-300 ease-out">
        //           {feature.icon}
        //         </div>
        //       </div>
        //       <div>
        //         <CardTitle className="text-xl text-fg-text-contrast mb-2 group-hover:text-primary-text transition-colors duration-300 ease-out">
        //           {feature.title}
        //         </CardTitle>
        //         <CardDescription className="text-fg-text group-hover:text-fg-text transition-colors duration-300 ease-out">
        //           {feature.descriptionStart}
        //           {feature.code && (
        //             <code className="bg-bg-bg px-2 py-1 rounded-sm font-mono text-sm text-fg-text-contrast">
        //               {feature.code}
        //             </code>
        //           )}
        //           {feature.descriptionEnd}
        //         </CardDescription>
        //       </div>
        //     </div>
        //   </CardContent>
        // </Card>
      ))}
    </div>
  );
}
