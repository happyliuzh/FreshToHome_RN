/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import Colors from '../../utils/color'

import CateListView from '../../components/Home/cateListView'

export default class ZoneScreen extends Component{

    static navigationOptions = {

        title : '货架专区',
        headerTintColor : Colors.MainColor,
        headerTitleStyle : { alignSelf : 'center'},
        headerRight : (
            <View style = { {
                width : 32,
                height : 32,
            } }/>
        )

    };

    render(){
        return (
            <CateListView>

            </CateListView>
        );
    }
}