/**
 * Created by liuzhihui on 2017/10/21.
 */
import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    RefreshControl,
    SectionList,

}  from 'react-native'

import Colors from '../../../utils/color'
import Images from '../../../utils/image'
import HomeHeaderView from '../homeHeaderView'
import ItemHeader from '../../Util/itemHeader'
import QuickSkimView from '../../Home/QuickSkimView'
import HomeFooterView from '../../Home/homeFooterView'


export default class HomeView extends Component
{

    _renderRow = (info) => {

        var txt = '  ' + info.item.title;

        return (
            <QuickSkimView>

            </QuickSkimView>
        );

        return <View style = {{height : 44, alignItems : 'center'}}>
                    <Text>
                        {txt}
                    </Text>
                </View>;


    };

    _renderSectionHeader = (info) => {

        var txt = info.section.key;

        return (

        <View style = {{
            marginTop : 10,
            marginBottom : 10,
        }}>
            <ItemHeader leftTitle = { info.section.key } leftImg={Images.Home.HotSale} >

            </ItemHeader>

        </View>

        );



    };

    _listHeader = ()=> {
        return <HomeHeaderView/>
    }

    _listFooter = () => {

        return <HomeFooterView/>

    }

    render(){

        const sections = [
            {
                key: "热卖蔬菜",
                data:[
                        { title: "阿童木" },
                ],
            //     data: [
            //     { title: "阿童木" },
            //     { title: "阿玛尼" },
            //     { title: "爱多多" },
            //     { title: "表哥" },
            //     { title: "贝贝" },
            //     { title: "表弟" },
            //     { title: "表姐" },
            //     { title: "表叔" },
            //     { title: "成吉思汗" },
            //     { title: "超市快递" },
            //     { title: "王磊" },
            //     { title: "王者荣耀" },
            //     { title: "往事不能回味" },
            //     { title: "王小磊" },
            //     { title: "王中磊" },
            //     { title: "王大磊" },
            //     { title: "阿童木" },
            //     { title: "阿玛尼" },
            //     { title: "爱多多" },
            //     { title: "表哥" },
            //     { title: "贝贝" },
            //     { title: "表弟" },
            //     { title: "表姐" },
            //     { title: "表叔" },
            //     { title: "成吉思汗" },
            //     { title: "超市快递" },
            //     { title: "王磊" },
            //     { title: "王者荣耀" },
            //     { title: "往事不能回味" },
            //     { title: "王小磊" },
            //     { title: "王中磊" },
            //     { title: "王大磊" },
            //     { title: "阿童木" },
            //     { title: "阿玛尼" },
            //     { title: "爱多多" },
            //     { title: "表哥" },
            //     { title: "贝贝" },
            //     { title: "表弟" },
            //     { title: "表姐" },
            //     { title: "表叔" },
            //     { title: "成吉思汗" },
            //     { title: "超市快递" },
            //     { title: "王磊" },
            //     { title: "王者荣耀" },
            //     { title: "往事不能回味" },
            //     { title: "王小磊" },
            //     { title: "王中磊" },
            //     { title: "王大磊" },
            //
            // ]
            },
            {
                key : '热卖肉蛋',
                data:[
                    { title: "阿童木" },
                ],

            },

            {
                key : '热卖生鲜',
                data:[
                    { title: "阿童木" },
                ],

            },
            {
                key : '热卖水果',
                data:[
                    { title: "阿童木" },
                ],

            },
        ];

        return (

            <View style = {homeViewStyles.container}>

                <SectionList sections={sections}
                             renderItem={this._renderRow}
                             renderSectionHeader = {this._renderSectionHeader}
                             keyExtractor={(item, index) => {return index + '';}}  //this is required when you are using FlatList
                             ListHeaderComponent={this._listHeader}
                             ListFooterComponent={this._listFooter}
                             onRefresh = {()=>{

                             }}
                             refreshing={false}
                             stickySectionHeadersEnabled = {false}

                >

                </SectionList>
            </View>
        );
    }
}

const homeViewStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#f6f6f6',
    },


});