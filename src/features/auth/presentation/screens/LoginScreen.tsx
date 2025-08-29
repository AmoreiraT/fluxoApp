import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ContainerNeomorphic } from '../../../../shared/components/ContainerNeomorphic';
import { InputField } from '../../../../shared/components/InputField';
import { NeumorphicButton } from '../../../../shared/components/NeumorphicButton';
import { useThemeContext } from '../../../../themes';
import { useLoginUseCase } from '../../domain/usecases/LoginUseCase';
import { useAuthRepository } from '../../hooks/useAuthRepository';

const HomePng = require('./../../../../assets/png/Home.png');
const LogoTipo = require('./../../../../assets/png/logoTipo.png');



const LoginScreen = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const authRepository = useAuthRepository();
    const loginUseCase = useLoginUseCase(authRepository);
    const { theme } = useThemeContext();
    const navigation = useNavigation();

    const handleSendSms = async () => {
        try {
            await authRepository.sendSmsCode(phone);
            setCodeSent(true);
        } catch (e) {
            console.error(e);
        }
    };

    const handleLogin = async () => {
        try {
            loginUseCase.execute({ phone, code });
            navigation.navigate('Map');
        } catch (error) {
            console.error(error);
        }
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            // mixBlendMode: 'lighten',
            // backgroundColor: '#FBAF5D', // Adicione uma cor de fundo visível para teste

            width: '100%',
            height: '100%',
            padding: 0,
        },
        logo: {
            flex: 1,
            justifyContent: 'center',
            padding: 5,
            width: '100%',
            // height: '20%',
            marginTop: 0,
            backgroundColor: 'transparent',
            shadowColor: theme.colors.shadow,
            shadowRadius: 30,
            shadowOpacity: 0.95,
            shadowOffset: {
                width: 18,
                height: 28,
            },
        },
        loginConta: {
            display: 'flex',
            width: '100%',
            // height: '20%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
        },
        image: {
            flex: 1,
            width: '100%',
            height: '100%',
            // display: 'flex',

            // flexDirection: 'column',
            position: 'relative',
            // justifyContent: 'flex-start',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },
    });


    return (
        <View style={styles.container}>
            <ImageBackground source={HomePng} style={styles.image} resizeMode="cover">
                <View style={styles.logo}>
                    <Image source={LogoTipo} style={{ width: '100%', height: '60%', resizeMode: 'contain' }} />
                </View>
                <ContainerNeomorphic>
                    <View style={styles.loginConta}>
                        <Text style={styles.title}>Faça seu Login</Text>
                        <Text style={theme.fonts.labelLarge}>Ou crie uma conta.</Text>
                    </View>
                    {!codeSent ? (
                        <>
                            <InputField label="Telefone" value={phone} onChange={setPhone} type="text" />
                            <NeumorphicButton title="Enviar código" onPress={handleSendSms} mode='primary' />
                        </>
                    ) : (
                        <>
                            <InputField label="Código SMS" value={code} onChange={setCode} type="text" />
                            <NeumorphicButton title="Entrar" onPress={handleLogin} mode='primary' />
                        </>
                    )}
                </ContainerNeomorphic>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;