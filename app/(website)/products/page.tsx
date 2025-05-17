import { ProductPosts } from "@/components/products/ProductPosts";
import { siteConfig } from "@/lib/config/site";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";

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
    <main
      role="main"
      className="relative min-h-screen bg-gradient-to-br from-bg-base via-primary-bg to-bg-base"
    >
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
    </main>
  );
}
