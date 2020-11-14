import React from "react" 
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { SignupReducer } from "../Reducers/SignupReducer"



var Signup  = function(props){
   var user = {}
   let dispatch = new useDispatch();
   let registered = useSelector(state => state['SignupReducer']['registered'])
   if(register){
    props.history.push('/login')
}
    var register =  function(){
        alert()
        user.email = document.getElementById('email').value
        user.name = document.getElementById('name').value
        user.password = document.getElementById('password').value

        dispatch({
            type: 'register',
            payload:{user: user}
        })
        
        

        // axios({
        //     url:'https://apibyashu.herokuapp.com/api/register',
        //     method:'post',
        //     data:user
        // }).then(function(response){
        //     console.log("response from api is", response)
        //     props.history.push('/login')

        // }, function(error){
        //     console.log("error " ,  error)
        // })


    }
    return(
        <div>
            <input id="email" placeholder="Email"></input> <br></br>
            <input id="name" placeholder="Name"></input> <br></br>

            <input id="password" type="password" placeholder="Password"></input> <br></br>
            <button onClick={register}>Signup</button>
        </div>
    )
}

// to use any component that needs to be exposes to the outside world

export default Signup

