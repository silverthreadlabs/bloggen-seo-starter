import React from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex flex-row gap-2 items-center">
    <h5
      className="font-semibold text-lg md:text-xl leading-relaxed tracking-normal text-fg-text-contrast flex font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
    >
      Bloggen
    </h5>
    <p className="mt-0.5 flex text-sm text-fg-text font-bold">
      SEO Starter
    </p>
  </Link>
);
export default Logo;
