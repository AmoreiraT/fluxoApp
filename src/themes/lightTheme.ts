// lightTheme.ts
import { createTheme } from '@mui/material/styles';
import { lightShadows } from './shadows';
import { themeConfig } from './themeConfig';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0047BA',
            contrastText: '#FFFFFF',
            ...themeConfig.palettes.primary,
        },
        secondary: {
            main: '#855400',
            contrastText: '#FFFFFF',
            ...themeConfig.palettes.secondary,
        },
        tertiary: {
            main: '#7E5260',
            contrastText: '#FFFFFF',
            ...themeConfig.palettes.tertiary,
        },
        neutral: {
            main: '#FFFFFF',
            contrastText: '#191B24',
            ...themeConfig.palettes.neutral,
        },
        neutralVariant: {
            main: '#DFE2F4',
            contrastText: '#424655',
            ...themeConfig.palettes.neutralVariant,
        },
        error: {
            main: '#912C29',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FAF8FF',
            paper: '#FCF8F8',
        },
        text: {
            primary: '#191B24',
            secondary: '#424655',
        },
    },
    shadows: lightShadows,
    typography: {
        button: {
            fontWeight: 'bold',
        },
    },
});