import App from './App';
import React, { Component } from 'react'
import { Provider , connect } from 'react-redux'
import store from './js/state/redux'
import { addNavigationHelpers } from 'react-navigation'



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


const AppWithNavigationState = connect(mapStateToProps)(Application);



export default class FreshToHome extends Component{

    render(){
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }

}
