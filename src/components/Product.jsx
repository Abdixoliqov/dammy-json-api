// reducers
import { useSelector, useDispatch } from "react-redux";
import { addShopCard } from "../features/shopCards/shopCardsSlice";

// react icons
import { TbShoppingBagPlus } from "react-icons/tb";

import { Link } from "react-router-dom";

function Product({ product, added }) {
  const shopCards = useSelector((state) => state.shopCards.value);
  const dispatch = useDispatch();

  // console.log(shopCards, "array");

  function shoppingCard(e) {
    e.preventDefault();
    dispatch(addShopCard(product));
  }

  return (
    <Link
      to={`/productInfo/${product.id}`}
      className="outline-none w-96 card md:w-[49%] lg:w-[32%] xl:w-[24%] shadow-md hover:shadow-xl duration-300 mx-auto relative"
    >
      <div className="card bg-base-200 cursor-pointer">
        <figure>
          <img
            src={product.images[0]}
            alt="Shoes"
            className="max-h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">
            {product.category}
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
        <div
          onClick={shoppingCard}
          className={`shop-card absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-200 flex justify-center items-center ${added && 'bg-zinc-500'}`}
        >
          <TbShoppingBagPlus style={{color: `${added ? '#ccc' : '#343434'}`}}/>
        </div>
      </div>
    </Link>
  );
}

export default Product;
