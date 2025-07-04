export interface SelectedColors {
    canvas: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    alert: string;
    info: string;
  }
  
  export interface RadixColor {
    [key: string]: {
      value: string;
    };
  }
  
  export interface RadixColors {
    [colorName: string]: RadixColor;
  }
  
  export type ColorCategory = 'canvas' | 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'info';
  
  export type SemanticSuffix = 
    | 'base'
    | 'bg-subtle'
    | 'bg'
    | 'bg-hover'
    | 'bg-active'
    | 'line'
    | 'border'
    | 'border-hover'
    | 'solid'
    | 'solid-hover'
    | 'text'
    | 'text-contrast';
  
  export interface ColorStepResult {
    light: string;
    dark: string;
  }