// const description =
//   "Launch your agency site with Bloggen SEO Starter featuring  Global Metadata Configuration, MDX products & blog pages, dynamic OG images, JSON-LD and more.";
// const url = getURL();
// Base metadata object with common properties
// const meta = {
//   url: getURL(),
//   creator: "Bloggen",
//   description: siteConfig.description,
//   keywords: [
//     siteConfig.title,
//     "Bloggen",
//     "SEO",
//     "MDX",
//     "Dynamic OG Images",
//     "Open Graph Images",
//     "JSON-LD",
//     "Schema Markup",
//     "High Performance",
//     "Lighthouse Score",
//     "Web Development",
//   ],
//   ogImageConfig: {
//     url: `${getURL()}/og?title=${encodeURIComponent(siteConfig.title)}`,
//     width: 1200,
//     height: 630,
//     alt: siteConfig.title,
//   },
// };


// Create the common metadata structure that doesn't change between variations
import { Metadata } from "next";
import { getURL } from "@/lib/utils/helpers";
import {siteConfig} from "@/lib/config/siteConfig"
const createBaseMetadata = (): Omit<Metadata, "robots"> => ({
  metadataBase: new URL(getURL()),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  icons: {
    icon: [{ url: '/favicon/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },

  openGraph: {
    url: siteConfig.baseUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    // images: [meta.ogImageConfig],
     images: [siteConfig.getImageConfig(siteConfig.title)],
    authors: [siteConfig.title],
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    site: "@Silverthread_Labs",
    creator: "@Silverthread_Labs",
    title: siteConfig.title,
    description: siteConfig.description,
     images: [siteConfig.getImageConfig(siteConfig.title)],
  },
});

// Different robots configurations that conform to the Metadata['robots'] type
type RobotsConfig = NonNullable<Metadata["robots"]>;

const robotsConfig = {
  default: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  } as RobotsConfig,
  noIndex: {
    index: false,
    follow: false,
  } as RobotsConfig,
  noIndexFollow: {
    index: false,
    follow: true,
  } as RobotsConfig,
};

// Function to create metadata with specific robots configuration
const createMetadata = (robotsType: keyof typeof robotsConfig): Metadata => ({
  ...createBaseMetadata(),
  robots: robotsConfig[robotsType],
});

// Export the three metadata variations
export const defaultMetadata: Metadata = createMetadata("default");
export const noRobotsMetadata: Metadata = createMetadata("noIndex");
export const noIndexFollowMetadata: Metadata = createMetadata("noIndexFollow");

