import { DefaultTheme } from 'react-native-paper';
import { CustomTheme } from '../@types/theme';
import { themeConfig } from './themeConfig';
import { typographyTheme } from './typography';

export interface ThemeMode {
    mode: 'light' | 'dark';
    contrast: 'high' | 'medium' | 'default';
}

export const getThemeScheme = (mode: 'light' | 'dark', contrast: 'high' | 'medium' | 'default') => {
    if (mode === 'light') {
        switch (contrast) {
            case 'high': return themeConfig.schemes['light-high-contrast'];
            case 'medium': return themeConfig.schemes['light-medium-contrast'];
            default: return themeConfig.schemes.light;
        }
    } else {
        switch (contrast) {
            case 'high': return themeConfig.schemes['dark-high-contrast'];
            case 'medium': return themeConfig.schemes['dark-medium-contrast'];
            default: return themeConfig.schemes.dark;
        }
    }
};

export const customTheme: CustomTheme =  {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...themeConfig.schemes.light,
        'primary-fixed': themeConfig.schemes.light['primaryFixed'],
        'on-primary-fixed': themeConfig.schemes.light['onPrimaryFixed'],
        'primary-fixed-dim': themeConfig.schemes.light['primaryFixedDim'],
        'on-primary-fixed-variant': themeConfig.schemes.light['onPrimaryFixedVariant'],
        'secondary-fixed': themeConfig.schemes.light['secondaryFixed'],
        'on-secondary-fixed': themeConfig.schemes.light['onSecondaryFixed'],
        'secondary-fixed-dim': themeConfig.schemes.light['secondaryFixedDim'],
        'on-secondary-fixed-variant': themeConfig.schemes.light['onSecondaryFixedVariant'],
        'tertiary-fixed': themeConfig.schemes.light['tertiaryFixed'],
        'on-tertiary-fixed': themeConfig.schemes.light['onTertiaryFixed'],
        'tertiary-fixed-dim': themeConfig.schemes.light['tertiaryFixedDim'],
        'on-tertiary-fixed-variant': themeConfig.schemes.light['onTertiaryFixedVariant'],
        'surface-dim': themeConfig.schemes.light['surfaceDim'],
        'surface-bright': themeConfig.schemes.light['surfaceBright'],
        'surface-container-lowest': themeConfig.schemes.light['surfaceContainerLowest'],
        'surface-container-low': themeConfig.schemes.light['surfaceContainerLow'],
        'surface-container': themeConfig.schemes.light['surfaceContainer'],
        'surface-container-high': themeConfig.schemes.light['surfaceContainerHigh'],
        'surface-container-highest': themeConfig.schemes.light['surfaceContainerHighest'],
        'surface-tint': themeConfig.schemes.light['surfaceTint'],
        'inverse-primary': themeConfig.schemes.light['inversePrimary'],
        'primary-container': themeConfig.schemes.light['primaryContainer'],
        'on-primary-container': themeConfig.schemes.light['onPrimaryContainer'],
        'secondary-container': themeConfig.schemes.light['secondaryContainer'],
        'on-secondary-container': themeConfig.schemes.light['onSecondaryContainer'],
        'tertiary-container': themeConfig.schemes.light['tertiaryContainer'],
        'on-tertiary-container': themeConfig.schemes.light['onTertiaryContainer'],
        'error-container': themeConfig.schemes.light['errorContainer'],
        'on-error-container': themeConfig.schemes.light['onErrorContainer'],
        'inverse-surface': themeConfig.schemes.light['inverseSurface'],
        'inverse-on-surface': themeConfig.schemes.light['inverseOnSurface'],
  
        surfaceDisabled: themeConfig.schemes.light.onSurface || 'rgba(28, 27, 31, 0.12)',
        onSurfaceDisabled: themeConfig.schemes.light.onSurfaceVariant,
     
        backdrop: '',
        elevation: {
            level0: themeConfig.schemes.light.surfaceContainer,
            level1: themeConfig.schemes.light.surfaceContainerLow,
            level2: themeConfig.extendedColors[0].color,
            level3: themeConfig.extendedColors[1].color,
            level4: themeConfig.extendedColors[2].color,
            level5: themeConfig.extendedColors[3].color,
        }
    },
    typography: {
        h1: typographyTheme.typography.h1,
        h2: typographyTheme.typography.h2,
        h3: typographyTheme.typography.h3,
        h4: typographyTheme.typography.h4,
        h5: typographyTheme.typography.h5,
        h6: typographyTheme.typography.h6,
        subtitle1: typographyTheme.typography.subtitle1,
        subtitle2: typographyTheme.typography.subtitle2,
        body1: typographyTheme.typography.body1,
        body2: typographyTheme.typography.body2,
        button: typographyTheme.typography.button,
        caption: typographyTheme.typography.caption,
        overline: typographyTheme.typography.overline,
    },
    palettes: themeConfig.palettes,
    coreColors: themeConfig.coreColors,
    extendedColors: themeConfig.extendedColors,
    schemes: themeConfig.schemes,
};