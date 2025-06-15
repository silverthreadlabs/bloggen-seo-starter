import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { FaGithub, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';

const SocialLink = ({ href, ariaLabel, icon }: { href: string; ariaLabel: string; icon: React.ReactNode }) => (
    <Link href={href} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel} className='group'>
        <Button
            color='neutral'
            variant='ghost'
            iconOnly
            aria-label={ariaLabel}
            name={ariaLabel}
            leadingIcon={icon as React.ReactElement}
        />
    </Link>
);

const SocialLinks = () => {
    return (
        <div className='flex space-x-1'>
            <SocialLink
                href='https://github.com/silverthreadlabs/bloggen-seo-starter'
                ariaLabel='Visit SilverThread Labs GitHub repository'
                icon={
                    <FaGithub
                        size={20}
                        className='group-hover:text-canvas-text-contrast transition-colors duration-200'
                    />
                }
            />

            <SocialLink
                href='https://www.linkedin.com/company/106311628/admin/dashboard/'
                ariaLabel='Connect with SilverThread Labs on LinkedIn'
                icon={
                    <FaLinkedinIn
                        size={20}
                        className='group-hover:text-canvas-text-contrast transition-colors duration-200'
                    />
                }
            />

            <SocialLink
                href='https://www.reddit.com/user/syedsaif666/'
                ariaLabel='Follow SilverThread Labs on Reddit'
                icon={
                    <FaRedditAlien
                        size={20}
                        className='group-hover:text-canvas-text-contrast transition-colors duration-200'
                    />
                }
            />
        </div>
    );
};

export default SocialLinks;
