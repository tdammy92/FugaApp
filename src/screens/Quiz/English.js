import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import AppButton from '../utils/AppButton'
import  {default as quest}  from './Questions/English';

const English = ({navigation}) => {

  const len = quest.length;
  return (
    <View style={styles.pageRoot}>
      <Image
        style={styles.subjectImage}
        source={require('../../../assets/Quiz/english.png')}
      />

      <View style={styles.pageContent}>
        <View  style={styles.contentItem}>
          <Text style={styles.contentTitle}>Duration:</Text>
          <Text style={styles.contentText}>3 mins</Text>
        </View>
        <View  style={styles.contentItem}>
          <Text style={styles.contentTitle}>Questions:</Text>
          <Text style={styles.contentText}>{len} Qst</Text>
        </View>
      </View>

      <AppButton name="Start Quiz" onPress={()=>navigation.navigate('Root',{screen:'Quiz', params: {quest,len}})}  color="#fc4c65" />
    </View>
  );
}

export default English


const styles = StyleSheet.create({
  pageRoot: {},
  subjectImage: {height: '65%'},
  pageContent: {
    marginHorizontal:20,
    marginVertical:30,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-evenly",
    
  },
  contentItem:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  contentTitle:{
    fontSize:24,
    // fontWeight:'bold',
    fontFamily:'Alegreya-Bold',
  },
  contentText:{
    fontSize:20,
    // fontWeight:'bold',
    fontFamily:'Alegreya-Medium',
  }
});
