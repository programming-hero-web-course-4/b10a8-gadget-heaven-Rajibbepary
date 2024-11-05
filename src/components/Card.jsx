

const Card = ({product}) => {
    const {product_title, product_image, price} = product || {}
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
            <button className="btn btn-outline btn-success rounded-3xl">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Card;