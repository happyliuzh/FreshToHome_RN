/**
 * Created by liuzhihui on 2017/10/27.
 */
import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    View,
} from 'react-native'

import RoundTitleButton from '../../Util/button/roundTitleButton'

export default class OrderBottomView extends Component{

    render(){
        return (
            <View style = { Styles.container }>
                <RoundTitleButton onPress= {() => {
                    alert('取消订单');
                }}
                                  title = '取消订单'
                >

                </RoundTitleButton>

                <View style = {{
                    marginLeft : 12,
                    marginRight : 12,
                }}/>

                <RoundTitleButton onPress={() => {
                    alert('去付款');
                }}
                                  title = '去付款'

                >

                </RoundTitleButton>

            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        height : 44,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingTop : 4,
    },


});