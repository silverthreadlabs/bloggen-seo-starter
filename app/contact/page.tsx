import { Mail, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata({
  path: "contact",
  description:
    "Have questions about our products, or just want to share your thoughts? We would love to hear from you!",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Keep your existing schema script */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            // Your existing JSON-LD content
          }),
        }}
      />

      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-slate-400">Contact</span>
            <Link
              href="https://bloggen.dev"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Bloggen
            </Link>
            <span className="text-slate-400">×</span>
            <Link
              href="https://silverthreadlabs.com"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Silverthread Labs
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <h2 className="text-lg text-slate-400">
            If you have any questions about the SEO template? or how to use
            Bloggen. Or just want to share your feedback? Feel free to send us an email.
          </h2>
        </div>

        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:silverthreadlabs@gmail.com"
            className="block p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 group mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Email Us
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="mt-2 text-slate-400 group-hover:text-slate-300">
                  silverthreadlabs@gmail.com
                </p>
              </div>
            </div>
          </a>
          <a
            href="mailto:bloggen.dev@gmail.com"
            className="block p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 group mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Email Us
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="mt-2 text-slate-400 group-hover:text-slate-300">
                  bloggen.dev@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <Clock className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">
                    Response Time
                  </h3>
                  <p className="text-sm text-slate-400">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">
                    Support
                  </h3>
                  <p className="text-sm text-slate-400">
                    24/7 Template Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
