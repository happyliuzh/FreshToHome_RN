import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image'
import DetailFooter from '../../components/Detail/DetailFooter'
import Icon from 'react-native-vector-icons/Ionicons'
import Spinner from 'react-native-loading-spinner-overlay'
import { PulseLoader } from 'react-native-indicator'

import Colors from '../../utils/color'

import RefreshLoader from '../../utils/loader'


// <View style={CommonStyles.center_layout_container}>
//
//
// <Spinner visible={this.state.loading}
// overlayColor='rgba(0,0,0,0.25)'
// cancelable={true}
//     >
//     <PulseLoader size={90} color={Colors.MainColor} frequency={1000} style={{marginTop:100}}/>
//
// <Button title="取消加载" onPress={()=>{this.setState({loading : false});}}/>
//
// </Spinner>
// </View>

export default class DetailScreen extends Component{

    constructor()
    {
        super();

        this.state = {
            loading : true,
        };
    }

    static navigationOptions = ( navigation ) => ({
        title : "商品详情",
        headerRight :
            <TouchableOpacity onPress = { () =>{

                        alert('去分享');
                }
            }>
                 <Image source={Images.Common.Share} style={{
                        width : 22,
                        height : 22,
                        marginRight : 16,
                 }}/>
             </TouchableOpacity>,

        headerTintColor : Colors.MainColor,
        headerTitleStyle : { alignSelf : 'center'},


    });

    render(){
        const  {params} = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return(
            <View style={CommonStyles.top_layout_container}>
                <TouchableOpacity style = { _styles.container }>
                    <Text style={{
                        fontSize : 18,
                    }}>
                        点我测试。。
                    </Text>
                </TouchableOpacity>

                <DetailFooter addCart={
                    () => {

                    }
                } goCart= {
                    () => {

                    }
                }

                />
            </View>



        );
    }

}

const _styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
});
