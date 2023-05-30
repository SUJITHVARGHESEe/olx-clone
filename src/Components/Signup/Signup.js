import React, { useState ,useContext} from 'react';
import {useHistory,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
 
export default function Signup() {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[number,setNumber]=useState('')
  const[password,setPassword]=useState('')
  const[emailerror,setEmailerror]=useState('')


  const {firebase}=useContext(FirebaseContext)
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email) {
      setEmailerror('Email is required')
    }
  
    else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          // User account created successfully
          const user = result.user;
  
          // Update the display name
          user.updateProfile({
            displayName: username
          }).then(() => {
            // Add user details to Firestore
            firebase.firestore().collection('users').add({
              id: user.uid,
              username: username,
              phone: number
            }).then(() => {
              // Redirect to login page
              history.push('/login')
            })
          })
  
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
  }
  return (
    <div>
      <div className="signupParentDiv">
      <img width="200px" height="200px" src={Logo} alt="OLX Logo" />

        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            value={username}
            
          />
          <br />
          <label htmlFor="femail">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="femail"
            name="email"
            defaultValue="John"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            value={email}
          />
          <br>
          </br>
           {emailerror && <div className='error'> {emailerror}</div>}
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>{
              setNumber(e.target.value)
            }}
            value={number}
          />
           <br>
          </br>
           
          <br />
          <label htmlFor="lpassword">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lpassword"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>{
              setPassword(e.target.value)

            }}
            
            value={password}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        
        <Link to="/login" className="loginLink" >Login</Link>
         
        
        
        
      </div>
    </div>
  );
}
