import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const mockStories = [
    {
        id: '1',
        user: 'Clara',
        avatar: 'https://i.pravatar.cc/150?img=18',
        image: 'https://source.unsplash.com/400x700/?concert,night'
    },
    {
        id: '2',
        user: 'Zé',
        avatar: 'https://i.pravatar.cc/150?img=20',
        image: 'https://source.unsplash.com/400x700/?festival,people'
    }
];

export default function StoriesOnMap() {
    const [selectedStory, setSelectedStory] = useState<{ id: string; user: string; avatar: string; image: string; } | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stories Próximos</Text>
            <FlatList
                horizontal
                data={mockStories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedStory(item)}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />

            <Modal visible={!!selectedStory} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <Image source={{ uri: selectedStory?.image }} style={styles.storyImage} />
                    <TouchableOpacity onPress={() => setSelectedStory(null)} style={styles.closeButton}>
                        <Text style={styles.closeText}>✕</Text>
                    </TouchableOpacity>
                    <Text style={styles.storyUser}>{selectedStory?.user}</Text>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E003E',
        paddingTop: 40,
    },
    title: {
        color: '#A1FFCE',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 16
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#FBAF5D',
        borderWidth: 2,
        marginRight: 12
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: '#1E003E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyImage: {
        width: '90%',
        height: '70%',
        borderRadius: 16,
        marginBottom: 20
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: '#FBAF5D',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    closeText: {
        fontSize: 18,
        color: '#1E003E'
    },
    storyUser: {
        color: '#A1FFCE',
        fontWeight: 'bold',
        fontSize: 16
    }
});
