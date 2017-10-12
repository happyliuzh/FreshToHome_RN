import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
    Image,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image'



export default class HomeScreen extends Component{

    static navigationOptions = {
        title: '生鲜货架',
        headerBackTitle : '返回',
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
        <View style={[CommonStyles.center_layout_container, homeStyles.container]}>

            <Image style={homeStyles.image} source={Images.TabIcon.Run_Image_F}></Image>
            <Image style={homeStyles.image} source={Images.TabIcon.Run_Image_S}></Image>
            <Image style={homeStyles.image} source={Images.TabIcon.Me_Image_F}></Image>
            <Image style={homeStyles.image} source={Images.TabIcon.Me_Image_S}></Image>

            <Image style={[homeStyles.image,homeStyles.wideImage]} source={Images.WebImage.BaiduLogo_Image}></Image>
            <Image style={[homeStyles.image,homeStyles.wideImage,homeStyles.largeImage]} source={Images.WebImage.Http_Image}></Image>


            <Button title="点我进入详情-》" onPress= {() => navigate('Detail',{params : "hello are you detail screen?"})}/>
        </View>
        );
    }
}


const homeStyles = StyleSheet.create({

    container : {
        marginTop : 50,
        justifyContent : 'flex-start'
    },

    image : {
        width : 40,
        height : 40,
    },

    wideImage : {
        width:100,
    },

    largeImage : {
        marginTop : 20,
        height    : 100,
    }
});
