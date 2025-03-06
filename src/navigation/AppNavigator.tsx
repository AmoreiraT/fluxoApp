// src/navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../features/auth/presentation/screens/LoginScreen';
import { MapScreen } from '../features/maps/presentation/screens/MapScreen';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Mapa' }} />
        </Stack.Navigator>
    </NavigationContainer>
);