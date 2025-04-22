// seo/metadata.tsx
import { Metadata } from "next";
import { getURL } from "@/lib/utils/helpers";

const SITE_TITLE = "Silverthread Labs";
const description =
  "Join Silverthread Labs' community creating open-source AI tools that simplify daily life. Start building and automating today!";
// const url = getURL();
// Base metadata object with common properties
const meta = {
  url: getURL(),
  creator: "Silverthread Labs",
  // description:
  //   "We design AI that feels personal and empowers everyday innovation. Join our community of creators building open-source AI tools that simplify daily life. From custom automation to collaborative projects, Silverthread Labs transforms ideas into accessible solutions that make technology work for you, not the other way around. Start building, automating, and simplifying with us today.",
  // favicon: "/favicon.ico",
  description: description,
  keywords: [
    SITE_TITLE,
    "AI Solutions",
    "Personal AI",
    "AI Tools",
    "Open Source AI",
    "Custom Automation",
    "AI Innovation",
    "Collaborative AI",
    "AI Community",
    "Accessible Technology",
    "AI Simplification",
    "Daily Life Automation",
    "Technology Solutions",
    "AI Development",
    "AI Empowerment",
    "AI Builder Platform",
    "AI Automation Tools",
    "Personal Technology",
  ],
  ogImageConfig: {
    url: `${getURL()}/og?title=${encodeURIComponent(SITE_TITLE)}`,
    width: 1200,
    height: 630,
    alt: SITE_TITLE,
  },


};

// Create the common metadata structure that doesn't change between variations
const createBaseMetadata = (): Omit<Metadata, "robots"> => ({
  metadataBase: new URL(getURL()),
  alternates: {
    canonical: "/",
  },
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: meta.description,
  referrer: "origin-when-cross-origin",
  keywords: meta.keywords,
  authors: [{ name: meta.creator, url: getURL() }],
  creator: meta.creator,
  publisher: meta.creator,
  icons: {
    icon: [{ url: '/favicon/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },

  openGraph: {
    url: meta.url,
    title: SITE_TITLE,
    description: meta.description,
    siteName: SITE_TITLE,
    images: [meta.ogImageConfig],
    authors: [SITE_TITLE],
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    site: "@Silverthread_Labs",
    creator: "@Silverthread_Labs",
    title: SITE_TITLE,
    description: meta.description,
    images: [meta.ogImageConfig],
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

