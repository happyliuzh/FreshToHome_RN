/**
 * Created by liuzhihui on 2017/10/25.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image,
    Platform,
} from 'react-native'

import UltimateListView from 'react-native-ultimate-listview'

import Loader from '../../../utils/loader'
import CartListItem from '../CartListItem'


export default class CartListView extends Component{


    _onFetch = (page = 1, startFetch, abortFetch)=> {

        let pageLimit = 20;

        let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index}`);

        startFetch(rowData, pageLimit);

    }

    _renderItem = (item, index, separator) => {

        return (
            <CartListItem>

            </CartListItem>
        );

    };

    _renderPaginationFetchingView = () => {

        return (
            <Loader></Loader>
        );
    };



    _renderEmptyView = () => {
        return (
            <View>
            </View>
        );
    };

    _renderSeparatorView = () => {
        return (
            <View style={{height : 10, backgroundColor:'#f6f6f6'}}>

            </View>
        );
    };

    render(){
        return (
            <UltimateListView onFetch={this._onFetch}
                              ref={(ref) => this.listView = ref}
                              keyExtractor={(item, index) => `${index} - ${item}`}  //this is required when you are using FlatList
                              item={this._renderItem}  //this takes three params (item, index, separator)
                              numColumns={1}
                              refreshableMode={ Platform.OS === 'ios' ? 'basic' : 'basic'} //advanced

                              //是否允许上拉加载更多
                              pagination = { false }
                              //是否允许下拉刷新
                              refreshable

                              displayDate

                              //第一次取数据页面的loading
                              paginationFetchingView={this._renderPaginationFetchingView}

                              //没有数据的时候空view
                              emptyView={this._renderEmptyView}

                              //cell之间的间隔seprator view
                              separator={this._renderSeparatorView}


                              refreshableTitlePull="下拉刷新"
                              refreshableTitleRelease="松手加载"
                              refreshableTitleRefreshing="加载中..."
                              dateTitle="上次加载"
                              waitingSpinnerText='加载中...'


                              //new props on v3.2.0
                              arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
                              dateStyle={{color: 'lightgray'}}
                              refreshViewStyle={Platform.OS === 'ios' ? {height: 80, top: -80} : {height: 80}}
                              refreshViewHeight={80}

            >
            </UltimateListView>
        );
    }

}