// src/features/maps/presentation/screens/MapScreen.tsx
import Mapbox from '@rnmapbox/maps';
import { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BottomNavBar from '../../../../shared/components/BottomNavBar';
import { useThemeContext } from '../../../../themes/index';

Mapbox.setAccessToken('pk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNqZ2Q0MTc2ZjAwb3MzMnFrbzhldTB1ZTgifQ.UqlV5FlUH5yC68b_S2j5hg');
interface MapScreenProps {
    // Add any props if needed
}
export const MapScreen: FC<MapScreenProps> = () => {
    const { theme } = useThemeContext();
    const [activeTab, setActiveTab] = useState('map');

    const handleTabPress = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>

        <View style={styles.container}>
                <Mapbox.MapView
                    // zoomEnabled
                    // pitchEnabled
                    
                    // compassEnabled
                    logoEnabled={false}
                style={{ flex: 1 }}
                    styleURL={Mapbox.StyleURL.Street}
                    // localizeLabels={{
                    //     locale: 'pt-Br'
                    // }}


            />
            </View>
            <BottomNavBar onTabPress={handleTabPress} />

        </SafeAreaView>

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