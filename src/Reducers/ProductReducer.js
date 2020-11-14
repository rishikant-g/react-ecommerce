export function ProductReducer(state = {
    isLoading: true,
    // singleProductLoading: true,
    products: []
}, action){

    switch(action.type){
        case "INITIALIZE_PRODUCT": {
            state = {...state}
            state['isLoading'] = true
            return state
        }
        case "PRODUCT_LOADED": {
            state = {...state}
            state['isLoading'] = false  
            state['products'] = action.payload
            return state
        }
        // case "LOAD_SINGLE_PRODUCT": {
        //     state = {...state}
        //     state['singleProductLoading'] = true  
        //     return state
        // }
        // case "SINGLE_PRODUCT_LOADED": {
        //     state = {...state}
        //     state['singleProductLoading'] = false 
        //     state['product'] = action.payload 
        //     return state
        // }
        default: return state
    }
} 