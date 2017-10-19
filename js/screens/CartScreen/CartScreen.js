import React, {Component} from 'react'
import {View,
    Text,
} from 'react-native'

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view'


export default class CartScreen extends Component{

    static navigationOptions = {
        title : "购物车"
    };

    render(){
        return(

            <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={1}
                renderTabBar={() => <DefaultTabBar />}
                >
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text>
            </ScrollableTabView>
        );
    };
}