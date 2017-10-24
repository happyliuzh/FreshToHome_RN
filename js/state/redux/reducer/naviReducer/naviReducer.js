/**
 * Created by liuzhihui on 2017/10/24.
 */


import AppNavigator from '../../../../screens/TabScreen'

import { NavigationActions } from 'react-navigation';


export default function naviReducer(state, action) {

    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;

}