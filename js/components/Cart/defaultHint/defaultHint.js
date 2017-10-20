/**
 * Created by liuzhihui on 2017/10/20.
 */
import React, { Component } from 'react'

import {
    View,
    Image,
    Text,
    Button,
    StyleSheet,
} from 'react-native'

import Colors from '../../../utils/color'

export default class CartDefaultHint extends Component
{
    render(){
        return (
            <View style={Styles.container}>
                <Text style={Styles.BigText}>菜篮子饿瘪了 T.T</Text>
                <Text style={Styles.SmallText}>快给我挑点宝贝</Text>
                <Button title="去货架逛逛"
                        color={Colors.MainColor}
                        style={Styles.ButtonStyle}
                        onPress={
                    () => {

                    }
                } />
            </View>
        );
    }
}


const Styles = StyleSheet.create({


        container : {
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center',
        },

        BigText : {
            color : '#666666',
            fontSize : 16,
        },

        SmallText : {
            marginTop : 10,
            color : '#999999',
            fontSize : 14,
        },

        ButtonStyle:{
            marginTop : 40,
            borderRadius : 4,
            borderColor : Colors.MainColor,
            borderWidth : 2,
            width : 100,
            height : 30,
        }
    }
);