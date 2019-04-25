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







/*



const users = [{'driver':'1'}, {'driver':'2'}]

useEffect(()=>{
    getUsers();

}, [])

getUsers = async()=>{
    await fetch(``)
    .then(response => response.json())
    .then(data=> users.unshift(data))
    .catch((error)=>{
    console.log(error)
    });
}

^^run by useEffect to get the user data right off the bat^^


const checkUserName =(user)=>{

  if(user.driver === id ){
    localStorage.setItem('userId', id)
  };
  if(user.password === password){
    redirect();
  }else{
    localStorage.removeItem('userId');
  };

};


^^checkUser2 is run by checkUser, which is a loop that will run through the array
--users-- and will compare the user id passed in to each 'driver value' and if they 
are equal to each other, it will store the id in local storage so we can then get 
the id from local storage on the page we redirect them to and throw that id into a 
template string for a fetch! Just for security measures, we will also check to see
if the user's password is correct, if so, we will execute the redirect-- if it's
not right, we will remove the id from localStorage and the code will eventually 
run through the rest of the list and return the alert specified after the alert.


const [userName, setUserName] = useState()
cosnt [password, setPassword] = useState()

^^pretty self-explanatory, you are having the username and password be set 
from your input fields.

const checkUser = () =>{
  for(let i = 0; i < users.length; i++) { 
      checkUser2(users[i])
    };
  alertUser()={
      ----run alert letting them know that username or password are incorrect,----
      ----this will only execute if the username and password do not match in----
      ----the checkUser2 function and execute to a new page.------
  }
};


console.log(checkUser())
console.log(users)*/