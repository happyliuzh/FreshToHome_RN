/**
 * Created by liuzhihui on 2017/10/26.
 */
import React,{
    Component,
} from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'

import {
    NavigationActions,
} from 'react-navigation'

import Colors from '../../../utils/color'
import Images from '../../../utils/image'

export default class SearchHeader extends Component{
    render(){
        return (
            <View style = { Styles.container }>

                <View style = { Styles.left }>

                    <Image source={ Images.Common.Search } style={{
                        width : 22,
                        height:22,
                        marginLeft: 8,
                        marginRight : 8,

                    }}/>

                    <TextInput autoFocus = { true }

                               onChangeText = { (text) => {

                               }}

                               onEndEditing = { (event) => {

                               }}

                               //单行的时候，点击提交和确定。
                               onSubmitEditing = {
                                   (event) => {
                                       let str =
                                           'onSubmitEditing text: ' + event.nativeEvent.text;
                                   }

                               }

                               placeholder = '请输入您喜欢的宝贝'

                               placeholderTextColor = '#999999'

                               returnKeyType = 'search'

                               selectTextOnFocus = { true }

                               style={ {
                                   flex : 1,
                               }}





                    />
                </View>

                <TouchableOpacity style = { Styles.right }
                                  onPress = { () => {

                                      const { dispatch } = this.props.navigation;

                                      dispatch(NavigationActions.back());

                                  }}
                >
                    <Text style={ Styles.rightText }>
                        取消
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const Styles = StyleSheet.create({
    container : {
        height : 44,
        flexDirection : 'row',
        marginTop : 25,
    },

    left : {
        flex : 1,
        marginLeft : 12,
        borderRadius : 4,
        borderWidth : 1,
        borderColor : Colors.MainColor,
        flexDirection : 'row',
        alignItems:'center',
        justifyContent: 'center',
    }
    ,
    right : {
        width : 60,
        alignItems : 'center',
        justifyContent : 'center',
    },

    rightText : {
        color : Colors.MainColor,
        fontSize : 18,
    }
});