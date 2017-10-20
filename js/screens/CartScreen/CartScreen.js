import React, {Component} from 'react'
import {View,
    Text,
} from 'react-native'

import CartDefaultHint from '../../components/Cart/defaultHint'

import CommonStyles from '../../utils/css/styles'



export default class CartScreen extends Component{

    static navigationOptions = {
        title : "购物车"
    };

    render(){
        return(

            <View style = {CommonStyles.top_layout_container}>
                <CartDefaultHint>

                </CartDefaultHint>
            </View>
        );
    };
}