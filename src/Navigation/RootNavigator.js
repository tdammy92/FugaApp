
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StatusBar} from 'react-native';



import QuizHome from '../screens/Quiz/QuizHome';
import Quiz from '../screens/Quiz/Quiz';
import Maths from '../screens/Quiz/Maths'
import English from '../screens/Quiz/English'
import Chemistry from '../screens/Quiz/Chemistry'
import Physics from '../screens/Quiz/Physics'
import EndQuiz from '../screens/Quiz/EndQuiz'









function RootNavigator() {

    const Stack = createStackNavigator()
    return (

            <Stack.Navigator  screenOptions={
                {
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#fc4c65',
                       
                    },
                    headerTitleStyle:{
                        fontSize:24,
                        // fontFamily:''
                        fontWeight:'bold'
                    },
    
                    headerTintColor:'white'
    
                }
                }>
    

                <Stack.Screen name="Quiz-Home" component={QuizHome}  options={{
             headerShown: false
             
            }}/>
                <Stack.Screen name="Maths" component={Maths}/>
                <Stack.Screen name="English" component={English}/>
                <Stack.Screen name="Chemistry" component={Chemistry}/>
                <Stack.Screen name="Physics" component={Physics}/>
                <Stack.Screen name="Quiz" component={Quiz}/>
                <Stack.Screen name="End" component={EndQuiz} 
                   options={{
             headerShown: false
             
            }}
                />

             

            </Stack.Navigator>
 
      
    )
}

export default RootNavigator






 // screenOptions={
            // {
            //     headerTitleAlign:'center',
            //     headerStyle:{
            //         backgroundColor:'#4eced4',
                   
            //     },
            //     headerTitleStyle:{
            //         fontSize:24,
                 
            //         fontWeight:'bold'
            //     },

            //     headerTintColor:'white'

            // }
            // }


            // <Stack.Screen name="Home" component={Home} options={{
            //     headerShown: false
                
            //    }}/>