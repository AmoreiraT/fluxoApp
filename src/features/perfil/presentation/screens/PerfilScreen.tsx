import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const user = {
    name: 'Luna Rivera',
    bio: 'Amante de música ao vivo e eventos culturais urbanos.',
    avatar: 'https://i.pravatar.cc/300',
    communities: [
        { id: '1', name: 'Lend Rems', description: 'Festivais de rock alternativo' },
        { id: '2', name: 'Skënd Alive', description: 'Cultura urbana e encontros visuais' },
    ],
};

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Minhas Comunidades</Text>
                <FlatList
                    data={user.communities}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.communityCard}>
                            <Text style={styles.communityName}>{item.name}</Text>
                            <Text style={styles.communityDescription}>{item.description}</Text>
                        </View>
                    )}
                />
            </View>

            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#A1FFCE',
        marginBottom: 12,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    bio: {
        fontSize: 14,
        color: '#CCCCCC',
        textAlign: 'center',
        marginTop: 4,
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#A1FFCE',
        marginBottom: 10,
    },
    communityCard: {
        backgroundColor: '#1E003E',
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6,
    },
    communityName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    communityDescription: {
        color: '#AAAAAA',
        fontSize: 14,
        marginTop: 4,
    },
    editButton: {
        marginTop: 20,
        backgroundColor: '#FBAF5D',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#1E003E',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
