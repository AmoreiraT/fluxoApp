// themeProvider.tsx
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from '.';

export const ThemeContext = createContext<{
    theme: typeof lightTheme | typeof darkTheme;
    toggleTheme: () => void;
}>({
    theme: lightTheme,
    toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);