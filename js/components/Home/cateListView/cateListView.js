/**
 * Created by liuzhihui on 2017/10/20.
 */

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Platform,
    ActivityIndicator,
} from 'react-native'

import UltimateListView from 'react-native-ultimate-listview'
import CarouselView from '../carouseView'
import DetailListItem from '../../Util/zoneListItem'
import Loader from '../../../utils/loader'
import LoaderMore from '../../Util/loaderMore'
import Colors from '../../../utils/color'
import ListFooter from '../../Util/listFooter'

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

        let pageLimit = 10;

        let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index}`);

        setTimeout(()=> {

            if(page == 2)
            {
                startFetch([],pageLimit);
            }
            else
            {
                startFetch(rowData, pageLimit);
            }

        }, 2000);


    }

    _renderItem = (item, index, separator) => {

        return (

            <DetailListItem>

            </DetailListItem>
        );

    };

    _renderPaginationFetchingView = () => {

        return (
            <Loader></Loader>
        );
    };

    _renderPaginationAllLoadedView = () => {
        return (
            <ListFooter>

            </ListFooter>
        );
    };

    _renderPaginationWaitingView = () => {

        // return (
        //     <LoaderMore>
        //
        //     </LoaderMore>
        // );
        return (
            <View style={{alignItems : 'center',justifyContent : 'center',height:44}}>

                <ActivityIndicator>

                </ActivityIndicator>

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
            <View style={{height : 10, backgroundColor:'#f6f6f6'}}>

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
                              pagination={true}
                              //是否允许下拉刷新
                              refreshable={true}

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
