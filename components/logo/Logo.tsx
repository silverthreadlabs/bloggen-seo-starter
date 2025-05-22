import React from "react";
import Link from "next/link";
import { Text } from "@/components/ui/text";

const Logo = () => (
  <Link href="/" className="flex flex-row gap-2 items-center">
    <Text
      renderAs="h5"
      className="flex font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
    >
      Bloggen
    </Text>
    <p className="mt-0.5 flex text-sm text-fg-text font-bold">
      SEO Starter
    </p>
  </Link>
);
export default Logo;
