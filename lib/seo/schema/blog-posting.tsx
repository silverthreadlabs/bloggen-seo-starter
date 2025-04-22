// lib/seo/BlogPostSchema.tsx
import React from "react";
import { getURL } from "@/lib/utils/helpers";
import type { WithContext, BlogPosting } from "schema-dts";

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  publisherName: string;
}

const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
}) => {
  const baseURL = getURL();
  const logoUrl = `${baseURL}/icon-512.png`;

  const blogPostingSchema: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image: {
      "@type": "ImageObject",
      url: image,
      width: "1200",
      height: "630",
    },
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person", // Change to "Organization" if needed
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseURL,
    },
  };

  return (
    <script
      type="application/ld+json"
      // Convert the JSON‑LD object to a string for injection
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
    />
  );
};

export default BlogPostSchema;
