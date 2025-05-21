import React from "react";
import Link from "next/link";
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A0A0F] px-4">
      <div className="max-w-md w-full text-center">
        <div className="space-y-6">
          {/* Error Code */}
          <div className="relative">
            <h1 className="text-[8rem] font-bold text-slate-800">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Page Not Found
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 group"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
