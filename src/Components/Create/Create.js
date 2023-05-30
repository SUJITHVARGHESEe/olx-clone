import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Create = () => {
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const history=useHistory()
  const  date= new Date()
  const handleSubmit=()=>{
firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
ref.getDownloadURL().then((url)=>{

firebase.firestore().collection('products').add({

  name,
  category,
  price,
  url,
  userId:user.uid,
  createdAt:date.toDateString()
}).then(()=>{
history.push('/')
})
})
})
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              onChange={(e)=>{setName(e.target.value)}}
            value={name}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=>{setCategory(e.target.value)}}
            value={category}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
             onChange={(e)=>{setPrice(e.target.value)}}
             value={price} />
            <br />
           
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image): ''}></img>
         
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
