/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';

import LoginScreen from './js/screens/LoginScreen'
import TabScreen from './js/screens/TabScreen'
import { addNavigationHelpers } from 'react-navigation'
import { connect, Provider} from 'react-redux'
import PropTypes from 'prop-types'


//加入login的逻辑。

const freshToHomeApp = StackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions : {
            header : null,
        }
    },
    Main : {
        screen : TabScreen,
        navigationOptions : {
            header : null,
        }
    }
});

// export default freshToHomeApp;

export const App = TabScreen;




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



