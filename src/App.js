import React, { useContext, useEffect } from 'react';
import './App.css';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/postContext';


function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
  console.log(user)
})
  })
  return (
    <div>
      
     <Router>
     <Post>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/view">
<ViewPost/>
    </Route>
    
    <Route path="/signup">
 <Signup/>
    </Route>
    
    <Route path="/create">
<Create/>
    </Route>
    <Route path="/login">
    <Login/>
     </Route>
     </Post>
     </Router>
     
    </div>
  );
}

export default App;
