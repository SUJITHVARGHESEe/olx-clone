import React from 'react';
import { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/FirebaseContext';
 import {Link,useHistory} from 'react-router-dom'
function Login() {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const [error,setError]=useState('')
const {firebase}=useContext(FirebaseContext)
const history=useHistory()
const handlesLogin=(e)=>{
  e.preventDefault();
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  // alert("Logged In succefull")
  history.push('/')
}).catch((error)=>{
setError(error.message)
})
}
  return (  
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
          />
          <br>
          </br>
           {error && <div className='loginerror'>{error}</div>}
          <br />
          <br />
         
          <button>Login</button>
        </form>
      <Link  className="Link" to='/signup'><button> Signup </button></Link>
      </div>
    </div>
  );
}

export default Login;
