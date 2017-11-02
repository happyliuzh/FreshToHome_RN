import Application from './App';
import React, { Component } from 'react'
import { Provider , connect } from 'react-redux'
import store from './js/state/redux'

export default class FreshToHome extends Component{

    render(){
        return (
            <Provider store={store}>
                <Application/>
            </Provider>
        );
    }

}
