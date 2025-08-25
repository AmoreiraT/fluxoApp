import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface CustomLinearGradientProps {
    colors: [string, string]; // Suporta dois valores para simplificar
    style?: ViewStyle;
    steps?: number; // Número de camadas para simular o gradiente
    children?: React.ReactNode;
}

export const CustomLinearGradient: React.FC<CustomLinearGradientProps> = ({
    colors,
    style,
    steps = 50,
    children,
}) => {
    // Se não houver duas cores, renderiza uma view com a cor única
    if (colors.length < 2) {
        return <View style={[style, { backgroundColor: colors[0] }]}>{children}</View>;
    }

    const color1 = hexToRgb(colors[0]);
    const color2 = hexToRgb(colors[1]);

    // Gera as cores intermediárias
    const gradientColors = [];
    for (let i = 0; i < steps; i++) {
        const ratio = i / (steps - 1);
        const r = Math.round(color1.r + (color2.r - color1.r) * ratio);
        const g = Math.round(color1.g + (color2.g - color1.g) * ratio);
        const b = Math.round(color1.b + (color2.b - color1.b) * ratio);
        gradientColors.push(`rgba(${r}, ${g}, ${b}, 0.8)`);
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            mixBlendMode: 'lighten',
        }
        ,
        layer: {
            
            width: '100%',
            mixBlendMode: 'multiply',
            
        },
    });

    return (
        <View style={[style, styles.container]}>
            {gradientColors.map((bgColor, index) => (
                <View key={index} style={[styles.layer, { backgroundColor: bgColor, flex: 1 / steps }]} />
            ))}
            {/* Renderiza os filhos por cima do gradiente */}
            {children}
        </View>
    );
};


// Função auxiliar para converter hex para RGB
function hexToRgb(hex: string) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex
            .split('')
            .map((c) => c + c)
            .join('');
    }
    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
}
