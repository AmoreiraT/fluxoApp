// src/navigation/AppNavigator.tsx
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import MainNavigation from '../shared/components/NavigationAppbar';
import { ThemeContext } from '../themes/themeProvider';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    return (

        <NavigationContainer
            theme={{
                ...DefaultTheme,
                ...theme,
                fonts: DefaultTheme.fonts,
                colors: {
                    ...DefaultTheme.colors,
                    ...theme.colors,
                    card: theme.colors.primary,
                    text: theme.colors.primary,
                    border: theme.colors.primary,
                    notification: theme.colors.primary
                }
            }}
        >

            <MainNavigation user={{
                name: 'Usuário Exemplo',
                location: 'Localização Exemplo',
                avatar: 'https://i.pravatar.cc/150?img=1'

                /* populate required User properties here */
            }} />

        </NavigationContainer>
    )
};