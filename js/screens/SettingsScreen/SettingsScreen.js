/**
 * Created by liuzhihui on 2017/10/31.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native'

import { NavigationActions } from 'react-navigation'

import Colors from '../../utils/color'
import Styles from '../../utils/css/styles'
import SimpleCell from '../../components/Util/simpleCell'
import CellType from './type'
import BigRoundButton from '../../components/Util/button/bigRoundButton'

export default class SettingsScreen extends Component{

    static navigationOptions =({navigation}) => ({
        title : '设置',
        headerTitleStyle : { alignSelf : 'center'},
        headerBackTitle : '返回',
        headerTintColor : Colors.MainColor,
        headerRight : (
            <View style = { {
                width : 22,
                height : 22,
            }}>
            </View>
        ),
        
    });

    constructor(){
        super();
        this.state = {
            dataSource : [{
                title : '关于我们',
                type : CellType.Type_About_US,
            }
            ]
        };
    }

    _renderFooter = () => {
        return (
            <View style = { _Styles.footer }>
                <BigRoundButton title = '退出当前账号'
                                onPress = {

                                    () => {

                                        const { dispatch }  = this.props.navigation;
                                        const resetAction = NavigationActions.reset({
                                            index : 0,
                                            actions : [
                                                NavigationActions.navigate({
                                                    routeName : 'Login'
                                                })
                                            ]
                                        });
                                        dispatch(resetAction);

                                        // const backAction = NavigationActions.back();
                                        // dispatch(backAction);
                                        // this.props.navigation.goBack();
                                    }
                                }
                >

                </BigRoundButton>
            </View>
        );
    }

    _rowPress = (item) => {
        // if(item.type === CellType.Type_About_US){
        //     alert('关于我们');
        // }
    }

    _renderItem = ( info ) => {
        return (
            <SimpleCell title =  { info.item.title }
                        onPress = { this._rowPress.bind(this, info.item) }
            >
            </SimpleCell>
        );
    }



    render(){
        return (
            <View style = { Styles.top_layout_container }>
                <FlatList style = { _Styles.flatList }
                          data = { this.state.dataSource }
                          keyExtractor={(item, index) => {return index;}}
                          renderItem = { ( info ) => this._renderItem( info )}
                          ListFooterComponent = { this._renderFooter }
                />
            </View>
        );
    }
}

const _Styles = StyleSheet.create({
    flatList : {
        flex : 1,
    },
    footer : {
        height : 200,
        alignItems : 'center',
        justifyContent : 'center',
    },
    text : {
        fontSize : 16,
        color : '#fff',
    }

});