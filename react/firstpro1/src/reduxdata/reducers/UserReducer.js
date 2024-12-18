
import types from "../ActionTypes";

var item = localStorage.getItem('data')
var initState = undefined
if(item==null)
initState = {loginstatus:false}
else
initState = JSON.parse(item)

export default function(state=initState,action)
{
    switch(action.type)
    {
        case types.TYPE_LOGIN:
            return {...action.payload,
                loginstatus:true}
        case types.TYPE_LOGOUT:
            return {...action.payload,
                loginstatus:false}
        default: return state    
    }
}