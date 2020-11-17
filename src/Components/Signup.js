import React from "react" 
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

var Signup  = function(props){
   var user = {}
   var dispatch = new useDispatch();
   let registered = useSelector(state => state['SignupReducer']['registered']) 
   console.log('registered status>>>>>>>>',registered)
   if(registered){
       toast('Registration successfull , pls login to continue')
        // props.history.push('/login')
    }else if(!registered){
        toast('Something went wrong try later') 
    }
    var register =  ()=>{
        user.email = document.getElementById('email').value
        user.name = document.getElementById('name').value
        user.password = document.getElementById('password').value

        dispatch({
            type: 'REGISTER',
            payload:{user: user, registered: undefined}
        })

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

