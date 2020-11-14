import React,{useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import WithAuth from "../Hoc/WithAuth"

function Cart(){

    let products = useSelector(state => state["CartReducer"]["cartItems"])
    
    let dispatch = new useDispatch();

    var removeFromCart = (index, productid)=>{
        console.log('index',index);
        console.log('productid',productid);
        let user = JSON.parse(localStorage.user);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {index: index, productid: productid, email: user.email}
        })
    }

    return(
        <React.Fragment>
        {
        products.map( (product, index) => {
         return   <div className=" card border border-primary card-info" style={{width: "80rem"}}>
                <div className="card-body row">
                    <div className="col-4 border">
                        <img style={{height:"250px",width:"250px"}} src={product.image} className="card-img-top" alt="..."/>
                    </div>
                    <div className="col-6">
                        <h5 className="card-title">Product Name: {product.name}</h5>
                        <p className="card-text">Product Price: {product.price}</p>
                        <p className="card-text">Product quantity: {product.quantity}</p>
                    </div>
                    <div className="col-2">
                        <button onClick={() => removeFromCart(index, product.productid)} className="btn btn-primary">Remove Product</button>
                    </div>
                </div>
            </div>
        })
        
        }
        </React.Fragment>
    )
}

export default WithAuth(Cart)