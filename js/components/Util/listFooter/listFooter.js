/**
 * Created by liuzhihui on 2017/10/24.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    Text,
} from 'react-native'

import Colors from '../../../utils/color'

export default class ListFooter extends Component
{
    render(){
        return (

            <View style={{alignItems:'center',justifyContent:'center', marginTop : 10, marginBottom : 15}}>

                <Text style={{
                    color: Colors.MainColor,
                    marginTop : 5,
                }}>
                    我是有底线的....</Text>

                <Text style={{
                    color: Colors.MainColor,
                    marginTop : 5,
                    fontSize : 20,
                }}>
                    新鲜，质量是我们的底线！</Text>

            </View>
        );
    }
}