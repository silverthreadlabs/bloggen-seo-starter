import { ProductPosts } from "@/components/ProductPosts";
import { siteConfig } from "@/lib/config/siteConfig";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";

const productPage = {
  path: "products",
  title: "Products by Silverthread Labs",
  description:
    "Explore our AI-powered tools and experimental ideas turned into real-world apps.",
};

export const metadata: Metadata = createPageMetadata({
  path: productPage.path,
  description: productPage.description,
});

export default function ProductsPage() {
  return (
    <section className="relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProductCollection",
            url: `${siteConfig.baseUrl}/products`,
            brand: {
              "@type": "Organization",
              name: "Silverthread Labs",
            },
          }),
        }}
      />
      <ProductPosts />
    </section>
  );
}
