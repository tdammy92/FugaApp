import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Fontisto';
import {StatusBar} from 'react-native';

import {MenuButton,FabButtonL} from '../utils/AppButton';

const QuizHome = ({navigation}) => {





  return (

    <>

    <View  style={styles.rootPage}>
      <LinearGradient
        colors={['#fc4c65', '#fc4c65']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.homeHeader}
      />

      <View style={styles.headerContent}>
        <View style={styles.headerTextContent}> 
         <Text  style={styles.headerTitle}>Pick a Subject</Text>
         <Text  style={styles.headerText}>Test your Knowledge.!</Text>
        </View>
        <Icon
          name="check-square-o"
          size={40}
          color="white"
          style={styles.headerIcon}
        />
      </View>

      <View style={styles.homeBtn}>
        <MenuButton
          name="Maths"
          color="#fc4c65"
          // color="#4eced4"
          icon="superscript"
          onPress={() => navigation.navigate('Root',{screen:'Maths'})}
        />



        <MenuButton
          name="English"
          icon="language"
          color="#fc4c65"
          onPress={() => navigation.navigate('Root',{screen:'English'})}
        />

        <MenuButton
          name="Physics"
          icon="balance-scale"
          color="#fc4c65"
          // color="#4eced4"
          onPress={() => navigation.navigate('Root',{screen:'Physics'})}
        />

        <MenuButton
          name="Chemistry"
          icon="flask"
          color="#fc4c65"
          onPress={() => navigation.navigate('Root',{screen:'Chemistry'})}
        />

      </View>

      <View style={styles.btnBack}>

      <FabButtonL  color="#fc4c65" onPress={()=>navigation.goBack()} icon='arrow-circle-o-left'/>

      </View>
    </View>
    </>
    

  );
}

const styles = StyleSheet.create({

  rootPage:{
    position:'relative',
    height:'100%'
  },
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
    marginVertical: 90,
    // marginHorizontal:20,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  btnBack:{
    position:'absolute',
    bottom:5,
    left:10
  }


});

export default QuizHome