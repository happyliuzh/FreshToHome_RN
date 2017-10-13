/**
 * Created by liuzhihui on 2017/10/13.
 */

import React, {Component} from 'react'
import {View,Text,Image} from 'react-native'
import PropTypes from 'prop-types';

export default class OrderHandleItem extends Component{

    static defaultProps = {
        title : '',
    };

    static propTypes = {
        title : PropTypes.string,
        image : PropTypes.any,
    };

    render(){
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <Image
                    source={this.props.image}
                    style={{width:30,height:30}}
                    resizeMode='cover'>
                </Image>
                <Text style={{marginTop:10, color : '#333333'}}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}
