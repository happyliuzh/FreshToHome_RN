/**
 * Created by liuzhihui on 2017/10/17.
 */

import * as MeActions from '../../action/meAction/actionTypes'

const initialState = {
    data : null,
    loading : false,
    error : false,

}

export default function meReducer(state = initialState, action) {

    switch (action.type){
        case MeActions.FETCH_ME_INFO_REQUEST:{

            return Object.assign({} , state, {
                ...state,
                loading:true,
                error:false,
            });

        }

        case MeActions.FETCH_ME_INFO_FAILURE:{

            return Object.assign({}, state, {
                ...state,
                loading : false,
                error : true,
            });
        }

        case MeActions.FETCH_ME_INFO_SUCCESS:{

            return Object.assign({}, state, {
                ...state,
                loading : false,
                error : false,
                data : action.data,
            });
        }

        default :
            return state;
    }

}