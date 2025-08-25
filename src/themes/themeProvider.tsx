import { createContext, useContext, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { customTheme } from './customTheme';

export const ThemeContext = createContext<{
    theme: typeof customTheme;
    toggleTheme: () => void;
    setContrast: (contrast: 'high' | 'medium' | 'default') => void;
}>({
    theme: customTheme,
    toggleTheme: () => { },
    setContrast: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [contrast, setContrast] = useState<'high' | 'medium' | 'default'>('default');

    const toggleTheme = () => {
        setMode(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setContrastLevel = (level: 'high' | 'medium' | 'default') => {
        setContrast(level);
    };

    const getThemeScheme = () => {
        if (mode === 'light') {
            switch (contrast) {
                case 'high': return customTheme.schemes['light-high-contrast'];
                case 'medium': return customTheme.schemes['light-medium-contrast'];
                default: return customTheme.schemes.light;
            }
        } else {
            switch (contrast) {
                case 'high': return customTheme.schemes['dark-high-contrast'];
                case 'medium': return customTheme.schemes['dark-medium-contrast'];
                default: return customTheme.schemes.dark;
            }
        }
    };

    const theme = {
        ...customTheme,
        dark: mode === 'dark',
        colors: {
            ...getThemeScheme(),
            ...customTheme.colors,
        },
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setContrast: setContrastLevel }}>
            <PaperProvider theme={theme}>
                {children}
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);