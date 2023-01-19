import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Cart = () => {
  let id = useParams()
  let {cart : { product, quantity }} = useSelector((state)=> state);
  return (
    <div className='flex'>
      <div></div>
      <div></div>
    </div>
  )
}

export default Cart



