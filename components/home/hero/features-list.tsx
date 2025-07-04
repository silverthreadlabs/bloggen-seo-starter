import { FaPalette, FaMoon, FaCog } from 'react-icons/fa';

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
        icon: <FaPalette className='h-5 w-5' />,
        title: 'Radix Color Palette',
        descriptionStart: 'Built-in, flexible, and accessible color system for beautiful, consistent UIs.'
    },
    {
        icon: <FaMoon className='h-5 w-5' />,
        title: 'Dark Mode Built In',
        descriptionStart: 'One-click toggle, fully themed for a seamless dark mode experience.'
    },
    {
        icon: <FaCog className='h-5 w-5' />,
        title: 'One-Step Setup',
        descriptionStart: 'Configure once, scale infinitely—effortless setup for any project.'
    }
];
export default features;
