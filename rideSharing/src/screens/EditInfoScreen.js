import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../stylesheet/AccountScreenStyle';

export default class EditInfoScreen extends Component {
    static navigationOptions = {
        title: 'Edit Info',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    };
    renderEditingUserInfo = () => {
        let driverMenuItems = [
            "First Name",
            "Last Name",
            "Phone Number",
            "Email",
            "Password",
            "Address"
        ];
        let driverInfo = [
            "Hifjur",
            "Rahman",
            "(313)334-0992",
            "hifjur29@gmail.com",
            "******",
            "123, Kefka AVE, Warren, MI"
        ]
        let menuList = [];
        for (var i = 0; i < driverMenuItems.length; i++) {
            menuList.push(
                <View key={i} style={styles.editAccount}>
                    <View style={styles.userInfoEdit}>
                        <Text style={styles.editInfoHeading}>
                            {driverMenuItems[i]}
                        </Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.menuItemText}>
                            {driverInfo[i]}
                        </Text>
                    </View>
                </View>
            );
        }
        return menuList;
    }
    renderScreen = () => {
        return (
            <ScrollView>
                <View
                    style={{
                    margin: 10,
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    backgroundColor: '#333333'
                }}>
                    <Icon
                        name="user"
                        size={70}
                        color="#fff"
                        style={{
                        zIndex: 900,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10%'
                    }}/>
                </View>
                {this.renderEditingUserInfo()}
            </ScrollView>
        );
    }
    render() {
        return this.renderScreen();
    }
}
