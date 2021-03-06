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
    TouchableOpacity,
} from 'react-native'

import Colors from '../../../utils/color'
import Images from '../../../utils/image'

export default class CartAccountView extends Component{

    render(){
        return (
            <View style = { Styles.container }>
                <View style = { Styles.left }>

                    <TouchableOpacity style = { Styles.touchLeft }>

                        <Image source={ Images.Common.ToBeSelected} style={ Styles.selectImg}/>
                        <Text style={ Styles.selectText }>
                            全选
                        </Text>

                    </TouchableOpacity>

                    <Text>
                        共计 119 元
                    </Text>

                </View>

                <TouchableOpacity style = { Styles.right }>
                    <Text style={ Styles.accountText }>
                        去结算
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const Styles = StyleSheet.create({
    container : {
        height : 55,
        flexDirection : 'row',

    },

    left : {
        flex : 1,
        flexDirection:'row',
        alignItems: 'center',
    },

    right : {
        width : 120,
        backgroundColor : Colors.MainColor,
        justifyContent:'center',
        alignItems : 'center',

    },

    touchLeft : {
        marginLeft : 16,
        marginRight : 16,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',

    },

    selectImg : {
        width : 22,
        height: 22,
    },

    selectText : {
        marginLeft : 8,
        marginRight : 6,

    },

    accountText :{
        fontSize : 18,
        color : '#f6f6f6',
    }
});