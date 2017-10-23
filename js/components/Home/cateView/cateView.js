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

import HomeCateItem from '../cateItem'
import Colors from '../../../utils/color'
import Images from '../../../utils/image'

const data = [
    {
        type : 1,
        title : '蔬菜',
    },

    {
        type : 2,
        title : '肉蛋',

    },

    {
        type : 3,
        title : '生鲜',

    },
    {
        type : 4,
        title : '水果',

    },
];

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

                <View style = {Styles.itemWrap}>

                    {
                        data.map( (item) => {

                            return (

                                <HomeCateItem title={item.title} itemType={item.type} key={item.type}>

                                </HomeCateItem>
                            );


                        })
                    }

                </View>
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
    },

    itemWrap : {
        flexDirection:'row',
        flexWrap:'wrap'
    }
});
