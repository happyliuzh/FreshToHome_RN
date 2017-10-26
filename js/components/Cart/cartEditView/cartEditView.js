/**
 * Created by liuzhihui on 2017/10/26.
 */
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

import Images from '../../../utils/image'
import { Button } from 'native-base'
import Colors from '../../../utils/color'

export default class CartEditView extends Component{

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

                </View>

                <TouchableOpacity style = { Styles.right }
                >
                    <Text style={ Styles.deleteText }>
                        删除
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
        width : 60,
        justifyContent:'center',
        alignItems : 'center',
        borderColor : Colors.MainColor,
        borderWidth : 1,
        borderRadius : 4,
        marginTop : 10,
        marginBottom : 10,
        marginLeft : 20,
        marginRight : 20,

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

    deleteText :{
        fontSize : 16,
        color : '#999999',
    }
});