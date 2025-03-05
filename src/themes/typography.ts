// typography.ts
import { createTheme } from '@mui/material/styles';

export const typographyTheme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
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
});