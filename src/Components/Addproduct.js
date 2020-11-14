import React from "react";
import axios from 'axios';

var AddProduct  = function (){
	var addProductCredentials ={};
    var addProduct = function(){

        addProductCredentials = {
            name: document.getElementById('productName').value,
            price: document.getElementById('productPrice').value,
            brand: document.getElementById('productBrand').value,
            image: document.getElementById('productImage').value,
            owner:{
                name: document.getElementById('ownerName').value,
                email: document.getElementById('ownerEmail').value
            }
        };
        console.log(addProductCredentials);
        axios({
            url:'https://apibyashu.herokuapp.com/api/createproduct',
            method:'post',
            data:addProductCredentials
            }).then(function(response){
                console.log('----------', response)
            }, function(error){
            console.log("error " , error)
        })
    }
    var fileUpload = ()=>{
        console.log("called" , document.getElementById('productImage').files[0])
        var file = document.getElementById('productImage').files[0]
        var formdata = new FormData()
        formdata.append('file' , file)
        axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/upload',
            data:formdata,
            headers:{
                'Content-Type':"multipart/form-data"
            }
        }).then(function(response){
            console.log("..... response from upload api" , response.data)
        })
    
    }
    return (
        <div>
            <h1 className="p-3">Please add product from here</h1>
            <input placeholder="Product Name" name="productName" id="productName" type="text" /><br></br><br></br>
            <input placeholder="Product Price" name="productPrice" id="productPrice" type="text" /><br></br><br></br>
            <input placeholder="Product Brand" name="productBrand" id="productBrand" type="text" /><br></br><br></br>
            <input  onChange={fileUpload} type="file" placeholder="Product Image" name="productImage" id="productImage"/><br></br><br></br>
            <input placeholder="Owner name" name="ownerName" id="ownerName" type="text" /><br></br><br></br>
            <input placeholder="Owner Email" name="ownerEmail" id="ownerEmail" type="text" /><br></br><br></br>
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
        </div>
    )
}
export default AddProduct