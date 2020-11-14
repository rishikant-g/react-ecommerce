import React from "react";
import {Link, Redirect} from "react-router-dom"
import {useSelector} from "react-redux"

export default function Navbar(props){

    let isLoggedIn = useSelector( state => state["AuthReducer"]["loggedIn"]);
    // let products = useSelector( state => state["ProductReducer"]["products"]);

    let logout = () =>{
        localStorage.clear();
        window.location.href="/";
    }

    let onChangeHandler = (event) =>{
        // console.log("Event", event.target.value);
        // let filteredArray = products.filter((item) => {
        //     return item.name.toUpperCase().includes(event.target.value.toUpperCase()) 
        //     || item.brand.toUpperCase().includes(event.target.value.toUpperCase())

        // })
        // console.log('filtered array>>>>',filteredArray)
        // let abc = [...products]
        props.searchProduct(event.target.value)
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to="/">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input type="text" class="form-control my-2 my-sm-0" onChange={(e) => onChangeHandler(e)}/>
            { !isLoggedIn &&
            <Link to="/login">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button">Login</button>
            </Link> 
            }
            { !isLoggedIn &&
            <Link to="/signup">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button">Sign up</button>
            </Link> 
            }
            { isLoggedIn && <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={logout}>Logout</button> }
            { isLoggedIn && <Link to="/cart"><button class="btn btn-outline-success my-2 my-sm-0" type="button">Cart</button></Link> }
            { isLoggedIn && <Link to="/addproduct"><button class="btn btn-outline-success my-2 my-sm-0" type="button">Add Product</button></Link> }
            </form>
        </div>
        </nav>
    )
}