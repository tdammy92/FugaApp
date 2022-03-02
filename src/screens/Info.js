import {View, Text, StyleSheet, Linking} from 'react-native';
import React ,{useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getModel, getManufacturer,getBrand,getApplicationName ,getVersion} from 'react-native-device-info';
// import DeviceInfo from 'react-native-device-info';


import { ListButton } from './utils/AppButton';

const Info = () => {

  // const [phone, setphone] = useState('')

const model = getModel();
const brand = getBrand();

const appname = getApplicationName();
// const device = getDeviceType();
// const product = getProduct();
const Verion = getVersion();

// getManufacturer().then((manu)=>{
//   setphone(manu);
// });



  return (
    <View style={styles.rootPage}>
      <View  style={styles.card}>
        <FontAwesome5 name='laptop-code'  size={40}  color="#4eced4"/>

        {/* <Icon name='code'  size={40}  color="#4eced4"/> */}
        <Text  style={styles.title}>{appname}</Text>
        <Text  style={styles.text}>Version {Verion}</Text>
        <Text  style={styles.text}>Developed by</Text>
        <Text  style={styles.text}>Tdammy</Text>
        <Text   style={styles.text}>(Bilek Technologies)</Text>
        <Text   style={styles.text}>{model}</Text>
        <Text   style={styles.text}>{brand}</Text>
     {/* <Text   style={styles.text}>{phone}</Text> */}


        <Text   style={styles.text}><Icon  name='copyright' color="#4eced4" size={22}/> {new Date().getFullYear()}</Text>

        <ListButton  name='view portfolio'  color='#4eced4'  icon='drivers-license' onPress={ ()=> Linking.openURL("https://tdammy.netlify.app/") } />
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  rootPage: {
    flex: 1,
    alignContent:'center',
    // justifyContent:'center'
  },
  card:{
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    marginHorizontal:20,
    marginVertical:15,


    padding:10,
    height:'70%',
  },
  title:{
    fontSize:26,
 
    color:'#4eced4',
    fontFamily:'Bevan',
  },
  text:{
    fontSize:20,
    
    fontFamily:'Alegreya-Bold',

    color:'#4eced4'
  }
});
