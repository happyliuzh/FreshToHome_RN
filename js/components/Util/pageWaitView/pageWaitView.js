/**
 * Created by liuzhihui on 2017/10/25.
 */

import React, {
    Component,

} from 'react'

import {

    ActivityIndicator,
    Text,
    View,

} from 'react-native'


export default class PageWaitView extends Component{
    render (){
        return (
            <View style={{alignItems : 'center',justifyContent : 'center',height:80}}>

                <ActivityIndicator>

                </ActivityIndicator>

                <Text style={{
                    marginTop : 10,
                    color : '#666666'
                }}>
                    加载中...
                </Text>

            </View>
        );
    }
}