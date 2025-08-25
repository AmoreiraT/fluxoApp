import React, { FC, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { typographyTheme } from '../../themes';
import { ThemeContext } from '../../themes/themeProvider';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password';
    error?: string | null;
    helperText?: string | null;
    leftIcon?: IconSource;
    rightIcon?: IconSource;
    disabled?: boolean;
    mode?: 'flat' | 'outlined';
    dense?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    error,
    helperText,
    leftIcon,
    rightIcon,
    disabled = false,
    mode = 'flat',
    dense = false,
}) => {
    const { theme } = useContext(ThemeContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const getIcon = (icon?: IconSource) => {
        if (!icon) return null;
        return <PaperTextInput.Icon icon={icon} />;
    };

    const styles = StyleSheet.create({
        container: {

            width: '100%',
            borderRadius: 25,
            overflow: 'hidden',
            shadowColor: theme.extendedColors[0].color,
            // elevation: 4,
            shadowRadius: 30,
            shadowOpacity: 0.8,
            shadowOffset: {
                width: 50,
                height: 20,
            },
            opacity: disabled ? 0.6 : 0.8,
            backgroundColor: theme.colors.background,
            filter: 'blur(50), opacity(0.9)',
            ...theme.colors.elevation,
            // boxShadow: lightShadows[18],
            textDecorationColor: theme.colors.outline,


        },
        input: {
            // backgroundColor: theme.colors.surface.,
            paddingHorizontal: 12,
            // paddingVertical: 5,
            // borderRadius: 10,
            ...typographyTheme.fonts.bodyMedium,
            // boxShadow: lightShadows[9],
            elevation: disabled ? 0 : 1,
            textTransform: 'uppercase',
            ...theme.colors.elevation,
            // filter: 'blur(50), opacity(0.9)',
            fontWeight: '400',
            shadowColor: theme.extendedColors[0].color,
            color: theme.colors.outline,

            shadowRadius: 60,
            shadowOpacity: 0.75,
            shadowOffset: {
                width: 58,
                height: 38,
            },
            textDecorationColor: theme.colors.outline,
            outlineColor: theme.colors.outline,
        },
        errorText: {
            color: theme.colors.error,
            ...typographyTheme.fonts.bodySmall,
        },
        helperText: {
            color: theme.colors.onSurfaceVariant,
            ...typographyTheme.fonts.bodySmall,
        },
    });

    return (
        <View style={styles.container}>
            <PaperTextInput
                label={label}
                value={value}
                onChangeText={onChange}
                secureTextEntry={type === 'password' && !showPassword}
                right={
                    type === 'password' ? (
                        <PaperTextInput.Icon
                            icon={showPassword ? 'eye-off' : 'eye'}
                            onPress={handleTogglePassword}
                        />
                    ) : rightIcon ? (
                        getIcon(rightIcon)
                    ) : undefined
                }
                left={leftIcon ? getIcon(leftIcon) : undefined}
                mode={mode}
                dense={dense}

                outlineColor={'transparent'}
                selectionColor={theme.colors.onBackground}
                disabled={disabled}
                style={styles.input}
                theme={theme}
            />
            {error ? (
                <Text style={[styles.errorText, { color: theme.colors.error }]}>
                    {error}
                </Text>
            ) : helperText ? (
                <Text style={styles.helperText}>{helperText}</Text>
            ) : null}
        </View>
    );
};