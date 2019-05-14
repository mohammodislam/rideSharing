import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  PermissionsAndroid,
  StyleSheet
} from 'react-native';
import styles from '../stylesheet/HomeScreenStyle';

const ProfileModal = (props) => {
  return (
    <Modal
        animationType="none"
        transparent={false}
        visible={props.modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHead}>
            <TouchableOpacity
              onPress={()=> props.setModalVisible()}>
              <Text style={{fontSize: 28, color:'white'}}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalMain}>
            <TouchableOpacity>
              <View style={styles.modalEarning}>
                <Text style={styles.modalEarningIcon}>E</Text>
              </View>
              <Text style={{textAlign: 'center', color: 'white', marginVertical: 24}}>Earning</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.modalProfile}>
                <Text style={styles.modalProfileIcon}>P</Text>
              </View>
              <Text style={{textAlign: 'center', color: 'white', marginVertical: 5}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigate('Account')}>
              <View style={styles.modalAccount}>
                <Text style={styles.modalAccountIcon}>A</Text>
              </View>
              <Text style={{textAlign: 'center', color: 'white', marginVertical: 24}}>Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.modalNotification}>
            <Text style={styles.modalNotificationHeading}>Notification</Text>
          </View>
        </View>
        <Text style={styles.textCenter}>No notification at the moment.</Text>
      </Modal>
  );
}

export default ProfileModal;