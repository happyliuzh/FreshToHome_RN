/**
 * Created by liuzhihui on 2017/11/2.
 */
import React , {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,

} from 'react-native'

import PropTypes from 'prop-types'

import Colors from  '../../../utils/color'

export default DetailFooter = ( { addCart, goCart }) => (
        <View style = { _styles.container }>

            <TouchableOpacity style = { [ _styles.segment, _styles.segmentLeft ]}
                              onPress = { addCart }
            >
                <Text style={ _styles.text }>
                    加入菜篮子
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style = { [ _styles.segment, _styles.segmentRight ]}
                              onPress = { goCart }
            >
                <Text style = { _styles.text }>
                    去结算
                </Text>
            </TouchableOpacity>
        </View>
)

DetailFooter.propTypes = {
    addCart : PropTypes.func.isRequired,
    goCart  : PropTypes.func.isRequired,
}


const _styles = StyleSheet.create({
    container : {
        height : 50,
        flexDirection : 'row',
    },
    segment : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    segmentLeft : {
        backgroundColor : Colors.MainColor,
    },
    segmentRight : {
        backgroundColor : '#e50263',
    },
    text : {
        color : '#fff',
        fontSize : 18,
    }
});