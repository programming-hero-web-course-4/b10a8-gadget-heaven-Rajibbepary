import React from 'react';

const Wishlist = ({product,  removeFavorite}) => {

    const {product_title, product_id,  product_image, description,  price } = product ||[] 
    return (
        
        <div>
        
        <div className="card card-side bg-base-100 shadow-xl lg:w-8/12 w-11/12 mx-auto mt-10 py-6 px-6">
<figure>


<img className='lg:h-40 w-full object-cover' 
src={product_image}
alt="Product_image" />
</figure>
<div className="flex flex-col text-left gap-2">
<h2 className="text-xl text-black font-semibold">{product_title}</h2>
<p>Price:{price}</p>
<p>{description}</p>
</div>
<i onClick={()=>removeFavorite(product_id)} class="fa-solid fa-trash-can text-error text-base"></i>
</div>
</div>
    );
};

export default Wishlist;