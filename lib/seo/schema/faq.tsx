// import { siteConfig } from '@/lib/config/site';
import { FAQPage, WithContext } from 'schema-dts';

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is bloggen-seo-starter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bloggen SEO Starter is a production-ready Next.js 15 template designed for developers. It comes pre-configured with essential SEO features like JSON-LD, dynamic Open Graph images, sitemaps, robots.txt, and RSS feeds. Additionally, it supports MDX content, allowing seamless integration with bloggen.dev's AI-generated content."
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with bloggen-seo-starter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To initiate your project, run the command: `npx create-bloggen-app`. This will scaffold a fully functional Next.js 15 application with all SEO configurations in place. Once set up, you can deploy your site to platforms like Vercel and begin adding content to the `/content` directory."
      },
    },
    {
      "@type": "Question",
      name: "What SEO features are included out of the box?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bloggen SEO Starter offers a suite of built-in SEO features, including:\n\n• JSON-LD structured data for enhanced search engine understanding.\n• Dynamic Open Graph images for improved social media sharing.\n• Pre-configured sitemaps and robots.txt files.\n• RSS feed generation for content syndication.\n• Optimized metadata handling for better search engine indexing."
      },
    },
    {
      "@type": "Question",
      name: "How does bloggen.dev integrate with this template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bloggen.dev is an AI-powered content generation platform that produces MDX files for blogs and guides. These MDX files can be directly placed into the `/content` folder of the bloggen-seo-starter template. The template is designed to automatically render these files, eliminating the need for manual edits and streamlining the content publishing process."
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the design or theme of my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! The bloggen-seo-starter template is fully compatible with DesignRift, an open-source theme builder. DesignRift allows you to modify your site's appearance using Radix color palettes. Once you've customized your theme, you can integrate it into your bloggen-seo-starter project to achieve a personalized look and feel."
      },
    },
  ],
};

const FAQSchema: React.FC = () => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  />
);

export default FAQSchema;
