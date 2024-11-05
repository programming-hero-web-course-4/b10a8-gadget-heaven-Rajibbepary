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

    return (
        <div>
            product details{product.description}
        </div>
    );
};

export default ProductDetails;