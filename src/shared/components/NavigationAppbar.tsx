// Navigation + AppBar
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CommunitiesScreen } from '../../features/communities/presentation/screens/CommunitiesScreen';
import { EventsScreen } from '../../features/events/presentation/screens/EventsScreen';
import { MapScreen } from '../../features/maps/presentation/screens/MapScreen';
import { MessagesScreen } from '../../features/messages/presentation/screens/MessagesScreen';

interface User {
    name: string;
    location: string;
    avatar: string;
}

const Tab = createBottomTabNavigator();

const AppBar = ({ user }: { user: User }) => (
    <View style={{
        backgroundColor: '#1E003E',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    }}>
        <Image source={require('../assets/logo_fluxo.png')} style={{ width: 36, height: 36 }} />
        <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={{ color: '#A1FFCE', fontSize: 12 }}>Olá, {user.name}</Text>
            <Text style={{ color: 'white', fontWeight: '600' }}>{user.location}</Text>
        </View>
        <Image source={{ uri: user.avatar }} style={{ width: 36, height: 36, borderRadius: 18 }} />
    </View>
);

export default function MainNavigation({ user }: { user: User }) {
    return (
        <View style={{ flex: 1 }}>
            <AppBar user={user} />
            <Tab.Navigator
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
                        backgroundColor: '#1E003E',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 70,
                    },
                    tabBarActiveTintColor: '#A1FFCE',
                    tabBarInactiveTintColor: '#ccc',
                    headerShown: false
                })}
            >
                <Tab.Screen name="Mapa" component={MapScreen} />
                <Tab.Screen name="Eventos" component={EventsScreen} />
                <Tab.Screen name="Comunidades" component={CommunitiesScreen} />
                <Tab.Screen name="Mensagens" component={MessagesScreen} />
            </Tab.Navigator>
        </View>
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