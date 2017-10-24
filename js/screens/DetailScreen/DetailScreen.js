import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
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

    static navigationOptions = {
        title : "商品详情",
        headerRight : <Button title="分享" onPress={()=>{

                                                const { navigate } = this.props.navigation;
                                                // navigate.goBack();
                                                // navigate('Tab');
                                                alert('去分享！');

                                            }}>
                      </Button>,
        // headerRight : <Icon.Button></Icon.Button>
        headerTintColor : Colors.MainColor,
        headerTitleStyle : { alignSelf : 'center'},


    };

    render(){
        const  {params} = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return(
            <View style={CommonStyles.top_layout_container}>
                {
                    RefreshLoader()
                }
            </View>



        );
    }

}
