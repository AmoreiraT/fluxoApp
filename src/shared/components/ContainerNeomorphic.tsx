import { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from "../../themes/themeProvider";

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

interface ContainerNeomorphicProps {
    children: React.ReactNode;
}

export const ContainerNeomorphic = ({ children }: ContainerNeomorphicProps) => {

    const {
        theme
    } = useContext(ThemeContext);

    return (
        <View style={
            {
                ...styles.container,
                backgroundColor: theme.colors.background,
                padding: 20
            }
        }>
            {children}
        </View>
    )
}
