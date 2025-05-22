import React from "react";
import "./global.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Manrope } from "next/font/google";
import type { Viewport } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "@/lib/utils/env";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_MEASUREMENT_ID} />
      {/* <Head>
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <body className="antialiased lg:mx-auto" suppressHydrationWarning>
        <main className="flex-auto bg-gradient-to-br from-bg-base via-primary-bg to-bg-base min-w-0 flex flex-col md:px-0">
          <Header />
          <RootProvider>{children}</RootProvider>
          <Footer />
        </main>
        {/* <Script
          src="https://analytics.ahrefs.com/analytics.js"
          strategy="lazyOnload"
          data-key="sQQb4vR/PAMuQQuYe+LiXQ"
        /> */}
      </body>
    </html>
  );
}
