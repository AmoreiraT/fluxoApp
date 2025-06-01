import { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from "../../themes/themeProvider";
import { CustomLinearGradient } from "./CustomLinearGradient";

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
            shadowColor: theme.extendedColors[0].color,
            shadowRadius: 30,
            shadowOpacity: 0.80,
            borderStartColor: theme.extendedColors[3].color,
            borderEndColor: theme.extendedColors[3].color,
            borderTopColor: theme.extendedColors[2].color,
            borderWidth: 1,
            shadowOffset: {
                width: 28,
                height: 28,
            },
            boxShadow: `-2 -15 25 10px ${theme.extendedColors[2].color}`,

        },
        neumorphicContainer: {
            
            // backgroundColor: 'transparent', // Usar a cor de superfície do tema
            paddingHorizontal: 40,
            gap: 20,
            paddingTop: 20,
            paddingBottom: 60,

            display: 'flex',
            width: '100%',
            ...theme.colors.elevation, // Adicionar sombras baseadas no tema (se definido)
            shadowColor: theme.extendedColors[0].color,
            shadowRadius: 40,
            shadowOpacity: 0.8,
            mixBlendMode: 'multiply',
            shadowOffset: {
                width: 28,
                height: 28,
            },

            // boxShadow: `-2 -20 20 10 ${theme.extendedColors[1].color}`,
        },
    });

    return (
        <View style={styles.container}>
              <CustomLinearGradient
                colors={[theme.extendedColors[0].color, theme.extendedColors[3].color]}
                steps={5}
                style={styles.container}
            >
                
            <View style={styles.neumorphicContainer}>
                {children}
            </View>
                    </CustomLinearGradient>
        </View>
    );
};
