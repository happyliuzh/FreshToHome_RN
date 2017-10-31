/**
 * Created by liuzhihui on 2017/10/30.
 */
import React , {
    Component,
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import Images from '../../../utils/image'
import Styles from '../userInfoStyle'

export default class UserHeadView extends Component{

    _renderLeftText(){
        return (
            <Text style={ Styles.leftText }>
                选择头像
            </Text>
        );
    }

    _renderRight(){
        return (
            <TouchableOpacity style = { Styles.rightView }>

                <Image source={ Images.Me.UserHeadDefault} style={ Styles.rightImage }/>

                <Image source={ Images.Common.ArrowRight } style={ Styles.arrowRight }/>

            </TouchableOpacity>
        );
    }

    render(){
        return (
            <View style={ Styles.container }>

                <View style = { Styles.leftView }>
                    {
                        this._renderLeftText()
                    }
                </View>

                <View style = { Styles.rightView }>

                    {
                        this._renderRight()
                    }
                </View>

            </View>
        );
    }

}
