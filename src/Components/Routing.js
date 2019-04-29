import React from 'react'
import {BrowserRouter as 
    Router,
    Route,
    Switch
} from 'react-router-dom'
import Login from './Login-page'
import DriverPage from './Driver-page';


export default ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='user' component={DriverPage} />
            </Switch>
        </Router>
    )
}