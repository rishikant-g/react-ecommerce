export function CartReducer(state = {
    cartItems: []
}, action){

    switch(action.type){
        case "INITIALIZE_CART": {
            state = {...state}
            return state
        }
        case "CART_LOADED": {
            state = {...state}
            state['cartItems'] = action.payload
            return state
        }
        case "ADD_TO_CART": {
            state = {...state}
            return state
        }
        case "ADDED_IN_CART": {
            state = {...state}
            state['cartItems'].push(action.payload)
            return state
        }
        case "REMOVE_FROM_CART": {
            state = {...state}
            return state
        }
        case "CART_ITEM_REMOVED": {
            console.log('CART_ITEM_REMOVED');
            state = {...state}
            state['cartItems'].splice(action.payload.index,1)
            state["cartItems"]= [...state["cartItems"]]
            return state
        }
        default: return state
    }
} 