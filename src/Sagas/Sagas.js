import {takeEvery, put, takeLatest, fork} from "redux-saga/effects"
import axios from "axios";
import { act } from "react-dom/test-utils";
// Initializing product on page load
function* initializeProduct(){
    var result = yield axios({
        url:    "http://apibyashu.herokuapp.com/api/allproducts",
        method: "GET", 
    }).then((response) => {
        console.log(response);
        return response;
    })
    yield put({ type: 'PRODUCT_LOADED', payload: result.data.data}) 
   
}

// INITIALIZE CART

function* initializeCart(action){
    var result = yield axios({
        method:'post',
        url:'http://apibyashu.herokuapp.com/api/cart',
        data: action.payload
    }).then((response)=>{
            return response
        }
    );
    yield put({type: 'CART_LOADED', payload: result.data.data})
}
 

// Sign up


function* signUp(action){
    var result = axios({
                url:'https://apibyashu.herokuapp.com/api/register',
                method:'post',
                data:action.user
                }).then((response)=>{
                return response
                })
            yield put({type: 'REGISTERED', payload: result.data.data})
}


// Login 
function* login(action){
    var result = yield axios({
        url:    "http://apibyashu.herokuapp.com/api/login",
        method: "post", 
        data: action.payload
    }).then((response) => {
        console.log(response);
        return response;
    },(error) => {
        return error;
    })
    console.log('loign>>>>>>>>>',result);
    if(!result.data.message){
        yield put({type: 'LOGIN_SUCCESS', payload: result.data})
    }else{
        yield put({type: 'LOGIN_FAILURE', payload: result.data.message})
    }
   
}


// ADD TO CART
function* addToCart(action){
    var result = yield axios({
        url:    "https://apibyashu.herokuapp.com/api/addtocart",
        method: "post", 
        data: action.payload
    }).then((response) => {
        return response;
    })

    yield put({ type: 'ADDED_IN_CART', payload: result.data.data}) 
   
}

// REMOVE FROM CART
function* removeFromCart(action){
    var result = yield axios({
        url:    "https://apibyashu.herokuapp.com/api/removefromcart",
        method: "post", 
        data: {email: action.payload.email, productid: action.payload.productid}
    }).then((response) => {
        return response;
    })

    yield put({ type: 'CART_ITEM_REMOVED', payload: {index: action.payload.index}}) 
   
}

export function* runSignup(){
    yield takeLatest("REGISTER", signUp);
}

export function* RootSaga(){
    yield fork(runSignup)
    yield takeLatest("INITIALIZE_PRODUCT", initializeProduct);
    // yield takeEvery("LOAD_SINGLE_PRODUCT", productDetails);
    yield takeLatest("LOGIN", login);
    
    yield takeLatest("INITIALIZE_CART", initializeCart);
    yield takeLatest("REMOVE_FROM_CART", removeFromCart);
    yield takeLatest("ADD_TO_CART", addToCart);

}