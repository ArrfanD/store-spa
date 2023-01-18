import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductPage = () => {
    let {cart : { product }} = useSelector((state)=> state)
    let { id } = useParams()
    console.log('ACTIVE PRODUCT', product)
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage