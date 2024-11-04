import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
const navigate = useNavigate()

    const data = useLoaderData()
    const { category } = useParams();
    const [products, setProducts] = useState([])
    useEffect(()=>{
       if(category){
        const filteredByCategory = [...data].filter(product => product.category === category)
        setProducts(filteredByCategory)
       }else{
            setProducts(data)
       }  

    },[category, data])
    //console.log(obj)
    return (
        <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
           {
            products.map(product => ( <Card key={product.product_id} product={product}></Card>

            ))} 
        </div>
        <button className="btn btn-warning" onClick={() => navigate('/product')}>View All</button>
        </>
    );
};

export default ProductCards;