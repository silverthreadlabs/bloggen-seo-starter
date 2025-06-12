'use client';

import React from 'react';

export default function Banner() {

    return (
        <>
            <a
                className='safe-paddings dark:hover:bg-gray-new-8 hover:bg-red-500 relative z-50 flex h-9 w-full items-center justify-center gap-x-2.5 overflow-hidden bg-[#F5FBFD] px-4 py-2.5 leading-none transition-all duration-300 ease-out dark:bg-canvas-bg-subtle hover:dark:bg-canvas-bg-hover'
                href='https://neon.com/blog/neon-launchpad/'>
                <span className='tracking-extra-tight dark:text-gray-new-90 text-gray-new-15 relative z-50 truncate py-1 text-sm font-medium sm:text-[13px]'>
                    Try Neon Launchpad - A tool for instant Postgres, no login needed. The easiest way to add Postgres
                    to platforms, OSS projects, agents
                </span>

                <span className='absolute -top-2 left-1/2 -z-20 h-[106px] w-[29px] origin-center -translate-x-52 -translate-y-1/2 rotate-[226deg] rounded-[100%] bg-[linear-gradient(265.08deg,#FFFFFF_52.92%,rgba(255,255,255,0)_53.57%)] opacity-50 mix-blend-plus-lighter blur-lg transition-transform duration-500 ease-out sm:left-[35%] sm:translate-x-0 dark:opacity-100'></span>

                <span className='absolute top-1/2 left-1/2 -z-10 h-[188px] w-[60px] origin-center translate-x-[-260px] -translate-y-[43%] rotate-[226deg] rounded-[100%] bg-[linear-gradient(-45deg,_#6DC5D8_40.06%,_#6A77E8_48.11%)] opacity-70 mix-blend-plus-lighter blur-2xl transition-transform duration-500 ease-out sm:left-[35%] sm:translate-x-0 dark:opacity-100'></span>

                <span className='absolute top-1/2 left-1/2 z-0 h-[188px] w-[60px] origin-center translate-x-[-260px] -translate-y-[43%] rotate-[226deg] rounded-[100%] bg-[linear-gradient(-45deg,_#6DC5D8_40.06%,_#6A77E8_48.11%)] opacity-100 blur-2xl transition-transform duration-500 ease-out sm:left-[35%] sm:translate-x-0 dark:hidden'></span>

                {/* <img
                    alt=''
                    fetchPriority='high'
                    width='345'
                    height='35'
                    decoding='async'
                    data-nimg='1'
                    className='absolute top-0 left-1/2 z-10 -translate-x-[410px] [mask-image:linear-gradient(90deg,rgba(0,0,0,.1)_15%,black_70%,rgba(0,0,0,.1)_100%)] opacity-80 mix-blend-overlay transition-transform duration-500 ease-out sm:left-0 sm:translate-x-0 dark:opacity-100'
                    style={{ color: 'transparent' }}
                    src='/_next/static/svgs/9ee958f8b2be7694e4ce9140c14df68e.svg'
                /> */}

                <span
                    className='bg-gray-new-98 bg-opacity-40 absolute inset-x-0 bottom-0 z-10 block h-px w-full dark:hidden'
                    aria-hidden='true'></span>

                <span
                    className='bg-black-new absolute inset-x-0 bottom-0 z-10 block h-px w-full mix-blend-overlay dark:bg-white'
                    aria-hidden='true'></span>

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='none'
                    viewBox='0 0 16 16'
                    className='text-black-new relative z-50 w-[9px] shrink-0 origin-center -rotate-90 opacity-60 dark:text-white'>
                    <path stroke='currentColor' stroke-width='1.4' d='m15 5-7 7-7-7'></path>
                </svg>
            </a>
        </>
    );
}
