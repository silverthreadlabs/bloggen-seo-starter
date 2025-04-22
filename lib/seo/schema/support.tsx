// lib/seo/schema/support.tsx
import React from "react";
import { getURL } from "@/lib/utils/helpers";
import type { WithContext, WebPage, Action, ContactPoint } from "schema-dts";

const baseURL = getURL();
const supportUrl = `${baseURL}/support`;
const logoUrl = `${baseURL}/icon-512.png`;
// Create a type that extends WebPage to include the properties we need
type SupportPage = WebPage & {
  mainEntity: {
    "@type": "Organization";
    contactPoint: ContactPoint;
    [key: string]: any;
  };
};

const supportSchema: WithContext<SupportPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Support – GlanceAI",
  description:
    "Need Assistance? We're Here to Help! At GlanceAI, we prioritize your success and satisfaction. If you have any questions, encounter an issue, or need support with our services, our team is ready to assist you. Reach out at silverthreadlabs@gmail.com.",
  url: supportUrl,
  mainEntity: {
    "@type": "Organization",
    name: "Silverthread Labs",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "Customer Support",
      areaServed: "US",
      availableLanguage: "English",
      email: "silverthreadlabs@gmail.com",
    } as ContactPoint,
  },
  publisher: {
    "@type": "Organization",
    name: "Silverthread Labs",
    url: "https://www.silverthreadlabs.com/",
    logo: {
      "@type": "ImageObject",
      url: logoUrl  ,
    },
  },
  image: {
    "@type": "ImageObject",
    url: logoUrl,
    width: "1200",
    height: "630",
    description: "Support – GlanceAI",
  },
  sameAs: ["https://www.silverthreadlabs.com/"],
  potentialAction: {
    "@type": "CommunicateAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "mailto:silverthreadlabs@gmail.com",
    },
    name: "Email Support",
  },
};

const SupportSchema: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(supportSchema) }}
    />
  );
};

export default SupportSchema;