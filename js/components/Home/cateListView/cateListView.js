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
import DetailListItem from '../../Util/zoneListItem'
import Loader from '../../../utils/loader'
import LoaderMore from '../../Util/loaderMore'
import Colors from '../../../utils/color'
import ListFooter from '../../Util/listFooter'
import PageWaitView from '../../Util/pageWaitView'

export default class CateListView extends Component
{

    constructor(props) {
        super(props);
    }


    _renderHeader = ()=>{
        return null;
    }


    _onFetch = (page = 1, startFetch, abortFetch)=> {

        let pageLimit = 20;

        let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index}`);

        setTimeout(()=> {

            if(page == 2)
            {
                startFetch([],pageLimit);
            }
            else
            {
                startFetch(rowData, pageLimit);

                if(page == 1)
                {
                    const  { params } = this.props.navigation.state;

                    if(params.index)
                    {
                        this.listView.scrollToIndex({viewPosition: 0, index: Math.floor(params.index)});
                    }
                }

            }

        }, 1000);


    }

    _renderItem = (item, index, separator) => {

        return (

            <DetailListItem>

            </DetailListItem>
        );

    };

    _itemHeight = () => {
        return 100;
    }

    _sepratorHeight = () => {
        return 10;
    }

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

        return (

            <PageWaitView>

            </PageWaitView>
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
            <UltimateListView header={this._renderHeader}
                              ref={(ref) => this.listView = ref}


                              onFetch={this._onFetch}
                              keyExtractor={(item, index) => `${index} - ${item}`}  //this is required when you are using FlatList
                              item={this._renderItem}  //this takes three params (item, index, separator)
                              numColumns={1}
                              refreshableMode={ Platform.OS === 'ios' ? 'basic' : 'basic'} //advanced

                              //是否允许上拉加载更多
                              pagination
                              //是否允许下拉刷新
                              refreshable

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

                              getItemLayout = {(data, index) => ( {length: this._itemHeight(), offset: this._itemHeight() * index + this._sepratorHeight() * (index - 1), index} )}

            >
            </UltimateListView>
        );
    }

}
