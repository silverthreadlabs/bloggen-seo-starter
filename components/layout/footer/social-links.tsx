

import Link from 'next/link';

import SilverthreadLabsLogo from '@/components/logo/silverthread-labs-logo';
import { Button } from '@/components/ui/button';

import { FaGithub, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';

const SocialLink = ({ href, ariaLabel, icon }: { href: string; ariaLabel: string; icon: React.ReactNode }) => (
    <Link href={href} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel} className='group'>
        <Button color='neutral' variant='outline' iconOnly leadingIcon={icon as React.ReactElement} />
    </Link>
);

const SocialLinks = () => {
    return (
        <div className='flex space-x-2'>
            <SocialLink
                href='https://github.com/silverthreadlabs/bloggen-seo-starter'
                ariaLabel='Visit SilverThread Labs GitHub repository'
                icon={
                    <FaGithub size={16} className='group-hover:text-fg-text-contrast transition-colors duration-200' />
                }
            />

            <SocialLink
                href='https://www.linkedin.com/company/106311628/admin/dashboard/'
                ariaLabel='Connect with SilverThread Labs on LinkedIn'
                icon={
                    <FaLinkedinIn
                        size={16}
                        className='group-hover:text-fg-text-contrast transition-colors duration-200'
                    />
                }
            />

            <SocialLink
                href='https://www.reddit.com/user/syedsaif666/'
                ariaLabel='Follow SilverThread Labs on Reddit'
                icon={<FaRedditAlien className='group-hover:text-fg-text-contrast transition-colors duration-200' />}
            />

            <SocialLink
                href='https://www.silverthreadlabs.com'
                ariaLabel='Visit SilverThread Labs website'
                icon={
                    <SilverthreadLabsLogo className='group-hover:text-fg-text-contrast transition-colors duration-200' />
                }
            />
        </div>
    );
};

export default SocialLinks;
