import React,{useContext} from 'react'

import { Route,Redirect } from 'react-router-dom'
import { AuthContext } from "../context/auth"
function AuthRoute({ component:component,...rest }){
    const { user } = useContext(AuthContext)

    return(
        <Route
        {...rest}
        render={props=>
        user?<Redirect to="/" />:<component {...props} />
        }
        ></Route>
    )
}

export default AuthRoute