import React,{useState,useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import { withRouter } from "react-router-dom";

function ProductDetail(props){

    let dispatch = new useDispatch();
    let id = props.match.params.id;
    let [product, productState] = useState([]);
    let [itemInCart, itemState] = useState(false);
    let cartItems = useSelector(state =>  state["CartReducer"]["cartItems"]);
    let isLoggedIn = useSelector(state =>  state["AuthReducer"]["loggedIn"]);

    console.log("item in cart",cartItems);




    

    

    if(product.length == 0){
        var apiurl =  "https://apibyashu.herokuapp.com/api/product/"+id
        axios({
            url:apiurl,
            method:'get'
        }).then((response)=>{
            productState(response.data.data)
            // console.log('response::::::::::',response)
            // console.log('local state:::::::::::',product)
            cartItems.forEach((item) => {
                console.log('item>>>>>', item.productid);
                if(item.productid == id){
                    itemState(true) 
                }
            })
        },
        (error)=>{
            console.log("error from product details api", error)
        })
    }

    let addToCart = () => {
        if(!isLoggedIn){
            props.history.push('/login');
        }else{
            let reqObj = {
                email: JSON.parse(localStorage.user).email,
                productid: product.productid,
                    name: product.name,
                    image: product.image,
                    price: product.price  
            }
            
            dispatch({
                type: "ADD_TO_CART",
                payload: reqObj
            })
            itemState(true)
        }
    }
    return(
        <div>
            <div className="container" style={{ padding: "20px" }}>

            <div className="row">
                <div className="col-md-6">
                    
                    <img src={product.image} alt="image not avilable" style={{ width: "416px", height: "416px" }} /><br></br>
                    {!itemInCart && <button onClick={addToCart} className="btn btn-outline-info col-md-5" style={{ padding: "10px" }}>Add to Cart</button>}
                    { itemInCart && <button  className="btn btn-outline-warning col-md-5" style={{ padding: "10px" }}>Remove From Cart</button> }
                    <button className="btn btn-outline-success col-md-5" style={{ padding: "10px" }} >Buy now</button>
                    </div>
                <div className="col-md-6">

                    <table>
                        <tr>
                            <td><h3>{product.name}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Rs.{product.price}</h3></td>
                        </tr>
                        <tr>

                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" class="_3Amlen" /></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>

                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>
                        <tr><td className="row"><span className="col-md-4">Seller</span>
                            <span className="col-md-4"> RetailNet</span>
                        </td></tr>
                        <tr>
                            <td className="row">
                                <span className="col-md-4">Highlights</span>

                                <td><span className="col-md-4"></span><ul><li>Effective Pixels: 24.2 MP</li>
                                    <li><span className="col-md-4">Sensor Type: CMOS</span></li>
                                    <li><span className="col-md-4"></span>WiFi Available</li>
                                    <li><span className="col-md-4"></span>1080p at 60p + Time-Lapse</li></ul></td>

                            </td></tr>
                    </table>
                </div>
            </div >

        </div >

        
        </div>
    )
}

export default withRouter(ProductDetail)