import React from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const mockEvent = {
    title: 'Sunday Bash',
    date: 'Domingo, 16 de Junho • 18h',
    location: 'Parque Central',
    description: 'Encontro com música ao vivo, food trucks e artistas urbanos.',
    image: 'https://source.unsplash.com/800x600/?concert',
    confirmedPeople: [
        { id: '1', name: 'Lia', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: '2', name: 'Leo', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: '3', name: 'Ana', avatar: 'https://i.pravatar.cc/150?img=5' }
    ]
};

export default function EventoDetalhesScreen() {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: mockEvent.image }} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{mockEvent.title}</Text>
                <Text style={styles.date}>{mockEvent.date}</Text>
                <Text style={styles.location}>{mockEvent.location}</Text>
                <Text style={styles.description}>{mockEvent.description}</Text>

                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinText}>Entrar na Comunidade</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Participantes Confirmados</Text>
                <FlatList
                    horizontal
                    data={mockEvent.confirmedPeople}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    )}
                    contentContainerStyle={{ marginBottom: 24 }}
                />

                <Text style={styles.sectionTitle}>Chat do Evento</Text>
                <View style={styles.chatCard}>
                    <Text style={styles.chatText}>Lia: Mal posso esperar 🎉</Text>
                    <Text style={styles.chatText}>Leo: Vai ter show de quem?</Text>
                    <Text style={styles.chatText}>Ana: Partiu encontrar a galera!</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
    },
    image: {
        width: '100%',
        height: 200,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#A1FFCE',
        marginBottom: 4,
    },
    date: {
        color: '#FFFFFF',
        fontSize: 14,
        marginBottom: 2,
    },
    location: {
        color: '#CCCCCC',
        fontSize: 14,
        marginBottom: 12,
    },
    description: {
        color: '#DDDDDD',
        fontSize: 14,
        marginBottom: 20,
    },
    joinButton: {
        backgroundColor: '#FBAF5D',
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 24,
    },
    joinText: {
        color: '#1E003E',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#A1FFCE',
        marginBottom: 12,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
        borderWidth: 2,
        borderColor: '#A1FFCE',
    },
    chatCard: {
        backgroundColor: '#29114D',
        padding: 16,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
    },
    chatText: {
        color: '#fff',
        marginBottom: 6,
    },
});
