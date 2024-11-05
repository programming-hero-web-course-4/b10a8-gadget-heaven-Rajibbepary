import { Link } from "react-router-dom";


const Card = ({product}) => {
    const {product_title, product_image, price, product_id} = product || {}
    return (
        
        <div className="card bg-base-100 border mt-7 p-4 ">
        <figure  className="w-full h-48 overflow-hidden ">
          <img className=" h-full mb-2 object-cover"
            src={product_image} 
            alt="Product" />
        </figure>
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price} tk</p>
          <div className="card-actions ">
            <Link to={`/product/${product_id}`} className="btn btn-outline btn-sm btn-success rounded-3xl ">View Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Card;