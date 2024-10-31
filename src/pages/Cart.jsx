// reducers
import { useSelector, useDispatch } from "react-redux";

// react icons
import { FaMinus, FaPlus } from "react-icons/fa";
import { deleteShopCard, sumPrices } from "../features/shopCards/shopCardsSlice";
import { useEffect } from "react";

function Cart() {
  const shopCarts = useSelector((state) => state.shopCards.value);
  const sum = useSelector((state)=>state.shopCards.summaPrice)
  const dispatch = useDispatch();

  // dispatch(sumPrices(shopCarts))
  // useEffect(()=>{
  // })

  return (
    <div className="container">
      <h3 className="text-center my-5 mt-10 text-2xl font-bold">Basket</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            {shopCarts.map((product) => {
              return (
                <tr key={product.id}>
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
                  <td>{product.price}$</td>
                  {/* <td className="max-w-20">
                    {product.description}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td> */}
                  <td className="">
                    <ul className="menu menu-horizontal bg-base-200 rounded-box">
                      <li>
                        <button>
                          <FaMinus />
                        </button>
                      </li>
                      <span className="mt-1 mx-2">0</span>
                      <li>
                        <button>
                          <FaPlus />
                        </button>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(deleteShopCard(product))}
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

      <div className="stats shadow float-right">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">{sum}$</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
