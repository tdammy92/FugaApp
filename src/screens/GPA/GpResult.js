import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import { ListButton } from '../utils/AppButton';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const GpResult = ({navigation,route}) => {




  
  const para = route.params;
  const {Courses,Tunit,GPA} = para;
  
  const CS = Courses.map((item,ind)=>{
    return [item.courseCode,item.unit,item.grade]
  })
  

  // Data for heading table
  const Heading1 = ['Total Credit Unit', 'GPA'];

  const HeadingData = [[Tunit,GPA.toFixed(2)]]
  const WidthH = [180, 90];
  
  
  
  
  // Data for course table
  
  const Heading = ['CourseCode', 'Units', 'Grades'];
  const WidthR = [140, 90, 90];







  return (
    <View style={styles.PageWrapper}>
      <View  style={styles.container1}>
       

        <Table borderStyle={{borderWidth: 1, borderColor: '#4eced4'}}>
          <Row data={Heading1} style={styles.header} textStyle={styles.text1}   widthArr={WidthH}/>
          <Rows data={HeadingData} textStyle={styles.text2}   style={styles.row}  widthArr={WidthH}/>
        </Table>
      </View>

      {Courses && (
        <>
        <View style={styles.container}>
          <ScrollView >
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#4eced4'}}>
                <Row
                  data={Heading}
                  widthArr={WidthR}
                  style={styles.header}
                  textStyle={styles.text1}
                />
              </Table>
              <View style={styles.dataWrapper}>

              <ScrollView>

                <Table borderStyle={{borderWidth: 1, borderColor: '#4eced4'}}>
                 

                  {CS && 
                 ( CS.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={WidthR}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text2}
                    />
                  )))
                } 
                </Table>
              </ScrollView>
              </View>
            </View>
          </ScrollView>
          <View  style={styles.bckBTN}>

      <ListButton
          name="main menu"
          color="#4eced4"
          icon="sign-out"
          onPress={() => navigation.navigate('Home')}
        />
          </View>
        </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    color: '#4eced4',
  },
  PageWrapper: {
    marginVertical: 20,
    marginHorizontal: 15,
    height: '100%',
    position: 'relative',
  },
  container1:{
    width:'100%',
    alignItems:'center',
   
  },
  container: {
    flex: 1,
    padding: 14,
    paddingTop: 30,
    alignItems:'center',
 
  
  },
  header: {height: 40, backgroundColor: '#4eced4'},
  text1: {
    fontSize:20,
    color: 'white',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily:'Alegreya-Bold'
  },
  text2: {
    color: '#4eced4',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily:'Alegreya-Bold',
    fontSize:22,
  },
  dataWrapper: {marginTop: -1},
  row: {height: 40, 
    // backgroundColor: '#E7E6E1',
  },

  bckBTN:{
    marginBottom:20,
  }
});

export default GpResult;
