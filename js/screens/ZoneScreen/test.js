/**
 * Created by liuzhihui on 2017/10/25.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native'

import { NavigationActions } from 'react-navigation'

export default class TestComponent extends Component{
    render(){
        return (
        <TouchableOpacity
            onPress = {() => {
                const { dispatch } =  this.props;
                alert(dispatch);
                // dispatch(NavigationActions.back());
                // dispatch(NavigationActions.navigate({routeName : 'Zone'}));
            }}

            style = {{
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center',}}>

            <Text>
                点我
            </Text>
        </TouchableOpacity>
        );
    }
}