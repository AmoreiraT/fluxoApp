import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerNeomorphic } from '../../../../shared/components/ContainerNeomorphic';
import { InputField } from '../../../../shared/components/InputField';
import { NeumorphicButton } from '../../../../shared/components/NeumorphicButton';
import { useLoginUseCase } from '../../domain/usecases/LoginUseCase';
import { useAuthRepository } from '../../hooks/useAuthRepository';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authRepository = useAuthRepository();
    const loginUseCase =  useLoginUseCase(authRepository);

    const handleLogin = async () => {
        try {
            loginUseCase.execute({ email, password });
            // Navegar para a tela principal
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <ContainerNeomorphic>

            <Text style={styles.title}>Fluxo</Text>
            <InputField
                label="Email"
                value={email}
                onChange={setEmail}
                type="text"
            />
            <InputField
                label="Senha"
                value={password}
                onChange={setPassword}
                type="password"
                // secureTextEntry
            />
            <NeumorphicButton title="Entrar" onPress={handleLogin} />
            </ContainerNeomorphic>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default LoginScreen;