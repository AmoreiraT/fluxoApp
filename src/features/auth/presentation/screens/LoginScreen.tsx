import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ContainerNeomorphic } from '../../../../shared/components/ContainerNeomorphic';
import { InputField } from '../../../../shared/components/InputField';
import { NeumorphicButton } from '../../../../shared/components/NeumorphicButton';
import { ThemeContext } from '../../../../themes/themeProvider';
import { useLoginUseCase } from '../../domain/usecases/LoginUseCase';
import { useAuthRepository } from '../../hooks/useAuthRepository';

const HomePng = require('./../../../../assets/png/Home.png');
const LogoTipo = require('./../../../../assets/png/logoTipo.png');


const LogoSvg = require('./../../../../assets/svg/logotipo.svg');

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authRepository = useAuthRepository();
    const loginUseCase =  useLoginUseCase(authRepository);
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            // loginUseCase.execute({ email, password });
            navigation.navigate('Map');

            // Navegar para a tela principal
        } catch (error) {
            console.error(error);
        }
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',

            width: '100%',
        },
        logo: {
            flex: 1,
            justifyContent: 'center',

            width: '100%',
            height: '100%',
            ...theme.colors.elevation,
            shadowColor: theme.extendedColors[0].color,
            shadowRadius: 30,
            shadowOpacity: 0.9,
            shadowOffset: {
                width: 28,
                height: 28,
            },

        },
        loginConta: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
        },
        image: {
            flex: 1,
            justifyContent: 'flex-end',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },
    });


    return (
        <View style={styles.container}>
            <ImageBackground source={HomePng} style={styles.image} resizeMode="cover">

                <ImageBackground source={LogoTipo} style={styles.logo} resizeMode="contain"></ImageBackground>
                        
            <ContainerNeomorphic>
                    <View style={styles.loginConta}>

                    <Text style={styles.title}>Faça seu Login</Text>
                    <Text style={theme.fonts.labelLarge}>Ou crie uma conta.</Text>
                    </View>

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
                    <NeumorphicButton title="Entrar" onPress={handleLogin} mode='primary'/>
                    <NeumorphicButton title="Cadastrar" onPress={handleLogin} mode='secondary'/>

            </ContainerNeomorphic>
                </ImageBackground>
        </View>
    );
};

export default LoginScreen;