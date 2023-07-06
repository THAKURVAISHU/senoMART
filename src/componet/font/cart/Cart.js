import React from 'react'
import "./cart.css"
import Layout from '../../../Layout/Layout'
const Cart = ({carItems,handleAddProduct,handleRemoveProduct}) => {
  const totalPrice = carItems.reduce((price,Item)=>price +Item.quantity *Item.price,0);
  return (
    <Layout title={"cart"}>
        <div className='cart-iteams'>
            <div className='cart-iteam-head'>Cart Iteams</div>

            {carItems.length === 0 &&(
            <div className='item-empty'>No iteams added to cart</div>)}

            <div>
            {carItems.map((Item)=>(
               <div key={Item.id} className='cartlist'>
                <img   className="cartimg"src={Item.image} alt={Item.name}/>
                
                <div className='cart-item-name'>{Item.name}</div>
                <div className='cart-fun'>
                    <button className='cart-add' onClick={()=>handleAddProduct(Item)}>+</button>
                    <button className='cart-remove' onClick={()=>handleRemoveProduct(Item)}>-</button>
                </div>
                <div className='cart-price'>
                 {Item.quantity} * ${Item.price}
                </div>
                </div>
            ))}
            <div className='cart-items-total-price-name'>Total Price
            <div className='cart-items-total-price'>${totalPrice}</div>
            </div>
            </div>
        </div> 
    </Layout>
    
  )
}

export default Cart