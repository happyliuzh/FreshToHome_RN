/**
 * Created by liuzhihui on 2017/10/27.
 */
import React, {
    Component,

} from 'react'

import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native'

import OrderContentList from '../orderContentList'


export default class OrderListItem extends Component{

    _renderOrderHeader = () => {
        return (
            <View style = { Styles.orderHeader }>
                <Text style={ Styles.orderHeaderText }>
                    下单时间: 2017/10/27 - 09:21
                </Text>
            </View>
        );
    }

    _renderOrderContent = () => {
        return (
            <View style = { Styles.orderContent }>
                <OrderContentList>

                </OrderContentList>
            </View>
        );
    }

    _renderOrderBottom = () => {
        return (
            <View style = { Styles.orderBottom }>

            </View>
        );
    }

    render(){
        return (
            <View style = { Styles.container }>
                {
                    this._renderOrderHeader()
                }

                {
                    this._renderOrderContent()
                }

                {
                    this._renderOrderBottom()
                }

            </View>
        );
    }
}


const Styles = StyleSheet.create({
    container : {
        marginLeft: 16,
        marginRight : 16,
    },

    orderHeader : {
        height : 44,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },

    orderHeaderText : {
        color : '#999999',
        marginLeft : 16,
    },

    orderContent : {
        height:120,
        alignItems:'center',
        justifyContent:'center',

    },

    orderContentList : {
        height : 100,
    },

    orderBottom : {
        height : 44,
    }
});