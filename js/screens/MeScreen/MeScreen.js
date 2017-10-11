import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CommonStyles from '../../utils/css/styles'


export default class MeScreen extends Component{

    static navigationOptions = {
        title : '我的'
    };

    render(){
        return(
        <View style = {CommonStyles.top_layout_container}>
            <View style = {{alignItems : 'center',marginTop : 200}}>
                <Text> me scene </Text>
            </View>
        </View>
        );
    }
}




