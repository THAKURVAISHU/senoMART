import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Page/Login";
import SinghUp from "./Page/SinghUp";
import User from "./Page/User";
import data from './componet/Data/Data';
import Home from './Page/Home';

function App() {
  const {productItems} = data;
  const [carItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = carItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(
        carItems.map((item)=>
        item.id === product.id
        ? {...ProductExist, quantity: ProductExist.quantity + 1}
        : item
        )
      );
    } else {
      setCartItems([...carItems, {...product, quantity: 1}]);
    }
    
  };
  const handleRemoveProduct =(product) =>{
    const ProductExist = carItems.find((item) => item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(carItems.filter((item)=>item.id !== product.id));
    }else{
      setCartItems(
        carItems.map((item)=>
        item.id === product.id
        ? {...ProductExist, quantity: ProductExist.quantity - 1}
        : item
        )
      );
    }
  }
  
  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/singh-up" element={<SinghUp />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Home productItems={ productItems} carItems={carItems} 
      handleAddProduct={handleAddProduct}  handleRemoveProduct={handleRemoveProduct}/>
    </>
  )
  }

export default App