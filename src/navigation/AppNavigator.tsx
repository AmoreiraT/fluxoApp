// src/navigation/AppNavigator.tsx
// src/navigation/AppNavigator.tsx
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase_config';
import LoginScreen from '../features/auth/presentation/screens/LoginScreen';
import MainNavigation from '../shared/components/NavigationAppbar';
import { ThemeContext } from '../themes/themeProvider';

const Stack = createStackNavigator();

export const MainNavigationWrapper = () => {
    const user = {
        name: 'Usuário Exemplo',
        location: 'Localização Exemplo',
        avatar: 'https://i.pravatar.cc/150?img=1',
    };

    return <MainNavigation user={user} />;
};

export const AppNavigator: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) return null;

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
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* {!user ? (
                    <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                    <Stack.Screen
                        name="Map"
                        navigationKey='Map'
                        component={MainNavigationWrapper}
                        options={{ title: 'Mapa' }}
                    />
                )} */}
                <Stack.Screen name="Login" component={LoginScreen} />

                <Stack.Screen
                    name="Map"
                    navigationKey='Map'
                    component={MainNavigationWrapper}
                    options={{ title: 'Mapa' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};