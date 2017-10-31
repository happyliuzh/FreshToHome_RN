/**
 * Created by liuzhihui on 2017/10/30.
 */
import React, {
    Component,
} from 'react'

import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'

import UserHeadView from '../userHeadView'
import Styles from '../userInfoStyle'
import Images from '../../../utils/image'

export default class UserNameView extends UserHeadView{

    _renderLeftText(){
        return (
            <Text style={ Styles.leftText }>
                修改姓名
            </Text>
        );
    }

    _renderRight(){
        return (
            <TouchableOpacity style = { Styles.rightView }>

                <Text style={ _Styles.text }>
                    用户名字
                </Text>
                <Image source={ Images.Common.ArrowRight } style={ Styles.arrowRight }/>

            </TouchableOpacity>
        );
    }
}

const _Styles = StyleSheet.create({
    text : {
        fontSize : 18,
        color : '#666666',
    }
});