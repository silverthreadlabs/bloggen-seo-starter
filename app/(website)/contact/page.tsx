import React from "react";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";
import Link from "next/link";
import FeatureCard from "@/components/ui/feature-card";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = createPageMetadata({
  path: "contact",
  description:
    "Have questions about our products, or just want to share your thoughts? We would love to hear from you!",
});

export default function ContactPage() {
  return (
    <main 
      role="main"
      className="min-h-screen"
    >
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us",
            description: "Get in touch with our team"
          }),
        }}
      />

      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Text renderAs="p" className="text-fg-text">Contact</Text>
            <Link
              href="https://bloggen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-primary-text-contrast transition-colors"
            >
              Bloggen
            </Link>
            <span className="text-fg-text">×</span>
            <Link
              href="https://silverthreadlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-primary-text-contrast transition-colors"
            >
              Silverthread Labs
            </Link>
          </div>
          <Text renderAs="h1" className="text-4xl md:text-5xl mb-6">
            Get in Touch
          </Text>
          <Text renderAs="p" className="text-lg text-fg-text">
            If you have any questions about the SEO template? or how to use
            Bloggen. Or just want to share your feedback? Feel free to send us an email.
          </Text>
        </div>

        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          {/* Email Cards */}
          <Link href="mailto:silverthreadlabs@gmail.com" className="block group mb-6 hover:cursor-pointer">
            {/* <Card className="hover:border-fg-border-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-bg-bg rounded-sm group-hover:text-primary-text transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary-text transition-colors duration-300">
                        Email Us
                      </CardTitle>
                      <ArrowUpRight className="w-5 h-5 text-fg-text group-hover:text-primary-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <CardDescription className="mt-2 group-hover:text-fg-text">
                      silverthreadlabs@gmail.com
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card> */}
            <FeatureCard 
              icon={<Mail className="w-6 h-6" />}
              title="Email Us"
              descriptionStart="silverthreadlabs@gmail.com"
            />
          </Link>
          
          <Link href="mailto:bloggen.dev@gmail.com" className="block group mb-6 hover:cursor-pointer">
            {/* <Card className="hover:border-fg-border-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-bg-bg rounded-sm group-hover:text-primary-text transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary-text transition-colors duration-300">
                        Email Us
                      </CardTitle>
                      <ArrowUpRight className="w-5 h-5 text-fg-text group-hover:text-primary-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <CardDescription className="mt-2 group-hover:text-fg-text">
                      bloggen.dev@gmail.com
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card> */}
            <FeatureCard 
              icon={<Mail className="w-6 h-6" />}
              title="Email Us"
              descriptionStart="bloggen.dev@gmail.com"
            />
          </Link>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <Card>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 p-6">
                    <div className="p-3 bg-bg-bg rounded-sm">
                      <Clock className="w-5 h-5 text-fg-text" />
                    </div>
                    <div>
                      <CardTitle className="text-sm mb-1 text-fg-text-contrast">
                        Response Time
                      </CardTitle>
                      <CardDescription className="text-fg-text">
                        Within 24 hours
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

            <FeatureCard 
              icon={<Clock className="w-5 h-5 text-fg-text" />}
              title="Response Time"
              descriptionStart="Within 24 hours"
            />

            {/* <Card>
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-bg-bg rounded-sm">
                    <MessageSquare className="w-5 h-5 text-fg-text" />
                  </div>
                  <div>
                    <CardTitle className="text-sm mb-1 text-fg-text-contrast">
                      Support
                    </CardTitle>
                    <CardDescription className="text-fg-text">
                      24/7 Template Support
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <FeatureCard 
              icon={<MessageSquare className="w-5 h-5 text-fg-text" />}
              title="Support"
              descriptionStart="24/7 Template Support"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
