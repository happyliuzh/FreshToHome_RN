/**
 * Created by liuzhihui on 2017/10/23.
 */
import React,
{ Component } from 'react'

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,

} from 'react-native'

import PropTypes from 'prop-types'

import Colors from '../../../utils/color'

export default class ItemHeader extends Component
{

    static propTypes = {

        leftTitle : PropTypes.string,
        leftImg   : PropTypes.any,
        rightImg  : PropTypes.any,
    }

    static defaultProps = {
        leftTitle : '',
        rightImg : null,
    }

    _renderRight(){

        if(this.props.rightImg)
        {
            return (
                <View style = { Styles.right }>

                    <Image source={this.props.rightImg} style={Styles.img}/>

                </View>
            );
        }

        return <View/>;

    }

    render(){

        let onPress = this.props.onPress;

        if(onPress)

        {
            return (

            <TouchableOpacity onPress = { this.props.onPress }>

                <View style = { Styles.container }>

                    <View style = { Styles.left }>

                        <Image source={this.props.leftImg} style={Styles.img}/>

                        <Text style={Styles.leftText}>
                            {this.props.leftTitle}
                        </Text>

                    </View>

                    {
                        this._renderRight()
                    }

                </View>
            </TouchableOpacity>

            );
        }

        return (
            <View style = { Styles.container }>

                <View style = { Styles.left }>

                    <Image source={this.props.leftImg} style={Styles.img}/>

                    <Text style={Styles.leftText}>
                        {this.props.leftTitle}
                    </Text>

                </View>

                {
                    this._renderRight()
                }

            </View>
        );
    }
}

const Styles = StyleSheet.create({

    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 10,
        marginBottom : 5,
    },

    left : {
        flexDirection:'row',
        marginLeft : 16,
    },

    right : {
        marginRight : 16,
    }
    ,
    img : {
        width : 22,
        height : 22,
    },

    leftText : {
        marginLeft : 8,
        fontSize : 18,
        color : Colors.MainColor,
    }
});