

// Create a reusable SilverThreadLabs logo component
const SilverthreadLabsLogo = ({ className }: { className?: string }) => (
    <svg
        width='16'
        height='16'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}>
        <g clipPath='url(#clip0_4840_3754)'>
            <mask id='path-2-inside-1_4840_3754' fill='white'>
                <path d='M0 0H40V40H0V0Z'></path>
            </mask>
            <path
                d='M0 0V-2H-5V0H0ZM40 0H42V-2H40V0ZM40 40V45H42V40H40ZM0 40H-5V45H0V40ZM0 2H40V-2H0V2ZM38 0V40H42V0H38ZM40 35H0V45H40V35ZM5 40V0H-5V40H5Z'
                fill='currentColor'
                mask='url(#path-2-inside-1_4840_3754)'></path>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M29 32H33.5C33.7761 32 34 31.7761 34 31.5V19.5C34 19.2239 33.7761 19 33.5 19H29.5C29.2239 19 29 19.2239 29 19.5V26.5C29 26.7761 28.7761 27 28.5 27H9.5C9.22386 27 9 27.2239 9 27.5V31.5C9 31.7761 9.22386 32 9.5 32H29Z'
                fill='currentColor'></path>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14 5H9.5C9.22386 5 9 5.22386 9 5.5V17.5C9 17.7761 9.22386 18 9.5 18H13.5C13.7761 18 14 17.7761 14 17.5V10.5C14 10.2239 14.2239 10 14.5 10H33.5C33.7761 10 34 9.77614 34 9.5V5.5C34 5.22386 33.7761 5 33.5 5H14Z'
                fill='currentColor'></path>
            <rect x='17.5' y='16.25' width='7.5' height='3.75' rx='0.5' fill='currentColor'></rect>
        </g>
        <defs>
            <clipPath id='clip0_4840_3754'>
                <rect width='40' height='40' rx='1' fill='white'></rect>
            </clipPath>
        </defs>
    </svg>
);
export default SilverthreadLabsLogo;
