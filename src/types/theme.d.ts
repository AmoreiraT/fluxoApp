// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        primary: Palette['primary'] & {
            [key: number]: string;
        };
        secondary: Palette['secondary'] & {
            [key: number]: string;
        };
        tertiary: Palette['primary'] & {
            [key: number]: string;
        };
        neutral: Palette['primary'] & {
            [key: number]: string;
        };
        neutralVariant: Palette['primary'] & {
            [key: number]: string;
        };
    }

    interface PaletteOptions {
        primary: PaletteOptions['primary'] & {
            [key: number]: string;
        };
        secondary: PaletteOptions['secondary'] & {
            [key: number]: string;
        };
        tertiary: PaletteOptions['primary'] & {
            [key: number]: string;
        };
        neutral: PaletteOptions['primary'] & {
            [key: number]: string;
        };
        neutralVariant: PaletteOptions['primary'] & {
            [key: number]: string;
        };
    }
}