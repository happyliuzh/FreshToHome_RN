import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import OrderView from '../../components/Order/orderView'

export default class OrderScreen extends Component{
    render(){
        return(
            <OrderView navigation = { this.props.navigation }>

            </OrderView>
        );
    }
}
