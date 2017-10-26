/**
 * Created by liuzhihui on 2017/10/21.
 */

import React, { Component } from 'react'

import {
    View,

} from 'react-native'

import CarouseView from '../carouseView'
import HomeCateView from '../cateView'




export default class HomeHeaderView extends Component{

    render(){
        return (
            <View>
                <CarouseView>

                </CarouseView>

                <HomeCateView navigation = { this.props.navigation }>

                </HomeCateView>

            </View>
        );
    }

}