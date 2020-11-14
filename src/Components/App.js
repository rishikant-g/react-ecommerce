import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import Addproduct from "./Addproduct"
import {useDispatch, useSelector} from "react-redux"


export default function App(){

    let dispatch = useDispatch();
   let isLoading = useSelector(state => state['ProductReducer']['isLoading'])
    
   if(isLoading)
    dispatch({
        type: "INITIALIZE_PRODUCT"
    })
        
    let user = localStorage.user;
    if(user){
        user = JSON.parse(user)
        dispatch({
            type: "INITIALIZE_CART",
            payload: {email: user.email}
        })
    }
    
    let[searchText , stateSearchText] = useState();

    let filterProduct = (data) => {
        stateSearchText(data);
    }


    return(
        <BrowserRouter>
            <Navbar searchProduct={filterProduct}/>
            <Switch>
                <Route path="/" exact>
                    <ProductList searchTxt={searchText}/>
                </Route>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/addproduct" exact component={Addproduct} />
                <Route path="/product-details/:id" exact component={ProductDetail} />
                <Route path="/cart" exact render={(props) => <Cart {...props} /> }  />
            </Switch>
        </BrowserRouter>
    )
}