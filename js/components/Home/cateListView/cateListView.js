/**
 * Created by liuzhihui on 2017/10/20.
 */

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Platform,

} from 'react-native'

import UltimateListView from 'react-native-ultimate-listview'
import CarouselView from '../carouseView'

export default class CateListView extends Component
{

    constructor(props) {
        super(props);
    }



    _renderHeader = ()=>{

        return null;

        return (

            <CarouselView>

            </CarouselView>

        );

    }




    _onFetch = (page = 1, startFetch, abortFetch)=> {

        let pageLimit = 24;

        let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index}`);

        startFetch(rowData, pageLimit);

    }

    _renderItem = (item, index, separator) => {

        return (
            <Text>
                cell + {index}
            </Text>
        );

    };

    _renderPaginationFetchingView = () => {
        return (
            <Text>加载中</Text>
        );
    };

    _renderPaginationAllLoadedView = () => {
        return (
            <View style={{alignItems:'center',justifyContent:'center',height : 60}}>
                <Text>我是有底线的....</Text>
            </View>
        );
    };

    _renderPaginationWaitingView = () => {
        return (
            <View style={{alignItems : 'center',justifyContent : 'center',height:44}}>
                <Text>
                    加载中
                </Text>
            </View>
        );
    };

    _renderEmptyView = () => {
        return (
            <View>
                <Text> i am empty !</Text>
            </View>
        );
    };

    _renderSeparatorView = () => {
        return (
            <View style={{height : 10, backgroundColor:'#e50263'}}>

            </View>
        );
    };

    render(){
        return (
            <UltimateListView header={this._renderHeader}
                              onFetch={this._onFetch}
                              keyExtractor={(item, index) => `${index} - ${item}`}  //this is required when you are using FlatList
                              item={this._renderItem}  //this takes three params (item, index, separator)
                              numColumns={1}

                              //是否允许上拉加载更多
                              pagination={false}
                              //是否允许下拉刷新
                              refreshable={false}

                              displayDate

                              //第一次取数据页面的loading
                              paginationFetchingView={this._renderPaginationFetchingView}

                              //全部加载完毕的底部展示
                              paginationAllLoadedView={this._renderPaginationAllLoadedView}

                              //加载更多时候的提示
                              paginationWaitingView={this._renderPaginationWaitingView}

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
