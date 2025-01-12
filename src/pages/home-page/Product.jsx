import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart from '../../components/ProductCart';

const Product = () => {
  const data = useSelector((state)=>state.prouct);
  return (
    <div>
      <div className = "grid lg:grid-cols-2 gap-6 my-7 " >
      {
        data.map((item,i)=>{
          return <ProductCart key={i} productData = {item} ></ProductCart>
        })
      }
      </div>
    </div>
  )
}

export default Product
