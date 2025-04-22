// seo/schema.tsx
import React from "react";
import { getURL } from "@/lib/utils/helpers";
import type { WithContext, Blog } from "schema-dts";

const baseURL = getURL();
const title = "GlanceAI";
const blogUrl = `${baseURL}/blog`;
const logoUrl = `${baseURL}/icon-512.png`;
const openGraphUrl = `${baseURL}/assets/images/open-graph.png`;

const blogSchema: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog",
  description: "Read our latest insights, news, and articles about AI and technology.",
  url: blogUrl,
  author: {
    "@type": "Organization",
    name: "Silverthread Labs",
    url: baseURL,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Silverthread Labs",
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
  },
  image: {
    "@type": "ImageObject",
    url: openGraphUrl,
    width: "1200",
    height: "630",
    description: `Blog | ${title}`,
  },
  keywords: [
    title,
    "Silverthread Labs",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
  ],
  sameAs: ["https://www.silverthreadlabs.com/"],
  potentialAction: {
    "@type": "ReadAction",
    target: [
      {
        "@type": "EntryPoint",
        urlTemplate: blogUrl,
      },
    ],
  },
};

const BlogSchema: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
    />
  );
};

export default BlogSchema;
