import React, { ComponentProps, memo } from 'react';

import { clsx } from 'clsx';

type TRenderAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'code';

type TProps = ComponentProps<'h1'> & { renderAs?: TRenderAs };

// Define Tailwind class groups for properties to override
const sizeClasses = [
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl'
];

const textColorVariants = {
    default: [
        'text-canvas-text',
        'text-canvas-text-contrast',
        'text-canvas-solid'
    ],
    // Add more project-specific color classes if needed
};

const weightClasses = [
    'font-thin',
    'font-extralight',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',
    'font-black'
];

const leadingClasses = [
    'leading-none',
    'leading-tight',
    'leading-snug',
    'leading-normal',
    'leading-relaxed',
    'leading-loose'
];

const trackingClasses = [
    'tracking-tighter',
    'tracking-tight',
    'tracking-normal',
    'tracking-wide',
    'tracking-wider',
    'tracking-widest'
];

function getStyles(renderedAs: TRenderAs) {
    switch (renderedAs) {
        case 'h1':
            return 'font-bold text-4xl md:text-6xl leading-tight tracking-tight text-canvas-text-contrast';
        case 'h2':
            return 'font-semibold text-3xl md:text-4xl leading-snug tracking-normal text-canvas-text-contrast';
        case 'h3':
            return 'font-semibold text-2xl md:text-3xl leading-normal tracking-normal text-canvas-text-contrast';
        case 'h4':
            return 'font-semibold text-xl md:text-2xl leading-relaxed tracking-normal text-canvas-text-contrast';
        case 'h5':
            return 'font-semibold text-lg md:text-xl leading-relaxed tracking-normal text-canvas-text-contrast';
        case 'h6':
            return 'font-semibold text-base md:text-lg leading-normal tracking-normal text-canvas-text-contrast';
        case 'p':
            return 'font-normal text-base md:text-lg leading-relaxed tracking-normal text-canvas-text';
        case 'span':
            return 'max-w-fit font-normal text-sm md:text-base leading-normal tracking-normal text-canvas-text bg-canvas-bg px-1 inline-flex whitespace-nowrap rounded border border-canvas-line';
        case 'code':
            return 'max-w-fit font-normal text-sm md:text-base leading-normal tracking-normal text-canvas-text bg-canvas-bg px-1 inline-flex whitespace-nowrap rounded border border-canvas-line';
    }
}

function getFilteredDefaults(renderAs: TRenderAs, className: string) {
    const defaultStyles = getStyles(renderAs);
    const defaultClasses = defaultStyles.split(/\s+/);
    const userClasses = className ? className.split(/\s+/) : [];

    const properties = [
        { name: 'size', classes: sizeClasses },
        { name: 'color', classes: textColorVariants.default },
        { name: 'weight', classes: weightClasses },
        { name: 'leading', classes: leadingClasses },
        { name: 'tracking', classes: trackingClasses }
    ];

    const filteredDefaults = defaultClasses.filter((defaultClass) => {
        for (const prop of properties) {
            if (prop.classes.includes(defaultClass)) {
                const hasOverride = userClasses.some((userClass) => prop.classes.includes(userClass));
                if (hasOverride) {
                    return false; // Remove default class if user overrides this property
                }
            }
        }
        
return true; // Keep default class if no override
    });

    return filteredDefaults.join(' ');
}

function Text(props: TProps) {
    const { children, className, renderAs = 'h1', ...rest } = props;
    const Component = renderAs;

    const filteredDefaults = getFilteredDefaults(renderAs, className || '');

    return (
        <Component className={clsx(className, filteredDefaults)} {...rest}>
            {children}
        </Component>
    );
}

const HeadingMemoized = memo(Text);
export { HeadingMemoized as Text };
