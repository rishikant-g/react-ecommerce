import {createStore, combineReducers, applyMiddleware} from "redux";
import {ProductReducer} from "../Reducers/ProductReducer";
import {CartReducer} from "../Reducers/CartReducer";
import {AuthReducer} from "../Reducers/AuthReducer";
import {RootSaga} from "../Sagas/Sagas";
import createSaga from "redux-saga";
import {loggerfunction} from "../Sagas/Logger"
import {SignupReducer} from '../Reducers/SignupReducer'

var sagaMiddleware = createSaga(RootSaga);

var reducers = combineReducers({ProductReducer, CartReducer, AuthReducer, SignupReducer});


var store = createStore(reducers, applyMiddleware(loggerfunction, sagaMiddleware));

sagaMiddleware.run(RootSaga)

export default store;