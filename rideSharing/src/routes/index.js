import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import EditInfoScreen from '../screens/EditInfoScreen';
import AppSettingsScreen from '../screens/AppSettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Account:{
    screen: AccountScreen
  },
  Documents:{
    screen: DocumentsScreen
  },
  Payment:{
    screen: PaymentScreen
  },
  EditInfo: {
    screen: EditInfoScreen
  },
  AppSettings: {
    screen: AppSettingsScreen
  },
  About:{
    screen: AboutScreen
  }
});

export default createAppContainer(MainNavigator);