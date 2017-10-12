import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet
} from 'react-native'

import CommonStyles from '../../utils/css/styles'

export default class CartScreen extends Component{

    static navigationOptions = {
        title : "购物车"
    };

    render(){
        return(
        <View style={CommonStyles.center_layout_container}>
            <Text>Cart Screen</Text>
        </View>
        );
    };
}