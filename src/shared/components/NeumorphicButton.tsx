import React, { FC, memo, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { CustomTheme } from '../../@types/theme';
import { lightShadows, typographyTheme } from '../../themes';
import { ThemeContext } from '../../themes/themeProvider';
import { CustomLinearGradient } from './CustomLinearGradient';

interface NeumorphicButtonProps {
    title: string;
    onPress: () => void;
    mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text';
    loading?: boolean;
    icon?: IconSource;
    disabled?: boolean;
    children?: React.ReactNode;
}

const getModeColors = (mode: NeumorphicButtonProps['mode'], theme: CustomTheme) => {
    switch (mode) {
        case 'primary':
            return {
                primary80: theme.palettes.primary[80],
                primary20: theme.palettes.primary[20],
                textColor: theme.colors.onPrimary,
                buttonColor: theme.palettes.primary[80],
                borderColor: theme.palettes.primary[80],
            };
        case 'secondary':
            return {
                primary80: theme.palettes.secondary[80],
                primary20: theme.palettes.secondary[20],
                textColor: theme.colors.onSecondary,
                buttonColor: theme.palettes.secondary[80],
                borderColor: theme.palettes.secondary[80],
            };
        case 'tertiary':
            return {
                primary80: theme.palettes.tertiary[80],
                primary20: theme.palettes.tertiary[20],
                textColor: theme.colors.onTertiary,
                buttonColor: theme.palettes.tertiary[80],
                borderColor: theme.palettes.tertiary[80],
            };
        case 'outline':
            return {
                primary80: theme.palettes.primary[80],
                primary20: theme.palettes.primary[20],
                textColor: theme.palettes.primary[80],
                buttonColor: 'transparent',
                borderColor: theme.palettes.primary[80],
            };
        case 'text':
            return {
                primary80: theme.palettes.primary[80],
                primary20: theme.palettes.primary[20],
                textColor: theme.palettes.primary[80],
                buttonColor: 'transparent',
                borderColor: 'transparent',
            };
        default:
            return {
                primary80: theme.palettes.primary[80],
                primary20: theme.palettes.primary[20],
                textColor: theme.colors.onPrimary,
                buttonColor: theme.palettes.primary[80],
                borderColor: theme.palettes.primary[80],
            };
    }
};

const NeumorphicButtonComponent: FC<NeumorphicButtonProps> = memo(({
    title,
    onPress,
    mode = 'primary',
    loading = false,
    icon,
    disabled = false,
    children,
}) => {
    const { theme } = useContext(ThemeContext);
    const { primary80, primary20, textColor, buttonColor, borderColor } = getModeColors(mode, theme);

    const wrapperStyles = StyleSheet.create({
        wrapper: {
            overflow: 'hidden',
            borderRadius: 25,
            boxShadow: lightShadows[12],
            ...typographyTheme.fonts.titleMedium,
            shadowColor: theme.extendedColors[0].color,
            elevation: 4,
            shadowRadius: 30,
            shadowOpacity: 0.9,
            shadowOffset: {
                width: 2,
                height: 2,
            },
            opacity: disabled ? 0.6 : 0.8,
            // backgroundColor: buttonColor,
            filter: 'blur(200), opacity(0.9)',
            ...theme.colors.elevation,
        },
    });

    const buttonStyles = StyleSheet.create({
        button: {
            backgroundColor: primary20,
            // backfaceVisibility: 'hidden',
            paddingVertical: 8,
            paddingHorizontal: 20,
            opacity: disabled ? 0.6 : 0.8,
            boxShadow: lightShadows[12],
            elevation: disabled ? 0 : 4,
            ...theme.colors.elevation,
            shadowColor: buttonColor,
            shadowRadius: 30,
            shadowOpacity: 0.6,
            shadowOffset: { width: -28.615385055541992, height: -28.615385055541992 },

            ...(mode === 'outline' && { borderWidth: 1, borderColor }),
        },
        label: {
            color: textColor,
            textShadowColor: primary80,
            shadowOffset: { width: -28.615385055541992, height: -28.615385055541992 },

            textShadowOffset: { width: -28.615385055541992, height: -28.615385055541992 },

            ...typographyTheme.fonts.titleLarge,
            textTransform: 'uppercase',
        },
    });

    const paperButtonMode = mode === 'outline' ? 'outlined' : mode === 'text' ? 'text' : 'elevated';

    return (
        <View style={wrapperStyles.wrapper}>
        <CustomLinearGradient
                colors={[primary80, buttonColor]}
                steps={50}
                style={buttonStyles.button}
        >

            <Button
                onPress={onPress}
                mode={paperButtonMode}
                theme={theme}
                loading={loading}
                disabled={disabled}
                icon={icon}
                labelStyle={buttonStyles.label}
                style={buttonStyles.button}
                >
                {title}
            </Button>
                </CustomLinearGradient>
        </View>
    );
});

export const NeumorphicButton = NeumorphicButtonComponent;