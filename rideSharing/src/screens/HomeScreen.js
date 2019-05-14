import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  PermissionsAndroid,
  StyleSheet
} from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileModal from '../modals/HomeScreenProfileModal';
import styles from '../stylesheet/HomeScreenStyle';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      error: null,
      modalVisible: false
    };
  }

  componentWillMount() {
    // this.requestLocationPermission();
    // this.setGeoLocation();
  }

  setGeoLocation = () => {
    let self = this;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let region = {...this.state.region};
        region.latitude = position.coords.latitude;
        region.longitude = position.coords.longitude;
        region.latitudeDelta = 0.0922;
        region.longitudeDelta = 0.0421;
        console.log(this.state.region);
        self.setState({region});
      },
      (error) => {
        console.log('error');
        console.log(error);
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  };

  requestLocationPermission = async () =>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permission needed for location',
          message:
            'This app requires location permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location: ', PermissionsAndroid.RESULTS.GRANTED);
      } else {
        console.log('Location permission denied: ', PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  setModalVisible = (visible) =>{
    console.log('setModalVisible function: ', visible);
    this.setState({modalVisible: visible});
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen);
    this.setState({modalVisible: false});
  }

  renderScreen = () =>{
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled = {true}
          loadingEnabled={true}
        />
        <View style={styles.overlay}>
          <View style={styles.search}>
            <Text style={styles.search_btn}><Icon name="search" size={35} color="#fff" /></Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.summary_total_amount}>$34.32</Text>
          </View>
          <View style={styles.profile}>
            <TouchableOpacity onPress={()=>this.setModalVisible(true)}>
              <Text style={styles.profile_btn}><Icon name="user" size={35} color="#fff" /></Text>
            </TouchableOpacity>
          </View>
        </View>
        <ProfileModal
          modalVisible={this.state.modalVisible}
          setModalVisible={()=>this.setModalVisible(!this.state.modalVisible)}
          navigate={this.navigate}
        />
      </View>
    );
  }

  render() {
    return this.renderScreen();
  }
}