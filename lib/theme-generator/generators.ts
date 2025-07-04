// import { SelectedColors, RadixColors, ColorStepResult } from './types';
// import { semanticSuffixes, coolColors } from './constants';

// /**
//  * Generates color steps for a specific category (canvas, primary, etc.)
//  * @param colorName - The radix color name (e.g., 'iris', 'gray')
//  * @param category - The semantic category (e.g., 'primary', 'canvas')
//  * @param radixColors - The radix colors data
//  * @returns Object containing light and dark CSS variables
//  */
// export const generateColorSteps = (
//   colorName: string,
//   category: string,
//   radixColors: RadixColors
// ): ColorStepResult => {
//   const lightColor = radixColors[colorName];
//   const darkColor = radixColors[`${colorName}Dark`];

//   if (!lightColor || !darkColor) {
//     return { light: '', dark: '' };
//   }

//   const lightVars = semanticSuffixes
//     .map((suffix, index) => {
//       const step = (index + 1) * 100;
//       const value = lightColor[step]?.value || '#000000';

//       return `  --${category}-${suffix}: ${value};`;
//     })
//     .join('\n');

//   const darkVars = semanticSuffixes
//     .map((suffix, index) => {
//       const step = (index + 1) * 100;
//       const value = darkColor[step]?.value || '#ffffff';

//       return `  --${category}-${suffix}: ${value};`;
//     })
//     .join('\n');

//   // Add on-category color
//   const onColor = coolColors.includes(colorName as any) ? '#000000' : '#ffffff';
//   const lightOnVar = `  --${category}-on-${category}: ${onColor};`;
//   const darkOnVar = `  --${category}-on-${category}: ${onColor};`;

//   return {
//     light: lightVars + '\n' + lightOnVar,
//     dark: darkVars + '\n' + darkOnVar
//   };
// };

// /**
//  * Generates complete CSS variables for light and dark themes
//  * @param selectedColors - Object containing selected colors for each category
//  * @param radixColors - The radix colors data
//  * @returns Complete CSS string with light and dark theme variables
//  */
// export const generateCSSVariables = (
//   selectedColors: SelectedColors,
//   radixColors: RadixColors
// ): string => {
//   let lightCSS = '/* LIGHT THEME */\n:root {\n';
//   let darkCSS = '\n/* DARK THEME */\n.dark {\n';

//   Object.entries(selectedColors).forEach(([category, colorName]) => {
//     if (colorName) {
//       const { light, dark } = generateColorSteps(colorName, category, radixColors);
//       lightCSS += `\n/* ${category.toUpperCase()} */\n${light}\n`;
//       darkCSS += `\n/* ${category.toUpperCase()} */\n${dark}\n`;
//     }
//   });

//   lightCSS += '}';
//   darkCSS += '}';

//   return lightCSS + '\n' + darkCSS;
// };

// /**
//  * Generates Tailwind CSS configuration with theme inline
//  * @param selectedColors - Object containing selected colors for each category
//  * @returns Tailwind CSS configuration string
//  */
// export const generateTailwindConfig = (selectedColors: SelectedColors): string => {
//   let config = '@layer base {\n  @theme inline {\n';

//   Object.entries(selectedColors).forEach(([category, colorName]) => {
//     if (colorName) {
//       semanticSuffixes.forEach((suffix) => {
//         config += `    --color-${category}-${suffix}: var(--${category}-${suffix});\n`;
//       });
//       config += `    --color-${category}-on-${category}: var(--${category}-on-${category});\n`;
//       config += '\n';
//     }
//   });

//   config += '  }\n}';

//   return config;
// };

import { SelectedColors, RadixColors, ColorStepResult } from './types';
import { semanticSuffixes, coolColors } from './constants';
const credit = '/* Generated with https://designrift.vercel.app */ \n';


/**
 * Generates color steps for a specific category (canvas, primary, etc.)
 * @param colorName - The radix color name (e.g., 'iris', 'gray')
 * @param category - The semantic category (e.g., 'primary', 'canvas')
 * @param radixColors - The radix colors data
 * @returns Object containing light and dark CSS variables
 */
export const generateColorSteps = (
  colorName: string,
  category: string,
  radixColors: RadixColors
): ColorStepResult => {
  const lightColor = radixColors[colorName];
  const darkColor = radixColors[`${colorName}Dark`];

  if (!lightColor || !darkColor) {
    return { light: '', dark: '' };
  }

  const lightVars = semanticSuffixes
    .map((suffix, index) => {
      const step = (index + 1) * 100;
      const value = lightColor[step]?.value || '#000000';

      return `  --${category}-${suffix}: ${value};`;
    })
    .join('\n');

  const darkVars = semanticSuffixes
    .map((suffix, index) => {
      const step = (index + 1) * 100;
      const value = darkColor[step]?.value || '#ffffff';

      return `  --${category}-${suffix}: ${value};`;
    })
    .join('\n');

  // Special handling for canvas-on-canvas
  let lightOnVar: string;
  let darkOnVar: string;

  if (category === 'canvas') {
    // For canvas: black on light, white on dark
    lightOnVar = `  --${category}-on-${category}: #fff;`;
    darkOnVar = `  --${category}-on-${category}: #000;`;
  } else {
    // For other categories: use existing logic
    const onColor = coolColors.includes(colorName as string) ? '#000000' : '#ffffff';
    lightOnVar = `  --${category}-on-${category}: ${onColor};`;
    darkOnVar = `  --${category}-on-${category}: ${onColor};`;
  }

  return {
    light: lightVars + '\n' + lightOnVar,
    dark: darkVars + '\n' + darkOnVar
  };
};

/**
 * Generates CSS variables for both v3 and v4 (same format)
 * @param selectedColors - Object containing selected colors for each category
 * @param radixColors - The radix colors data
 * @returns Complete CSS string with light and dark theme variables
 */
export const generateCSSVariables = (
  selectedColors: SelectedColors,
  radixColors: RadixColors
): string => {
  let lightCSS = '/* LIGHT THEME */\n:root {\n';
  let darkCSS = '\n/* DARK THEME */\n.dark {\n';

  Object.entries(selectedColors).forEach(([category, colorName]) => {
    if (colorName) {
      const { light, dark } = generateColorSteps(colorName, category, radixColors);
      lightCSS += `\n  /* ${category.toUpperCase()} */\n${light}\n`;
      darkCSS += `\n  /* ${category.toUpperCase()} */\n${dark}\n`;
    }
  });

  lightCSS += '}';
  darkCSS += '}';

  return credit + lightCSS + '\n' + darkCSS;
};

/**
 * Generates Tailwind CSS v3 configuration (tailwind.config.js colors section)
 * @param selectedColors - Object containing selected colors for each category
 * @returns Tailwind v3 configuration string for colors
 */
export const generateTailwindV3Config = (selectedColors: SelectedColors): string => {
  let config = 'colors: {\n';

  Object.entries(selectedColors).forEach(([category, colorName]) => {
    if (colorName) {
      semanticSuffixes.forEach((suffix) => {
        config += `  '${category}-${suffix}': 'var(--${category}-${suffix})',\n`;
      });
      config += `  '${category}-on-${category}': 'var(--${category}-on-${category})',\n`;
    }
  });

  config += '}';

  return config;
};

/**
 * Generates Tailwind CSS v4 theme extensions
 * @param selectedColors - Object containing selected colors for each category
 * @returns Tailwind v4 theme extensions string
 */
export const generateTailwindV4Theme = (selectedColors: SelectedColors): string => {
  let config = '@theme {\n';

  Object.entries(selectedColors).forEach(([category, colorName]) => {
    if (colorName) {
      semanticSuffixes.forEach((suffix) => {
        config += `  --color-${category}-${suffix}: var(--${category}-${suffix});\n`;
      });
      config += `  --color-${category}-on-${category}: var(--${category}-on-${category});\n`;
      config += '\n';
    }
  });

  config += '}';

  return config;
};

/**
 * Generates complete Tailwind CSS v4 file (CSS variables + theme extensions)
 * @param selectedColors - Object containing selected colors for each category
 * @param radixColors - The radix colors data
 * @returns Complete CSS file for Tailwind v4
 */
export const generateTailwindV4Complete = (
  selectedColors: SelectedColors,
  radixColors: RadixColors
): string => {
  const cssVariables = generateCSSVariables(selectedColors, radixColors);
  const themeExtensions = generateTailwindV4Theme(selectedColors);

  return cssVariables + '\n\n' + themeExtensions;
};