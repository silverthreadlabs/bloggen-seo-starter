import Header from "@/components/layout/header/Header";
import Hero from "@/components/ui/hero/Hero";
// import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { baseUrl } from "app/sitemap";
import { BlogPosts } from "@/components/posts";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";
import { Metadata } from "next";


export const metadata: Metadata = createPageMetadata({
  path: "Digital Innovation Studio",

});

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center  justify-center overflow-hidden relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Silverthread Labs",
            description:
              "We design AI that feels personal and empowers everyday innovation. Join our community of creators building open-source AI tools that simplify daily life. From custom automation to collaborative projects, Silverthread Labs transforms ideas into accessible solutions that make technology work for you, not the other way around. Start building, automating, and simplifying with us today.",
            url: `${baseUrl}`,
            foundingDate: "2024-08-01",
            email: "silverthreadlabs@gmail.com",
            telephone: "+923138414777",
            sameAs: ["https://www.linkedin.com/company/silverthreadlabs/"],
          }),
        }}
      />
      {/* <BackgroundGrid /> */}
      <Hero />
      {/* <div className="flex max-w-full  w-full  flex-col items-center justify-center">
        <BlogPosts isHomePage={true}/>
      </div> */}
    </main>
  );
}
