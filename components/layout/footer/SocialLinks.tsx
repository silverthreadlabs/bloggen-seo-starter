import Link from "next/link";
import { FaLinkedinIn, FaRedditAlien, FaGithub } from "react-icons/fa";
import SilverthreadLabsLogo from "@/components/logo/silverthread-labs-logo";

const SocialLink = ({ href, ariaLabel, icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="inline-flex items-center justify-center rounded-[2px] border border-slate-700 p-2 text-slate-400 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-200"
  >
    {icon}
  </Link>
);
const SocialLinks = () => {
  return (
    <div className="flex space-x-2">
      <SocialLink
        href="https://github.com/silverthreadlabs/bloggen-seo-starter"
        ariaLabel="Visit SilverThread Labs GitHub repository"
        icon={<FaGithub size={16} />}
      />

      <SocialLink
        href="https://www.linkedin.com/company/106311628/admin/dashboard/"
        ariaLabel="Connect with SilverThread Labs on LinkedIn"
        icon={<FaLinkedinIn size={16} />}
      />

      <SocialLink
        href="https://www.reddit.com/user/syedsaif666/"
        ariaLabel="Follow SilverThread Labs on Reddit"
        icon={<FaRedditAlien />}
      />

      <SocialLink
        href="https://www.silverthreadlabs.com"
        ariaLabel="Visit SilverThread Labs website"
        icon={<SilverthreadLabsLogo />}
      />
    </div>
  );
};

export default SocialLinks;
