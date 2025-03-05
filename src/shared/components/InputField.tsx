import React from 'react';
import { Text, View } from 'react-native';
import { MD2LightTheme, TextInput as PaperTextInput } from 'react-native-paper';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password';
    error?: string | null;
    helperText?: string | null;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    error,
    helperText,
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

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
                style={{ backgroundColor: 'white' }}
                theme={MD2LightTheme}
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {helperText && <Text style={{ color: 'gray' }}>{helperText}</Text>}
        </View>
    );
};