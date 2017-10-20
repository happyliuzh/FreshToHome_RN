/**
 * Created by liuzhihui on 2017/10/20.
 */

import {
    BubblesLoader,
    LinesLoader
} from 'react-native-indicator'

import React from 'react'
import Colors from '../../color'
import {
    View,
    Text,
} from 'react-native'


export default refreshLoader = ()=>{

    return (

        <View style={{
            flex : 1,
            justifyContent:'center',
            alignItems:'center'
        }}

        >
            {
                _renderLinesLoader()
            }

            {
                _renderText()
            }
        </View>

    );
}

_renderBubbllesLoader = () => {
    return (
        <BubblesLoader color={Colors.MainColor}
                       size={60}
                       dotRadius={8}
        />
    );
}

_renderLinesLoader = ()=> {
    return (
        <LinesLoader color = {Colors.MainColor}
                     betweenSpace = {2}
                     barNumber = {5}
                     barWidth = {5}
                     barHeight = {40}
        />
    );
}

_renderText = () => {

    return (
        <Text style={{
            marginTop : 10,
            color : Colors.MainColor}}
        >
            加载中
        </Text>

    );
}