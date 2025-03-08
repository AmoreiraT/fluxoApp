import React, { FC, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { lightShadows, typographyTheme } from '../../themes';
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
            // backgroundColor: theme.colors.background,
            borderRadius: 25,
            overflow: 'hidden',
            shadowColor: theme.extendedColors[1].color,
            elevation: 4,
            shadowRadius: 30,
            shadowOpacity: 0.9,
            shadowOffset: {
                width: 20,
                height: 20,
            },
            opacity: disabled ? 0.6 : 0.8,
            backgroundColor: theme.colors.background,
            filter: 'blur(20), opacity(0.6)',
            ...theme.colors.elevation,
                        boxShadow: lightShadows[12],
            
        },
        input: {
            backgroundColor: theme.colors.surface,
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 15,
            ...typographyTheme.fonts.bodyMedium,
             boxShadow: lightShadows[12],
                        elevation: disabled ? 0 : 4,
                        textTransform: 'uppercase',
            ...theme.colors.elevation,
            filter: 'blur(200), opacity(0.9)',

            shadowColor: theme.extendedColors[0].color,
            
                        shadowRadius: 60,
                        shadowOpacity: 0.9,
                        shadowOffset: {
                            width: 28,
                            height: 38,
            },
            textDecorationColor: theme.colors.onBackground,
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