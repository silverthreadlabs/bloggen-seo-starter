import React from 'react';
import {
  FaSearch,
  FaFileCode,
  FaThLarge,
  FaCode,
} from 'react-icons/fa';
import { 
  Card, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

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
        <Card key={index} className="group hover:border-ring transition-all duration-300 ease-in-out backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="flex items-start gap-4 p-6">
              <div className="p-3 bg-gradient-to-br from-muted via-accent/20 to-accent/40 hover:via-accent/50 rounded-sm group-hover:scale-[1.05] transition-transform duration-300 ease-out">
                <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300 ease-out">
                  {feature.icon}
                </div>
              </div>
              <div>
                <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300 ease-out">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-out">
                  {feature.descriptionStart}
                  {feature.code && (
                    <code className="bg-card px-2 py-1 rounded-sm font-mono text-sm text-foreground">
                      {feature.code}
                    </code>
                  )}
                  {feature.descriptionEnd}
                </CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
