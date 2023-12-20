import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import Shop from '../pages/Shop'
import SignUp from '../pages/SignUp'

const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/detail/:id' element={<ProductDetail/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}

export default Routers