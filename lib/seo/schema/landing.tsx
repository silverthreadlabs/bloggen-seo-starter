    // lib/seo/schema/landing.tsx
import React from "react";
import { getURL } from "@/lib/utils/helpers";
import type { WithContext, WebSite } from "schema-dts";

const baseURL = getURL();
const landingSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlanceAI",
  alternateName: [
    "glance",
    "Glance",
    "glance ai",
    "Glance AI",
    "glanceai",
    "GlanceAI"
]
,  
description: "Transform how you browse the web with GlanceAI. Get instant AI-powered summaries, extract key insights, and discover relevant connections - all without reading entire webpages. Save time today.",
  url: baseURL, // Dynamically uses your base URL
  publisher: {
    "@type": "Organization",
    name: "Silverthread Labs",
    url: baseURL,
    logo: {
      "@type": "ImageObject",
      url: `${baseURL}/favicon.ico`
    }
  },
  image: {
    "@type": "ImageObject",
    url: `${baseURL}/assets/images/open-graph.png`,
    width: "1200",
    height: "630",
    description: "GlanceAI Open Graph Image"
  },
  sameAs: [
    "https://www.silverthreadlabs.com/"
  ],
  keywords: [
    "AI webpage assistant",
    "web content summarizer",
    "AI text analysis",
    "webpage insights",
    "content summary tool",
    "web browsing assistant",
    "AI reading assistant",
    "webpage analyzer",
    "GlanceAI",
    "Silverthread Labs"
]
};

const LandingSchema: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(landingSchema) }}
  />
);

export default LandingSchema;
