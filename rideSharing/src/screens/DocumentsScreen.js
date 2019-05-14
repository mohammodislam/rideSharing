import React, {Component} from 'react'
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../stylesheet/AccountScreenStyle';

export default class DocumentsScreen extends Component {
    static navigationOptions = {
        title: 'Documents',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    };
    renderDriverInfoMenuItem = () => {
      let title = 'Driver';
      let driverMenuItems = ["Driver's License", "Profile Photo"];
      let menuList = [];
      menuList.push(
        <View key={title} style={styles.menuItem}>
          <Text>{title}</Text>
        </View>
      )
      for(var i=0; i<driverMenuItems.length; i++){
        menuList.push(
          <View key={i} style={styles.menuItem}>
              <Text style={styles.menuItemText}>
                <Icon name="check" size={18} color="#00FF00" /> {driverMenuItems[i]}
              </Text>
          </View>
        );
      }
      return menuList;
    }
    renderVehicleInfoMenuItem = () => {
      let title = 'Vehicle';
      let vehicleMenuItems = ["Vehicle Insurance", "Vehicle Registration", "Vehicle Inspection"];
      let menuList = [];
      menuList.push(
        <View key={title} style={styles.menuItem}>
          <Text>{title}</Text>
        </View>
      )
      for(var i=0; i<vehicleMenuItems.length; i++){
        menuList.push(
          <View key={i} style={styles.menuItem}>
              <Text style={styles.menuItemText}>
                <Icon name="check" size={18} color="#00FF00" /> {vehicleMenuItems[i]}
              </Text>
          </View>
        );
      }
      return menuList;
    }
    renderScreen = () =>{
      return (
        <View>
          {this.renderDriverInfoMenuItem()}
          {this.renderVehicleInfoMenuItem()}
        </View>
      );
    }
    render() {
        return this.renderScreen();
    }
}
