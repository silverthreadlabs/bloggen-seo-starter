

import Link from 'next/link';

export default function NotFound() {
    return (
        <section className='flex w-full min-h-screen items-center justify-center px-4'>
            <div className='text-center'>
                <div className='space-y-6'>
                    {/* Error Code */}
                    <div className='relative'>
                        <h1 className='text-[8rem] font-bold text-canvas-text-contrast'>404</h1>
                        {/* <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='from-canvas-bg-subtle via-canvas-bg bg-gradient-to-tr bg-clip-text text-2xl font-semibold text-transparent'>
                                Page Not Found
                            </span>
                        </div> */}
                </div>

                    {/* Description */}
                    <p className='text-lg text-slate-400'>
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    {/* Back to Home Button */}
                    <div className='pt-4'>
                        <Link
                            href='/'
                            className='group inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-8 py-3 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-700'>
                            <svg
                                className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M10 19l-7-7m0 0l7-7m-7 7h18'
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
