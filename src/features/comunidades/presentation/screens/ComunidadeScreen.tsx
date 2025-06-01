import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const comunidadeMock = {
    nome: 'Tribo Urbana',
    descricao: 'Grupo voltado para eventos culturais, encontros de rua e ocupações artísticas.',
    banner: 'https://source.unsplash.com/800x400/?community',
    membros: [
        { id: '1', nome: 'Júlia', avatar: 'https://i.pravatar.cc/150?img=6' },
        { id: '2', nome: 'Caio', avatar: 'https://i.pravatar.cc/150?img=7' },
        { id: '3', nome: 'Rafa', avatar: 'https://i.pravatar.cc/150?img=8' },
    ],
    eventos: [
        { id: 'e1', titulo: 'Oficina de Graffiti', data: '20 Jun', local: 'Beco da Arte' },
        { id: 'e2', titulo: 'Poesia ao Ar Livre', data: '25 Jun', local: 'Praça da Liberdade' },
    ]
};

export default function ComunidadeScreen() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: comunidadeMock.banner }} style={styles.banner} />
            <View style={styles.header}>
                <Text style={styles.title}>{comunidadeMock.nome}</Text>
                <Text style={styles.description}>{comunidadeMock.descricao}</Text>
            </View>

            <Text style={styles.section}>Membros</Text>
            <FlatList
                horizontal
                data={comunidadeMock.membros}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.avatar }} style={styles.avatar} />
                )}
                contentContainerStyle={{ marginBottom: 20, paddingHorizontal: 16 }}
            />

            <Text style={styles.section}>Eventos da Comunidade</Text>
            {comunidadeMock.eventos.map(evento => (
                <View key={evento.id} style={styles.eventCard}>
                    <Text style={styles.eventTitle}>{evento.titulo}</Text>
                    <Text style={styles.eventMeta}>{evento.data} • {evento.local}</Text>
                </View>
            ))}

            <TouchableOpacity style={styles.forumButton}>
                <Text style={styles.forumText}>Entrar no Fórum</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
    },
    banner: {
        width: '100%',
        height: 180,
    },
    header: {
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#A1FFCE',
    },
    description: {
        fontSize: 14,
        color: '#CCCCCC',
        marginTop: 6,
    },
    section: {
        fontSize: 18,
        fontWeight: '600',
        color: '#A1FFCE',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderColor: '#A1FFCE',
        borderWidth: 2,
    },
    eventCard: {
        backgroundColor: '#29114D',
        marginHorizontal: 16,
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
    forumButton: {
        backgroundColor: '#FBAF5D',
        marginHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 20
    },
    forumText: {
        color: '#1E003E',
        fontSize: 16,
        fontWeight: 'bold',
    }
});