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
import CarouselView from '../carouseView'
import HomeHeaderView from '../homeHeaderView'

// <Image style={homeStyles.image} source={Images.TabIcon.Run_Image_F}></Image>
// <Image style={homeStyles.image} source={Images.TabIcon.Run_Image_S}></Image>
// <Image style={homeStyles.image} source={Images.TabIcon.Me_Image_F}></Image>
// <Image style={homeStyles.image} source={Images.TabIcon.Me_Image_S}></Image>
//
// <Image style={[homeStyles.image,homeStyles.wideImage]} source={Images.WebImage.BaiduLogo_Image}></Image>
// <Image style={[homeStyles.image,homeStyles.wideImage,homeStyles.largeImage]} source={Images.WebImage.Http_Image}></Image>
//
//
// <Button title="点我进入详情-----》" onPress= {() => navigate('Detail',{params : "hello are you detail screen?"})}/>
//
// <Image style={homeStyles.image} source={Images.TabIcon.Run_Image_F}></Image>
// <Image style={homeStyles.image} source={Images.TabIcon.Run_Image_S}></Image>
// <Image style={homeStyles.image} source={Images.TabIcon.Me_Image_F}></Image>
// <Image style={homeStyles.image} source={Images.TabIcon.Me_Image_S}></Image>
//
// <Image style={[homeStyles.image,homeStyles.wideImage]} source={Images.WebImage.BaiduLogo_Image}></Image>
// <Image style={[homeStyles.image,homeStyles.wideImage,homeStyles.largeImage]} source={Images.WebImage.Http_Image}></Image>



// <View style = {homeViewStyles.container}>
// <ScrollView style={homeViewStyles.scrollViewContainer}
// contentContainerStyle={{
//     justifyContent:'flex-start',
//         alignItems : 'stretch',
// }}
// refreshControl={
// <RefreshControl refreshing={false}/>
// }
//
// >
// <CarouselView/>
//
// <Text>1</Text>
// <Text>1</Text>
//
// <Text>1</Text>
// <Text>1</Text>
//
//
//
// </ScrollView>
// </View>

// <SectionList ListHeaderComponent={
//
// <HomeHeaderView>
//
// </HomeHeaderView>
// }
//
// >
//
// </SectionList>

export default class HomeView extends Component
{

    _renderRow = (info) => {

        var txt = '  ' + info.item.title;

        return <View>
                    <Text>
                        {txt}
                    </Text>
                </View>;


    };

    _renderHeader = (info) => {

        var txt = info.section.key;


        return <View>
            <Text>
                {txt}
            </Text>
            </View>


    };

    _listHeader = ()=> {
        return <HomeHeaderView/>
    }

    render(){

        const sections = [
            { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
            { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
            { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
            { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
        ];

        return (
            <View style = {homeViewStyles.container}>

                <SectionList sections={sections}
                             renderItem={this._renderRow}
                             renderSectionHeader = {this._renderHeader}
                             keyExtractor={(item, index) => {return index + '';}}  //this is required when you are using FlatList
                             ListHeaderComponent={this._listHeader}
                >

                </SectionList>
            </View>
        );
    }
}

const homeViewStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.MainColor,
    },

});