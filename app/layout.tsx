import "./global.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Manrope } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <Head>
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          <Header />
          {children}
          <Footer />
        </main>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          strategy="lazyOnload"
          data-key="sQQb4vR/PAMuQQuYe+LiXQ"
        />
      </body>
    </html>
  );
}