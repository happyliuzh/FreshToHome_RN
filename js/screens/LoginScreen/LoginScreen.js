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

export default class LoginScreen extends Component{

    static navigationOptions = {
        title : '登录',
    };

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={[CommonStyles.center_layout_container,{justifyContent:'flex-end'}]}>

                <BigRoundButton title = '微信登录'
                                onPress = {
                                    () => {
                                        navigate('Main');
                                    }
                                }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginView : {
        width : 200,
        height : 44,
        borderRadius : 22,
        backgroundColor : '#ff8500',
        justifyContent : 'center',
        alignItems : 'center'
    }
});