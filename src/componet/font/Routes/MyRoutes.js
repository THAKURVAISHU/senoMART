import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../products/Products'
import Cart from '../cart/Cart'

const MyRoutes = ({ productItems,carItems,handleAddProduct,handleRemoveProduct }) => {
   
  return (
    <div>
      <Routes>
      <Route path='/home'  element ={<Products productItems={ productItems} handleAddProduct={handleAddProduct}/>}/>
      <Route path='/cart'  element ={<Cart  carItems={carItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
    </Routes>  
    </div>
  )
}

export default MyRoutes