

import React, { useEffect, useState } from 'react';
import AddCart from "../AddCart";
import Wishlist from "../Wishlist";
import { getAllFavorites,removeFavorite } from '../../utlis';

const Dashboard = () => {
 
 
    const [product, setProduct] = useState([])

useEffect(() =>{
  const favorites = getAllFavorites()
  setProduct(favorites)

}, [])

  
    const [status, setStatus] = useState(false);
    const hadleStatus = () =>{
      setStatus(!status)
    }

const handleRemove = product_id =>{
  removeFavorite(product_id)
  const favorites = getAllFavorites()
  setProduct(favorites)
}


    return (
        <>

    <div className='bg-[#9538E2] text-center h-60 rounded-lg  lg:mb-4 mb-[30rem] py-6'>
            <h2 className='text-2xl font-semibold  text-white '>Dashboard</h2>
            <p className='text-gray-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            
            <div className="flex gap-3 justify-center items-center mt-4">
              <button onClick={hadleStatus} className='btn btn-outline text-xl cursor-pointer text-white' >Cart</button>
              <button onClick={hadleStatus} className='btn btn-outline  cursor-pointer text-xl text-white'> Wishlist</button>
            </div>
        </div>
        
        {
            product.map(product => (status? <AddCart removeFavorite={removeFavorite}  key={product.product_id} product={product}></AddCart>:<Wishlist  removeFavorite={ removeFavorite} key={product.product_id} product={product}></Wishlist>

            ))} 

        </>
    );
};

export default Dashboard;