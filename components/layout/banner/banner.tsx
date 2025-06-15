'use client';

import React from 'react';
import Link from 'next/link';

export default function Banner() {

    return (
        <>
            <Link
                className='safe-paddings hover:bg-canvas-bg-hover relative z-50 flex h-9 w-full items-center justify-center gap-x-2.5 overflow-hidden bg-canvas-bg-subtle px-4 py-2.5 leading-none transition-all duration-300 ease-out dark:bg-canvas-bg-subtle hover:dark:bg-canvas-bg-hover'
                href='https://www.bloggen.dev/'
                target='_blank'>
                <span className='tracking-extra-tight text-canvas-on-canvas relative z-50 truncate py-1 text-sm font-medium sm:text-[13px]'>
                    Try bloggen.dev - A tool for AI-powered blog content generation and SEO optimization. Create, publish and grow your blog
                </span>

                <span className='absolute -top-2 left-1/2 -z-20 h-[106px] w-[29px] origin-center -translate-x-52 -translate-y-1/2 rotate-[226deg] rounded-[100%] bg-[linear-gradient(265.08deg,#FFFFFF_52.92%,rgba(255,255,255,0)_53.57%)] opacity-50 mix-blend-plus-lighter blur-lg transition-transform duration-500 ease-out sm:left-[35%] sm:translate-x-0 dark:opacity-100'></span>

                <span className='absolute top-1/2 left-1/2 -z-10 h-[188px] w-[60px] origin-center translate-x-[-260px] -translate-y-[43%] rotate-[226deg] rounded-[100%] bg-[linear-gradient(-45deg,_#6DC5D8_40.06%,_#6A77E8_48.11%)] opacity-70 mix-blend-plus-lighter blur-2xl transition-transform duration-500 ease-out sm:left-[35%] sm:translate-x-0 dark:opacity-100'></span>

                <span className='absolute top-1/2 left-1/2 z-0 h-[188px] w-[60px] origin-center translate-x-[-260px] -translate-y-[43%] rotate-[226deg] rounded-[100%] bg-[linear-gradient(-45deg,_#6DC5D8_40.06%,_#6A77E8_48.11%)] opacity-100 blur-2xl transition-transform duration-500 ease-out sm:left-[35%] sm:translate-x-0 dark:hidden'></span>

                <span
                    className='bg-canvas-bg-subtle bg-opacity-40 absolute inset-x-0 bottom-0 z-10 block h-px w-full dark:hidden'
                    aria-hidden='true'></span>
                <span
                    className='bg-canvas-bg-subtle absolute inset-x-0 bottom-0 z-10 block h-px w-full mix-blend-overlay dark:bg-canvas-on-canvas'
                    aria-hidden='true'></span>

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='none'
                    viewBox='0 0 16 16'
                    className='text-canvas-on-canvas relative z-50 w-[9px] shrink-0 origin-center -rotate-90 opacity-60'>
                    <path stroke='currentColor' strokeWidth='1.4' d='m15 5-7 7-7-7'></path>
                </svg>
            </Link>
        </>
    );
}
