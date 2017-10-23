/**
 * Created by liuzhihui on 2017/10/20.
 */

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    Platform,

} from 'react-native'

import Colors from '../../../utils/color'
import Images from '../../../utils/image'

export default class HomeCateView extends Component
{

    constructor(props) {
        super(props);
    }


    //UI

    _renderHeaderView(){
        return (
            <View style = {{
                flexDirection : 'row',
                alignItems : 'center',
                paddingTop : 10,
                paddingBottom : 10,
            }}>

                <Image source={Images.Home.HomeCates} style={Styles.headerImage}/>
                <Text style={Styles.headerText}>
                    货架分类
                </Text>
            </View>
        );
    }


    render(){
        return (
            <View>
                {
                    this._renderHeaderView()
                }

            </View>
        );
    }

}

const Styles = StyleSheet.create({

    headerText : {
        marginLeft : 4,
        fontSize : 18,
        color : Colors.MainColor,
    },

    headerImage : {
        marginLeft : 12,
        width : 24,
        height : 24,
    }
});
