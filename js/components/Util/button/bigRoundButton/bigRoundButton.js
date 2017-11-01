/**
 * Created by liuzhihui on 2017/11/1.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'

import Colors from '../../../../utils/color'

export default BigRoundButton = ( { title, onPress }) => {
    return (
        <TouchableOpacity onPress = { onPress }
                          style = { _styles.container }
        >
            <Text style={ _styles.text }>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const _styles = StyleSheet.create({
    container : {
        height : 44,
        width : 200,
        backgroundColor : Colors.MainColor,
        borderRadius : 22,
        alignItems : 'center',
        justifyContent : 'center',
    },

    text : {
        fontSize : 16,
        color : '#fff'
    }
});