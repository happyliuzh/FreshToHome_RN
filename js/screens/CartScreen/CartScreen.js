import React, {Component} from 'react'
import {View,
    Text,
} from 'react-native'

import CartDefaultHint from '../../components/Cart/defaultHint'

import CommonStyles from '../../utils/css/styles'



export default class CartScreen extends Component{

    static navigationOptions = {
        title : "菜篮子"
    };

    render(){
        return(

            <View style = {CommonStyles.top_layout_container}>
                <CartDefaultHint onPress={() => {
                    alert('去逛');

                }}>

                </CartDefaultHint>
            </View>
        );
    };
}