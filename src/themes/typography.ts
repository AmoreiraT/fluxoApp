// typography.ts
import {
    Lato_400Regular
} from '@expo-google-fonts/lato';
import { MD3Typescale } from 'react-native-paper/lib/typescript/types';

export interface TypographyTheme {
    fonts: MD3Typescale;
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
}


export const typographyTheme: TypographyTheme = {
    fonts: {
        default: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontWeight: '300',
            letterSpacing: 0,
        },
        displayLarge : {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 96,
            letterSpacing: -1.5,
            lineHeight: 112,
            fontWeight: '300',
        },
        displayMedium: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 60,
            fontWeight: '300',
            lineHeight: 72,
            letterSpacing: -0.5,

        },
        displaySmall: {
            
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 48,
            fontWeight: '300',
            lineHeight: 56,
            letterSpacing: 0,

        },

        headlineLarge: {   
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 34,
            fontWeight: '300',
            lineHeight: 40,
            letterSpacing: 0,

        },
        headlineMedium: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 24,
            fontWeight: '300',
            lineHeight: 28,
            letterSpacing: 0,

        },
        headlineSmall: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 20,
            fontWeight: '300',
            lineHeight: 24,
            letterSpacing: 0,

        },

        titleLarge: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 20,
            fontWeight: '300',
            lineHeight: 24,
            letterSpacing: 0,

        },
        titleMedium: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 16,
            fontWeight: '300',
            lineHeight: 20,
            letterSpacing: 0,

        },
        titleSmall: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 14,
            fontWeight: '300',
            lineHeight: 20,
            letterSpacing: 0,

        },

        labelLarge: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 12,
            fontWeight: '300',
            lineHeight: 16,
            letterSpacing: 0,

        },
        labelMedium: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 10,
            fontWeight: '300',
            lineHeight: 16,
            letterSpacing: 0,

        },
        labelSmall: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 8,
            fontWeight: '300',
            lineHeight: 12,
            letterSpacing: 0,
        },

        bodyLarge: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 16,
            fontWeight: '300',
            lineHeight: 24,
            letterSpacing: 0,

        },
        bodyMedium: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 14,
            fontWeight: '300',
            lineHeight: 20,
            letterSpacing: 0,

        },
        bodySmall: {
            fontFamily: `${Lato_400Regular}, sans-serif`,
            fontSize: 12,
            fontWeight: '300',
            lineHeight: 16,
            letterSpacing: 0,

        },
    },
    typography: {
        // fontFamily: `${Lato_400Regular}, sans-serif`,
        // fontSize: 14,
        // fontWeightLight: 300,
        // fontWeightRegular: 400,
        // fontWeightMedium: 500,
        // fontWeightBold: 700,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: '3rem',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: '2.5rem',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: '2.25rem',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: '2rem',
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: '1.75rem',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: '1.5rem',
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.5rem',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.375rem',
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.5rem',
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.375rem',
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.375rem',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1.25rem',
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1.25rem',
            textTransform: 'uppercase',
        },
    },
};