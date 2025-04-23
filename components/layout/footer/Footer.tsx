'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const email = 'silverthreadlabs@gmail.com'
  const subject = 'Business Inquiry'
  const body = 'Hello, I would like to discuss a potential project.'

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const NAV_ITEMS = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" }
  ]



  return (
    <footer className="w-full bg-[#0A0A0F] border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            {/* Left Section - Logo and Email */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                    Bloggen
                  </span>
                  <span className="text-slate-400 text-sm ml-2">
                    SEO Starter
                  </span>
                </span>
              </div>
              <button 
                onClick={handleClick}
                className="inline-flex items-center cursor-pointer space-x-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </button>
            </div>

            {/* Right Section - Navigation and Social */}
            <div className="space-y-6 md:space-y-0 md:flex md:items-center md:space-x-8">
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-4">
                {NAV_ITEMS.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2 border-l border-slate-800 pl-6">
  {/* Reddit Button */}
  <Link
    href="https://github.com/silverthreadlabs/bloggen-seo-starter"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-[2px] border border-slate-700 p-2 text-slate-400 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-200"
  >
   <Github size={16}/>
  </Link>
  <Link
    href="https://www.linkedin.com/company/106311628/admin/dashboard/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-[2px] border border-slate-700 p-2 text-slate-400 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-200"
  >
   <Linkedin size={16}/>
  </Link>
  <Link
    href="https://www.reddit.com/user/syedsaif666/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-[2px] border border-slate-700 p-2 text-slate-400 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-200"
  >
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7z"></path>
    </svg>
  </Link>

  {/* STL Button */}
  <Link
    href="https://www.silverthreadlabs.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-[2px] border border-slate-700 p-2 text-slate-400 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-200"
  >
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <g clipPath="url(#clip0_4840_3754)">
        <mask id="path-2-inside-1_4840_3754" fill="white">
          <path d="M0 0H40V40H0V0Z"></path>
        </mask>
        <path d="M0 0V-2H-5V0H0ZM40 0H42V-2H40V0ZM40 40V45H42V40H40ZM0 40H-5V45H0V40ZM0 2H40V-2H0V2ZM38 0V40H42V0H38ZM40 35H0V45H40V35ZM5 40V0H-5V40H5Z" fill="currentColor" mask="url(#path-2-inside-1_4840_3754)"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M29 32H33.5C33.7761 32 34 31.7761 34 31.5V19.5C34 19.2239 33.7761 19 33.5 19H29.5C29.2239 19 29 19.2239 29 19.5V26.5C29 26.7761 28.7761 27 28.5 27H9.5C9.22386 27 9 27.2239 9 27.5V31.5C9 31.7761 9.22386 32 9.5 32H29Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M14 5H9.5C9.22386 5 9 5.22386 9 5.5V17.5C9 17.7761 9.22386 18 9.5 18H13.5C13.7761 18 14 17.7761 14 17.5V10.5C14 10.2239 14.2239 10 14.5 10H33.5C33.7761 10 34 9.77614 34 9.5V5.5C34 5.22386 33.7761 5 33.5 5H14Z" fill="currentColor"></path>
        <rect x="17.5" y="16.25" width="7.5" height="3.75" rx="0.5" fill="currentColor"></rect>
      </g>
      <defs>
        <clipPath id="clip0_4840_3754">
          <rect width="40" height="40" rx="1" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  </Link>
</div>

            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Bloggen. Built by{" "}
              <Link 
                href="https://silverthreadlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Silverthread Labs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
