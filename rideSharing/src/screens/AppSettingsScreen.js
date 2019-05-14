import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../stylesheet/AccountScreenStyle';

export default class AppSettingsScreen extends Component {
    static navigationOptions = {
        title: 'App Settings',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    };
    renderMenuList = () => {
        let menuList = [];
        let menuItemName = [
            'Sound & Voice',
            'Navigation',
            'Accessibility',
            'Night Mode',
            'Share Trip',
            'Speed Limit'
        ]
        let icon = [
            'volume-high',
            'navigation',
            'human',
            'power-sleep',
            'map-marker-radius',
            'speedometer'
        ]
        for (var i = 0; i < menuItemName.length; i++) {
            menuList.push(
                <View key={i} style={styles.menuItem}>
                    <TouchableOpacity>
                        <Text style={styles.menuItemText}>
                            <Icon name={icon[i]} size={18} color="#000"/> {menuItemName[i]}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                {menuList}
            </View>
        );
    }
    render() {
        return this.renderMenuList();
    }
}
