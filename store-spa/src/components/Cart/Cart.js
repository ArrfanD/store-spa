import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  let {cart : { product, quantity }} = useSelector((state)=> state);
  console.log('PRODUCTS IN CART', product)
  return (
    <div>Cart</div>
  )
}

export default Cart