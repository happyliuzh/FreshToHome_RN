/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native'

import Images from '../../../utils/image'
import Colors from '../../../utils/color'

export default class ZoneListItem extends Component
{
    render(){
        return (
            <View style = {Styles.container} >
                <Image source={Images.Test.TestVegatable} style={Styles.left}/>
                <View style = {Styles.right }>

                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },

    left : {
        width : 100,
        height : 100,
    },

    right : {
        flex : 1,
        backgroundColor : Colors.MainColor,
    },

});