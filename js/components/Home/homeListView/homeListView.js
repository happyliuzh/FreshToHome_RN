/**
 * Created by liuzhihui on 2017/10/20.
 */

import React, { Component } from 'react'
import {

    View,
    StyleSheet,
    Text,

} from 'react-native'

import UltimateListView from 'react-native-ultimate-listview'

export default class HomeListView extends Component
{

    _renderHeader = ()=>{
        return <Text>
            我是header!
        </Text>
    }

    _onFetch = (page = 1, startFetch, abortFetch)=> {

    }

    render(){
        return (
            <UltimateListView header={this._renderHeader}
                              onFetch={this._onFetch}
            >
            </UltimateListView>
        );
    }

}
