

import { FaFileAlt, FaTachometerAlt, FaTerminal } from 'react-icons/fa';

interface Feature {
    icon: React.ReactElement;
    title: string;
    descriptionStart: string;
    code?: string;
    descriptionEnd?: string;
}

// Features array with updated structure and react-icons/fa
const features: Feature[] = [
    {
        icon: <FaFileAlt className='h-5 w-5' />,
        title: 'Plug‑in MDX',
        descriptionStart: 'Bloggen AI exports MDX posts that drop straight into the ',
        code: '/content',
        descriptionEnd: ' folder - no edits, instant render.'
    },
    {
        icon: <FaTachometerAlt className='h-5 w-5' />,
        title: 'SEO All Set',
        descriptionStart:
            "Sitemap, robots.txt, JSON‑LD, dynamic OG images, and an RSS feed come pre‑wired; Bloggen's generators just fill the blanks."
    },
    {
        icon: <FaTerminal className='h-5 w-5' />,
        title: 'One‑Command Launch',
        descriptionStart: 'Run ',
        code: 'npx create-bloggen-app',
        descriptionEnd:
            ', push to Vercel, and the typed Next.js 15 template goes live—ready to absorb future Bloggen content.'
    }
];
export default features;
