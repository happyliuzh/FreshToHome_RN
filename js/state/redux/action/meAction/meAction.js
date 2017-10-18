/**
 * Created by liuzhihui on 2017/10/17.
 */

import * as MeActions from './actionTypes'

export default function requestData(){
    return {
        type : MeActions.FETCH_ME_INFO_REQUEST,
    };
}