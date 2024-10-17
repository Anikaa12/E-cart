import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import Header from '../Components/Header'
function View() {
  const {id}= useParams()
  //console.log(id);
  
const[product,setProduct]= useState({})
const {loading}=useSelector((state)=>state.productReducer)

useEffect(()=>{
  const products= JSON.parse(localStorage.getItem("products"))
  setProduct(products?.find(product=>product?.id==id))
},[])
console.log(product);


const handleCart=(product)=>{
  const existingProduct = cart?.find(item=>item.id==product.id)
  if(existingProduct){
    dispatch(addToCart(product))
    alert("Items Added")
  }
  else{
    dispatch(addToCart(product))
    alert("Item Added")
  }
}

  return (
    <>
        <Header insideHome={false}/>

  <div className='mt-5'>

    {
      loading?<div>
        <Spinner animation='border' variant='warning'/> Loading..
      </div>:
    <div className='container row' style={{marginTop:"100px"}}>
      <div className='col-lg-4'>
        <img style={{width:"100%",height:"400px"}} src={product.thumbnail}  alt=''/>
      </div>
      <div className='col-lg-2'></div>
        <div className='col-lg-6'>
          <p className='text-dark'>pid:{product.id}</p>
          <h1>{product.Title}</h1>
          <h5 className='fw-bolder'>Price:<span style={{color:"red"}} >{product.price}</span></h5>
          <p className='text-bolder'>{product.description}</p>
          <div className='d-flex justify-content-between mt-4'>

            <Button className='btn btn-outline-dark'  ><i className='fa-solid fa-heart text-danger'></i>Wishlist</Button>
            <Button className='btn btn-outline-light'  ><i className='fa-solid fa-cart-shopping text-warning'></i>Cart</Button>

          </div>
        </div>
        </div>
    }
  
      </div>
    </>
  )
}

export default View
