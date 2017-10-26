/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'

import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
} from 'react-native'
import {
    NavigationActions,
} from 'react-navigation'

import Colors from '../../../utils/color'
import Images from '../../../utils/image'

export default class QuickSkimItem extends Component{

    render(){
        return (
                <View style = {Styles.container}>
                    <TouchableOpacity onPress={() => {
                        const { dispatch } = this.props.navigation;

                        dispatch(NavigationActions.navigate({
                            routeName : 'Zone',
                            params    : {
                                title : this.props.type,
                            }
                        }));
                    }}>
                        <Image source={Images.Test.TestVegatable} style={Styles.img}/>
                    </TouchableOpacity>

                    <Text style={Styles.text}>
                        ￥234.78/斤
                    </Text>

                    <TouchableOpacity onPress={ ()=>{
                                    alert('加入购物车');
                              }
                    }>

                        <Image source={Images.Common.ShoppingCart} style={Styles.shoppingCart}/>

                    </TouchableOpacity>
                </View>

        );
    }
}

const Styles = StyleSheet.create({
    container : {
        width : 100,
        height : 160,
        justifyContent : 'center',
        alignItems : 'center',
    },

    btn : {
        backgroundColor : '#fff'
    },

    img : {
        width : 100,
        height: 100,
    },
    shoppingCart : {
        marginTop : 6,
        width:32,
        height:32,
    },
    text : {
        marginTop : 4,
        color : Colors.MainColor,
    }
});