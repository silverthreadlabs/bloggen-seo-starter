import { Mail, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";
import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

export const metadata: Metadata = createPageMetadata({
  path: "contact",
  description:
    "Have questions about our products, or just want to share your thoughts? We would love to hear from you!",
});

export default function ContactPage() {
  return (
    <main 
      role="main"
      className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background"
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
            <span className="text-muted-foreground">Contact</span>
            <Link
              href="https://bloggen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/90 transition-colors"
            >
              Bloggen
            </Link>
            <span className="text-muted-foreground">×</span>
            <Link
              href="https://silverthreadlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/90 transition-colors"
            >
              Silverthread Labs
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <h2 className="text-lg text-muted-foreground">
            If you have any questions about the SEO template? or how to use
            Bloggen. Or just want to share your feedback? Feel free to send us an email.
          </h2>
        </div>

        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          {/* Email Cards */}
          <Link href="mailto:silverthreadlabs@gmail.com" className="block group mb-6">
            <Card className="hover:border-ring transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-muted rounded-sm group-hover:text-primary transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        Email Us
                      </CardTitle>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <CardDescription className="mt-2 group-hover:text-foreground">
                      silverthreadlabs@gmail.com
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="mailto:bloggen.dev@gmail.com" className="block group mb-6">
            <Card className="hover:border-ring transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-muted rounded-sm group-hover:text-primary transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        Email Us
                      </CardTitle>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <CardDescription className="mt-2 group-hover:text-foreground">
                      bloggen.dev@gmail.com
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-muted rounded-sm">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-sm mb-1">
                      Response Time
                    </CardTitle>
                    <CardDescription>
                      Within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-muted rounded-sm">
                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-sm mb-1">
                      Support
                    </CardTitle>
                    <CardDescription>
                      24/7 Template Support
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
