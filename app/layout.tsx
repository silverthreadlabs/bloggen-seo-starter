import "./global.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

import { Manrope } from "next/font/google";

export const dynamic = "force-dynamic";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="antialiased lg:mx-auto">
        <main className="flex-auto min-w-0  flex flex-col md:px-0">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
