/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import TestComponent from './test'

import Colors from '../../utils/color'

import CateListView from '../../components/Home/cateListView'

export default class ZoneScreen extends Component{

    static navigationOptions = ({navigation}) => ({

        title : `${navigation.state.params.title}`,
        headerTintColor : Colors.MainColor,
        headerTitleStyle : { alignSelf : 'center'},
        headerRight : (
            <View style = { {
                width  : 32 ,
                height : 32 ,
            } }/>
        )

    });

    render(){
        return (
            <CateListView navigation = { this.props.navigation }>

            </CateListView>
        );
    }

}

//<TestComponent>

//</TestComponent>