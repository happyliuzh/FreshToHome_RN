import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image/images'
import BigRoundButton from '../../components/Util/button/bigRoundButton'

import { NavigationActions } from 'react-navigation'

export default class LoginScreen extends Component{

    static navigationOptions = {
        title : '登录',
    };

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={[CommonStyles.center_layout_container,{justifyContent:'flex-end'}]}>

                <View style = { styles.LoginView }>
                    <BigRoundButton title = '微信登录'
                                    onPress = {
                                        () => {
                                            const resetAction = NavigationActions.reset({
                                                index : 0,
                                                actions : [
                                                    NavigationActions.navigate({
                                                        routeName : 'Tab'
                                                    })
                                                ]
                                            });
                                            this.props.navigation.dispatch(resetAction);
                                        }
                                    }
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginView : {
        marginBottom : 200,
    }
});