/**
 * Created by liuzhihui on 2017/10/27.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import PropTypes from 'prop-types'
import Colors from '../../../../utils/color'

export default class RoundTitleButton extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
    }



    render(){
        return (
            <TouchableOpacity style = { Styles.container }
                              onPress = { this.props.onPress }
            >
                <Text style={ Styles.text }>
                    {
                        this.props.title
                    }
                </Text>
            </TouchableOpacity>
        );
    }

}

const Styles = StyleSheet.create({

    container : {
        borderRadius : 4,
        borderColor : Colors.MainColor,
        borderWidth : 1,
        padding : 8,
        height : 32,
    },

    text : {
        color : Colors.MainColor,
    }
});

