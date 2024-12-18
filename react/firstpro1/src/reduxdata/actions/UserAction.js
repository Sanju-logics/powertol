

import types from '../ActionTypes'

export const ACTION_LOGIN ={
    type:types.TYPE_LOGIN,
    payload : 
    {
        adminid : undefined,
        customername : undefined,
        type:undefined
    }
}
export const ACTION_LOGOUT ={
        type : types.TYPE_LOGOUT,
        payload : 
        {
            adminid : undefined,
            customername : undefined,
            type:undefined
        }
    }
