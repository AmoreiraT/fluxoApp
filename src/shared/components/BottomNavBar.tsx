import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { CustomLinearGradient } from './CustomLinearGradient';

interface BottomNavBarProps {
    onTabPress: (tab: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onTabPress }) => {
    const tabs = ['map', 'calendar', 'chat', 'apps'];

    const getIconName = (tab: string) => {
        switch (tab) {
            case 'map':
                return 'map';
            case 'calendar':
                return 'calendar';
            case 'chat':
                return 'chat';
            case 'apps':
                return 'apps';
            default:
                return 'help';
        }
    };

    return (
        
      
        <CustomLinearGradient colors={['#CBD5E9D8', '#192f6a']}
            steps={5}

            style={styles.button}
        >

            <View style={styles.navBar}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                    key={index}
                    style={styles.tabButton}
                    onPress={() => onTabPress(tab)}
                    >
                        <Icon
                            source={getIconName(tab)}
                            size={24}
                            color="#4f378a"
                            />
                    </TouchableOpacity>
                ))}
            </View>
            </CustomLinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        height: 80,
        borderRadius: 40,
        // overflow: 'hidden',
        // alignItems: 'center',
        // justifyContent: 'center',
        elevation: 10,
        shadowColor: '#0000',
        shadowOffset: { width: -28.615385055541992, height: -28.615385055541992 },

        // shadowOffset: { width: 0, height: -3 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',

    },
    navBar: {
        flexDirection: 'row',
        width: '100%',

        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },
});

export default BottomNavBar;