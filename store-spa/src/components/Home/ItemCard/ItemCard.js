
import React from 'react'

const ItemCard = ({data: {id, title, price, description, category, image, rating : {rate, count}}}) => {
    console.log('multilevel destructuring CATEGORY', category)
  return (
    <div className='flex drop-shadow-2xl items-center content-center mx-auto'>
        <div className='flex  drop-shadow-2xl bg-white w-[500px] my-10 h-[300px] p-6 rounded-[3px]'>
        <img src={image} alt="image" className='w-[140px] mr-3 h-auto object-contain shadow-purple-300'/>
        <div className='flex flex-col'>
            <h1 className='w-[300px]'>{title}</h1>
            <p className='text-[13px] w-[300px] h-[200px] overflow-y-auto overflow-x-hidden'>{description}</p>
            <h2>Rating : {rate}</h2>
            <h3>No of Ratings : {count}</h3>
        </div>
        </div>
        
    </div>
  )
}

export default ItemCard