import React, { FC, memo, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { CustomTheme } from '../../@types/theme';
import { typographyTheme } from '../../themes';
import { ThemeContext } from '../../themes/themeProvider';

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
                primary80: theme.palettes.primary[0],
                primary20: theme.palettes.primary[5],
                textColor: theme.colors.onPrimary,
                buttonColor: theme.palettes.primary[15],
                borderColor: theme.palettes.primary[0],
            };
        case 'secondary':
            return {
                primary80: theme.palettes.secondary[5],
                primary20: theme.palettes.secondary[15],
                textColor: theme.colors.onSecondary,
                buttonColor: theme.palettes.secondary[15],
                borderColor: theme.palettes.secondary[20],
            };
        case 'tertiary':
            return {
                primary80: theme.palettes.tertiary[80],
                primary20: theme.palettes.tertiary[20],
                textColor: theme.colors.onTertiary,
                buttonColor: theme.palettes.tertiary[60],
                borderColor: theme.palettes.tertiary[20],
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
            borderRadius: 25,
            backgroundColor: buttonColor,
            shadowColor: '#ffffff',
            shadowOffset: { width: -6, height: -6 },
            shadowOpacity: 1,
            shadowRadius: 6,
            elevation: 10,
        },
    });

    const buttonStyles = StyleSheet.create({
        button: {
            backgroundColor: buttonColor,
            paddingVertical: 1,
            paddingHorizontal: 8,
            mixBlendMode: 'overlay',
            borderRadius: 25,
            shadowColor: '#000000',
            shadowOffset: { width: 6, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 20,
            elevation: 8,
        },
        label: {
            color: textColor,
            textShadowColor: primary80,
            shadowOffset: { width: -28.615385055541992, height: -28.615385055541992 },

            textShadowOffset: { width: -28.615385055541992, height: -28.615385055541992 },

            ...typographyTheme.fonts.titleMedium,
            textTransform: 'uppercase',
        },
    });

    const paperButtonMode = mode === 'outline' ? 'outlined' : mode === 'text' ? 'text' : 'elevated';

    return (
        <View style={wrapperStyles.wrapper}>
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
        </View>
    );
});

export const NeumorphicButton = NeumorphicButtonComponent;