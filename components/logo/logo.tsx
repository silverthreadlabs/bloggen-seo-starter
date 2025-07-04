import Link from 'next/link';
import { useTheme } from 'next-themes';
import LogoLight from './logo-light';
import LogoDark from './logo-dark';
import { useEffect } from 'react';

const Logo = () => {
    const { theme, systemTheme } = useTheme();
    const themeValue = theme === 'system' ? systemTheme : theme;
    function getLogo() {
        if (themeValue === 'dark') {
            console.log('dark');

            return <LogoDark />;
        }
        else {
            console.log('light');
            
            return <LogoLight />;
        }
    }
    useEffect(() => {
        console.log('theme', theme);
        console.log('themeValue', themeValue);
        getLogo();
    }, [theme]);

    return (
        <Link href='/' className='flex flex-row items-center gap-2'>
            {getLogo()}
        </Link>
    )
};
export default Logo;
