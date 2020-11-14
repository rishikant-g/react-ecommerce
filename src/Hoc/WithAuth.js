import React from "react"

export default  function CheckAuth(CompReceived){
    
//    console.log("component received" ,  CompReceived)
    // modification

    return class extends React.Component{
        render(){
            // alert("HOC")
            if(!localStorage.isLoggedIn){
               this.props.history.push('/login')
            }
            return(
                <div>
                  <CompReceived/>  
                </div>
            )
        }
    }
}