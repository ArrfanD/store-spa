import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductPage = () => {
    let {cart : { product, selectedProduct }} = useSelector((state)=> state)
    const sortedProduct = product.filter(x=> x.id === selectedProduct)
    console.log('SORTED SORTED SORTED', sortedProduct)
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage