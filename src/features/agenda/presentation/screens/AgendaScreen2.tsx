import React, { useState } from 'react';
import {
    Alert,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const mockEvents = {
    confirmedEvents: [
        {
            id: 1,
            titulo: 'Reunião de Planejamento',
            data: '2025-06-01 09:00',
            local: 'Sala 12'
        },
        {
            id: 2,
            titulo: 'Workshop de UX',
            data: '2025-06-03 14:00',
            local: 'Auditório Principal'
        }
    ],
    suggestedEvents: [
        {
            id: 101,
            titulo: 'Palestra Tech Trends',
            data: '2025-06-10 17:00',
            local: 'Sala 5'
        },
        {
            id: 102,
            titulo: 'Encontro de Networking',
            data: '2025-06-12 19:00',
            local: 'Lobby do Prédio 3'
        }
    ]
};

interface IEvent {
    id: number;
    titulo: string;
    data: string;
    local: string;
}
export default function AgendaScreen({ navigation }: { navigation: any }) {
    const [confirmedEvents, setConfirmedEvents] = useState(mockEvents.confirmedEvents);
    const [suggestedEvents, setSuggestedEvents] = useState(mockEvents.suggestedEvents);

    const confirmEvent = (event: IEvent) => {
        setSuggestedEvents(prev => prev.filter(e => e.id !== event.id));
        setConfirmedEvents(prev => [...prev, event]);
        Alert.alert('Presença confirmada', `Você confirmou presença em: ${event.titulo}`);
    };


    const openEventDetails = (event: IEvent): void => {
        Alert.alert('Detalhes do Evento', `Evento: ${event.titulo}`);
    };

    const renderItem = ({ item, section }: { item: { id: number; titulo: string; data: string; local: string; }, section: { title: string; data: { id: number; titulo: string; data: string; local: string; }[] } }) => (
        <TouchableOpacity style={styles.card} onPress={() => openEventDetails(item)}>
            <View style={styles.cardInner}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Text style={styles.subtitle}>{item.data}</Text>
                <Text style={styles.location}>{item.local}</Text>
                {section.title === 'Sugeridos' && (
                    <TouchableOpacity style={styles.button} onPress={() => confirmEvent(item)}>
                        <Text style={styles.buttonText}>Confirmar Presença</Text>
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: 'Confirmados', data: confirmedEvents },
                    { title: 'Sugeridos', data: suggestedEvents }
                ]}
                keyExtractor={item => String(item.id)}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
        padding: 16
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#A1FFCE',
        marginTop: 16,
        marginBottom: 8
    },
    card: {
        backgroundColor: '#1E003E',
        borderRadius: 12,
        shadowColor: '#A1FFCE',
        shadowOffset: { width: -4, height: -4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 4,
        marginVertical: 10
    },
    cardInner: {
        backgroundColor: '#1E003E',
        borderRadius: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        padding: 16
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 4
    },
    subtitle: {
        fontSize: 14,
        color: '#CCCCCC',
        marginBottom: 2
    },
    location: {
        fontSize: 14,
        color: '#CCCCCC',
        marginBottom: 12
    },
    button: {
        alignSelf: 'flex-start',
        backgroundColor: '#FBAF5D',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4
    },
    buttonText: {
        color: '#1E003E',
        fontWeight: '600',
        fontSize: 14
    }
});
