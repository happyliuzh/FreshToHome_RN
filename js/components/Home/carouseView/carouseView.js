/**
 * Created by liuzhihui on 2017/10/20.
 */
import React, { Component } from 'react'

import {

    View,
    Text,
    Dimensions,

} from 'react-native'

import Carousel from 'react-native-looped-carousel'

import PropTypes from 'prop-types'


const { width } = Dimensions.get('window');

const size = {width, height : width/3.0 }


export default class CarouselView extends Component
{

    static propTypes = {

    }

    static defaultProps = {

    }

    render(){
        return (

            <Carousel delay={4000}
                          style={size}
                          autoplay
                          pageInfo
                          onAnimateNextPage={(p) => console.log(p)}
            >

                {
                    this._renderView('#BADA55','1')
                }
                {
                    this._renderView('#1ab45f','2')
                }
                {
                    this._renderView('#239012','3')
                }

            </Carousel>
        );
    }

    _renderView(color, text)
    {
        return (
            <View style={[{ backgroundColor: color }, size, {alignItems:'center', justifyContent : 'center' }]}><Text>{text}</Text></View>

        );
    }
}