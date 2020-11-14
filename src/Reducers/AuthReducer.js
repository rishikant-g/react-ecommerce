export function AuthReducer(state = {
    processing: true,
    errorMessage: false,
    loggedIn: localStorage.isLoggedIn
}, action){

    switch(action.type){
        case "LOGIN": {
            state = {...state}
            state['processing'] = true
            return state
        }
        case "LOGIN_SUCCESS": {
            state = {...state}
            state['processing'] = false
            state['user'] = action.payload
            state['loggedIn'] = true
            return state
        }
        case "LOGIN_FAILURE": {
            state = {...state}
            state['processing'] = false
            state['errorMessage'] = action.payload
            return state
        }
        default: return state
    }
} 