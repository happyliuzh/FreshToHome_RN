/**
 * Created by liuzhihui on 2017/10/24.
 */


import { App } from '../../../../../App'

import { NavigationActions } from 'react-navigation';


export default function naviReducer(state, action) {

    const newState = App.router.getStateForAction(action, state);
    return newState || state;

}