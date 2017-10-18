/**
 * Created by liuzhihui on 2017/10/17.
 */

import * as MeActions from './actionTypes'

export function requestData(){
    return {
        type : MeActions.FETCH_ME_INFO_REQUEST,
    };
}

export function requestSuccess() {
    return {
        type :  MeActions.FETCH_ME_INFO_SUCCESS,
        data :  null,
    }
}