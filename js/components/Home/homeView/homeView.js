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

}  from 'react-native'

import Colors from '../../../utils/color'
import CarouselView from '../carouseView'

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

export default class HomeView extends Component
{
    render(){
        return (
            <View style = {homeViewStyles.container}>
                <ScrollView style={homeViewStyles.scrollViewContainer}
                            contentContainerStyle={{
                                justifyContent:'flex-start',
                                alignItems : 'stretch',
                            }}
                            refreshControl={
                                <RefreshControl refreshing={false}/>
                            }

                >
                    <CarouselView/>

                    <Text>1</Text>
                    <Text>1</Text>

                    <Text>1</Text>
                    <Text>1</Text>



                </ScrollView>
            </View>
        );
    }
}

const homeViewStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.MainColor,
    },
    scrollViewContainer : {
        flex : 1,
        backgroundColor : Colors.MainColor,


    },
});