import React from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="relative z-10 flex items-center">
    <span className="text-xl font-bold">
      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
        Bloggen
      </span>
      <span className="text-slate-400 text-sm ml-2 hidden sm:inline-block">
        SEO Starter
      </span>
    </span>
  </Link>
);
export default Logo;
