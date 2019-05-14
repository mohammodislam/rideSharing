import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../stylesheet/AccountScreenStyle';

export default class AccountScreen extends Component {
    static navigationOptions = {
        title: 'Accounts',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    };
    renderMenuList = () => {
        let menuList = [];
        let menuItemName = ['Vehicles','Documents', 'Payment', 'Edit Info', 'Report app issues', 'About', 'App Settings', 'Sign out']
        let icon = ['car-hatchback','file-document-box-multiple-outline', 'credit-card', 'information-outline', 'bug', 'information-outline', 'settings', 'logout']
        let screens = [
          'Documents', // Vehicles
          'Documents', // Documents
          'Payment', // Payment
          'EditInfo', // Edit Info
          'Documents', // Report app issues
          'About', // About
          'AppSettings', // App Settings
          'Payment' // Sign out
        ];
        for (var i = 0; i < menuItemName.length; i++) {
            let screenName = screens[i];
            menuList.push(
              <View key={i} style={styles.menuItem}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate(screenName)}>
                  <Text style={styles.menuItemText}>
                    <Icon name={icon[i]} size={18} color="#000" /> {menuItemName[i]}
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
