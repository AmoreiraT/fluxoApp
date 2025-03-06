// src/features/maps/presentation/screens/MapScreen.tsx
import Mapbox from '@rnmapbox/maps';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useThemeContext } from '../../../../themes/index.ts';

Mapbox.setAccessToken('pk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNqZ2Q0MTc2ZjAwb3MzMnFrbzhldTB1ZTgifQ.UqlV5FlUH5yC68b_S2j5hg');
interface MapScreenProps {
    // Add any props if needed
}
export const MapScreen: FC<MapScreenProps> = () => {
    const { theme } = useThemeContext();

    return (
        <View style={styles.container}>
            <Mapbox.MapView
                style={{ flex: 1 }}
                styleURL={ Mapbox.StyleURL.Street}
            />
        </View>
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