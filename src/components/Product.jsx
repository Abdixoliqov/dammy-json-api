import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/productInfo/${product.id}`} className="w-96 card md:w-[49%] lg:w-[32%] xl:w-[24%] shadow-md hover:shadow-xl duration-300 mx-auto">
      <div className="card bg-base-200 cursor-pointer">
        <figure>
          <img
            src={product.images[0]}
            alt="Shoes"
            className="max-h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Product!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{product.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-ghost">
              <span className="line-through text-[#ccc]">
                {(product.price - product.discountPercentage).toFixed(2)}$
              </span>
            </div>
            <div className="badge badge-outline">{product.price}$</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
