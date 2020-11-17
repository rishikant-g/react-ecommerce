import React from "react"
import WithAuth from "../Hoc/WithAuth"
import {useSelector, useDispatch} from "react-redux"


function Checkout(){

    let items = useSelector(state => state["CartReducer"]["cartItems"])
    
    let dispatch = new useDispatch()
    let order = (event) =>{
        event.preventDefault();

        var formData = new FormData(document.getElementById('shippingForm'));
        console.log('form values>>',document.getElementById('shippingForm'));
        formData.append("totalprice", 100);
        formData.append("items", items);
        console.log('formData>>>>>',formData)
        // console.log('cart items>>>>>',items);
        // let abc = {
        //     name: 'rishi',
        //     email: 'risheekant.vishwa@gmail.com',
        //     area: 'Maharashtra',
        //     city: 'Mumbai',
        //     phone: '9797777777',
        //     pincode: '221115',
        //     totalprice: 100,
        //     items: items
        // }
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        dispatch({
            type: "SUBMIT_ORDER",
            payload: object
        })

    }
    return(
        <React.Fragment>
            <div class="container">
            <form method="post" onSubmit={(e) => {order(e)}} id="shippingForm">
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
                <hr />
                <div class="form">
                   
                    <label class="field">
                        <span class="field__label" for="name">Name</span>
                        <input class="field__input" type="text" id="name" name="name"/>
                    </label>
                    <label class="field">
                        <span class="field__label" for="email">Email</span>
                        <input class="field__input" type="text" id="email" name="email"/>
                    </label> 
                    <label class="field">
                        <span class="field__label" for="area">Area</span>
                        <input class="field__input" type="text" id="area" name="area"/>
                    </label> 
                    <label class="field">
                        <span class="field__label" for="city">City</span>
                        <input class="field__input" type="text" id="city" name="city"/>
                    </label>
                    <label class="field">
                        <span class="field__label" for="phone">Phone</span>
                        <input class="field__input" type="text" id="phone" name="phone"/>
                    </label>
                    <label class="field">
                        <span class="field__label" for="pincode">Pincode</span>
                        <input class="field__input" type="text" id="pincode" name="pincode"/>
                    </label>
                </div>
                <hr />
                <button class="button" type="submit">Order</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default WithAuth(Checkout)