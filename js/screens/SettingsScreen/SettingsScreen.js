/**
 * Created by liuzhihui on 2017/10/31.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'

import Colors from '../../utils/color'

export default class SettingsScreen extends Component{

    static navigationOptions =({navigation}) => ({
        title : '设置',
        headerTitleStyle : { alignSelf : 'center'},
        headerBackTitle : '返回',
        headerTintColor : Colors.MainColor,
        headerRight : (
            <View style = { {
                width : 22,
                height : 22,
            }}>
            </View>
        ),
        
    });


    render(){
        return (
            <View/>
        );
    }
}