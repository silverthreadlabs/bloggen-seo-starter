'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook for responsive media queries
 * @param query The media query to match against (e.g., '(max-width: 768px)')
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Initial check
        const media = window.matchMedia(query);
        setMatches(media.matches);

        // Create event listener function
        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        // Add listener
        media.addEventListener('change', listener);

        // Clean up
        return () => {
            media.removeEventListener('change', listener);
        };
    }, [query]);

    return matches;
}
