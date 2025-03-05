// darkTheme.ts
import { createTheme } from '@mui/material/styles';
import { darkShadows } from './shadows';
import { themeConfig } from './themeConfig';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#B3C5FF',
            contrastText: '#002A76',
            ...themeConfig.palettes.primary,
        },
        secondary: {
            main: '#FFD5A5',
            contrastText: '#462A00',
            ...themeConfig.palettes.secondary,
        },
        tertiary: {
            main: '#EFB8C8',
            contrastText: '#4A2532',
            ...themeConfig.palettes.tertiary,
        },
        neutral: {
            main: '#11131B',
            contrastText: '#E1E2EE',
            ...themeConfig.palettes.neutral,
        },
        neutralVariant: {
            main: '#424655',
            contrastText: '#C3C6D8',
            ...themeConfig.palettes.neutralVariant,
        },
        error: {
            main: '#FFB3AD',
            contrastText: '#65090E',
        },
        background: {
            default: '#11131B',
            paper: '#141313',
        },
        text: {
            primary: '#E1E2EE',
            secondary: '#C3C6D8',
        },
    },
    shadows: darkShadows,
    typography: {
        button: {
            fontWeight: 'bold',
        },
    },
});