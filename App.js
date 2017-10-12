/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

//scene
import HomeScreen from './js/screens/HomeScreen'
import DetailScreen from './js/screens/DetailScreen'
import CartScreen from './js/screens/CartScreen'
import MeScreen from './js/screens/MeScreen'
import LoginScreen from './js/screens/LoginScreen'
import Icon from 'react-native-vector-icons/Ionicons'

//util
// import Images from './js/utils/image/images'
// import Icons  from './js/utils/icon/icons'


//测试StackNavigator
const stackNavigatorApp = StackNavigator({
    Home : {screen: HomeScreen},
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
            tabBarLabel : '购物车',
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
        swipeEnabled : false,
        tabBarOptions: {
            activeTintColor: '#ff8500', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                // height: 44
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
    Tab : {screen : tabBarNavigatorApp},
    Detail : {screen : DetailScreen}
});

// export default composeTabAndStackNavigatorApp;

//加入login的逻辑。
const freshToHomeApp = StackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions : {
            header : null,
        }
    },
    Main : {
        screen : composeTabAndStackNavigatorApp,
        navigationOptions : {
            header : null,
        }
    }
});
export default freshToHomeApp;




const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default class App extends Component<{}> {
//   // render() {
//   //   return (
//   //     <View style={styles.container}>
//   //       <Text style={styles.welcome}>
//   //         Welcome to React Native!
//   //       </Text>
//   //       <Text style={styles.instructions}>
//   //         To get started, edit App.js
//   //       </Text>
//   //       <Text style={styles.instructions}>
//   //         {instructions}
//   //       </Text>
//   //     </View>
//   //   );
//   // }
//
//     render(){
//       return(
//           <SimpleApp/>
//       );
//     }
//
//
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
