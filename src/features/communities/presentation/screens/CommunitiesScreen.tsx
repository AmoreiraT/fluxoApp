import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CommunitiesScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Tela de Comunidades</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});