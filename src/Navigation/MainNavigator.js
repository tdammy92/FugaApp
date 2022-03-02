
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import Calculate from '../screens/GPA/Calculate';
import Increase from '../screens/Increase';
import About from '../screens/About';
import Todo from '../screens/Todo';

import GpResult from '../screens/GPA/GpResult';

import Info from '../screens/Info'
import RootNavigator from './RootNavigator'




function MainNavigator() {

    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={
            {
                headerTitleAlign:'center',
                headerStyle:{
                    backgroundColor:'#4eced4',
                   
                },
                headerTitleStyle:{
                    fontSize:24,
                    // fontFamily:''
                    fontWeight:'bold'
                },

                headerTintColor:'white'

            }
            }
            >
                
                
               
                <Stack.Screen name="Home" component={Home} options={{
             headerShown: false
             
            }}/>

                <Stack.Screen name="Calculate" component={Calculate}/>
                <Stack.Screen name="Result" component={GpResult}/>

                <Stack.Screen name="Increase" component={Increase}/>

                <Stack.Screen name="About" component={About}/>

                <Stack.Screen name="Todo" component={Todo}/>
                <Stack.Screen name="Info" component={Info}/>
               
                <Stack.Screen name="Root" component={RootNavigator}  options={{
             headerShown: false
             
            }}/>

            </Stack.Navigator>
        </NavigationContainer>
      
    )
}

export default MainNavigator
