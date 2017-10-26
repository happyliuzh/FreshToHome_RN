/**
 * Created by liuzhihui on 2017/10/26.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native'

import PropTypes from 'prop-types'

import ZoneListItem from '../../Util/zoneListItem'

export default class SearchListView extends Component{

    static propTypes = {
        data : PropTypes.array.isRequired,
    }

    constructor(){
        super();

    }

    _renderRow = (info) => {

        return (
            <ZoneListItem>

            </ZoneListItem>
        );
    }

    _renderSeprator= () => {

        return (

            <View style={ {backgroundColor : '#f6f6f6',height : 5}}>

            </View>
        );

    }

    render(){
        return (
            <View style = { Styles.container }>
                <FlatList data = { this.props.data }
                          keyExtractor={(item, index) => {return index;}}
                          renderItem = { (info) => this._renderRow(info) }
                          ItemSeparatorComponent = {this._renderSeprator}

                          //解决flatlist动一下才显示的问题
                          removeClippedSubviews={false}


                >

                </FlatList>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 20,
    }
});