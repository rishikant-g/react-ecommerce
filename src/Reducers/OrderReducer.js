export function OrderReducer(state = {
    success: false,
}, action){

    switch(action.type){
        case "SUBMIT_ORDER": {
            state = {...state}
            state['success'] = false
            return state
        }
        case "ORDER_SUCCESSFULL": {
            state = {...state}
            state['success'] = true  
            return state
        }  
        case "ORDER_FAILURE": { 
            state = {...state}
            state['success'] = false  
            return state
        }
        default: return state
    }
} 