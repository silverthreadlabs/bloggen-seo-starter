// All available colors
export const allColors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky'
];

// Canvas recommended colors
export const canvasRecommendedColors = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];

// Primary color recommendations based on canvas color
export const primaryRecommendations = {
  gray: [],
  mauve: ['tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet'],
  slate: ['iris', 'indigo', 'blue', 'sky', 'cyan'],
  sage: ['mint', 'teal', 'jade', 'green'],
  olive: ['grass', 'lime'],
  sand: ['yellow', 'amber', 'orange', 'brown'],
  default: []
} as const;

// Color categories
export const colorCategories = {
  success: ['green', 'teal', 'jade', 'grass', 'mint'],
  warning: ['yellow', 'amber', 'orange'],
  alert: ['red', 'ruby', 'tomato', 'crimson'],
  info: ['blue', 'indigo', 'sky', 'cyan']
} as const;

// Semantic suffixes
export const semanticSuffixes = [
  'base',
  'bg-subtle',
  'bg',
  'bg-hover',
  'bg-active',
  'line',
  'border',
  'border-hover',
  'solid',
  'solid-hover',
  'text',
  'text-contrast'
] as const;

// Cool colors that use black for on-color
// export const coolColors = ['sky', 'mint', 'lime', 'yellow', 'amber'] as const;

// Cool colours that use black for on-colour
export const coolColors: readonly string[] = [
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
];
