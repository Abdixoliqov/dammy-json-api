// reducers
import { useSelector, useDispatch } from "react-redux";

// react icons
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  incrementQuantity,
  decrementQuantity,
} from "../features/shopCards/shopCardsSlice";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const shopCarts = useSelector((state) => state.shopCards.value);
  const sum = useSelector((state) => state.shopCards.summaPrice);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="text-center my-5 mt-10 text-2xl font-bold">Basket</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody >
            {shopCarts.map((product) => {
              return (
                <tr key={product.id} className="flex justify-center items-center gap-5 flex-col md:flex-row">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                          <img
                            src={product.images[0]}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.totalPrice.toFixed(2)}$</td>

                  <td className="">
                    <ul className="menu menu-horizontal bg-base-200 rounded-box">
                      <li>
                        <button
                          onClick={() =>
                            dispatch(decrementQuantity(product.id))
                          }
                        >
                          <FaMinus />
                        </button>
                      </li>
                      <span className="mt-1 mx-2">{product.quantity}</span>
                      <li>
                        <button
                          onClick={() =>
                            dispatch(incrementQuantity(product.id))
                          }
                        >
                          <FaPlus />
                        </button>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <button
                      // onClick={() => dispatch(deleteShopCard(product))}
                      className="btn btn-ghost bg-red-400 btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {shopCarts.length >= 1 ? (
        <div className="stats shadow float-right">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">{sum.toFixed(2)}$</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
