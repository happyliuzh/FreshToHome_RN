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
    Image,
} from 'react-native'

import Images from '../../../utils/image'

export default class OrderContentItem extends Component{

    render(){
        return (
            <View style = { Styles.container }>
                <Image source={ Images.Test.TestVegatable } style={ Styles.container }/>
            </View>
        );
    }
}

const  Styles = StyleSheet.create({
    container : {
        width : 80,
        height : 80,
    }
});