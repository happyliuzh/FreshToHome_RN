/**
 * Created by liuzhihui on 2017/10/27.
 */
import React , {
    Component,
} from 'react'

import {
    StyleSheet,
    View,
    Platform,
} from 'react-native'

import UltimateListView from 'react-native-ultimate-listview'
import OrderListItem from '../orderListItem'
import Loader from '../../../utils/loader'
import ListFooter from '../../Util/listFooter'
import PageWaitView from '../../Util/pageWaitView'


export default class OrderView extends Component{


    _renderRow = ( info ) => {
        return (
            <OrderListItem/>
        );
    }

    _renderSeprator = () => {
        return (
            <View style = { Styles.seprator }/>
        );
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
            }

        }, 1000);


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
            <UltimateListView style = { Styles.container }
                              ref={(ref) => this.listView = ref}
                              onFetch={this._onFetch}
                              keyExtractor={(item, index) => `${index} - ${item}`}  //this is required when you are using FlatList
                              item={this._renderRow}  //this takes three params (item, index, separator)
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
            >

            </UltimateListView>
        );
    }

}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    seprator : {
        height : 5,
        backgroundColor : '#f6f6f6'
    }
});