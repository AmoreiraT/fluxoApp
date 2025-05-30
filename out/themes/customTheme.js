"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTheme = exports.getThemeScheme = void 0;
const react_native_paper_1 = require("react-native-paper");
const themeConfig_1 = require("./themeConfig");
const typography_1 = require("./typography");
const getThemeScheme = (mode, contrast) => {
    if (mode === 'light') {
        switch (contrast) {
            case 'high': return themeConfig_1.themeConfig.schemes['light-high-contrast'];
            case 'medium': return themeConfig_1.themeConfig.schemes['light-medium-contrast'];
            default: return themeConfig_1.themeConfig.schemes.light;
        }
    }
    else {
        switch (contrast) {
            case 'high': return themeConfig_1.themeConfig.schemes['dark-high-contrast'];
            case 'medium': return themeConfig_1.themeConfig.schemes['dark-medium-contrast'];
            default: return themeConfig_1.themeConfig.schemes.dark;
        }
    }
};
exports.getThemeScheme = getThemeScheme;
exports.customTheme = {
    ...react_native_paper_1.DefaultTheme,
    dark: false,
    colors: {
        ...themeConfig_1.themeConfig.schemes.light,
        'primary-fixed': themeConfig_1.themeConfig.schemes.light['primaryFixed'],
        'on-primary-fixed': themeConfig_1.themeConfig.schemes.light['onPrimaryFixed'],
        'primary-fixed-dim': themeConfig_1.themeConfig.schemes.light['primaryFixedDim'],
        'on-primary-fixed-variant': themeConfig_1.themeConfig.schemes.light['onPrimaryFixedVariant'],
        'secondary-fixed': themeConfig_1.themeConfig.schemes.light['secondaryFixed'],
        'on-secondary-fixed': themeConfig_1.themeConfig.schemes.light['onSecondaryFixed'],
        'secondary-fixed-dim': themeConfig_1.themeConfig.schemes.light['secondaryFixedDim'],
        'on-secondary-fixed-variant': themeConfig_1.themeConfig.schemes.light['onSecondaryFixedVariant'],
        'tertiary-fixed': themeConfig_1.themeConfig.schemes.light['tertiaryFixed'],
        'on-tertiary-fixed': themeConfig_1.themeConfig.schemes.light['onTertiaryFixed'],
        'tertiary-fixed-dim': themeConfig_1.themeConfig.schemes.light['tertiaryFixedDim'],
        'on-tertiary-fixed-variant': themeConfig_1.themeConfig.schemes.light['onTertiaryFixedVariant'],
        'surface-dim': themeConfig_1.themeConfig.schemes.light['surfaceDim'],
        'surface-bright': themeConfig_1.themeConfig.schemes.light['surfaceBright'],
        'surface-container-lowest': themeConfig_1.themeConfig.schemes.light['surfaceContainerLowest'],
        'surface-container-low': themeConfig_1.themeConfig.schemes.light['surfaceContainerLow'],
        'surface-container': themeConfig_1.themeConfig.schemes.light['surfaceContainer'],
        'surface-container-high': themeConfig_1.themeConfig.schemes.light['surfaceContainerHigh'],
        'surface-container-highest': themeConfig_1.themeConfig.schemes.light['surfaceContainerHighest'],
        'surface-tint': themeConfig_1.themeConfig.schemes.light['surfaceTint'],
        'inverse-primary': themeConfig_1.themeConfig.schemes.light['inversePrimary'],
        'primary-container': themeConfig_1.themeConfig.schemes.light['primaryContainer'],
        'on-primary-container': themeConfig_1.themeConfig.schemes.light['onPrimaryContainer'],
        'secondary-container': themeConfig_1.themeConfig.schemes.light['secondaryContainer'],
        'on-secondary-container': themeConfig_1.themeConfig.schemes.light['onSecondaryContainer'],
        'tertiary-container': themeConfig_1.themeConfig.schemes.light['tertiaryContainer'],
        'on-tertiary-container': themeConfig_1.themeConfig.schemes.light['onTertiaryContainer'],
        'error-container': themeConfig_1.themeConfig.schemes.light['errorContainer'],
        'on-error-container': themeConfig_1.themeConfig.schemes.light['onErrorContainer'],
        'inverse-surface': themeConfig_1.themeConfig.schemes.light['inverseSurface'],
        'inverse-on-surface': themeConfig_1.themeConfig.schemes.light['inverseOnSurface'],
        surfaceDisabled: themeConfig_1.themeConfig.schemes.light.onSurface || 'rgba(28, 27, 31, 0.12)',
        onSurfaceDisabled: themeConfig_1.themeConfig.schemes.light.onSurfaceVariant,
        backdrop: '',
        elevation: {
            level0: themeConfig_1.themeConfig.schemes.light.surfaceContainer,
            level1: themeConfig_1.themeConfig.schemes.light.surfaceContainerLow,
            level2: themeConfig_1.themeConfig.extendedColors[0].color,
            level3: themeConfig_1.themeConfig.extendedColors[1].color,
            level4: themeConfig_1.themeConfig.extendedColors[2].color,
            level5: themeConfig_1.themeConfig.extendedColors[3].color,
        }
    },
    typography: {
        h1: typography_1.typographyTheme.typography.h1,
        h2: typography_1.typographyTheme.typography.h2,
        h3: typography_1.typographyTheme.typography.h3,
        h4: typography_1.typographyTheme.typography.h4,
        h5: typography_1.typographyTheme.typography.h5,
        h6: typography_1.typographyTheme.typography.h6,
        subtitle1: typography_1.typographyTheme.typography.subtitle1,
        subtitle2: typography_1.typographyTheme.typography.subtitle2,
        body1: typography_1.typographyTheme.typography.body1,
        body2: typography_1.typographyTheme.typography.body2,
        button: typography_1.typographyTheme.typography.button,
        caption: typography_1.typographyTheme.typography.caption,
        overline: typography_1.typographyTheme.typography.overline,
    },
    fonts: { ...typography_1.typographyTheme.fonts },
    palettes: themeConfig_1.themeConfig.palettes,
    coreColors: themeConfig_1.themeConfig.coreColors,
    extendedColors: themeConfig_1.themeConfig.extendedColors,
    schemes: themeConfig_1.themeConfig.schemes,
};
