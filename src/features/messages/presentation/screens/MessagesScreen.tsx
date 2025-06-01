import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const mockMessages = [
    { id: '1', user: 'Lia', text: 'Ei! Já chegou no evento?' },
    { id: '2', user: 'Você', text: 'Estou chegando! 🛵' },
    { id: '3', user: 'Leo', text: 'Partiu! Bora se encontrar na entrada!' }
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState(mockMessages);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim().length === 0) return;
        setMessages([...messages, { id: Date.now().toString(), user: 'Você', text: input }]);
        setInput('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.messageBubble, item.user === 'Você' ? styles.outgoing : styles.incoming]}>
                        <Text style={styles.user}>{item.user}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#aaa"
                    onChangeText={setInput}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E',
    },
    list: {
        padding: 16,
    },
    messageBubble: {
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        maxWidth: '80%',
    },
    incoming: {
        backgroundColor: '#29114D',
        alignSelf: 'flex-start'
    },
    outgoing: {
        backgroundColor: '#FBAF5D',
        alignSelf: 'flex-end'
    },
    user: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#A1FFCE',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#333'
    },
    input: {
        flex: 1,
        backgroundColor: '#29114D',
        color: '#fff',
        padding: 10,
        borderRadius: 20,
        marginRight: 8
    },
    sendButton: {
        backgroundColor: '#A1FFCE',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    sendText: {
        color: '#1E003E',
        fontWeight: 'bold',
    },
});
