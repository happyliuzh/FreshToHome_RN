/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { addNavigationHelpers , StackNavigator} from 'react-navigation'
import { connect, Provider} from 'react-redux'
import PropTypes from 'prop-types'

//screens
import TabScreen from './js/screens/TabScreen'
import DetailScreen from './js/screens/DetailScreen'
import ZoneScreen from './js/screens/ZoneScreen'
import SearchScreen from './js/screens/SearchScreen'
import OrderScreen from './js/screens/OrderScreen'
import UserInfoScreen from './js/screens/UserInfoScreen'
import SettingsScreen from './js/screens/SettingsScreen'
import LoginScreen from './js/screens/LoginScreen'

import Colors from './js/utils/color'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


export const App = StackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions : {
            header : null,
        }
    },
    Tab : {
        screen : TabScreen,
        navigationOptions : {
            headerTintColor : Colors.MainColor,
        }
    },
    Detail : {
        screen : DetailScreen,

    },
    Zone : {
        screen : ZoneScreen,

    },
    Search : {
        screen : SearchScreen,
    },
    Order : {
        screen : OrderScreen,
    },
    UserInfo : {
        screen : UserInfoScreen,
    },
    Settings : {
        screen : SettingsScreen,
    }
},{
    headerMode: 'screen',
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    }),
});;

//将redux和react-navigation结合起来

const mapStateToProps = (state) => ({
    nav : state.nav,
});

class Application extends Component{
    render(){

        return (
            <App  navigation = {
                addNavigationHelpers({
                    dispatch : this.props.dispatch,
                    state : this.props.nav,
                })
            }
            />
        );

    }
}

// const Application = ({ dispatch, nav }) => (
//     <TabScreen navigation={addNavigationHelpers({ dispatch, state: nav })} /> // we should call addNavigationHelpers to augment our navigation prop
// );

Application.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(Application);



