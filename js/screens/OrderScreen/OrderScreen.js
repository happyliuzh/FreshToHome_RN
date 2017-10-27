import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import OrderView from '../../components/Order/orderView'
import Colors from '../../utils/color'

export default class OrderScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title : `${navigation.state.params.title}`,
        headerTintColor : Colors.MainColor,
        headerBackTitle : '返回',
    })
    render(){
        return(
            <OrderView navigation = { this.props.navigation }>

            </OrderView>
        );
    }
}
