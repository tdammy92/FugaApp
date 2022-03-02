import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

import {ListButton} from '../utils/AppButton';

const EndQuiz = ({navigation, route}) => {
  const para = route.params;
  const {Score, AnswerStatus, timeUP} = para;

  const percentageScore = (Score / 8) * 100;


  let Performance = ''

  if (percentageScore>= 80) {
    Performance = 'Excellent'
  } else if(percentageScore>=70 && percentageScore <80)  {
    
    Performance = 'Very Good'
  } else if(percentageScore>=60 && percentageScore <70)  {
    
    Performance = 'Good'
  }else if(percentageScore>=45 && percentageScore < 60 ){
    
    Performance = 'Fair'
  }else{
    
    Performance = 'Poor'
  }

 

  // table Data
  const Thead = ['Stats', 'Result'];
  const Ttitle = ['Percentage','Performance', 'Correct', 'Wrong'];
  const HeadingData = [[`${percentageScore}%`],[`${Performance}`], [`${Score}`], [`${8-Score}`]];

  return (
    <View style={styles.rootPage}>
      <LinearGradient
        colors={['#fc4c65', '#fc4c65']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.footerGradient}
      />

      <View style={styles.scoreContainer}>
        <View style={styles.scoreContainerInner}>
          <View style={styles.scoreTitle}>
            <AnimatedCircularProgress
              size={100}
              width={10}
              tintTransparency={true}
              fill={percentageScore}
              rotation={360}
              tintColor={percentageScore > 50 ? 'green' : '#fc4c65'}
              backgroundColor="#fff">
              {() => (
                <Text
                  style={{
                    ...styles.scoreText,
                    color: percentageScore > 50 ? 'green' : '#fc4c65',
                  }}>
                  {percentageScore}%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={styles.scoreBord}>
            <View style={styles.tableContainer}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#e8e8e8'}}>
                <Row
                  data={Thead}
                  style={styles.header}
                  textStyle={styles.text1}
                  flexArr={[1, 1]}
                />

                <TableWrapper style={styles.wrapper}>
                  <Col
                    data={Ttitle}
                    style={styles.header2}
                    heightArr={[28, 28]}
                    textStyle={styles.text3}
                  />
                  <Rows
                    data={HeadingData}
                    textStyle={styles.text2}
                    style={styles.row}
                    flexArr={[1]}
                  />
                </TableWrapper>
              </Table>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <ListButton
          name="Quiz menu"
          color="#fc4c65"
          icon="reply"
          onPress={() => navigation.navigate('Root', {screen: 'Quiz-Home'})}
        />
        <ListButton
          name="main menu"
          color="#fc4c65"
          icon="sign-out"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default EndQuiz;

const styles = StyleSheet.create({
  rootPage: {
    position: 'relative',
  },

  scoreContainer: {
    marginVertical: 20,

    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainerInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#fc4c65',
    elevation: 2,
    paddingBottom:10,
  },

  scoreTitle: {
    marginTop: 5,
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
  },

  scoreBord: {
    height: '40%',
    width: '100%',
    marginBottom:20
  },
  scoreText: {
    // color:'#fc4c65',
    fontSize: 25,
    // fontWeight: 'bold',
    fontFamily:'Alegreya-Bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  footerGradient: {
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    height: 120,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 500,
    transform: [{scaleX: 3}],
  },

  tableContainer: {
    marginHorizontal: 30,
  },
  wrapper: { flexDirection: 'row' },
  header: {height: 40, backgroundColor: 'white'},

  header2: { flex: 1, backgroundColor: 'white' },
  text1: {
    color: '#fc4c65',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily:'Montserrat-Bold',
    fontSize: 22,
  },
  text2: {
    color: 'white',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 18,
    fontFamily:'Alegreya-Regular',
    
  },
  text3: {

    color: '#fc4c65',
    textAlign: 'center',
    fontFamily:'Alegreya-Bold',
    fontSize: 18,
  },


  row: {height: 30},
});
