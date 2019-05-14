import React, {Component} from 'react'
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../stylesheet/AccountScreenStyle';

export default class PaymentScreen extends Component {
    static navigationOptions = {
        title: 'Payment',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    };
    renderPayoutMethodMenuList = () => {
      let title = 'Payout Method';
      let driverMenuItems = ["Bank account", "Uber Visa Debit Card"];
      let menuList = [];
      menuList.push(
        <View key={title} style={styles.menuItem}>
          <Text>{title}</Text>
        </View>
      )
      for(var i=0; i<driverMenuItems.length; i++){
        menuList.push(
          <View key={i} style={styles.menuItem}>
              <Icon name="card" size={18} color="#333333" style={{marginTop: 4}} />
              <Text style={styles.menuItemText}>
                {driverMenuItems[i]}
              </Text>
          </View>
        );
      }
      menuList.push(
        <View key={driverMenuItems.length+1} style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              Add Payout Method
            </Text>
        </View>
      )
      menuList.push(
        <View key={driverMenuItems.length+2} style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              Instant Pay
            </Text>
        </View>
      )
      return menuList;
    }
    renderScreen = () =>{
      return (
        <View>
          {this.renderPayoutMethodMenuList()}
        </View>
      );
    }
    render() {
        return this.renderScreen();
    }
}
