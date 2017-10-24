/**
 * Created by liuzhihui on 2017/10/17.
 */

import {combineReducers} from 'redux'
import meReducer from './meReducer'
import naviReducer from './naviReducer'

export default combineReducers({
    meReducer,
    nav : naviReducer,

});