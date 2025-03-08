import { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from "../../themes/themeProvider";

interface ContainerNeomorphicProps {
    children: React.ReactNode;
}

export const ContainerNeomorphic = ({ children }: ContainerNeomorphicProps) => {
    const { theme } = useContext(ThemeContext);

    // Criar estilos dinamicamente usando as propriedades do tema
    const styles = StyleSheet.create({
        container: {
            // gap: 20,
            // display: 'flex',
            width: '100%',
            // height: '50%',
            // justifyContent: 'center',
            backgroundColor: theme.colors.background, // Usar a cor de fundo do tema
            borderRadius: 30,
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
            boxShadow: '-2px -20px 20px 10px #D1D9E6',

        },
        neumorphicContainer: {
            
            // backgroundColor: theme.colors.surface, // Usar a cor de superfície do tema
            paddingHorizontal: 40,
            gap: 20,
            paddingTop: 20,
            paddingBottom: 60,
            display: 'flex',
            width: '100%',
            ...theme.colors.elevation, // Adicionar sombras baseadas no tema (se definido)
            shadowColor: theme.extendedColors[1].color,
            shadowRadius: 30,
            shadowOpacity: 0.9,
            shadowOffset: {
                width: 28,
                height: 28,
            },
            boxShadow: '-2px -20px 20px 10px #D1D9E6',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.neumorphicContainer}>
                {children}
            </View>
        </View>
    );
};
