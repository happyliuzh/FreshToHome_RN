/**
 * Created by liuzhihui on 2017/10/27.
 */
import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native'

import OrderContentItem from '../orderContentItem'

export default class OrderContentList extends Component{


    _renderRow = (info) => {
        return (
            <OrderContentItem>

            </OrderContentItem>
        );
    }

    _renderSeprator = () => {
        return (
            <View style = { Styles.seprator }>

            </View>
        );
    }

    render(){
        return (
            <FlatList style = { Styles.container }
                      keyExtractor={(item, index) => {return index;}}
                      data = {[{}, {}, {}]}
                      renderItem = { (info) => this._renderRow(info)}
                      ItemSeparatorComponent = {this._renderSeprator}
                      //解决flatlist动一下才显示的问题
                      removeClippedSubviews={false}

            >

            </FlatList>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        height : 100,
    },

    seprator : {
        width : 5,
        backgroundColor : '#f6f6f6',
    }
});