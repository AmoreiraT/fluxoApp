import { MD3Theme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

interface CustomColors extends MD3Colors {
    'primary-fixed': string;
    'on-primary-fixed': string;
    'primary-fixed-dim': string;
    'on-primary-fixed-variant': string;
    'secondary-fixed': string;
    'on-secondary-fixed': string;
    'secondary-fixed-dim': string;
    'on-secondary-fixed-variant': string;
    'tertiary-fixed': string;
    'on-tertiary-fixed': string;
    'tertiary-fixed-dim': string;
    'on-tertiary-fixed-variant': string;
    'surface-dim': string;
    'surface-bright': string;
    'surface-container-lowest': string;
    'surface-container-low': string;
    'surface-container': string;
    'surface-container-high': string;
    'surface-container-highest': string;
    'surface-tint': string;
    'inverse-primary': string;
    'primary-container': string;
    'on-primary-container': string;
    'secondary-container': string;
    'on-secondary-container': string;
    'tertiary-container': string;
    'on-tertiary-container': string;
    'error-container': string;
    'on-error-container': string;
    'inverse-surface': string;
    'inverse-on-surface': string;

}
export interface CustomTheme extends MD3Theme {
    colors: CustomColors;
    typography: {
        h1: object;
        h2: object;
        h3: object;
        h4: object;
        h5: object;
        h6: object;
        subtitle1: object;
        subtitle2: object;
        body1: object;
        body2: object;
        button: object;
        caption: object;
        overline: object;
    };
    palettes: {
        primary: Record<string, string>;
        secondary: Record<string, string>;
        tertiary: Record<string, string>;
        neutral: Record<string, string>;
        'neutral-variant': Record<string, string>;
    };
    coreColors: {
        primary: string;
        secondary: string;
        tertiary: string;
        error: string;
        neutral: string;
    };
    extendedColors: Array<{
        name: string;
        color: string;
        description: string;
        harmonized: boolean;
    }>;
    schemes: {
        light: Record<string, string>;
        'light-medium-contrast': Record<string, string>;
        'light-high-contrast': Record<string, string>;
        dark: Record<string, string>;
        'dark-medium-contrast': Record<string, string>;
        'dark-high-contrast': Record<string, string>;
    };
}

// Augment the @react-navigation/native theme
declare module '@react-navigation/native' {
    export interface CustomTheme extends MD3Theme  { }
}