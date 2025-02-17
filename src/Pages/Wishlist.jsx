import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col,Button,Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slice/wishListSlice'
import { addToCart } from '../Redux/Slice/cartSlice'
import Header from '../Components/Header'

// import { removeFromWishlist } from '../Slice/wishListS
function Wishlist() {

  const dispatch=useDispatch();
  const {Wishlist}=useSelector((state)=>state.wishlistReducer)

  const handleCart=(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }


  return (
    <>
        <Header insideHome={false}/>

       <div style={{marginTop:"70px"}}>
      <Row className='mt-5 ms-5 container' >
       {


         Wishlist?.length>0?Wishlist.map(product=>(
          <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
         <Card style={{ width: '18rem',height:"600px"}}>
       <Link to='/view/1'><Card.Img variant="top" style={{width:"100%"}} src={product.thumbnail} /></Link>
       <Card.Body>
         <Card.Title>{product.title}</Card.Title>
         <Card.Text>
          {product.description}
         </Card.Text>
         <div className="d-flex justify-content-between">
         <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishlist(product.id))}><i class="fa-solid fa-trash text-danger"></i></Button>
         <Button className='btn btn-light' onClick={()=>handleCart(product)}>  <i class="fa-solid fa-cart-shopping text-warning"></i></Button>
         </div>
       </Card.Body>
     </Card>
 
    
         </Col>
         )): <div className="d-flex flex-column flex-md-row align-items-center mt-5 text-center text-md-left">
         <img 
           src="https://mytrident.com/cdn/shop/files/empty-cart-3.gif?v=1728580041&width=1500" 
           alt="Empty Wishlist" 
           className="img-fluid mb-3 mb-md-0" 
           style={{ width: "100%", maxWidth: "400px" }}
         />
         <h1 className="text-danger ms-md-3">Your wishlist is Empty...</h1>
       </div>
       
       }
      </Row>
    </div>
    </>
  )
}

export default Wishlist