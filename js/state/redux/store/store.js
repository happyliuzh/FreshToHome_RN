/**
 * Created by liuzhihui on 2017/10/17.
 */
import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducer'

import thunkMiddleware from 'redux-thunk'

const applyStoreMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const store = applyStoreMiddleware(reducers);