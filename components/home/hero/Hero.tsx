"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCopy, FaCheck, FaGithub } from "react-icons/fa";
import Link from "next/link";
import features from "./features-list";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
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
              <span className="text-background text-sm font-mono tracking-widest uppercase mb-4 block">
                Powered by Bloggen
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                All your SEO
                <span className="bg-gradient-to-r from-accent via-primary to-accent-foreground text-transparent bg-clip-text">
                  {" "}
                  Already Done.
                </span>
              </h1>
              <h2 className="text-muted-foreground text-2xl mb-8 leading-relaxed">
                Ready‑to‑deploy Next.js template with MDX blogs, Dynamic OG
                images, JSON‑LD, and top Lighthouse scores.
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    target="_blank"
                    href="https://github.com/silverthreadlabs/bloggen-seo-starter"
                    className="flex-1 px-8 py-3 bg-primary hover:bg-primary/80 text-foreground rounded transition-all duration-300 transform flex items-center justify-center gap-2 group"
                    aria-label="View source code on GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Source
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    target="_blank"
                    href="https://www.bloggen.dev/"
                    className="flex-1 px-8 py-3 bg-secondary hover:bg-accent text-foreground rounded transition-all duration-300 border border-border hover:border-ring text-center"
                    aria-label="Generate my first blog post with Bloggen"
                  >
                    Generate My First Post
                  </Link>
                </div>

                <div className="flex items-center justify-between bg-card bg-opacity-50 rounded px-4 py-3 font-mono text-sm border border-border">
                  <span className="text-muted-foreground">
                    $ npx create-bloggen-app
                  </span>
                  <Button
                    onClick={handleCopy}
                    className="flex items-center cursor-pointer justify-center w-8 h-8 rounded transition-all hover:bg-muted "
                    aria-label="Copy command"
                    size="icon"
                    variant="ghost"
                  >
                    {copied ? (
                      <FaCheck className="w-4 h-4 text-green-400" />
                    ) : (
                      <FaCopy className="w-4 h-4 text-primary-forground hover:text-foreground" />
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
                <Card key={index} className="group hover:border-ring transition-all duration-300 ease-in-out backdrop-blur-sm cursor-default">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 px-6 py-3">
                      <div className="p-3 bg-gradient-to-br from-muted via-accent/20 to-accent/40 hover:via-accent/50 rounded-sm group-hover:scale-[1.05] transition-transform duration-300 ease-out">
                        <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300 ease-out">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300 ease-out">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className=" text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-out">
                          {feature.descriptionStart}
                          {feature.code && (
                            <code className="bg-card px-2 py-1 rounded-sm font-mono text-sm text-foreground">
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
