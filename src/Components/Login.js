import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

 export default function Login(props){

    let dispatch = new useDispatch();


    let [email , takeEmail] = useState();
    let [password , takePassword] = useState();

    let login = () => {
      dispatch({
        type: "LOGIN",
        payload: {email:email, password: password}
      })
    }

    let isLoggedIn = useSelector( state => state["AuthReducer"]["loggedIn"]);
    let user = useSelector( state => state["AuthReducer"]["user"]);
    if(isLoggedIn){
      props.history.push('/');
      localStorage.user = JSON.stringify(user);  
      localStorage.isLoggedIn = isLoggedIn;  
    }

    return(
        <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <label for="exampleInputEmail1">{ email }</label>

          <input type="email" onChange={ (event)=> {takeEmail(event.target.value)} } class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" onChange={ (event)=> {takePassword(event.target.value)} } class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="button" class="btn btn-primary" onClick={login}>Submit</button>
      </form>
    )
}
