import React, {Component} from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'
import CommonStyles from '../../utils/css/styles'


export default class LoginScreen extends Component{

    static navigationOptions = {
        title : '登录',
    };

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={CommonStyles.center_layout_container}>
                <Button title="Login Screen" onPress={()=>{navigate('Main')}}></Button>
            </View>
        );
    }
}