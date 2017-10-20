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

export default class DetailScreen extends Component{

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
    };

    render(){
        const  {params} = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return(
        <View style={CommonStyles.center_layout_container}>


            <Spinner visible={true}

                     overlayColor='rgba(0,0,0,0)'
                     size='large' cancelable={true}
                     style={{
                         display:'flex',
                         flexDirection:'column',
                         alignItems:'center',
                         justifyContent:'center',
                     }}>

                <PulseLoader size={90} color={Colors.MainColor} frequency={1000} style={{marginTop:100}}/>

            </Spinner>
        </View>
        );
    }
}