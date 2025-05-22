// import Link from "next/link";
// import { ArrowUpRight, FileJson, Search, Layout, Code } from "lucide-react";
// import { Metadata } from "next";
// import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";

// export const metadata: Metadata = createPageMetadata({
//   path: "about",
//   description:
//     "Launch a fully optimized Next.js site with Bloggen SEO Starter, then create high-quality, SEO-friendly content effortlessly using Bloggen AI.",
// });

// interface Feature {
//   icon: React.ReactElement;
//   title: string;
//   description: string;
// }

// const features: Feature[] = [
//   {
//     icon: <Search className="w-5 h-5" />,
//     title: "SEO On by Default	",
//     description:
//       "Meta tags, OG data, sitemap & robots.txt baked in from the first commit.",
//   },
//   {
//     icon: <FileJson className="w-5 h-5" />,
//     title: "Rich Results Ready",
//     description:
//       "Auto‑generated JSON‑LD gives Google the context it needs for rich snippets.",
//   },
//   {
//     icon: <Layout className="w-5 h-5" />,
//     title: "MDX‑Powered Blog",
//     description:
//       "Drop your Bloggen‑made MDX files into /content and they're live—SEO and styling included.",
//   },
//   {
//     icon: <Code className="w-5 h-5" />,
//     title: "Instant RSS Feed",
//     description: "Keep subscribers updated automatically",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//       {/* Keep your existing schema script */}
//       <script
//         type="application/ld+json"
//         suppressHydrationWarning
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             // Your existing JSON-LD content
//           }),
//         }}
//       />

//       <div className="max-w-[90%] xl:max-w-[1280px] mx-auto py-24">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <span className="text-slate-400">Powered by</span>
//             <Link
//               href="https://bloggen.dev"
//               target="_blank"
//               className="text-blue-400 hover:text-blue-300 transition-colors"
//             >
//               Bloggen
//             </Link>
//             <span className="text-slate-400">Authored by</span>
//             <Link
//               href="https://silverthreadlabs.com"
//               target="_blank"
//               className="text-blue-400 hover:text-blue-300 transition-colors"
//             >
//               Silverthread Labs
//             </Link>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Next.js SEO Template
//           </h1>
//           <h2 className="text-2xl text-slate-400">
//             Spin up a production‑ready site with SEO, performance, and content
//             workflows already solved.
//           </h2>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-slate-800 rounded-lg group-hover:text-blue-400 transition-colors duration-300">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-slate-400 group-hover:text-slate-300">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";
import FeaturesList from "@/components/about/FeatureList";
import { Text } from "@/components/ui/text";
export const metadata: Metadata = createPageMetadata({
  path: "about",
  description:
    "Launch a fully optimized Next.js site with Bloggen SEO Starter, then create high-quality, SEO-friendly content effortlessly using Bloggen AI.",
});

export default function AboutPage() {
  return (
    <main role="main" className="min-h-screen ">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            /* your existing structured data */
          }),
        }}
      />
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto py-24">
        {/* Page Header */}
        <header role="banner" className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 px-4">
            <div className="flex items-center gap-2">
              <Text renderAs="p" className="">
                Powered by
              </Text>
              <Link
                href="https://bloggen.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-solid hover:text-primary-solid-hover transition-colors "
              >
                Bloggen
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Text renderAs="p" className="">
                Authored by
              </Text>
              <Link
                href="https://silverthreadlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-solid hover:text-primary-solid-hover transition-colors "
              >
                Silverthread Labs
              </Link>
            </div>
          </div>
          <Text
            renderAs="h1"
            id="about-page-title"
            className="text-4xl md:text-5xl mb-4"
          >
            Next.js SEO Template
          </Text>
          <Text renderAs="h5" id="about-page-subtitle" className="text-balance">
            Spin up a production-ready site with SEO, performance, and content
            workflows already solved.
          </Text>
        </header>

        {/* Features */}
        <section aria-labelledby="features-title" className="mb-16">
          {/* <h3 id="features-title" className="sr-only">
              Key Features
            </h3> */}
          <FeaturesList />
        </section>
      </div>
    </main>
  );
}
