export function SignupReducer(state = {
    registered: false
}, action){

    switch(action.type){
        case "REGISTER": {
            state = {...state}
            return state
        }
        case "REGISTERED": {
            state = {...state}
            state['registered'] = true
            return state
        }
        default: return state
    }
} 