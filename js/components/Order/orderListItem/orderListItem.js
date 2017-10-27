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
import Colors from '../../../utils/color'

export default class OrderListItem extends Component{

    _renderHeaderTitle = () => {
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

    _renderLogisticsInfo = () => {
        return (
            <View style = { Styles.logisticsView }>
                <Image source={ Images.Order.Logistics } style={{
                    width : 22,
                    height : 22,
                }}/>

                <View style = { Styles.logisticsInfoText }>
                    <Text style={{
                        color : '#999999'
                    }}>
                        您的宝贝已经到达雅居乐花园-菜鸟驿站自提点(锦巷)冷藏保鲜，期待您随时过来把它带回家。如有问题，请
                        电话联系400-100-0009，我们会第一时间处理您的问题。感谢您的信任。
                    </Text>
                </View>
            </View>
        );
    }

    _renderOrderHeader = () => {
        return (
            <View>
                {
                    this._renderHeaderTitle()
                }

                {
                    this._renderLogisticsInfo()
                }
            </View>
        );
    }

    _renderOrderContent = () => {
        return (
            <View style = { Styles.orderContent }>
                <OrderContentList>

                </OrderContentList>

                <View style = { Styles.orderContentDes }>
                    {
                        this._renderOrderContentDes()
                    }
                </View>
            </View>
        );
    }

    _renderOrderContentDes = () => {
        return (
            <View>
                <Text style={ Styles.contentDesText }>
                    共14件宝贝  实付 149.98元
                </Text>
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

    orderContentDes : {
        height : 30,
        justifyContent : 'flex-end',
        flexDirection : 'row',
        alignItems :'center',
    },

    logisticsView : {
        flexDirection : 'row',
        alignItems : 'center',
    },

    logisticsInfoText : {
        flex : 1,
        marginLeft : 16,
        marginBottom : 16,
    },

    contentDesText : {
        color : Colors.MainColor,
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
        // height:80,

    },

    orderBottom : {
        height : 44,
    },

});