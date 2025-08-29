// src/features/maps/presentation/screens/MapScreen.tsx
import Mapbox from '@rnmapbox/maps';
import { FC } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useThemeContext } from '../../../../themes/index';

Mapbox.setAccessToken('pk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNqZ2Q0MTc2ZjAwb3MzMnFrbzhldTB1ZTgifQ.UqlV5FlUH5yC68b_S2j5hg');
const mockStories = [
    { id: '1', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', avatar: 'https://i.pravatar.cc/150?img=5' },
];
interface MapScreenProps {

}

export const MapScreen: FC<MapScreenProps> = () => {
    const { theme } = useThemeContext();


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ position: 'absolute', top: 10, left: 10, right: 10, zIndex: 100 }}
                >
                    {mockStories.map(story => (
                        <Image
                            key={story.id}
                            source={{ uri: story.avatar }}
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 24,
                                marginHorizontal: 6,
                                borderWidth: 2,
                                borderColor: theme.colors['tertiary-fixed'],
                            }}
                        />
                    ))}
                </ScrollView>
                <Mapbox.MapView
                    logoEnabled={false}
                    style={{
                        flex: 1,

                    }}
                    attributionPosition={{
                        // right: 0,
                        // bottom: 0,
                        top: 0,
                        left: 0
                    }}
                    compassEnabled={true}
                    pitchEnabled={true}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    rotateEnabled={true}
                    collapsable={true}
                    
                    projection='globe'
                    shouldRasterizeIOS={true}
                    attributionEnabled={true}
                    needsOffscreenAlphaCompositing={true}
                    surfaceView={true}
                    styleURL={"mapbox://styles/amoreirat/ckft534fw0qkp19mvkq7ok7ex"}

                >
                    <Image
                        source={require('../../../../assets/pin-event.png')}
                        style={{ width: 36, height: 36 }}
                    />
                </Mapbox.MapView>
            </View>

        </SafeAreaView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    }
});