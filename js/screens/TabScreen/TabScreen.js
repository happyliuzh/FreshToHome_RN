/**
 * Created by liuzhihui on 2017/10/10.
 */
import React from 'react';
import {
    Platform,
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

//scene
import HomeScreen from '../HomeScreen'
import DetailScreen from '../DetailScreen'
import CartScreen from '../CartScreen'
import MeScreen from '../MeScreen'
import ZoneScreen from '../ZoneScreen'

import Icon from 'react-native-vector-icons/Ionicons'

//util
import Colors from '../../utils/color'



function _swipeEnable() {

    return false;

    if(Platform.OS === 'ios')
    {
        return true;
    }

    return true;

}

function _tabbarHeight() {

    if(Platform.OS === 'ios')
    {
        return 54;
    }

    return 54;

}


//测试StackNavigator
const stackNavigatorApp = StackNavigator({
    Home   : {screen: HomeScreen},
    Detail : {screen: DetailScreen}
});

// export default stackNavigatorApp;

//测试TabNavigator
const tabBarNavigatorApp = TabNavigator({
        Home : {
            screen : HomeScreen,
            navigationOptions : {
                tabBarLabel : '生鲜货架',
                tabBarIcon: (({tintColor,focused}) => {
                    return(
                        <Icon name="ios-home" size={30} color={tintColor} />
                    )
                }), // 设置标签栏的图标。需要单独设置。

            }

        },
        Cart : {
            screen : CartScreen,
            navigationOptions : {
                tabBarLabel : '菜篮子',
                tabBarIcon: (({tintColor,focused}) => {
                    return(
                        <Icon name="ios-cart" size={30} color={tintColor} style={{marginLeft:-5}} />
                    )
                }), // 设置标签栏的图标。需要单独设置。

            }
        },
        Me : {
            screen : MeScreen,
            navigationOptions : {
                tabBarLabel : '我',
                tabBarIcon: (({tintColor,focused}) => {
                    return(
                        <Icon name="ios-person" size={30} color={tintColor} />
                    )
                }), // 设置标签栏的图标。需要单独设置。

            }
        },
    },

    {

        tabBarPosition : 'bottom',
        swipeEnabled : _swipeEnable(),
        tabBarOptions: {
            activeTintColor: Colors.MainColor, // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height: _tabbarHeight(),
            },
            labelStyle: {
                fontSize: 10, // 文字大小

            },
            iconStyle : {

            }
        },

    }
);




// export default tabBarNavigatorApp;

//将StackNavigator与TabNavigator结合起来
const composeTabAndStackNavigatorApp = StackNavigator({
    Tab : {
        screen : tabBarNavigatorApp,
        navigationOptions : {
            headerTintColor : Colors.MainColor,
        }
    },
    Detail : {
        screen : DetailScreen,

    },
    Zone : {
        screen : ZoneScreen,

    }
});


export default composeTabAndStackNavigatorApp;

