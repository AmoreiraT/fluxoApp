import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { typographyTheme } from '../../themes';
import { lightShadows } from '../../themes/shadows';
import { ThemeContext } from '../../themes/themeProvider';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password';
    error?: string | null;
    helperText?: string | null;
}

export const InputField = ({
    label,
    value,
    onChange,
    type = 'text',
    error,
    helperText,
}: InputFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { theme } = useContext(ThemeContext);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const styles = StyleSheet.create({
            container: {
                // gap: 20,
                // display: 'flex',
                width: '100%',
                // height: '50%',
                // justifyContent: 'center',
                backgroundColor: theme.colors.background, // Usar a cor de fundo do tema
                borderRadius: 25,
                overflow: 'hidden',
                flexDirection: "column",
                justifyContent: "flex-start",
                ...theme.colors.elevation,
                shadowColor: theme.extendedColors[1].color,
                shadowRadius: 30,
                shadowOpacity: 0.9,
                shadowOffset: {
                    width: 28,
                    height: 28,
                },
            boxShadow: lightShadows[3],
    
            },
            neumorphicContainer: {
                
                // backgroundColor: theme.colors.surface, // Usar a cor de superfície do tema
                paddingHorizontal: 40,
                // gap: 10,
                // paddingTop: 20,
                // paddingBottom: 6,
                display: 'flex',
                width: '100%',
                boxShadow: lightShadows[12],
                ...typographyTheme.fonts.titleMedium,
                ...theme.colors.elevation, // Adicionar sombras baseadas no tema (se definido)
            },
        });

    return (
        <View style={styles.container}>
            <PaperTextInput
                label={label}
                value={value}
                mode='flat'
                outlineColor={theme.colors.primary}
                onChangeText={onChange}
                
                secureTextEntry={type === 'password' && !showPassword}
                right={
                    type === 'password' ? (
                        <PaperTextInput.Icon
                            icon={showPassword ? 'eye-off' : 'eye'}
                            onPress={handleTogglePassword}
                        />
                    ) : undefined
                }
                style={{
                    ...styles.neumorphicContainer,
                    backgroundColor: theme.colors.surface,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 15,
                 }}
                theme={theme}
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {helperText && <Text style={{ color: 'gray' }}>{helperText}</Text>}
        </View>
    );
};