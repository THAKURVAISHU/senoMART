import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../componet/font/cart/Cart';
import Products from '../componet/font/products/Products';

const Home = ({ productItems,carItems,handleAddProduct,handleRemoveProduct }) => {
  return (
    <Routes>
    <Route path='/home'  element ={<Products productItems={ productItems} handleAddProduct={handleAddProduct}/>}/>
    <Route path='/cart'  element ={<Cart  carItems={carItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
  </Routes>  
  )
}

export default Home