import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {ListButton} from '../utils/AppButton';

const Quiz = ({navigation, route}) => {
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
const [AnswerStatus, setAnswerStatus] = useState({correct:0,wrong:0})

  const [Score, setScore] = useState(0);
  const [Time, setTime] = useState(180);
  const [timeUP, settimeUP] = useState(false)

  //   const [Questions, setQuestions] = useState(route.params)

  const result = route?.params;

  const {quest, len} = result;
  //   console.log(questions[CurrentQuestion].question);

  function Restart() {
    Alert.alert(
      'Warning',
      'are you sure, you want to restart ? current score will be lost',
      [
        {
          text: 'cancle',
        },
        {
          text: 'yes',
          onPress: () => {
            setCurrentQuestion(0);
            setTime(0);
          },
        },
      ],
    );
  }



 

 const timeCount = setTimeout(() => {

    if (Time > 1 && Time <= 180) {
      setTime(prev => prev - 1);
    } else {
      setTime(0);
      settimeUP(true);
      setCurrentQuestion(0);
      navigation.navigate('Root', {screen: 'End',params:{Score,AnswerStatus,timeUP}});
    }
  }, 1000);





  function handleSelectedOption(answer) {
   
    if (answer === true) {
      setScore(prev => prev + 1);

    }
    
    
    // if(answer===false){
      
   
    //   setAnswerStatus((prev)=>{prev,AnswerStatus.wrong+1})
  
    // }

    const NextQuestion = CurrentQuestion + 1;

    if (NextQuestion < len) {
      setCurrentQuestion(NextQuestion);
    } else {
      clearTimeout(timeCount);
      settimeUP(false)
      setCurrentQuestion(0);
      navigation.navigate('Root', {screen: 'End',params:{Score,AnswerStatus,timeUP}});
    }
  }


  // console.log(AnswerStatus);

  return (
    <View style={styles.rootPage}>
      <View style={styles.indicatorBoard}>
      <Text  style={styles.scoreText}>Score:{Score}</Text>
        <View style={styles.indicatorContainer}>
          <AnimatedCircularProgress
            size={90}
            width={6}
            fill={(CurrentQuestion / len) * 100}
            rotation={360}
            tintColor="#fff"
            backgroundColor="#fc4c65">
            {() => (
              <Text style={styles.indicatorText}>
                {CurrentQuestion + 1}/{len}
              </Text>
            )}
          </AnimatedCircularProgress>
          <AnimatedCircularProgress
            size={90}
            width={6}
            fill={(Time/180) * 100}
            rotation={360}
            tintColor="#fff"
            backgroundColor="#fc4c65">
            {() => <Text style={styles.indicatorText}>{Time}S</Text>}
          </AnimatedCircularProgress>
        </View>
      </View>
      <View style={styles.questionContainer}>
        {quest && (
          <View>
            <View style={styles.question}>
              <Text style={styles.questionText}>
                {quest[CurrentQuestion].question}
              </Text>
            </View>

            <View style={styles.options}>
              {quest[CurrentQuestion]?.options?.map((optionX, index) => {
                const op = [optionX.option];
                const answer = [optionX.isCorrect];

                return (
                  <TouchableOpacity
                    onPress={() => handleSelectedOption(answer[0])}
                    key={index}>
                    <Text style={styles.button}>{op[0]}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}
      </View>
      <View style={styles.actionContainer}>
        <ListButton
          name="restart"
          color="#fc4c65"
          icon="undo"
          onPress={Restart}
        />
        <ListButton
          name="Quit"
          color="#fc4c65"
          icon="reply"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  rootPage: {
    height: '100%',
    // paddingHorizontal: 10,
  },
  indicatorBoard:{
    display:'flex',
    width:'100%',
    height: '25%',
    opacity: 0.9,
    backgroundColor: '#fc4c65',
    alignItems:'center',
    justifyContent:'center'
  },
  scoreText:{
    color:'#fff',
    fontSize:26,
    // fontWeight:'bold'
    fontFamily:'Alegreya-Bold',
  
  },
  indicatorContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  indicatorText: {
    color: 'white',
    fontSize: 30,
    // fontWeight: 'bold',
    fontFamily:'Alegreya-Italic',
  },
  questionContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  question: {
    backgroundColor: 'white',
    height: 90,
    width: '100%',
    alignItems: 'center',
    borderRadius:10,
    padding:5,
    elevation:4,
    borderWidth:1,
    borderColor:'#fc4c65'

  },
  questionText: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily:'Robot-bold',
    color: '#fc4c65',
  },
  options: {
    marginVertical: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 15,
    width: 140,
    fontFamily:'Alegreya-Medium',
    color: 'white',
   
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fc4c65',
    fontSize: 20,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  actionContainer:{
    flex:1
  }
});
