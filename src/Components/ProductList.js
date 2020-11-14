
import React from "react";
import { useSelector, useState } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  var products = useSelector( state => state["ProductReducer"]["products"]);
  var isLoading = useSelector( state => state["ProductReducer"]["isLoading"]);
// console.log('props of productlist',props.searchTxt)
  let filterText = props.searchTxt; 

if(props.searchTxt){
          let filteredArray = products.filter((item) => {
            return item.name.toUpperCase().includes(filterText.toUpperCase()) 
            || item.brand.toUpperCase().includes(filterText.toUpperCase())

        })
        // console.log('filtered array>>>>',filteredArray)
        products = filteredArray;
}
  return (
      <div class="row">
        { 
            !isLoading && products.map((product,key) => {
               return <div class="card" style={{ width: "18rem" }} key={key}>
                    <img
                    src={product.image}
                    class="card-img-top"
                    style={{ height: "150px" }}
                    />
                    <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.brand}</p>
                    <Link to={`product-details/${product.productid}`}>
                    <a class="btn btn-primary">View</a>
                    </Link>
                    </div>
                </div>
            }) 
        }
        {
            isLoading && <h1>Loading.....</h1>
        }
        </div>
        )
}
