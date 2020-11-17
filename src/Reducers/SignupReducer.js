export function SignupReducer(state = {}, action){

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
        case "REGISTRATION_FAILED": {
            state = {...state}
            state['registered'] = false
            return state
        }
        default: return state
    }
} 