import Link from 'next/link';

const Logo = () => (
    <Link href='/' className='flex flex-row items-center gap-2'>
        <div className='flex bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-lg leading-relaxed font-bold tracking-normal text-transparent md:text-xl'>
            Bloggen
        </div>
        <div className='text-canvas-text mt-0.5 flex text-sm font-bold'>SEO Starter</div>
    </Link>
);
export default Logo;
