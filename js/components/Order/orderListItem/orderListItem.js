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
    TouchableOpacity,
    Image,
} from 'react-native'

import OrderContentList from '../orderContentList'
import Images from '../../../utils/image'

export default class OrderListItem extends Component{

    _renderOrderHeader = () => {
        return (
            <View style = { Styles.orderHeader }>
                <Text style={ Styles.orderHeaderText }>
                    下单时间: 2017/10/27 - 09:21
                </Text>

                <View style = { Styles.orderStateView }>
                    <Text style={ Styles.orderStateLabel }>
                        已完成
                    </Text>

                    <View style = { Styles.stateLine }>

                    </View>

                    <TouchableOpacity>
                        <Image  source = { Images.Order.DeleteOrder } style={ Styles.deleteImg }/>
                    </TouchableOpacity>

                </View>
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
        justifyContent : 'space-between',
    },

    orderHeaderText : {
        color : '#999999',
    },

    orderStateView : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    orderStateLabel : {
        color : '#999999',
    },

    stateLine : {
        width: 1,
        height : 16,
        backgroundColor : '#999999',
        marginLeft: 8,
        marginRight:8,
    },

    deleteImg : {
        width : 22,
        height : 22,

    },

    orderContent : {
        height:80,

    },

    orderBottom : {
        height : 44,
    },

});