/**
 * Created by liuzhihui on 2017/10/19.
 */
import React from 'react'
import Toast ,{ DURATION }  from 'react-native-easy-toast'
import {
    Dimensions,

} from 'react-native'

const {height} = Dimensions.get('window');

const ToastComponent = () => {

    return <Toast ref= 'toast'
                  position='top'
                  positionValue={height / 2 - 150}
                  fadeInDuration={0.1}
                  style={{padding : 20, borderRadius : 10}}
                  textStyle={{color : '#ffffff', fontSize : 20}}
           />;

};

export default ToastComponent;