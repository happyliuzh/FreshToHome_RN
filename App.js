/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';

import LoginScreen from './js/screens/LoginScreen'
import TabScreen from './js/screens/TabScreen'



export default TabScreen;

//加入login的逻辑。

const freshToHomeApp = StackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions : {
            header : null,
        }
    },
    Main : {
        screen : TabScreen,
        navigationOptions : {
            header : null,
        }
    }
});

// export default freshToHomeApp;



