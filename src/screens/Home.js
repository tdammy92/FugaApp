import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


import {MenuButton} from './utils/AppButton';
import Store from '../Store/Store';

function Home({navigation}) {


const myDay = new Date().toDateString();




  return (
 
    <View>
      <LinearGradient
        colors={['#4eced4', '#4eced4']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.homeHeader}
      />

      <View style={styles.headerContent}>
        <View style={styles.headerTextContent}> 
         <Text  style={styles.headerTitle}>{myDay}</Text>
         <Text  style={styles.headerText}>Hey There..!</Text>
        </View>
        <Icon
          name="user-circle"
          size={40}
          color="white"
          style={styles.headerIcon}
        />
      </View>

      <View style={styles.homeBtn}>
        <MenuButton
          name="Calculate GPA"
          // color="#fc4c65"
          color="#4eced4"
          icon="calculator"
          onPress={() => navigation.navigate('Calculate')}
        />

        <MenuButton
          name="How to increase GPA"
          icon="bar-chart"
          color="#4eced4"
          onPress={() => navigation.navigate('Increase')}
        />

        <MenuButton
          name="About Fuga"
          icon="feed"
          // color="#fc4c65"
          color="#4eced4"
          onPress={() => navigation.navigate('About')}
        />

        <MenuButton
          name="My-Todos"
          icon="pencil"
          color="#4eced4"
          onPress={() => navigation.navigate('Todo')}
        />
        <MenuButton
          name="Quiz"
          icon="gamepad"
          // color="#fc4c65"
          color="#4eced4"
          onPress={() => navigation.navigate('Root',{screen:'Quiz-Home'})}
        />
        <MenuButton
          name="Info"
          icon="info-circle"
          color="#4eced4"
          onPress={() => navigation.navigate('Info')}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    height: 180,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 500,
    transform: [{scaleX: 3}],
  },

  headerContent:{
    flexDirection:'row',
    justifyContent:'space-between',
alignItems:'center',
    marginTop:20,
    marginHorizontal:15,
  },
  headerTextContent:{

  },
  headerTitle:{
    fontSize:24,
    // fontWeight:'bold',
    color:'white',
    fontFamily:'Alegreya-Bold'
    
  },
  headerText:{
    color:'white',
    fontSize:20,
    fontFamily:'Alegreya-Medium'
  }
  ,

  headerIcon:{
    width:60,
    height:60,
    borderRadius:100,
  },
  homeBtn: {
    width: '100%',
    marginVertical: 80,
    // marginHorizontal:20,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  // backgroundImage: {
  //   flex: 1,
  //   width: null,
  //   height: null,
  //   resizeMode: 'cover',
  // },
});

export default Home;
