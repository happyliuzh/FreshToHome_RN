/**
 * Created by liuzhihui on 2017/10/23.
 */
import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'


import DimensionUtil from '../../../utils/dimension'
import Images from '../../../utils/image'
import Colors from '../../../utils/color'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window');

const length = width / 4.0


export default class HomeCateItem extends Component
{


    static propTypes = {
        itemType : PropTypes.number,
        title : PropTypes.string,
    }


    _getImage = () =>
    {
        const type = this.props.itemType;

        switch (type)
        {
            case 1:
            {
                return <Image source={Images.Home.Vegatable} style={Styles.image}/>
            }

            case 2:
            {
                return <Image source={Images.Home.Meat} style={Styles.image}/>
            }

            case 3:
            {
                return <Image source={Images.Home.Fish} style={Styles.image}/>
            }

            case 4:
            {
                return <Image source={Images.Home.Fruit} style={Styles.image}/>
            }

            default:{

                return null;

                break;
            }
        }
    }

    _onItemPressed = () => {

        const type = this.props.itemType;

        alert('去' + this.props.title + '区');

        switch (type)
        {
            case 1:
            {
                break;
            }

            case 2:
            {
                break;
            }

            case 3:
            {
                break;
            }

            case 4:
            {
                break;
            }

            default:{


                break;
            }
        }

    }

    render(){
        return (
        <TouchableOpacity onPress={ this._onItemPressed }
        >
            <View style = { Styles.container }>

                {
                    this._getImage()
                }
                <Text style={Styles.text}>
                    {this.props.title}
                </Text>

            </View>
        </TouchableOpacity>

        );
    }
}

const Styles = StyleSheet.create({

    container : {
        width : length,
        height : length,
        justifyContent : 'space-around',
        alignItems : 'center',

    }
    ,
    image : {
        width : 44,
        height: 44,
    },

    text  :{
        color : Colors.MainColor,
        fontSize : 14,
    }
});