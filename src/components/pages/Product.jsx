import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';
const Product = () => {
    const data = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 ">
        {
         data.map(product => ( <Card key={product.product_id} product={product}></Card>

         ))} 
     </div>
    );
};

export default Product;