/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native'

import { NavigationActions } from 'react-navigation'

import Images from '../../../utils/image'

import Colors from '../../../utils/color'

export default class ZoneListItem extends Component
{
    render(){
        return (

        <TouchableOpacity onPress = { () => {
            const { dispatch } = this.props.navigation;
            dispatch(NavigationActions.navigate({
                routeName : 'Detail'
            }));

        }}>
            <View style = {Styles.container} >
                <Image source={Images.Test.TestVegatable} style={Styles.left}/>
                <View style = {Styles.right }>

                    <Text style={Styles.rightTopText}>
                        新鲜白菜新鲜白菜新鲜白菜新鲜白菜新鲜白菜新鲜白菜新鲜白菜新鲜白菜新鲜白菜(500g)
                    </Text>

                    <View style = {Styles.rightBottom}>
                        <Text style={Styles.rightBottomText}>
                            ￥100.89/斤
                        </Text>

                        <TouchableOpacity onPress = {
                            () => {
                                alert('加入购物车！');
                            }
                        }>
                            <Image source={Images.Common.ShoppingCart} style={Styles.rightBottomImg}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </TouchableOpacity>


        );
    }
}

const Styles = StyleSheet.create({
    container : {
        paddingLeft : 16,
        flexDirection : 'row',
        paddingRight : 16,
        backgroundColor:'#f6f6f6'
    },

    left : {
        width : 100,
        height : 100,
    },

    right : {
        flex : 1,
        marginLeft : 10,
        marginBottom : 10,
        backgroundColor : '#f6f6f6',
        justifyContent : 'space-between',

    },

    rightTopText : {
        marginTop : 10,
        color : '#666666'
    },

    rightBottom : {
        flexDirection: 'row',
        justifyContent:'space-between'

    },

    rightBottomImg : {
        width : 30,
        height: 30,
    },

    rightBottomText : {
        marginTop : 10,
        color : Colors.MainColor,
    }

});