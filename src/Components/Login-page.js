import React, { useEffect, useState } from 'react'

export default ()=>{
   
    return(
        <div className="body">
            <div className="container text-center  topa">
                <div className="container heading top">
                    <div className="row">    
                        <p className="col-sm-6">WR</p>
                    </div>    
                    <div className="row">
                        <p className="col-sm-9 ">Hauling</p>
                    </div>
                </div>
                <div className="container loginContainer">
                    <form>
                        <div>
                            <input name="username" type="text" className="col-sm-7 input-space" placeholder="User Name"/>
                        </div>
                        <div>
                            <input name="password" type="password" className="col-sm-7 input-space" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn loginButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}