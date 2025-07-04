import { primaryRecommendations } from './constants';
import type { SelectedColors } from './types';

/**
 * Gets primary color recommendations based on the selected canvas color
 * @param canvasColor - The selected canvas color
 * @returns Array of recommended primary colors
 */
export const getPrimaryRecommendations = (canvasColor: string): readonly string[] => {
  return primaryRecommendations[canvasColor as keyof typeof primaryRecommendations] || 
         primaryRecommendations.default;
};

/**
 * Gets the default selected colors state
 * @returns Default SelectedColors object
 */
export const getDefaultSelectedColors = (): SelectedColors => ({
  canvas: 'gray',
  primary: 'iris',
  secondary: '',
  success: 'green',
  warning: 'yellow',
  alert: 'red',
  info: ''
});

/**
 * Validates if a color exists in the available colors array
 * @param color - Color to validate
 * @param availableColors - Array of available colors
 * @returns Boolean indicating if color is valid
 */
export const isValidColor = (color: string, availableColors: string[]): boolean => {
  return availableColors.includes(color);
};

/**
 * Updates a specific color category in the selected colors state
 * @param selectedColors - Current selected colors state
 * @param category - Category to update
 * @param color - New color value
 * @returns Updated selected colors object
 */
export const updateSelectedColor = (
  selectedColors: SelectedColors,
  category: keyof SelectedColors,
  color: string
): SelectedColors => ({
  ...selectedColors,
  [category]: color
});