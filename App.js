/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import MainNavigator from './src/Navigation/MainNavigator';
import Provider from './src/Store/Provider';
import {StatusBar} from 'react-native';
// import {useRoute} from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App = (route ) => {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

useEffect(() => {
SplashScreen.hide()
}, [])


    return (
        <Provider>

<StatusBar
        backgroundColor="#4eced4"
      
        barStyle="light-content"
        hidden={true}
        
     />

            <MainNavigator/>
        </Provider>
    );
};

export default App;




// <StatusBar
//         backgroundColor="#4eced4"
//         backgroundColor={routeName==='Feed'? 'white':'#4eced4'}
//         barStyle="light-content"
        
        
//      />
