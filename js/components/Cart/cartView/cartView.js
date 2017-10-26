/**
 * Created by liuzhihui on 2017/10/25.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native'

import CartAccountView from '../cartAccountView'
import CartEditView from '../cartEditView'
import CartListView from '../cartListView'

import CommonStyles from '../../../utils/css/styles'

export default class CartView extends Component{
    render(){
        return (
            <View style = { CommonStyles.top_layout_container }>

                <View style = { [CommonStyles.top_layout_container] }>

                    <CartListView>

                    </CartListView>

                </View>

                <CartAccountView>

                </CartAccountView>
            </View>
        );
    }
}