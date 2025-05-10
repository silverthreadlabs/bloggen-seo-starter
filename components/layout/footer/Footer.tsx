// "use client";

// import { FaRegEnvelope } from "react-icons/fa";

// import Link from "next/link";
// import SocialLinks from "./SocialLinks";
// import Logo from "@/components/logo/Logo";

// const Footer = () => {
//   const email = "silverthreadlabs@gmail.com";
//   const subject = "Business Inquiry";
//   const body = "Hello, I would like to discuss a potential project.";

//   const handleClick = () => {
//     window.location.href = `mailto:${email}?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//   };

//   const NAV_ITEMS = [
//     { href: "/about", label: "About" },
//     { href: "/products", label: "Products" },
//     { href: "/contact", label: "Contact" },
//     { href: "/blog", label: "Blog" },
//   ];

//   return (
//     <footer className="w-full bg-[#0A0A0F] border-t border-slate-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="py-12">
//           {/* Main Footer Content */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
//             {/* Left Section - Logo and Email */}
//             <div className="space-y-4">
//               <Logo />

//               <button
//                 onClick={handleClick}
//                 className="inline-flex items-center cursor-pointer space-x-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
//               >
//                 <FaRegEnvelope className="w-4 h-4" />
//                 <span>{email}</span>
//               </button>
//             </div>

//             {/* Right Section - Navigation and Social */}
//             <div className="space-y-6 md:space-y-0 md:flex md:items-center md:space-x-8">
//               {/* Navigation Links */}
//               <div className="flex flex-wrap gap-4">
//                 {NAV_ITEMS.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               {/* Social Links */}

//               <SocialLinks />
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="mt-8 pt-8 border-t border-slate-800/50">
//             <p className="text-sm text-slate-400">
//               © {new Date().getFullYear()} Bloggen. Built by{" "}
//               <Link
//                 href="https://silverthreadlabs.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Silverthread Labs
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import Link from 'next/link';
import SocialLinks from './SocialLinks';
import Logo from '@/components/logo/logo';
import { FaRegEnvelope } from 'react-icons/fa';

// export const dynamic = 'force-static';

const EMAIL = 'silverthreadlabs@gmail.com';
const SUBJECT = 'Business Inquiry';
const BODY = 'Hello, I would like to discuss a potential project.';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A0A0F] border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            {/* Logo + Email */}
            <div className="space-y-4">
              <Logo />

              <Link
                href={MAILTO}
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <FaRegEnvelope className="w-4 h-4" />
                <span>{EMAIL}</span>
              </Link>
            </div>

            {/* Nav + Social */}
            <div className="space-y-6 md:space-y-0 md:flex md:items-center md:space-x-8">
              <nav className="flex flex-wrap gap-4">
                {NAV_ITEMS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <SocialLinks />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <p className="text-sm text-slate-400">
              © {currentYear} Bloggen. Built by{' '}
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
  );
}
