import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'About',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    };
    render() {
        return (
          <View style={{padding: 15}}>
            <Text style={{fontSize: 18}}>Version 1.123.120.11</Text>
            <Text style={{fontSize: 18}}>Acknowledgements</Text>
          </View>
        );
    }
}
