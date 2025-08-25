import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const mockPosts = [
    { id: '1', author: 'Lia', content: 'Qual o horário do show principal?' },
    { id: '2', author: 'Leo', content: 'Vai ter espaço pra food truck?' },
    { id: '3', author: 'Ana', content: 'Partiu chegar cedo e marcar lugar! 🎶' },
];

export default function ForumScreen() {
    const [posts, setPosts] = useState(mockPosts);
    const [input, setInput] = useState('');

    const postMessage = () => {
        if (input.trim().length === 0) return;
        const newPost = {
            id: Date.now().toString(),
            author: 'Você',
            content: input
        };
        setPosts([newPost, ...posts]);
        setInput('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.postCard}>
                        <Text style={styles.author}>{item.author}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
                )}
                contentContainerStyle={{ padding: 16 }}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="Escreva algo..."
                    placeholderTextColor="#aaa"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={postMessage}>
                    <Text style={styles.buttonText}>Postar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E003E'
    },
    postCard: {
        backgroundColor: '#29114D',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12
    },
    author: {
        fontSize: 13,
        color: '#A1FFCE',
        fontWeight: 'bold'
    },
    content: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 4
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#333',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: '#29114D',
        color: '#fff',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginRight: 8
    },
    button: {
        backgroundColor: '#FBAF5D',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    buttonText: {
        color: '#1E003E',
        fontWeight: 'bold',
        fontSize: 14
    }
});
