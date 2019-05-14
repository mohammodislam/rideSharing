import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    margin: 10,
    position: 'absolute',
    top: 10,
    width: '100%',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search:{
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
    marginLeft: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  summary:{
    width: 150,
    height: 50,
    backgroundColor: 'steelblue',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  profile:{
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
    marginRight: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  search_btn:{
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
  },
  profile_btn:{
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  summary_total_amount:{
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  modalContainer:{
    padding: 20,
    backgroundColor: 'black',
    height: 250
  },
  modalHead:{
  },
  modalMain:{
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalEarning:{
    width: 80,
    height: 80,
    backgroundColor: 'steelblue',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#ffffff',
    top: 20
  },
  modalEarningIcon:{
    textAlign: 'center',
    color: 'white',
    fontSize: 60,
  },
  modalProfile:{
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  modalProfileIcon:{
    textAlign: 'center',
    color: 'white',
    fontSize: 80,
  },
  modalAccount:{
    width: 80,
    height: 80,
    backgroundColor: 'steelblue',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#ffffff',
    top: 20
  },
  modalAccountIcon:{
    textAlign: 'center',
    color: 'white',
    fontSize: 60,
  },
  modalNotification:{
    padding: 12,
    backgroundColor: 'lightgray'
  },
  modalNotificationHeading:{
    fontSize: 32,
    color: 'black'
  },
  textCenter:{
    marginVertical: 20,
    textAlign: 'center'
  }
});