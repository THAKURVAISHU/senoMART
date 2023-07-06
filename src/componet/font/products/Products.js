import React from 'react'
import Layout from '../../../Layout/Layout'
import "./Product.css"
const Products = ({ productItems,handleAddProduct}) => {
  return (
    <Layout  title={"Product"}>
        <div className='products'>
            {productItems.map((productItem )=>(
                <div className='card'>
               <div>
            <img   className="proimg"src={productItem.image} alt={productItem.name}/>
               </div>
               <div>
                <h1 className='proname'>{productItem.name}</h1>
               </div>
               <div className='price'>${productItem.price}</div>
               <div>
                <button className='cartbtn' onClick={()=>handleAddProduct(productItem)}>Add to cart</button>
               </div>
                </div>
            ))}
        </div>

    </Layout>
  )
}

export default Products