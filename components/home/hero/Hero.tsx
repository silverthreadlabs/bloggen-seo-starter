"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCopy,
  FaCheck,
  FaGithub,
  FaCoffee,
  FaBeer,
} from "react-icons/fa";
import Link from "next/link";
import features from "./features-list";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx create-bloggen-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-base via-primary-bg to-bg-base" />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen max-w-[1216px] mx-auto flex flex-col lg:flex-row lg:gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 py-10 xl:py-20 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="text-fg-text text-sm font-mono tracking-widest uppercase mb-4 block">
                Powered by Bloggen
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-fg-text-contrast leading-tight mb-6">
                All your SEO
                <span className="bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
                  {" "}
                  Already Done.
                </span>
              </h1>
              <Text renderAs="h2" className="text-fg-text font-normal text-2xl mb-8">
                Ready‑to‑deploy Next.js template with MDX blogs, Dynamic OG
                images, JSON‑LD, and top Lighthouse scores.
              </Text>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    target="_blank"
                    href="https://github.com/silverthreadlabs/bloggen-seo-starter"
                    className="flex-1"
                  >
                    <Button
                      color="primary"
                      variant="solid"
                      size="lg"
                      aria-label="View source code on GitHub"
                      fullWidth
                      leadingIcon={<FaGithub className="w-5 h-5" />}
                      trailingIcon={
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      }
                    >
                      View Source
                    </Button>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.bloggen.dev/"
                    className="flex-1"
                  >
                    <Button
                      color="primary"
                      variant="surface"
                      size="lg"
                      aria-label="Generate my first blog post with Bloggen"
                      fullWidth
                    >
                      Generate My First Post
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between bg-bg-bg bg-opacity-50 rounded px-4 py-3 font-mono text-sm border border-fg-border">
                  <span className="text-fg-text">$ npx create-bloggen-app</span>
                  <Button
                    onClick={handleCopy}
                    aria-label="Copy command"
                    size="default"
                    color="neutral"
                    variant="ghost"
                  >
                    {copied ? (
                      <FaCheck className="w-4 h-4 text-success-text" />
                    ) : (
                      <FaCopy className="w-4 h-4 text-fg-default" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section with Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 py-10 xl:py-20 flex items-center"
          >
            <div className="grid gap-6 w-full">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:border-fg-border-hover transition-all duration-300 ease-in-out backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 p-6">
                      <div className="p-3 bg-gradient-to-br from-bg-bg via-primary-bg-subtle to-primary-bg group-hover:via-primary-bg hover:to-primary-bg-hover rounded-sm group-hover:scale-[1.05] transition-transform duration-300 ease-out">
                        <div className="text-primary-text group-hover:text-primary-text-contrast transition-colors duration-300 ease-out">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-fg-text-contrast mb-2 group-hover:text-primary-text transition-colors duration-300 ease-out">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-fg-text group-hover:text-fg-text transition-colors duration-300 ease-out">
                          {feature.descriptionStart}
                          {feature.code && (
                            <code className="bg-bg-bg px-2 py-1 rounded-sm font-mono text-sm text-fg-text-contrast">
                              {feature.code}
                            </code>
                          )}
                          {feature.descriptionEnd}
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
