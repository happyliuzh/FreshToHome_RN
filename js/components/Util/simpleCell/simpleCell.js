/**
 * Created by liuzhihui on 2017/11/1.
 */
import React, {
    Component,
} from 'react'

import {
    View,
    StyleSheet,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    Text,
    Image,
} from 'react-native'

import Images from '../../../utils/image'

export default  SimpleCell = ({ title , onPress}) => {

    if (Platform.OS === 'ios') {
        return (

            <TouchableHighlight onPress={onPress}>
                <View style={_styles.listViewRow}>

                    <Text style={{marginLeft: 20, fontSize: 16, color: '#333333'}}>
                        {title}
                    </Text>

                    <Image source={Images.Common.ArrowRight} style={{width: 30, height: 30, marginRight: 20}}>

                    </Image>

                </View>
            </TouchableHighlight>

        );
    }

    return (
        <TouchableNativeFeedback onPress={ onPress }>
            <View style={ _styles.listViewRow}>

                <Text style={{marginLeft: 20, fontSize: 16}}>
                    {title}
                </Text>

                <Image source={Images.Common.ArrowRight} style={{width: 30, height: 30, marginRight: 20}}>
                </Image>
            </View>
        </TouchableNativeFeedback>
    );

}

const _styles = StyleSheet.create({
    listViewRow : {
        height:50,
        backgroundColor:'#ffff',
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});