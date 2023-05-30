import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import {  useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { PostContext } from '../../store/postContext';

function Posts() {
  const [products,setProducts]=useState([])
const {firebase}=useContext(FirebaseContext)
const {user}=useContext(AuthContext)
const {setPostDetails}=useContext(PostContext)
const history=useHistory()
useEffect(()=>{
firebase.firestore().collection('products').get().then((snapshot)=>{  
  const  allpost=snapshot.docs.map((product)=>{
    return{
      ...product.data(),
     id: product.id,

    }
  })
setProducts(allpost)
})
})
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View More</span>
        </div>
        <div className="cards">
       {
       products.map((product)=>{

       return(
          <div
            className="card"
            onClick={()=>{
              
              setPostDetails(product)
              history.push('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
       )
          })
       }   
        </div>
      </div>
     
    </div>
  );
}

export default Posts;
