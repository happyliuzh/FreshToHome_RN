/**
 * Created by liuzhihui on 2017/10/24.
 */
import React, {
    Component
} from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'

import Colors from '../../../utils/color'

import { BubblesLoader } from 'react-native-indicator'

export default class LoaderMore extends Component{
    render(){
        return (
            <View style = {Styles.container}>

                <BubblesLoader color={Colors.MainColor} size={30} dotRadius={4}>

                </BubblesLoader>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1,
        marginTop : 10,
        marginBottom : 10,
    }
});