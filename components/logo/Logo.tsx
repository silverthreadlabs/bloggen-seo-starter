import React from 'react';

import Link from 'next/link';

const Logo = () => (
    <Link href='/' className='flex flex-row items-center gap-2'>
        <h5 className='text-fg-text-contrast flex bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-lg leading-relaxed font-bold font-semibold tracking-normal text-transparent md:text-xl'>
            Bloggen
        </h5>
        <p className='text-fg-text mt-0.5 flex text-sm font-bold'>SEO Starter</p>
    </Link>
);
export default Logo;
