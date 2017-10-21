import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
    Image,
    ScrollView,
    RefreshControl,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'

import Colors from '../../utils/color'
import CarouselView from "../../components/Home/carouseView";
import Images from '../../utils/image'
import HomeView from '../../components/Home/homeView'

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




export default class HomeScreen extends Component{

    static navigationOptions = {
        title: '生鲜货架',
        headerBackTitle : '返回',
    };

    componentWillMount(){

        console.log('Home Screen will mount');
    }

    componentDidMount(){

        console.log('Home Screen did mount');
    }

    render(){
        const { navigate } = this.props.navigation;

        return (
            <HomeView>

            </HomeView>
        );

    }
}


const homeStyles = StyleSheet.create({

    container : {
        justifyContent : 'flex-start'
    },

});
