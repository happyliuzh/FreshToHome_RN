/**
 * Created by liuzhihui on 2017/10/23.
 */
import React,{ Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

import Colors from '../../../utils/color'

export default class HomeFooterView extends Component{

    render(){

        return (
            <View style = {Styles.container}>
                <Text style={Styles.text}>
                   为您提供更加优质服务
                </Text>

                <Text style={Styles.text}>
                    请关注"新鲜到家喽"微信公众号
                </Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        paddingTop : 24,
        paddingBottom : 16,
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
        marginTop : 8,
        color : Colors.MainColor,
        marginBottom : 8,
    }

});