import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductPage = () => {
    let {cart : { product, selectedProduct }} = useSelector((state)=> state)
    const sortedProduct = product.filter(x=> x.id === selectedProduct)
    let { id,
        title,
        price,
        description,
        category,
        image,
        amount, } = sortedProduct[0]
  return (
    <div>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <h1>{description}</h1>
        <h1>{category}</h1>
        <img src={image} alt="image" />
        <h1>{amount}</h1>
    </div>
  )
}

export default ProductPage