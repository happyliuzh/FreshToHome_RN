/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Image,

} from 'react-native'

import  { NavigationActions } from 'react-navigation'

import QuickSkimItem from '../../Util/QuickSkimItem'
import Colors from '../../../utils/color'
import Images from '../../../utils/image'

export default class QuickSkimView extends Component{
    render(){

        const data = [
            {
                id    : 1,
                price : '￥3.20',
            },
            {
                id    : 2,
                price : '￥23.20',
            },
            {
                id    : 3,
                price : '￥123.80',
            },
            {
                id    : 4,
                price : '￥67.10',
            },
            {
                id    : 5,
                price : '￥90.80',
            },
            {
                id    : 6,
                price : '￥78.45',
            },
            {
                id    : 7,
                price : '￥253.20',
            },
            {
                id    : 8,
                price : '￥193.80',
            },
            {
                id    : 9,
                price : '￥77.10',
            },
            {
                id    : 10,
                price : '￥80.80',
            },
            {
                id    : 11,
                price : '￥78.75',
            },
            {
                id    : 12,
                price : '￥21.20',
            },
            {
                id    : 13,
                price : '￥153.80',
            },
            {
                id    : 14,
                price : '￥87.10',
            },
            {
                id    : 15,
                price : '￥290.80',
            },
            {
                id    : 16,
                price : '￥708.45',
            }
        ];

        return (
            <FlatList   keyExtractor={(item, index) => {return index;}}
                        data = {this.props.data} //数据源
                        renderItem = {(item) => this._renderRow(item)} //每一行render
                        ItemSeparatorComponent = { this._renderSeprator }
                        removeClippedSubviews={false}
                        ListFooterComponent = { this._renderListFooter }
                        horizontal = {true}
                        ref="flatListView"
                        showsHorizontalScrollIndicator = {false}
            >

            </FlatList>
        );
    }

    _renderRow = (item) => {

        return (
            <QuickSkimItem navigation = { this.props.navigation }
                           data = { item.item }
                           index = { item.index }
                           type = { this.props.type }
            >

            </QuickSkimItem>
        );
    };

    _renderSeprator = () => {

        return (
            <View style = {Styles.seprator}>

            </View>
        );
    };

    _renderListFooter = () => {

        return (

            <View style =  {Styles.footer }>
                <TouchableOpacity style =  { Styles.footer } onPress={() => {
                    const { dispatch } = this.props.navigation;
                    dispatch(NavigationActions.navigate({
                        routeName : 'Zone',
                        params : {
                            title : this.props.type,
                        }
                    }));
                }}>

                    <Text style={ Styles.footText }>
                    点我加载更多
                    </Text>

                    <Image source={Images.Common.PointRight} style={Styles.rightpoint}/>
                </TouchableOpacity>
            </View>


        );
    };
}

const Styles = StyleSheet.create({
    listFooter : {

    },

    seprator  : {
        width : 6,
        backgroundColor : '#f6f6f6'
    },

    footText :{
        width : 14,
        color : '#999',
    },

    footer :{
        flex : 1,
        width:80,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor:'#f6f6f6',
        flexDirection : 'row'
    },

    rightpoint : {
        marginLeft : 8,
        width :22,
        height : 22,
    }


});