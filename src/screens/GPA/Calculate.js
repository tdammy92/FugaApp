import React, {useState, useEffect,useRef,useMemo,createRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/FontAwesome';

import Store from '../../Store/Store';
import AppButton from '../utils/AppButton';
import {FabButtonR} from '../utils/AppButton';
import {FabButtonL} from '../utils/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';


function Calculate({navigation}) {
  const {Gpa} = Store();

  
  

  
  // initial state for Courses array

  const [Courses, setCourses] = useState([
    {
      id: Math.floor(Math.random() * 100),
      courseCode: '',
      unit: 1,
      grade: 0,
    },
  ]);



  const [AllUnitRefs, setAllUnitRefs] = useState([]);
  const [AllGradeRefs, setAllGradeRefs] = useState([]);




  // function to handle input text change function
  function HandleChangeText(name, index) {
    let CourseList = [...Courses];

    CourseList[index].courseCode = name;

    setCourses(CourseList);
  }
  
  // function to handle selected Unit picker change function
  function selectedU(UnitValue, index) {
    let CourseList = [...Courses];

    CourseList[index].unit = UnitValue;

    setCourses(CourseList);
  }

  // function to handle selected Grade picker change function
  function selectedG(GradeValue, index) {
    let CourseList = [...Courses];

    CourseList[index].grade = GradeValue;
    
    setCourses(CourseList);
  }

  // function to add new courses to the state array
  function AddCourse() {
    const newCS = {
      id: '' + Math.floor(Math.random() * 1000),
      courseCode: '',
      unit: 1,
      grade: 0,
    };

    setCourses([...Courses, newCS]);
  }
  
  // function to remove courses from the state array
  function RemoveCourse(id) {
    let Remain = Courses.filter(item => item.id !== id);
    
    setCourses(Remain);
    
    ToastAndroid.showWithGravityAndOffset(
      'you removed a course',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      200,
      );
  }
  
  // function to remove all courses from the state array
  function ClearAllCourses() {
    Alert.alert('Warning', 'you are about to clear all courses', [
      {
        text: 'no',
      },
      {
        text: 'Yes',
        onPress: () => {
          setCourses([]);

          ToastAndroid.showWithGravityAndOffset(
            'Cleared all Courses',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            0,
            200,
          );
        },
      },
    ]);
  }

  function CalculateGPA() {
    const Tunit = Courses.reduce((accumulator, current) => {
      return accumulator + Number(current.unit);
    }, 0);
    
    const QP = Courses.map((item, index) => {
      return item.unit * item.grade;
    });

    const TQP = QP.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    
    const GPA = TQP / Tunit;
    return {Courses, Tunit, GPA};
  }
  


  function CheckDuplicate() {
    const courseName = Courses.map(Crs => Crs.courseCode);

    const hasDuplicates = arr => {
      return new Set(arr).size !== arr.length;
    };

    if (hasDuplicates(courseName)) {
      return true;
    } else {
      return false;
    }
  }

  function getGpa() {
    // checks for Empty course field
    const CourseCodeIsEmpty = Courses.every(crs => crs.courseCode !== '');

    // Calculate total  course Unit
    const TotalUnit = Courses.reduce((acc, curr) => acc + Number(curr.unit), 0);

    // checks for duplicate course code
    const Isduplicate = CheckDuplicate();

    if (CourseCodeIsEmpty) {
      if (Isduplicate) {
        Alert.alert(`Warning`, `You Have inputed a course twice`, [
          {
            text: 'Cancle',
          },
        ]);
      } else {
        if (TotalUnit <= 24) {
          const res = CalculateGPA();
          navigation.navigate('Result', res);
        } else {
          Alert.alert(
            `Warning (${TotalUnit} Units)`,
            `You are above the 24units MaxImum  for the Semester drop ${
              TotalUnit - 24
            } Unit(s)`,
            [
              {
                text: 'Cancle',
              },
            ],
          );
        }
      }
    } else {
      Alert.alert('Warning', 'CourseCode field(s) can not be empty', [
        {
          text: 'Cancle',
        },
      ]);
    }
  }
  



  function openUniteDialogue(index) {

    if(AllUnitRefs[index]) AllUnitRefs[index].current.focus();
    }



  function openGradeDialogue(index) {

    if(AllGradeRefs[index]) AllGradeRefs[index].current.focus();
    }




    useEffect(() => {
    
const refs = Array(Courses.length).fill().map((_,i)=>AllUnitRefs[i] || createRef())

setAllUnitRefs(refs)

  
    }, [Courses])




    useEffect(() => {
    
const refs = Array(Courses.length).fill().map((_,i)=>AllGradeRefs[i] || createRef())

setAllGradeRefs(refs)

 
    }, [Courses])
    

  return (
    <View style={styles.PageWrapper}>
      <View>
        <Text style={styles.subHeading}>Calculate GPA</Text>
        <View style={styles.gpList}>
          <FlatList
            contentContainerStyle={{padding: 5}}
            showsVerticalScrollIndicator={false}
            data={Courses}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View style={styles.inputContainer}>
                <Text style={styles.badege}>{index + 1}</Text>

                <TextInput
                  placeholder={`E.g CPS 40${index + 1}`}
                  placeholderTextColor='#4eced4'
                
                  maxLength={7}
                  style={styles.inputItem}
                  onChangeText={value => HandleChangeText(value, index)}
                
                />

                <View style={styles.picker}  >
                  <Text  onPress={()=>openUniteDialogue(index)}   style={styles.dropDownTitle}>Unit</Text>
                  <Picker
                  dropdownIconColor={'#4eced4'}
             
                  prompt={`Select Unit course ${index+1}`}
                  ref={AllUnitRefs[index]}
                    selectedValue={item.unit}
                    style={{
                      height: 50,
                      width: 30,
                     
                    }}
                    onValueChange={UnitValue => selectedU(UnitValue, index)}>
                    <Picker.Item label="6" value="6"/>
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="1" value="1" />
                  </Picker>
                </View>
                <View style={styles.picker}>
                  <Text  onPress={()=>openGradeDialogue(index)}   style={styles.dropDownTitle}>Grade</Text>
                  <Picker
                  ref={AllGradeRefs[index]}
                    prompt={`Select Grade course ${index+1}`}
                    selectedValue={item.grade}
                    dropdownIconColor={'#4eced4'}
                    style={{
                      height: 50,
                      width: 30,
                    }}
                    onValueChange={GradeValue => selectedG(GradeValue, index)}>
                    <Picker.Item label="A" value="5" />
                    <Picker.Item label="B" value="4" />
                    <Picker.Item label="C" value="3" />
                    <Picker.Item label="D" value="2" />
                    <Picker.Item label="F" value="0" />
                  </Picker>
                </View>

                <Text
                  style={styles.DeleteBadge}
                  onPress={() => RemoveCourse(item.id)}>
                  <Icon name="close" size={16} color="white" />
                </Text>
              </View>
            )}
          />
        </View>


      <AppButton
        name="+ Add Course"
        onPress={() => AddCourse()}
        color="#4eced4"
      />
      </View>


      <FabButtonL color="#fc4c65" icon="trash" onPress={ClearAllCourses} />

      <FabButtonR color="#4eced4" icon="calculator" onPress={getGpa} />
    </View>
  );
}

const styles = StyleSheet.create({
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    color: '#4eced4',
  },
  PageWrapper: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: '100%',
    position: 'relative',
  },

  gpList: {
    maxHeight: '85%',
  },
  homeBtn: {
    marginVertical: 50,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 5,
    padding: 5,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputItem: {
    borderRadius: 5,
    width: '45%',
    padding: 4,
    margin: 4,
   

    borderBottomWidth: 1, // backgroundColor: '#F3F1F5'

    borderBottomColor: '#4eced4',
    textAlign: 'center',
    fontSize: 18,
    color: '#4eced4',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
  },

  badege: {
    backgroundColor: '#4eced4',
    height: 35,
    width: 35,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    fontWeight: 'bold',

    top: -20,
    left: 2,
  },
  DeleteBadge: {
    backgroundColor: '#fc4c65',
    height: 35,
    width: 35,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    color: '#fc4c65',
    fontSize: 18,
    position: 'absolute',
    fontWeight: 'bold',

    top: -20,
    right: 2,
  },

  dropDownTitle:{
    color:'#4eced4',
    fontSize:20,
    fontFamily:'Alegreya-Bold'
  },

  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    padding: 5,
  },
  text: {
    margin: 6,
  },
  row: {
    height: 40,
    backgroundColor: '#E7E6E1',
  },
  picker: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
});

export default Calculate;

// ToastAndroid.showWithGravityAndOffset(
//   'Your GPA is:',
//   ToastAndroid.LONG,
//   ToastAndroid.TOP,
//   0,
//   200,
// );
