import React from 'react'
import {BrowserRouter as 
    Router,
    Route,
    Switch
} from 'react-router-dom'
import Login from './Login'
import UserAccess from './User-access';


export default ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='user' component={UserAccess} />
            </Switch>
        </Router>
    )
}