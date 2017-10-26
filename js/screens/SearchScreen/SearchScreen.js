/**
 * Created by liuzhihui on 2017/10/26.
 */

import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'

import SearchHeader from '../../components/Search/searchHeader'
import CommonStyles from '../../utils/css/styles'

export default class SearchScreen extends Component{

    static navigationOptions = {

        header : null,
    }

    render(){
        return (

            <View style = { CommonStyles.top_layout_container }>
                <SearchHeader navigation = { this.props.navigation }>

                </SearchHeader>
            </View>

        );
    }
}