import React, {Component} from 'react'

export default class extends Component{
   
   state= {
       username: '',
       password: ''
   }
   
   handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state)
   }
   handleSubmit=()=>{
       fetch()
   }
   
   render(){
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
                    <form >
                        <div>
                            <input name="username" type="text" onChange={this.handleChange} className="col-sm-7 input-space" placeholder="User Name"/>
                        </div>
                        <div>
                            <input name="password" type="password" onChange={this.handleChange} className="col-sm-7 input-space" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn loginButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
}