import { ProductPosts } from "@/components/ProductPosts";
// import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { baseUrl } from 'app/sitemap';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/createPageMetadata';

const productPage = {
  path: "products",
  title: "Products by Silverthread Labs",
  description: "Explore our AI-powered tools and experimental ideas turned into real-world apps.",
};

export const metadata: Metadata = createPageMetadata({
  path: productPage.path,
  description: productPage.description,
});

export default function Page() {
  return (
    <section className=' relative'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProductCollection",
            url: `${baseUrl}/products`,
            brand: {
              "@type": "Organization",
              name: "Silverthread Labs",
            },
          }),
        }}
      />
      {/* <BackgroundGrid /> */}
      <ProductPosts />
    </section>
  );
}
