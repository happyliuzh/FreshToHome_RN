/**
 * Created by liuzhihui on 2017/10/30.
 */
import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native'

import UserHeadView from '../../components/UserInfo/userHeadView'
import UserNameView from '../../components/UserInfo/userNameView'

import Colors from '../../utils/color'
import CommonStyles from '../../utils/css/styles'

export default class UserInfoScreen extends Component{


    static navigationOptions = {
        headerTitle : '我的资料',
        headerTintColor : Colors.MainColor,
        headerTitleStyle : {
            alignSelf : 'center',
        },
        headerRight : (
            <View style = {{

            width : 22,
            height : 22,

            }}/>
        ),
    }

    constructor(){
        super();
    }


    render(){
        return (
            <ScrollView style={ Styles.container }
            >

                <UserHeadView>
                </UserHeadView>

                <View style = { CommonStyles.horizontalLine }>
                </View>

                <UserNameView>
                </UserNameView>

                <View style = { CommonStyles.horizontalLine }>
                </View>

            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
    }
});