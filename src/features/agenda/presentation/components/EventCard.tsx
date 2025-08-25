// EventCard.tsx
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
interface IEvent {
    id: number;
    titulo: string;
    data: string;
    local: string;
}

interface EventCardProps {
    event: IEvent;
    onPress: (event: IEvent) => void; // função chamada ao pressionar o cartão
    onConfirm?: (event: IEvent) => void; // função opcional para confirmar presença
}

export default function EventCard({ event, onPress, onConfirm }: EventCardProps) {
    return (
        <Pressable style={styles.cardOuter} onPress={() => onPress(event)}>
            {/* View interna para aplicar a segunda sombra */}
            <View style={styles.cardInner}>
                {/* Conteúdo do cartão: título, data, local */}
                <Text style={styles.eventTitle}>{event.titulo}</Text>
                <Text style={styles.eventInfo}>{event.data} - {event.local}</Text>

                {/* Botão Confirmar Presença, aparece apenas se onConfirm foi passado */}
                {onConfirm && (
                    <Pressable style={styles.confirmButton} onPress={() => onConfirm(event)}>
                        <Text style={styles.confirmButtonText}>Confirmar Presença</Text>
                    </Pressable>
                )}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardOuter: {
        backgroundColor: '#1E003E',
        borderRadius: 12,
        // Sombra clara "superior/esquerda" para efeito neomórfico:
        shadowColor: '#A1FFCE', // usar um tom claro (verde claro da paleta como luz)
        shadowOffset: { width: -4, height: -4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        // Em Android, usamos elevation para sombra (só cria sombra escura):
        elevation: 4,
        marginVertical: 10
    },
    cardInner: {
        backgroundColor: '#1E003E',
        borderRadius: 12,
        // Sombra escura "inferior/direita":
        shadowColor: '#000000', // preto (sombra sutil no fundo escuro)
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // Preencher o espaço interno do card:
        padding: 16
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF', // texto branco para boa legibilidade no card escuro
        marginBottom: 4
    },
    eventInfo: {
        fontSize: 14,
        color: '#CCCCCC', // um cinza claro para informações secundárias (data, local)
        marginBottom: 12
    },
    confirmButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#FBAF5D', // laranja da paleta para destacar o botão
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        // Podemos aplicar uma leve sombra ao botão para mantê-lo neomórfico:
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4
        // (Opcional: em um design 100% neomórfico, o botão poderia ser também um Pressable com sombras dupla)
    },
    confirmButtonText: {
        color: '#1E003E',
        fontWeight: '600',
        fontSize: 14
    }
});