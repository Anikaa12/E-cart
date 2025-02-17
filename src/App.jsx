import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Footer from './Components/Footer'



  function App() {
 
    return (
      <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        {/* redirect to home */}
        <Route path='/*' element={<Navigate to={'/'}/>}/>

      </Routes>
      <Footer/>
      </>
    )
  }
  
  export default App