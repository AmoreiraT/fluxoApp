// AgendaScreen.tsx
import React, { useState } from 'react';
import { Alert, SectionList, StyleSheet, Text, View } from 'react-native';
import eventsData from '../../../../shared/json/eventsMock.json'; // importando os dados mockados
import EventCard from '../components/EventCard';

interface IEvent {
    id: number;
    titulo: string;
    data: string;
    local: string;
}

export default function AgendaScreen({ navigation }: { navigation: any }) {
    // Estado local com eventos confirmados e sugeridos carregados do JSON
    const [confirmedEvents, setConfirmedEvents] = useState(eventsData.confirmedEvents);
    const [suggestedEvents, setSuggestedEvents] = useState(eventsData.suggestedEvents);

    // Função para confirmar presença em um evento sugerido
    const confirmEvent = (event: IEvent) => {
        // Remover o evento da lista de sugeridos
        setSuggestedEvents(prev => prev.filter(e => e.id !== event.id));
        // Adicionar à lista de confirmados
        setConfirmedEvents(prev => [...prev, event]);
        // (Opcional: exibir feedback ao usuário)
        Alert.alert('Presença confirmada', `Você confirmou presença em: ${event.titulo}`);
    };

    // Função para abrir detalhes do evento (navegação simulada)
    const openEventDetails = (event: IEvent) => {
        // Se houver navegação configurada, usar navigate. Caso contrário, simular com Alert:
        if (navigation) {
            navigation.navigate('EventDetails', { eventId: event.id });
        } else {
            Alert.alert('Detalhes do Evento', `Evento: ${event.titulo}`);
        }
    };

    // Dados para SectionList: duas seções (Confirmados e Sugeridos)
    const sections = [
        { title: 'Confirmados', data: confirmedEvents },
        { title: 'Sugeridos', data: suggestedEvents }
    ];

    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                keyExtractor={(item) => String(item.id)}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                renderItem={({ item, section }) => (
                    <EventCard
                        event={item}
                        // se for seção "Sugeridos", passamos a função de confirmar
                        onConfirm={section.title === 'Sugeridos' ? confirmEvent : undefined}
                        onPress={() => openEventDetails(item)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E', // fundo roxo escuro
        padding: 16
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#A1FFCE', // cabeçalho de seção em verde claro para destaque
        marginTop: 16,
        marginBottom: 8
    }
});