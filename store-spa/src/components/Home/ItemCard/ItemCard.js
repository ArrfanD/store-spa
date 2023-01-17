import React from 'react';
import upArrow from '../../../assets/images/buttons/arrow-up-line.png';
import downArrow from '../../../assets/images/buttons/arrow-down-line.png'

const ItemCard = ({data: {id, title, price, description, category, image, rating : {rate, count}}}) => {
    console.log('multilevel destructuring CATEGORY', category)
  return (
    <div className='flex drop-shadow-2xl items-center content-center mx-auto'>
        <div className='flex  drop-shadow-2xl bg-white w-[500px] my-10 h-[340px] p-6 rounded-[3px]'>
        <img src={image} alt="image" className='w-[140px] mr-3 h-auto object-contain shadow-purple-300'/>
        <div className='flex flex-col content-evenly items-center'>
            <h1 className='w-[300px]'>{title}</h1>
            <p className='text-[10px] w-[300px] mt-4 h-[200px] overflow-y-auto overflow-x-hidden'>{description}</p>
            <h2 className='mt-2'>Rating : {rate}</h2>
            <h3 className='mb-6'>No of Ratings : {count}</h3>
            <div className='flex items-center h-6 content-between m-0'>
            <button className='mr-6 w-[100px] rounded-[4px] bg-orange-100 h-[25px]'>Add to Cart</button> 
            <div>
            <img src={upArrow} alt="up"/> <img src={downArrow} alt="down" />
            </div>
            <h1 className='ml-4'>1</h1>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ItemCard