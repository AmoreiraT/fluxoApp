import { FC, useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { ThemeContext } from '../../themes/themeProvider';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password';
    error?: string | null;
    helperText?: string | null;
}

export const InputField: FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    error,
    helperText,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const { theme } = useContext(ThemeContext);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
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
                    ) : undefined
                }
                style={{
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