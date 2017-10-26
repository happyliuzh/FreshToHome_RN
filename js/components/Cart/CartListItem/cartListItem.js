/**
 * Created by liuzhihui on 2017/10/26.
 */
import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import Images from '../../../utils/image'
import Colors from '../../../utils/color'
import SwipeCell from 'react-native-swipeout'

export default class CartListItem extends Component{

    _renderSelectView = () => {
        return (

            <TouchableOpacity style = { Styles.selectView }>
                <Image source={ Images.Common.ToBeSelected } style={{
                    width : 22,
                    height : 22,
                }}/>
            </TouchableOpacity>
        );
    }

    _renderEditView = () => {
        return (
            <View style = { Styles.editCountView }>
                <TouchableOpacity>
                    <Image source={ Images.Common.Reduce } style={ Styles.editImg }/>
                </TouchableOpacity>

                <View style = { Styles.lineView }/>

                <TextInput style={ Styles.editInputView }
                           defaultValue='1'
                           textAlign = 'center'
                           returnKeyType = 'done'

                >
                </TextInput>

                <View style = { Styles.lineView }/>
                <TouchableOpacity>
                    <Image source={ Images.Common.Add } style={ Styles.editImg }/>
                </TouchableOpacity>

            </View>
        );
    }

    _renderCellView = () => {
        return (
            <View style = { Styles.container }>
                {
                    this._renderSelectView()
                }

                <Image source={ Images.Test.TestVegatable } style={ {
                    width : 100,
                    height: 100,
                }}/>

                <View style = { Styles.contentView }>
                    <Text style={ {
                        marginTop : 8,
                        color : '#666666'
                    }}>
                        新鲜白菜500g新鲜白菜500g新鲜白菜500g新鲜白菜500g新鲜白菜500g新鲜白菜500g
                    </Text>

                    <View style = { Styles.rightBottom }>
                        <Text style={{
                            color : Colors.MainColor,
                            fontSize : 16,
                        }}>
                            ￥ 239.08元
                        </Text>

                        <View style = { Styles.editCountView }>
                            {
                                this._renderEditView()
                            }

                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render(){
        var swipeoutBtns = [
            {
                text: '删除'
            }
        ]

        return (
            <SwipeCell right={swipeoutBtns}>
                {
                    this._renderCellView()
                }
            </SwipeCell>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        height : 100,
        flexDirection : 'row',
        backgroundColor: '#f6f6f6'
    },

    selectView : {
        width : 50,
        alignItems : 'center',
        justifyContent : 'center',
    },

    contentView : {
        flex : 1,
        justifyContent: 'space-between',
        marginLeft : 8,

    },

    rightBottom : {
        flexDirection: 'row',
        justifyContent : 'space-between',
        marginBottom : 8,
    },

    editCountView : {
        width : 100,
        height : 30,
        marginRight : 12,
        flexDirection : 'row',
        borderColor : Colors.MainColor,
        borderWidth : 0.5,
        borderRadius : 2,

    },

    editContainer : {
        flex : 1,
        flexDirection : 'row',
    },

    editImg : {
        width : 30,
        height : 30,
    },

    editInputView : {
        flex : 1,
        color : '#666666'
    },

    lineView : {
        width : 0.5,
        backgroundColor : Colors.MainColor,
    }


});

