// Navigation + AppBar
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CommunitiesScreen } from '../../features/communities/presentation/screens/CommunitiesScreen';
import { EventsScreen } from '../../features/events/presentation/screens/EventsScreen';
import { MapScreen } from '../../features/maps/presentation/screens/MapScreen';
import { MessagesScreen } from '../../features/messages/presentation/screens/MessagesScreen';
import { useThemeContext } from '../../themes';

interface User {
    name: string;
    location: string;
    avatar: string;
}


interface MainNavigationProps {
    user: User;
    children?: React.ReactNode;
}

const Tab = createBottomTabNavigator();

const AppBar = ({ user }: { user: User }) => {
    const { theme } = useThemeContext();

    return (

        <View style={{
            position: 'static',
            height: 120,
            backgroundColor: theme.colors['on-primary-fixed'],
            paddingTop: 32,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            shadowColor: theme.extendedColors[2].color,
            elevation: 4,
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14
        }}>
            <Image source={require("../../assets/png/logoTipo.png")} style={{
                width: 48,
                height: 48,
                resizeMode: 'contain',
            }} />
            <View style={{
                flex: 1, marginLeft: 12, justifyContent: 'center',

                alignItems: 'flex-start', paddingVertical: 4, paddingHorizontal: 8,
                gap: 4,
            }}>
                <Text style={{ color: theme.colors['tertiary-container'], fontSize: 12 }}>Olá, {user.name}</Text>
                <Text style={{ color: 'white', fontWeight: '600' }}>{user.location}</Text>
            </View>
            <Image source={{ uri: user.avatar }} style={{
                width: 46, height: 46, borderRadius: 50,
                resizeMode: 'cover',
                borderWidth: 2, borderColor: theme.colors['primary-container']
            }} />
        </View>
    )
};

export default function MainNavigation({ user, children }: MainNavigationProps) {
    const { theme } = useThemeContext();

    return (
        <View style={{ flex: 1 }}>
            <AppBar user={user} />
            <Tab.Navigator
                // initialRouteName='Login'
                backBehavior='history'
                safeAreaInsets={{ bottom: 20 }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const icons = {
                            Mapa: 'map',
                            Eventos: 'calendar',
                            Comunidades: 'people',
                            Mensagens: 'chatbubble',
                        };
                        return <Ionicons name={icons[route.name as keyof typeof icons] as any} size={size} color={color} />;
                    },
                    tabBarStyle: {
                        backgroundColor: theme.colors['on-primary-fixed'],
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 90,
                    },
                    tabBarActiveTintColor: theme.colors['secondary-fixed'],
                    tabBarInactiveTintColor: '#ccc',
                    headerShown: false
                })}

            >
                {/* <NeomorphButton
                    onPress={() => { }}
                    title='titulo'
                >
                </NeomorphButton> */}
                <Tab.Screen name="Mapa" component={MapScreen} />
                <Tab.Screen name="Eventos" component={EventsScreen} />
                <Tab.Screen name="Comunidades" component={CommunitiesScreen} />
                <Tab.Screen name="Mensagens" component={MessagesScreen} />
            </Tab.Navigator>
        </View >
    );
}

// Neomorphic Button
export const NeomorphButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
    const [pressed, setPressed] = React.useState(false);

    return (
        <TouchableOpacity
            onPressIn={() => setPressed(true)}
            onPressOut={() => {
                setPressed(false);
                onPress();
            }}
            style={{
                backgroundColor: '#1E003E',
                paddingVertical: 14,
                paddingHorizontal: 28,
                borderRadius: 20,
                shadowColor: pressed ? 'transparent' : '#000',
                shadowOffset: { width: -6, height: -6 },
                shadowOpacity: pressed ? 0 : 0.2,
                shadowRadius: 8,
                elevation: pressed ? 0 : 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 12
            }}
        >
            <Text style={{ color: '#FBAF5D', fontWeight: '600', fontSize: 16 }}>{title}</Text>
        </TouchableOpacity>
    );
};

// Neomorphic TextField
interface NeomorphTextFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}
export const NeomorphTextField = ({ placeholder, value, onChangeText }: NeomorphTextFieldProps) => (
    <TextInput
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        style={{
            backgroundColor: '#1E003E',
            padding: 14,
            marginVertical: 10,
            borderRadius: 16,
            color: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4,
            textShadowColor: '#000',
            textShadowOffset: { width: -1, height: -1 },
            textShadowRadius: 2,
        }}
    />
);