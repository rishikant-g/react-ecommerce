import React from "react"
import WithAuth from '../Hoc/WithAuth'

function Order(){

    return(
        <h3>Your old orders goed here</h3>
    )
}

export default WithAuth(Order)