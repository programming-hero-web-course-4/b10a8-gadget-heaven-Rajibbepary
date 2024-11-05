import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {

        const singleData = data.find(product => product.product_id == id)
        setProduct(singleData)
    },[data, id])


    const {product_title, product_image, description, specification, rating, price } = product
    return (
        <>
        <div className='bg-[#9538E2] text-center h-60 rounded-lg  mb-52 py-6'>
            <h2 className='text-2xl font-semibold  text-white '>Product Details</h2>
            <p className='text-gray-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            
            <div className="card card-side bg-base-100 shadow-xl w-8/12 mx-auto mt-10 py-6 px-6">
  <figure>
    <img className='h-60 w-full object-cover' 
      src={product_image}
      alt="Movie" />
  </figure>
  <div className="flex flex-col text-left gap-2">
    <h2 className="text-xl text-black font-semibold">{product_title}</h2>
    <p>Price:{price}</p>
    <p>{description}</p>
    <p className='font-bold '>specification:</p>
    
    <ul className='ml-8 '>
  {specification && specification.length > 0 ? (
    specification.map((item) => (
      <li key={item.product_id} className="list-disc">
        {item.value}
      </li>
    ))
  ) : (
    <li>No specifications available</li>
  )}
</ul>


    <p className='font-bold '> Rating: <br /> <span className='text-gray-700 '>
        
         <i className="fa-regular fa-star text-warning"></i> 
         <i className="fa-regular fa-star text-warning"></i> 
         <i className="fa-regular fa-star text-warning"></i> 
         <i className="fa-regular fa-star text-warning"></i> 
         <i className="fa-regular fa-star mr-3"></i> 
    {rating}</span></p>
    <div className=" flex gap-4 ">
      <button className="btn btn-sm bg-[#9538E3] text-white">Add To Card <span><i className="fa-solid fa-cart-plus"></i></span></button>
      <div className=' p-2 rounded-full border flex items-center  '><i class="fa-regular fa-heart "></i></div>
    </div>
  </div>
</div>

        </div>
           
        </>
    );
};

export default ProductDetails;