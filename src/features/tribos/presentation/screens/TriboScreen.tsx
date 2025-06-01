import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const mockTribo = {
    nome: 'Tribo da Batida',
    avatar: 'https://source.unsplash.com/100x100/?music',
    bio: 'Amantes de música eletrônica e festas urbanas.',
    membros: [
        { id: '1', nome: 'Duda', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: '2', nome: 'Rick', avatar: 'https://i.pravatar.cc/150?img=13' },
        { id: '3', nome: 'Val', avatar: 'https://i.pravatar.cc/150?img=14' },
    ],
    eventos: [
        { id: 'ev1', titulo: 'Sunset Beats', data: '30 Jun', local: 'Terraço Downtown' },
        { id: 'ev2', titulo: 'After das Luzes', data: '10 Jul', local: 'Club Aurora' },
    ]
};

export default function TriboScreen() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: mockTribo.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{mockTribo.nome}</Text>
            <Text style={styles.bio}>{mockTribo.bio}</Text>

            <Text style={styles.section}>Membros</Text>
            <FlatList
                horizontal
                data={mockTribo.membros}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.avatar }} style={styles.memberAvatar} />
                )}
                contentContainerStyle={{ marginBottom: 20, paddingHorizontal: 16 }}
            />

            <Text style={styles.section}>Eventos da Tribo</Text>
            {mockTribo.eventos.map(evento => (
                <View key={evento.id} style={styles.eventCard}>
                    <Text style={styles.eventTitle}>{evento.titulo}</Text>
                    <Text style={styles.eventMeta}>{evento.data} • {evento.local}</Text>
                </View>
            ))}

            <TouchableOpacity style={styles.chatButton}>
                <Text style={styles.chatText}>Entrar no Chat da Tribo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
        alignItems: 'center',
        padding: 16
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 16,
        borderWidth: 3,
        borderColor: '#A1FFCE'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#A1FFCE',
        marginTop: 12
    },
    bio: {
        fontSize: 14,
        color: '#CCCCCC',
        textAlign: 'center',
        marginVertical: 12
    },
    section: {
        fontSize: 18,
        fontWeight: '600',
        color: '#A1FFCE',
        marginTop: 24,
        marginBottom: 8,
        alignSelf: 'flex-start'
    },
    memberAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderColor: '#A1FFCE',
        borderWidth: 2,
    },
    eventCard: {
        backgroundColor: '#29114D',
        width: '100%',
        padding: 14,
        borderRadius: 14,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    eventMeta: {
        color: '#AAAAAA',
        marginTop: 4,
    },
    chatButton: {
        backgroundColor: '#FBAF5D',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginTop: 24
    },
    chatText: {
        color: '#1E003E',
        fontWeight: 'bold',
        fontSize: 14
    }
});
